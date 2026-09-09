#!/usr/bin/env bash
# =============================================================================
#  release-mods.sh —— 本地一键发放: 对比上次清单 -> 上传变化的 mod jar 到
#  gitee Release 附件 -> 重新生成 update.tsv/json/delete.tsv
#
#  用法:
#    bash release-mods.sh [--dry-run] [TAG]
#      --dry-run 只做 diff 与本地校验, 不调用 gitee API、不改清单(推荐先跑)
#      TAG        本次 Release 的 tag, 缺省自动生成 vYYYYmmdd-HHMM
#
#  前置:
#    1) gitee 私人令牌存于 $HOME/.gitee_token (或 GITEE_TOKEN_FILE 指定), 不入仓库
#    2) 本次变化的 mod jar 已存在于本地 mods/ 目录
#  基线: HEAD 中已提交的 updater/update.tsv = 上次发布清单
# =============================================================================
set -uo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MC="$(cd "$BASE_DIR/../.." && pwd)"  # = .minecraft
UPDATER="$MC/updater"
MAKE_JSON="$BASE_DIR/make-update-json.sh"
OWNER="eternalsnowstorm"
REPO="mechanism-and-innovation"
API_BASE="https://gitee.com/api/v5"
TOKEN_FILE="${GITEE_TOKEN_FILE:-$HOME/.gitee_token}"
API_LOG="/tmp/release-api.log"

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

TAG=""
if [ "$DRY_RUN" = "1" ]; then TAG="${2:-}"; else TAG="${1:-}"; fi
if [ -z "$TAG" ]; then TAG="v$(date +%Y%m%d-%H%M)"; echo "[提示] 未指定 TAG, 使用 $TAG"; fi

if [ "$DRY_RUN" = "0" ]; then
  if [ ! -f "$TOKEN_FILE" ]; then
    echo "[错误] 未找到 gitee 令牌文件: $TOKEN_FILE"
    echo "       请先在本地创建该文件并填入私人令牌(内容不入仓库)。"
    exit 1
  fi
  TOKEN="$(tr -d ' \r\n' < "$TOKEN_FILE")"
  [ -n "$TOKEN" ] || { echo "[错误] 令牌文件为空。"; exit 1; }
fi

cd "$MC" || exit 1

# --- 1. 生成当前全量清单 -----------------------------------------------
CUR="$(mktemp)"; PREV="$(mktemp)"
for t in mods/.index/*.toml; do
  [ -e "$t" ] || continue
  filename="$(sed -n "s/^filename = '\([^']*\)'.*/\1/p" "$t" | head -1)"
  hash="$(sed -n "s/^hash = '\([^']*\)'.*/\1/p" "$t" | head -1)"
  [ -n "$filename" ] && printf '%s\tmods/%s\n' "$hash" "$filename" >> "$CUR"
done

# --- 2. 上次发布基线(HEAD 中 updater/update.tsv) -------------------------
if git show HEAD:updater/update.tsv > "$PREV" 2>/dev/null; then
  tr -d '\r' < "$PREV" > "$PREV.tmp" && mv "$PREV.tmp" "$PREV"
else
  : > "$PREV"
fi

# --- 3. diff: 新增/变化(changed)、消失(removed) --------------------------
sort -t$'\t' -k2 -u "$PREV" -o "$PREV"
sort -t$'\t' -k2 -u "$CUR"  -o "$CUR"
cut -f2 "$PREV" | sort -u > /tmp/rl_prev_paths.txt
cut -f2 "$CUR"  | sort -u > /tmp/rl_cur_paths.txt
comm -13 /tmp/rl_prev_paths.txt /tmp/rl_cur_paths.txt > /tmp/rl_added.txt        # 新增
comm -23 /tmp/rl_prev_paths.txt /tmp/rl_cur_paths.txt > /tmp/rl_removed.txt       # 消失
: > /tmp/rl_changed.txt                                                            # sha1 变化
while IFS= read -r p; do
  ph="$(awk -F'\t' -v p="$p" '$2==p{print $1; exit}' "$PREV")"
  ch="$(awk -F'\t' -v p="$p" '$2==p{print $1; exit}' "$CUR")"
  [ -n "$ph" ] && [ "$ph" != "$ch" ] && echo "$p" >> /tmp/rl_changed.txt
done < <(comm -12 /tmp/rl_prev_paths.txt /tmp/rl_cur_paths.txt)

cat /tmp/rl_added.txt /tmp/rl_changed.txt | sort -u > /tmp/rl_upload_candidates.txt

echo "== 对比结果 =="
echo "  本次需上传(新增/变化): $(wc -l < /tmp/rl_upload_candidates.txt) 个"
echo "  本次下架(消失)      : $(wc -l < /tmp/rl_removed.txt) 个"

