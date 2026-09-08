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

echo === Setup sync with Gitee mirror ===

if not exist ".git" git init

git remote remove gitee >nul 2>nul
git remote add gitee "%REMOTE_URL%"

echo Fetching latest content from Gitee mirror...
git fetch gitee
if errorlevel 1 (
  echo [ERROR] Failed to fetch from Gitee. Check your network and retry.
  pause
  exit /b 1
)

echo Applying Gitee mirror content to this client...
git reset --hard gitee/%BRANCH%
if errorlevel 1 (
  echo [ERROR] Failed to apply content.
  pause
  exit /b 1
)

echo.
echo Done! This client is now synced with the Gitee mirror.
echo Run update-from-gitee.bat in the future to pull updates.
pause
