# 客户端使用说明(链接远程仓库与同步版本)

玩家在整合包客户端使用本目录脚本,把 **Gitee 镜像仓库**(GitHub 完整历史的镜像)的内容同步到本地 `.minecraft`,并校验 / 下载 mods。

## 一、客户端有哪些可执行文件

| 文件 | 作用 |
|---|---|
| `updater/setup-gitee-sync.bat` / `.sh` | **首次**:链接 Gitee 远程仓库并落地内容 |
| `updater/update-from-gitee.bat` / `.sh` | **日常**:同步最新版本 |
| `updater/mods-sync.ps1` / `.sh` | 由上面两个脚本自动调用,校验 / 下载 mods |

> 客户端目录 = 整合包实例的 `.minecraft`(脚本会自动定位到 `updater` 的上一级)。

## 二、前置条件

1. 本机已安装 Git:
   - **Windows**:安装 [Git for Windows](https://gitforwindows.org/)
   - **Linux(Debian/Ubuntu)**:`sudo apt install git`
   - **macOS**:`brew install git`
2. 首次运行需要联网。

## 三、首次:链接远程仓库

### Windows

双击 `updater\setup-gitee-sync.bat`;或在 CMD / PowerShell 中运行:

```bat
cd /d "<整合包>\.minecraft"
updater\setup-gitee-sync.bat
```

### Linux

```bash
cd "<整合包>/.minecraft"
bash updater/setup-gitee-sync.sh
```

### macOS

```bash
cd "<整合包>/.minecraft"
bash updater/setup-gitee-sync.sh
```

作用:如本地还不是 Git 仓库则 `git init`;绑定远程 `https://gitee.com/eternalsnowstorm/mechanism-and-innovation`;拉取并应用 Gitee 内容;按清单校验 mods。

## 四、日常:同步最新版本

### Windows

双击 `updater\update-from-gitee.bat`;或命令行:

```bat
cd /d "<整合包>\.minecraft"
updater\update-from-gitee.bat
```

### Linux / macOS

```bash
cd "<整合包>/.minecraft"
bash updater/update-from-gitee.sh
```

作用:`git fetch` + 对齐 Gitee `master`,再按 `update.tsv` 校验并下载变化的 mod(`delete.tsv` 中的文件会被删除)。

## 五、安全说明

脚本只操作以下目录,**绝不碰** `saves`、`options.txt`、服务器数据等个人文件:

- `mods/`
- `config/`
- `kubejs/`
- `defaultconfigs/`
- `resourcepacks/`

## 六、常见问题

| 现象 | 处理 |
|---|---|
| 提示 Git 未安装 | 安装 Git for Windows(Linux/macOS 用包管理器)后重试 |
| mods 提示"无源" | 作者尚未发布对应镜像附件;若本地已自带该 mod 可忽略 |
| 下载失败 | 重新运行 `update-from-gitee` 重试(脚本内置重试) |
| 想回滚 | 更新前会尽量保留未跟踪文件;若需要完整回滚请使用 `backups`(由作者端发布策略决定) |
