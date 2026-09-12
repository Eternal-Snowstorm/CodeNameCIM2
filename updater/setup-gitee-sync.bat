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

echo === 建立与 Gitee 镜像的同步 ===

if not exist ".git" git init

git remote remove gitee >nul 2>nul
git remote add gitee "%REMOTE_URL%"

echo 正在从 Gitee 镜像拉取最新内容...
git fetch gitee
if errorlevel 1 (
  echo [错误] 从 Gitee 拉取失败, 请检查网络后重试。
  pause
  exit /b 1
)

echo 正在将 Gitee 镜像内容应用到本客户端...
git reset --hard gitee/%BRANCH%
if errorlevel 1 (
  echo [错误] 应用内容失败。
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
echo 完成! 本客户端已与 Gitee 镜像同步。
echo 以后运行 update-from-gitee.bat 即可拉取更新。
pause
