param(
  [string]$Root = '',
  [switch]$DryRun
)
$ErrorActionPreference = 'Stop'

# 注意: 不要强制 [Console]::OutputEncoding, 否则会与本脚本调用方(.bat 的 chcp 936)
# 的控制台代码页冲突, 导致中文乱码。PowerShell 默认跟随控制台代码页, 这正是所需行为。

# 客户端根目录 = updater 的上一级(文件夹名不必是 .minecraft)
if (-not $Root) { $Root = Split-Path -Parent $PSScriptRoot }
$Root = (Resolve-Path $Root).Path
$manifest = Join-Path $Root 'updater\update.tsv'
$deleteList = Join-Path $Root 'updater\delete.tsv'

# 安全限制: 只操作以下目录; 绝不触碰 saves/options.txt/服务器数据
$safePrefixes = @('mods/', 'config/', 'kubejs/', 'defaultconfigs/', 'resourcepacks/')

function Test-SafePath([string]$p) {
  if ([string]::IsNullOrWhiteSpace($p)) { return $false }
  if ($p.StartsWith('/') -or $p.StartsWith('\') -or $p.Contains('..')) { return $false }
  foreach ($pre in $safePrefixes) { if ($p.StartsWith($pre)) { return $true } }
  return $false
}

# --- 删除清单 ---
# delete.tsv 为累积列表(保留历史下架项); 跳过仍在当前清单中的路径,
# 因为该文件可能是下架后又被重新加入, 应交给下面的更新清单去校验/下载。
$manifestPaths = @()
if (Test-Path -LiteralPath $manifest) {
  foreach ($ml in Get-Content -LiteralPath $manifest) {
    $mp = $ml -split "`t"
    if ($mp.Count -ge 2) { $manifestPaths += $mp[1].Trim() }
  }
}

if (Test-Path -LiteralPath $deleteList) {
  foreach ($line in Get-Content -LiteralPath $deleteList) {
    $p = $line.Trim()
    if (-not (Test-SafePath $p)) { continue }
    if ($manifestPaths -contains $p) { continue }
    $fp = Join-Path $Root $p
    if (Test-Path -LiteralPath $fp) {
      if ($DryRun) { Write-Host "[mods][dry-run] 将删除: $p"; continue }
      Remove-Item -Force -LiteralPath $fp
      Write-Host "[mods] 已删除: $p"
    }
  }
}

# --- 更新清单 ---
if (-not (Test-Path -LiteralPath $manifest)) {
  Write-Host '[mods] 未找到 update.tsv, 跳过 mods 同步'
  exit 0
}

$total = 0; $skipped = 0; $downloaded = 0; $failed = 0; $nosource = 0

foreach ($line in Get-Content -LiteralPath $manifest) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  $parts = $line -split "`t"
  if ($parts.Count -lt 2) { continue }
  $hash = $parts[0].Trim()
  $path = $parts[1].Trim()
  $url  = if ($parts.Count -ge 3) { $parts[2].Trim() } else { '' }
  if (-not (Test-SafePath $path)) { continue }

  $dest = Join-Path $Root $path
  $total++

  if (Test-Path -LiteralPath $dest) {
    $h = (Get-FileHash -Algorithm SHA1 -LiteralPath $dest).Hash.ToLowerInvariant()
    if ($h -eq $hash.ToLowerInvariant()) { $skipped++; continue }
  }

  if (-not $url) {
    $nosource++
    if ($DryRun) { Write-Host "[mods][dry-run] 缺失且无源: $path"; continue }
    Write-Host "[mods] 无源: $path"
    continue
  }

  if ($DryRun) { Write-Host "[mods][dry-run] 将下载: $path"; continue }

  $destDir = Split-Path -Parent $dest
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
  $tmp = "$dest.download"
  Write-Host "[mods] 正在下载: $path"
  try {
    if (Test-Path -LiteralPath $tmp) { Remove-Item -Force -LiteralPath $tmp }
    & curl.exe -L --fail --retry 3 --retry-delay 2 -o $tmp $url
    if ($LASTEXITCODE -ne 0) { throw "curl exit $LASTEXITCODE" }
    $h = (Get-FileHash -Algorithm SHA1 -LiteralPath $tmp).Hash.ToLowerInvariant()
    if ($h -ne $hash.ToLowerInvariant()) { throw "sha1 mismatch (got $h)" }
    Move-Item -Force -LiteralPath $tmp -Destination $dest
    $downloaded++
  } catch {
    Write-Host "[mods] 失败: $path : $_"
    Remove-Item -Force -LiteralPath $tmp -ErrorAction SilentlyContinue
    $failed++
  }
}

Write-Host "[mods] 完成: 总数 $total, 已最新 $skipped, 已下载 $downloaded, 失败 $failed, 无源 $nosource"
if ($DryRun) { exit 0 }
if ($failed -gt 0) { exit 1 }
exit 0
