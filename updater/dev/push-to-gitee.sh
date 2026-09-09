#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."

REMOTE_URL="https://gitee.com/eternalsnowstorm/mechanism-and-innovation"

command -v git >/dev/null 2>&1 || { echo "[错误] 未找到 git, 请先安装 Git for Windows。"; exit 1; }
[ -d .git ] || { echo "[错误] 当前目录不是 git 仓库。"; exit 1; }

git remote get-url gitee >/dev/null 2>&1 || git remote add gitee "$REMOTE_URL"

echo "=== 推送 main 到 Gitee 镜像 ==="
git push gitee main:master
echo "完成! Gitee 镜像已更新。"
