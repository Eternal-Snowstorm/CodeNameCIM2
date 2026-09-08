#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

REMOTE_URL="https://gitee.com/eternalsnowstorm/mechanism-and-innovation"
BRANCH="master"

command -v git >/dev/null 2>&1 || {
  echo "[错误] 未找到 git, 请先安装 Git for Windows。"
  exit 1
}

echo "=== 建立与 Gitee 镜像的同步 ==="
[ -d .git ] || git init
git remote remove gitee 2>/dev/null || true
git remote add gitee "$REMOTE_URL"

echo "正在从 Gitee 镜像拉取最新内容..."
git fetch gitee
echo "正在将 Gitee 镜像内容应用到本客户端..."
git reset --hard "gitee/$BRANCH"

echo
echo "完成! 本客户端已与 Gitee 镜像同步。"
echo "以后运行 update-from-gitee.sh 即可拉取更新。"