# --- 4. 本地校验: mods/ 下必须有对应 jar 且 sha1 匹配 ----------------------
UPLOADS=()
MISSING=()
while IFS= read -r p; do
  [ -n "$p" ] || continue
  f="${p#mods/}"
  jar="$MC/mods/$f"
  want="$(awk -F'\t' -v p="$p" '$2==p{print $1; exit}' "$CUR")"
  if [ ! -f "$jar" ]; then
    MISSING+=("$f")
  elif [ -n "$want" ]; then
    got="$(sha1sum "$jar" 2>/dev/null | awk '{print $1}' || true)"
    if [ "$got" = "$want" ]; then UPLOADS+=("$jar"); else MISSING+=("$f (sha1 不匹配)"); fi
  else
    UPLOADS+=("$jar")
  fi
done < /tmp/rl_upload_candidates.txt

echo "  本地已找到并通过 sha1 校验: ${#UPLOADS[@]} 个"
if [ "${#MISSING[@]}" -gt 0 ]; then
  echo "[错误] 以下 mod jar 缺失或 sha1 不匹配, 请先补齐后再发布:"
  printf '    - %s\n' "${MISSING[@]}"
  rm -f "$CUR" "$PREV" /tmp/rl_*.txt
  exit 1
fi

if [ "${#UPLOADS[@]}" -eq 0 ] && [ ! -s /tmp/rl_removed.txt ]; then
  echo "== 无任何 mod 变化, 无需发布。"
  rm -f "$CUR" "$PREV" /tmp/rl_*.txt
  exit 0
fi

if [ "$DRY_RUN" = "1" ]; then
  echo "== [dry-run] 将创建 Release tag=$TAG 并上传: =="
  printf '    - %s\n' "${UPLOADS[@]##*/}"
  [ -s /tmp/rl_removed.txt ] && { echo "  将写入 delete.tsv 下架:"; sed 's/^/    - /' /tmp/rl_removed.txt; }
  rm -f "$CUR" "$PREV" /tmp/rl_*.txt
  exit 0
fi

# --- 5. gitee API: 创建 Release -------------------------------------------
echo "== 创建 gitee Release (tag=$TAG) ..."
BODY="{\"tag_name\":\"$TAG\",\"name\":\"$TAG\",\"body\":\"mods update\",\"target_commitish\":\"master\"}"
CREATE_RESP="$(curl -sS -X POST "$API_BASE/repos/$OWNER/$REPO/releases?access_token=$TOKEN" \
  -H 'Content-Type: application/json;charset=UTF-8' -d "$BODY")"
echo "$CREATE_RESP" > "$API_LOG"
RELEASE_ID="$(printf '%s' "$CREATE_RESP" | sed -n 's/.*"id"[[:space:]]*:[[:space:]]*\([0-9][0-9]*\).*/\1/p' | head -1)"
if [ -z "$RELEASE_ID" ]; then
  echo "[错误] 创建 Release 失败, 响应见 $API_LOG"
  echo "$CREATE_RESP" | head -5
  exit 1
fi
echo "  Release id=$RELEASE_ID"

# --- 6. 上传附件 ----------------------------------------------------------
echo "== 上传附件 ..."
for jar in "${UPLOADS[@]}"; do
  echo "  上传 ${jar##*/} ..."
  ATTACH_RESP="$(curl -sS -X POST "$API_BASE/repos/$OWNER/$REPO/releases/$RELEASE_ID/attach_files?access_token=$TOKEN" \
    -F "file=@$jar")"
  echo "$ATTACH_RESP" >> "$API_LOG"
  if ! printf '%s' "$ATTACH_RESP" | grep -q '"download_url"'; then
    echo "[警告] 附件上传可能失败, 响应:"
    echo "$ATTACH_RESP" | head -3
  fi
done

# --- 7. 重新生成清单(全量 update.tsv/json + delete.tsv=removed) -----------
MIRROR_BASE="https://gitee.com/$OWNER/$REPO/releases/download/$TAG" bash "$MAKE_JSON"
: > "$UPDATER/delete.tsv"
while IFS= read -r p; do
  [ -n "$p" ] && echo "$p" >> "$UPDATER/delete.tsv"
done < /tmp/rl_removed.txt

rm -f "$CUR" "$PREV" /tmp/rl_*.txt

echo "== 完成! =="
echo "  gitee Release: $MIRROR_BASE"
echo "  已重新生成 updater/update.tsv、update.json、delete.tsv"
echo "  下一步: git add updater/update.tsv updater/update.json updater/delete.tsv"
echo "          git commit && git push origin main && git push gitee main:master"
