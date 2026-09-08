@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0.."

set "REMOTE_URL=https://gitee.com/eternalsnowstorm/mechanism-and-innovation"
set "BRANCH=master"

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git is not installed or not in PATH.
  echo Please install Git for Windows and run this script again.
  pause
  exit /b 1
)

if not exist ".git" (
  echo [ERROR] This folder is not a git repository yet.
  echo Run setup-gitee-sync.bat first to initialize sync.
  pause
  exit /b 1
)

git remote get-url gitee >nul 2>nul
if errorlevel 1 (
  echo [WARN] gitee remote missing, adding it...
  git remote add gitee "%REMOTE_URL%"
)

echo === Pulling latest content from Gitee mirror ===
git fetch gitee
if errorlevel 1 (
  echo [ERROR] Failed to fetch from Gitee. Check your network and retry.
  pause
  exit /b 1
)

echo Applying updates to this client...
git reset --hard gitee/%BRANCH%
if errorlevel 1 (
  echo [ERROR] Failed to apply updates.
  pause
  exit /b 1
)

echo.
echo Done! Client content is now up to date with the Gitee mirror.
pause
