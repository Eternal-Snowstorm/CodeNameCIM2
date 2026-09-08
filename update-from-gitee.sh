#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

REMOTE_URL="https://gitee.com/eternalsnowstorm/mechanism-and-innovation"
BRANCH="master"

command -v git >/dev/null 2>&1 || {
  echo "[错误] 未找到 git, 请先安装 Git for Windows。"
  exit 1
}

if [ ! -d .git ]; then
  echo "[错误] 当前目录还不是 git 仓库, 请先运行 setup-gitee-sync.sh 建立同步。"
  exit 1
fi

git remote get-url gitee >/dev/null 2>&1 || {
  echo "[提示] 未找到 gitee 远程, 正在添加..."
  git remote add gitee "$REMOTE_URL"
}

echo "=== 从 Gitee 镜像拉取最新内容 ==="
git fetch gitee
echo "正在应用更新到本客户端..."
git reset --hard "gitee/$BRANCH"

echo
echo "完成! 本客户端内容已更新到 Gitee 镜像最新版。"
