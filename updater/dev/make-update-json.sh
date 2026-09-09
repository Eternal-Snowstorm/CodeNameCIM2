#!/usr/bin/env bash
# =============================================================================
#  make-update-json.sh —— 作者端: 从 mods/.index 生成玩家更新清单
#
#  产出(纯文本, 提交进仓库; mod jar 本体不进仓库):
#    .minecraft/update.tsv   玩家脚本实际使用的清单: sha1<TAB>path<TAB>url
#    .minecraft/update.json  便于人看 / CI 使用的 JSON 版
#    .minecraft/delete.tsv   需要删除的文件路径清单(每行一个)
#
#  用法:
#    MIRROR_BASE="https://gitee.com/.../releases/download/v1.0" \
#      bash "D:/software/Prism Launcher/instances/CMI-beta-dev-vers/make-update-json.sh"
#  说明:
#    - MIRROR_BASE 指"本次更新的 mod jar 附件"所在目录的下载前缀(Release 附件)。
#    - 未提供 MIRROR_BASE 时, url 列为空, 玩家脚本只校验本地 sha1, 不下载。
# =============================================================================
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MC="$(cd "$BASE_DIR/../.." && pwd)"  # = .minecraft
MIRROR_BASE="${MIRROR_BASE:-}"

cd "$MC"

OUT_TSV="$MC/updater/update.tsv"
OUT_JSON="$MC/updater/update.json"
OUT_DELETE="$MC/updater/delete.tsv"

# 每次重新生成; delete.tsv 若已存在则保留(由作者手工维护)
: > "$OUT_TSV"

count=0
for t in mods/.index/*.toml; do
  [ -e "$t" ] || continue
  filename="$(sed -n "s/^filename = '\([^']*\)'.*/\1/p" "$t" | head -1)"
  hash="$(sed -n "s/^hash = '\([^']*\)'.*/\1/p" "$t" | head -1)"
  fileid="$(sed -n 's/^file-id = \([0-9]*\).*/\1/p' "$t" | head -1)"
  [ -n "$filename" ] || continue

  url=""
  if [ -n "$MIRROR_BASE" ]; then
    url="$MIRROR_BASE/$filename"
  fi
  printf '%s\tmods/%s\t%s\n' "$hash" "$filename" "$url" >> "$OUT_TSV"
  count=$((count+1))
done

# 生成 JSON(供查看/CI; 玩家脚本实际读 TSV)
{
  echo '{'
  echo '  "packVersion": "2.5.0",'
  echo '  "gameVersion": "1.20.1",'
  echo '  "files": ['
  first=1
  while IFS=$'\t' read -r hash path url; do
    [ -n "$path" ] || continue
    [ "$first" -eq 1 ] || printf ',\n'
    printf '    { "path": "%s", "sha1": "%s", "url": "%s" }' "$path" "$hash" "$url"
    first=0
  done < "$OUT_TSV"
  echo ''
  echo '  ],'
  echo '  "delete": [],'
  echo '  "changelog": "https://gitee.com/eternalsnowstorm/mechanism-and-innovation/raw/master/UpdateLogs.md"'
  echo '}'
} > "$OUT_JSON"

[ -f "$OUT_DELETE" ] || : > "$OUT_DELETE"

echo "已生成:"
echo "  $OUT_TSV   ($(wc -l < "$OUT_TSV") 行)"
echo "  $OUT_JSON"
echo "  $OUT_DELETE"
[ -n "$MIRROR_BASE" ] && echo "镜像前缀: $MIRROR_BASE" || echo "提示: 未设置 MIRROR_BASE, url 列为空(玩家将只校验不下载)"
