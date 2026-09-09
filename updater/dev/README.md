# 开发者(开发组)工具说明 —— updater/dev

> 本目录存放面向**开发组成员**的 Git 工具(推送 gitee、mods 发放、清单生成)。
> 当前随仓库分发给合作者;分发完成后将把本目录加入 `.gitignore`,届时其变更不再进入仓库,请以各开发者本机文件为准。

## 一、目录内容

| 文件 | 作用 |
|---|---|
| `push-to-gitee.bat` / `.sh` | 一键推送:把本地 `main` 直接推送到 Gitee 镜像(`git push gitee main:master`) |
| `release-mods.sh` / `.bat` | mods 本地一键发放:对比上次清单 → 自动在 `mods/` 找 jar → 上传 gitee Release 附件 → 重新生成清单 |
| `make-update-json.sh` | 生成 `../update.tsv` / `../update.json` / `../delete.tsv`(被 release-mods 自动调用) |
| `README.md` | 本说明 |

> Gitee 仓库(`eternalsnowstorm/mechanism-and-innovation`)是 GitHub 完整历史的镜像;推送即 `git push gitee main:master`,已无快照同步机制。

## 二、前置条件

1. 本机已安装 Git:
   - **Windows**:安装 [Git for Windows](https://gitforwindows.org/)(含 Git Bash)
   - **Linux(Debian/Ubuntu)**:`sudo apt install git`
   - **macOS**:`brew install git` 或 Xcode 命令行工具
2. 开发机上的 `.minecraft` 是 Git 仓库(`origin` 指向 GitHub)。
3. 推送前已把改动 `git add` + `git commit` 到 `main`(工具只推送,不代为提交)。

## 三、一键推送 gitee(分系统)

脚本逻辑:确保 `gitee` 远程存在 → `git push gitee main:master`。脚本位于 `.minecraft/updater/dev/`,会自行定位到 `.minecraft` 执行。

### Windows

双击 `updater\dev\push-to-gitee.bat`;或命令行:

```bat
cd /d "<实例目录>\.minecraft"
updater\dev\push-to-gitee.bat
```

### Linux / macOS

```bash
cd "<实例目录>/.minecraft"
bash updater/dev/push-to-gitee.sh
# 或
chmod +x updater/dev/push-to-gitee.sh
./updater/dev/push-to-gitee.sh
```

## 四、mods 本地一键发放(release-mods)

工作流程:对比"上次发布清单(`HEAD` 中已提交的 `../update.tsv`)"与当前 `mods/.index` → 得出新增/变化与下架 → 在本地 `mods/` 找到对应 jar 并 sha1 校验 → 调 gitee API 创建 Release 并上传附件 → 重新生成 `../update.tsv` / `../update.json` / `../delete.tsv`。

```bash
cd "<实例目录>/.minecraft/updater/dev"

# 1) 干跑(只对比与校验,不调 API、不改清单)
bash release-mods.sh --dry-run

# 2) 正式发放(指定 tag)
bash release-mods.sh v2.6.0
#    或 Windows 双击 release-mods.bat

# 3) 按脚本提示提交新清单并推送
git add ../update.tsv ../update.json ../delete.tsv
git commit -m "发布 mods v2.6.0"
git push origin main && git push gitee main:master
```

> 说明:mods jar 以 **gitee Release 附件**形式分发(不进 Git 仓库);清单为纯文本进仓库。

## 五、gitee API 令牌存放位置

- 私人令牌(`access_token`)存放于本机用户目录:**`~/.gitee_token`**
  (Windows 即 `C:\Users\<用户名>\.gitee_token`)
- 或用环境变量 `GITEE_TOKEN_FILE` 指向其他路径。
- **令牌文件严禁进入仓库或随包分发。**

## 六、常见问题

| 现象 | 处理 |
|---|---|
| 提示不是 git 仓库 | 确认在整合包 `.minecraft` 目录内运行(工具会自动 cd 到该目录) |
| 推送 Gitee 失败 | 检查网络;或手动 `git push gitee main:master` 看详细报错 |
| release-mods 报 jar 缺失/校验失败 | 先把本次变化的 jar 放入 `.minecraft/mods/` 再发布 |
| gitee API 报错 | 查看 `/tmp/release-api.log` 中的响应 |
| 推送 GitHub 报 SSL 证书错误 | `git -c http.sslVerify=false push origin main`(临时) |
