# 开发端使用说明(推送改动到 Gitee 镜像)

本目录(`updater/`)同时存放开发端与客户端的同步脚本。开发端使用 `push-to-gitee.*` 把本地 `main` 的当前内容**镜像推送到 Gitee 仓库**。

> 背景:Gitee 仓库是内容快照镜像(不含 GitHub 的完整历史),因此开发端不能用 `git push gitee main` 直接推完整历史,而要走 `sync-gitee.sh` 做对象级镜像。

## 一、开发端有哪些可执行文件

| 文件 | 作用 |
|---|---|
| `updater/push-to-gitee.bat` | Windows 一键推送入口 |
| `updater/push-to-gitee.sh` | Linux / macOS / Git Bash 一键推送入口 |
| `<实例目录>/sync-gitee.sh` | 实际执行镜像同步(由上面两个脚本自动调用) |
| `<实例目录>/make-update-json.sh` | 发布 mod 更新时生成更新清单 |

> `<实例目录>` 指 `.minecraft` 的上一级目录(例如 `CMI-beta-dev-vers/`)。

## 二、前置条件

1. 本机已安装 Git:
   - **Windows**:安装 [Git for Windows](https://gitforwindows.org/)(含 Git Bash)
   - **Linux(Debian/Ubuntu)**:`sudo apt install git`
   - **macOS**:`brew install git` 或安装 Xcode 命令行工具
2. 开发机上的 `.minecraft` 是完整 Git 仓库(远端 `origin` 指向 GitHub)。
3. 推送前已把改动 `git add` + `git commit` 到 `main`;脚本在存在未提交改动时会拒绝运行。

## 三、如何推送改动(分系统)

### Windows

- 双击 `updater\push-to-gitee.bat`;或在 CMD / PowerShell 中运行:

```bat
cd /d "<实例目录>\.minecraft"
updater\push-to-gitee.bat
```

脚本流程:检查未提交改动 → 抓取当前树 → 内容无变化则提示"无需同步";有变化则生成镜像提交并推送到 Gitee。

### Linux

```bash
cd "<实例目录>/.minecraft"
bash updater/push-to-gitee.sh

# 或先赋予可执行权限,之后直接运行
chmod +x updater/push-to-gitee.sh
./updater/push-to-gitee.sh
```

### macOS

```bash
cd "<实例目录>/.minecraft"
bash updater/push-to-gitee.sh

# 或
chmod +x updater/push-to-gitee.sh && ./updater/push-to-gitee.sh
```

### Windows Git Bash(可选)

```bash
cd "<实例目录>/.minecraft"
bash updater/push-to-gitee.sh
```

## 四、发布 mod 更新(生成镜像清单)

CurseForge 已无法匿名直链下载,公开 mod 需要作者端打包到镜像(Release 附件,不进 Git 仓库):

1. 用 CurseForge API key(或浏览器)下载**本次变化的** mod jar;
2. 把这些 jar 上传到 Gitee 仓库的 **Release / 发行版附件**;
3. 设置附件下载前缀并生成清单:

```bash
MIRROR_BASE="https://gitee.com/eternalsnowstorm/mechanism-and-innovation/releases/download/<你的tag>" \
  bash "<实例目录>/make-update-json.sh"
```

4. 提交重新生成的 `update.tsv` / `update.json`(纯文本),推送到 GitHub,再运行 `push-to-gitee` 同步到 Gitee。

## 五、常见问题

| 现象 | 处理 |
|---|---|
| 提示"主仓库存在未提交的改动" | 先在 `.minecraft` 里 `git add -A && git commit` |
| 提示 `bash not found` | 安装 Git for Windows 并确保 `bash` 在 PATH |
| 推送 GitHub 报 SSL 证书错误 | 使用 `git -c http.sslVerify=false push origin main`(临时)或配置正确的 `http.sslCAInfo` |
