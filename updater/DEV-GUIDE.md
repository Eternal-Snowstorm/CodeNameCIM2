# 开发端使用说明(推送改动到 Gitee 镜像)

本目录(`updater/`)存放开发端与客户端的同步脚本。开发端用 `push-to-gitee.*` 把本地 `main` 分支**直接推送到 Gitee 镜像仓库**。

> Gitee 仓库(`eternalsnowstorm/mechanism-and-innovation`)现为 GitHub 完整历史的镜像(历史已完成瘦身),因此**不再使用快照同步**,直接 `git push` 即可。

## 一、开发端有哪些可执行文件

| 文件 | 作用 |
|---|---|
| `updater/push-to-gitee.bat` | Windows 一键推送 |
| `updater/push-to-gitee.sh` | Linux / macOS / Git Bash 一键推送 |
| `<实例目录>/make-update-json.sh` | 发布 mod 更新时生成更新清单 |

> `<实例目录>` 指 `.minecraft` 的上一级目录(例如 `CMI-beta-dev-vers/`)。

## 二、前置条件

1. 本机已安装 Git:
   - **Windows**:安装 [Git for Windows](https://gitforwindows.org/)(含 Git Bash)
   - **Linux(Debian/Ubuntu)**:`sudo apt install git`
   - **macOS**:`brew install git` 或 Xcode 命令行工具
2. 开发机上的 `.minecraft` 是 Git 仓库(远端 `origin` 指向 GitHub)。
3. 推送前已把改动 `git add` + `git commit` 到 `main`(脚本只负责推送,不代为提交)。

## 三、如何推送(分系统)

脚本逻辑:确保 `gitee` 远程存在 → 执行 `git push gitee main:master`。

### Windows

双击 `updater\push-to-gitee.bat`;或在 CMD / PowerShell 中运行:

```bat
cd /d "<实例目录>\.minecraft"
updater\push-to-gitee.bat
```

### Linux

```bash
cd "<实例目录>/.minecraft"
bash updater/push-to-gitee.sh

# 或
chmod +x updater/push-to-gitee.sh
./updater/push-to-gitee.sh
```

### macOS

```bash
cd "<实例目录>/.minecraft"
bash updater/push-to-gitee.sh
```

## 四、发布 mod 更新(mods 走 Release 附件,不进仓库)

公开 mod 由作者端下载后放到 Gitee **Release 附件**(不进 Git 仓库):

1. 下载**本次变化的** mod jar(CurseForge API key 或浏览器);
2. 把这些 jar 上传到 Gitee 仓库的 Release / 发行版附件;
3. 设置附件下载前缀并生成清单:

```bash
MIRROR_BASE="https://gitee.com/eternalsnowstorm/mechanism-and-innovation/releases/download/<你的tag>" \
  bash "<实例目录>/make-update-json.sh"
```

4. 提交重新生成的 `update.tsv` / `update.json`(纯文本),推送到 GitHub,再运行 `push-to-gitee` 同步到 Gitee。

## 五、常见问题

| 现象 | 处理 |
|---|---|
| 提示不是 git 仓库 | 确认在整合包 `.minecraft` 目录内运行 |
| 推送 Gitee 失败 | 检查网络;或手动 `git push gitee main:master` 查看详细报错 |
| 推送 GitHub 报 SSL 证书错误 | `git -c http.sslVerify=false push origin main`(临时) |
