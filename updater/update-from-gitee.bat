@echo off
setlocal
chcp 936 >nul
cd /d "%~dp0.."

set "REMOTE_URL=https://gitee.com/eternalsnowstorm/mechanism-and-innovation"
set "BRANCH=master"

where git >nul 2>nul
if errorlevel 1 (
  echo [错误] 未检测到 Git, 或 Git 未加入 PATH 环境变量。
  echo 请先安装 Git for Windows, 然后重新运行本脚本。
  pause
  exit /b 1
)

if not exist ".git" (
  echo [错误] 当前目录还不是 git 仓库。
  echo 请先运行 setup-gitee-sync.bat 建立同步。
  pause
  exit /b 1
)

git remote get-url gitee >nul 2>nul
if errorlevel 1 (
  echo [提示] 未找到 gitee 远程, 正在添加...
  git remote add gitee "%REMOTE_URL%"
)

echo === 从 Gitee 镜像拉取最新内容 ===
git fetch gitee
if errorlevel 1 (
  echo [错误] 从 Gitee 拉取失败, 请检查网络后重试。
  pause
  exit /b 1
)

echo 正在应用更新到本客户端...
git reset --hard gitee/%BRANCH%
if errorlevel 1 (
  echo [错误] 应用更新失败。
  pause
  exit /b 1
)

echo 正在从 CurseForge 同步 mods...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0mods-sync.ps1"
if errorlevel 1 (
  echo [错误] mods 同步失败, 可重新运行本脚本重试下载。
  pause
  exit /b 1
)

echo.
echo 完成! 本客户端内容已更新到 Gitee 镜像最新版。
pause
