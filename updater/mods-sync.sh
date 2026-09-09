#!/usr/bin/env bash
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="$ROOT/updater/update.tsv"
DELETE_LIST="$ROOT/updater/delete.tsv"
DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

cd "$ROOT" || exit 1

sha1_file() {
  if command -v sha1sum >/dev/null 2>&1; then
    sha1sum "$1" | awk '{print $1}'
  elif command -v openssl >/dev/null 2>&1; then
    openssl sha1 "$1" | awk '{print $NF}'
  elif command -v certutil >/dev/null 2>&1; then
    certutil -hashfile "$1" SHA1 | sed -n '2p' | tr -d ' \r'
  else
    return 1
  fi
}

safe_path() {
  local p="$1"
  [ -z "$p" ] && return 1
  case "$p" in
    /*|\*) return 1 ;;
  esac
  case "$p" in
    *..*) return 1 ;;
  esac
  case "$p" in
    mods/*|config/*|kubejs/*|defaultconfigs/*|resourcepacks/*) return 0 ;;
    *) return 1 ;;
  esac
}

# --- 删除清单 ---
if [ -f "$DELETE_LIST" ]; then
  while IFS= read -r p || [ -n "$p" ]; do
    p="$(printf '%s' "$p" | tr -d '\r' | xargs 2>/dev/null || true)"
    safe_path "$p" || continue
    fp="$ROOT/$p"
    if [ -e "$fp" ]; then
      if [ "$DRY_RUN" = "1" ]; then
        echo "[mods][dry-run] 将删除: $p"
      else
        rm -f -- "$fp"
        echo "[mods] 已删除: $p"
      fi
    fi
  done < "$DELETE_LIST"
fi

# --- 更新清单 ---
[ -f "$MANIFEST" ] || { echo "[mods] 未找到 update.tsv, 跳过 mods 同步"; exit 0; }

total=0; skipped=0; downloaded=0; failed=0; nosource=0

while IFS=$'\t' read -r hash path url || [ -n "$path" ]; do
  hash="$(printf '%s' "$hash" | tr -d '\r' | xargs 2>/dev/null || true)"
  path="$(printf '%s' "$path" | tr -d '\r' | xargs 2>/dev/null || true)"
  url="$(printf '%s' "$url" | tr -d '\r' | xargs 2>/dev/null || true)"
  [ -n "$path" ] || continue
  safe_path "$path" || continue

  total=$((total+1))
  dest="$ROOT/$path"

  if [ -f "$dest" ] && [ -n "$hash" ] && [ "$(sha1_file "$dest" 2>/dev/null || true)" = "$hash" ]; then
    skipped=$((skipped+1)); continue
  fi

  if [ -z "$url" ]; then
    nosource=$((nosource+1))
    if [ "$DRY_RUN" = "1" ]; then
      echo "[mods][dry-run] 缺失且无源: $path"
    else
      echo "[mods] 无源: $path"
    fi
    continue
  fi

  if [ "$DRY_RUN" = "1" ]; then
    echo "[mods][dry-run] 将下载: $path"
    continue
  fi

  tmp="$dest.download"
  echo "[mods] 下载: $path"
  rm -f "$tmp"
  if curl -L --fail --retry 3 --retry-delay 2 -o "$tmp" "$url"; then
    got="$(sha1_file "$tmp" 2>/dev/null || true)"
    if [ -n "$hash" ] && [ "$got" = "$hash" ]; then
      mv -f "$tmp" "$dest"
      downloaded=$((downloaded+1))
    else
      echo "[mods] 失败(sha1 不匹配): $path (got $got)" >&2
      rm -f "$tmp"
      failed=$((failed+1))
    fi
  else
    echo "[mods] 失败(下载): $path" >&2
    rm -f "$tmp"
    failed=$((failed+1))
  fi
done < "$MANIFEST"

echo "[mods] 完成: 总数 $total, 已最新 $skipped, 已下载 $downloaded, 失败 $failed, 无源 $nosource"
[ "$DRY_RUN" = "1" ] && exit 0
[ "$failed" -gt 0 ] && exit 1
exit 0
