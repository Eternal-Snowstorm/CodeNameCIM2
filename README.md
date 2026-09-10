<!--markdownlint-disable MD001 MD033 MD041 MD051-->

<div align="center">

# Create: Mechanisms and Innovations(CMI)
# 机械动力: 构件与革新

由 [**`Re_Construction`**](https://space.bilibili.com/3461572013853145) 领头的 `Minecraft Forge 1.20.1` 机械动力整合包, 是 `CIM(Create: Infinity Mechanism)` 的续作 / 改良

**`Beta 2.5.0`** · 公开测试(Beta)阶段 · 开发团队 **Team Nebula**

[GitHub](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation) · [Gitee 镜像](https://gitee.com/eternalsnowstorm/mechanism-and-innovation) · [问题反馈](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues)

</div>

---

## 这是什么

一句话: **把机械动力从"好看的齿轮"做成一条能走到航天的完整产线**。

整合包以 **机械动力(Create)** 为骨架, 用一套自定义元件 —— **构件(Mechanism)** —— 串联起冶铁、炼钢、蒸汽、石油化工、精密电子、通用机械(Mekanism)、热力(Thermal)、沉浸工程、AE2 与 Ad Astra 航天, 每一阶段都有对应的任务与专属机器, 而不是把一堆 Mod 丢在一起。

| 项目 | 内容 |
| --- | --- |
| 游戏版本 | Minecraft `1.20.1` / Forge(本开发实例 `47.4.10`) |
| 整合包版本 | `Beta 2.5.0`(版本号由 CMI Core 的 `CmiGlobal.modPackMainVersion` 声明) |
| Mod 数量 | `mods/` 约 223 个 jar, 其中 **8 个由 Team Nebula 自研 / 维护** |
| 脚本规模 | KubeJS: `server_scripts` 242 个 · `startup_scripts` 74 个 · `client_scripts` 30 个; 数据包 `kubejs/data` 458 个文件 |
| 任务线 | FTB Quests 8 章(序章 + 主线 + 事项), 另有 Quest Enhance 增强 |
| 语言 | 以简体中文为主(商店、任务、指南、Tooltip) |

---

## 核心内容

### 1. 构件(Mechanism)体系 —— 整合包的"通用货币"

整合包最独特的部分: 把"做东西"这件事抽象成一层可复用的构件元件, 再让构件互相组装成更高级的构件。

- **构件零件**: `basic / mechanical / engineering / flux / magical / quantum / mekanism / final / space`
- **构件本体**: 安山合金、铜、铁、金、青铜、钴、线圈、计算、附魔、末影、气密、航空、航天、反物质、彩色, 以及通用机械系列(`basic / advanced / elite`)等数十种
- **构件增强(Augment)**: 轻工程、重工程、智能、热力、强化, 用于改造机器行为
- **构件基座 / 构件驱动**: 让构件参与自动化产线, 而不是只能手工合成
- **随机构件**: 拆包式产出, 配合 `kubejs/server_scripts/data/loots/RandomMechanisms.js` 的战利品池
- **催生器 / 加速器 / 闪存盘体系**: 覆盖矿石催生、机器加速、数据搬运等玩法

### 2. 多方块与自研机器

- **MBD2(Multiblocked 2)多方块**: 电解槽(`electrolyzer`, 含流体 / 气体 / 物品 / 能量端口)、化学反应釜(`chemical_reactor`)、电子高炉(`electronic_blast_furnace`, 16 并行, 支持铜 / 琥珀金 / 高压电三级线圈, 代理电弧炉、熔炼、合金、车窑、旋转窑、电力高炉等配方类型)
- **CMI Core 机器**: 化学气体提取机、闪存写入机、雷达终端、简易离心机、水泵、蒸汽锅炉 / 大型蒸汽锅炉、火箭装配等
- **多方块水井 / 大型构件催生器** 等自定义结构
- 结构定义在 `ldlib/assets/mbd2/` 与 `kubejs/data/cmi/machines/`, 可用 `kubejs/server_scripts/event/mods/mbd/` 中的脚本扩展

> ⚠️ 多方块机器依赖根目录的 `hotai/` 热补丁目录, 打包 / 分发时**必须完整保留**。

### 3. 蒸汽、热力与动力

- **Create: Steam Ages / Steam Powered(Team Nebula 维护分支)**: 燃烧室 → `HU(热量单位)` → 锅炉 → 蒸汽 → 蒸汽引擎 → 飞轮 → 应力网络 的完整链路, 青铜 / 铸铁 / 钢三级设备各有独立数值(详见 `Developer/蒸汽和HU之间的算法.md`)
- **汽鸣铁道(Steam 'n' Rails) / 列车自动化**: 列车套件、信号与自动化运输
- 应力来源与传输被重新平衡: `kubejs/server_scripts/recipes/device/StressSource.js`、`StressTransport.js`

### 4. 地质、矿脉与石油化工

- **矿床 / 矿脉系统**: 煤矿、铁矿、铜矿、金矿、铅矿、镍矿、油页岩、石英、红石、钴矿等均有 small / medium / large 三级结构(`kubejs/data/cmi/structures/deposit/`)
- **可配置矿石生成**: `kubejs/server_scripts/data/worldgen/OresGen.js`、`OreNodeGen.js`、`GeoVentGen.js`、`OilGen.js`(地热喷口、油田、火星熔岩湖)
- **石油化工线**: 原油开采 → 分馏 → 柴油 / 生物柴油 / 硅橡胶等, 燃料统一在 `kubejs/server_scripts/data/FuelTypes.js` 中登记
- **洞穴与结构**: `kubejs/data/cmi/structures/cave/` 等自定义地下结构

### 5. 材料的统一与冶炼

- **金属材料注册器**: `kubejs/startup_scripts/register/material/` 一次性定义锭 / 板 / 杆 / 线 / 粉 / 齿轮 / 熔融流体, 自动铺开全部配方
- **跨 Mod 处理统一**: 同一材料的 Create、Mekanism、Thermal、沉浸工程、匠魂、Ad Astra 处理链互相打通(`kubejs/server_scripts/recipes/material/metal/`)
- **流体与物品统一(Unify)**: `kubejs/server_scripts/data/unification/` + OneEnoughItem / Block / Fluid 全局替换
- **匠魂集成**: `TConMaterial.js` 材料构建器 + 熔铸 / 浇筑配方 + Nebula Tinker 扩展, 另有 `#cmi:steam_upgrades` 等升级体系

### 6. 航天与维度

- **Ad Astra** 深度改造: 火箭 1–4 级模型与装配、氧气与低温处理、空间站配方、行星渲染器(`kubejs/assets/cmi/planet_renderers/`)
- 自定义结构: 莫托斯高塔 / 莫托斯村庄 / 莫托斯要塞 / 阿瑞斯神庙 / 外星猪灵塔 / 阿弗洛狄忒的子弹 等
- **Eden Ring(伊甸星环)** 维度与传送门(`event/functional/server/EdenPortal.js`)
- 维度与维度类型定义在 `kubejs/data/cmi/dimension[/_type]/`

### 7. 任务线、指南与思索

- **FTB Quests 8 章**: 序章(`prologue`)、开始(`start`)、机械学习(`machine_learning`)、燃料(`fuel`)、汽鸣铁道(`steam_railway`)、精密构件(`precision_component`)、油燃而升(`ascend_on_burning_oil`)、实用工具(`utilities`)
- 章节分为「主线」与「一些事项(WIP)」两组, 早期章节承担阶段解锁(破坏方块 / 合成权限由阶段控制)
- **GuideME 游戏内指南**(施工中): `kubejs/assets/cmi/guides/`, 已有实用工具、多方块水管等条目
- **思索(Ponder)**: 为 AE2 的 ME 控制器 / 驱动器 / 空间 IO / P2P / 量子环, 以及多方块水井等编写了自定义思索场景(`kubejs/assets/cmi/ponder/`、`cmi:water_well`)

### 8. 生活质量与性能

| 方向 | 内容 |
| --- | --- |
| 存储 | Functional Storage(含 FunctionalStorageJS 抽屉升级注册)、Sophisticated Backpacks、AE2 + ExtendedAE + Applied Mekanistics |
| 建造 | Industrial Platform(快速工业平台)、Construction Wand、Multi Builder Tool |
| 信息 | Jade + JadeAddons、JEI、TConPlanner、Not Enough Recipe Book、Untranslated Items |
| 地图 | Xaero 小地图 / 世界地图、Explorer's Compass、Nature's Compass |
| 性能 | Embeddium、Oculus、ModernFix、FerriteCore、EntityCulling、ImmediatelyFast、Noisium、Ksyxis、Smooth Boot、Packet Fixer、CreateBetterFPS 等 |
| 便利 | Mouse Tweaks、Controlling、AppleSkin、Torcherino、Time in a Bottle、Easy Repair、Fast Leaf Decay、TreeChop |
| 体验 | FancyMenu + Drippy Loading Screen(自定义主界面 / 加载画面)、Jade 主题(Windows XP / 战雷 / 星露谷等)、Extreme Sound Muffler |

---

## 团队自研 / 维护的 Mod

除脚本内容外, 整合包还带有 Team Nebula 自行开发或维护的 Mod:

| Mod | Mod ID | 版本 | 作用 |
| --- | --- | --- | --- |
| CMI Core | `cmi` | 1.3 | 整合包核心: 构件体系、机器、多方块、材料与装备注册 |
| Nebula Tinker | `nebula_tinker` | 1.0.0 | 匠魂(Tinkers' Construct)扩展 |
| Industrial Platform | `industrial_platform` | 1.8.0 | 快速搭建工业平台 |
| Interlocked | `interlocked` | 1.1 | 机械动力套壳(Encasing)联动 |
| FunctionalStorageJS | `functional_storage_js` | 1.3 | 功能性存储的抽屉升级注册接口 |
| Storage Tweaks | `storage_tweaks` | 1.0.0 | 物品 / 流体容量与作用范围升级调整 |
| Create: Steam Ages | `create_steam_ages` | 1.0 | 蒸汽时代分支(蒸汽 / HU 链路) |
| Railway Automation | `railway_automation` | 1.0 | 列车自动化 |

此外使用了 [`hotai`](https://github.com/youyihj/hotai)("Patch mods easily")以 `.badiff` 热补丁的形式在不改动 Mod 本体的前提下修正第三方行为 —— 这就是根目录 `hotai/` 必须随包分发的原因。

---

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `mods/` | Mod 本体; `mods/.index/` 为 packwiz 元数据(`project-id` / `file-id` / sha1), 更新脚本据此校验 |
| `kubejs/` | 整合包主要内容: `startup_scripts`(注册) / `server_scripts`(配方、事件、世界生成) / `client_scripts`(语言与显示) / `data`(数据包) / `assets`(材质、模型、语言、指南、思索) |
| `config/` `defaultconfigs/` | Mod 配置; `config/ftbquests/quests/` 是任务线本体, 允许随包更新 |
| `hotai/` | 运行时热补丁(`.badiff`), 多方块机器依赖 |
| `ldlib/` | MBD2 多方块结构定义 |
| `resourcepacks/` | 随包资源包(Create 管道、抽屉、彩色边框等) |
| `updater/` | 更新脚本与清单(`update.json` / `update.tsv` / `delete.tsv`) |
| `Developer/` | 开发资料: 策划文档、MBD2 注册文档、蒸汽 / HU 算法说明、转化脚本 |
| `UpdateLogs.md` | 更新日志(每次改动都要写) |
| `CONTRIBUTING.md` | 开源协作协议与 KubeJS 代码规范 |

---

## 安装与更新

### 首次安装

1. 安装 Minecraft `1.20.1` 与对应的 Forge;
2. 将本仓库内容放入实例的 `.minecraft` 目录(目录名不限);
3. 本地已装 Git 时, 可直接用更新脚本拉取(见下)。

### 日常更新

`updater/` 内提供跨平台脚本, 把 [Gitee 镜像仓库](https://gitee.com/eternalsnowstorm/mechanism-and-innovation)的内容同步到本地并按 `update.json` 校验 / 补全 mods:

```bat
:: Windows(首次)
updater\setup-gitee-sync.bat
:: Windows(日常)
updater\update-from-gitee.bat
```

```bash
# Linux / macOS
bash updater/setup-gitee-sync.sh
bash updater/update-from-gitee.sh
```

脚本只处理 `mods / config / kubejs / defaultconfigs / resourcepacks` 等可替换目录, **不会碰存档与 `options.txt`**; 详细说明见 `updater/CLIENT-GUIDE.md`, 方案讨论见 `热更新方案.md`。

---

## 注意事项

### 服务端

- 在打包时请保留根目录下的 `hotai` 文件夹以及内部的**所有**文件, 确保多方块机器运行正常
- 删除影响服务端的客户端 Mod 确保服务端运行正常
- 出现 BUG **一定**要反馈(能够使用 [**`issues`**](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues)最好!)
- 在修改 JEI 的时候需要先运行 `kjs reload client_scripts` 后再运行 `reload`

---

### 整合包打包所需文件

 - **config**
 - **defaultconfigs**
 - **hotai**
 - **kubejs**
	- **assets**
	- **client_scripts**
	- **config**
	- **data**
	- **server_scripts**
	- **startup_scripts**
 - **mods**
 - **resourcepacks**
 - **icon.png**
 - **ldlib**
	- **assets**
		- **mbd2**
 - **LICENSE.md**
 - **README.md**
 - **UpdateLogs.md**
 - **updater**

---

### 本整合包提供了非常多的轮子, 我们非常欢迎社区去使用我们的轮子, 包括但不限于:

 - [**金属材料注册**](kubejs/startup_scripts/register/utils/Material.js)
 - [**矿石方块注册**](kubejs/startup_scripts/register/block/CommonOres.js)
 - [**可配置矿石生成**](kubejs/server_scripts/data/worldgen/OresGen.js)
 - [**匠魂材料构建器**](kubejs/server_scripts/data/tconstruct/TConMaterial.js)
 - [**功能性存储抽屉升级注册**](kubejs/startup_scripts/register/other/Drawer.js)
 - [**柴油动力燃料添加**](kubejs/server_scripts/data/FuelTypes.js)
 - [**金属材料配方集成处理**](kubejs/server_scripts/recipes/material/metal)

---

## 参与开发

- 代码规范、提交规范、PR / Issue 要求见 [**`CONTRIBUTING.md`**](CONTRIBUTING.md)
- 每次改动都要在 [**`UpdateLogs.md`**](UpdateLogs.md) 中记录(格式见协作协议第十章)
- 版本号写在 CMI Core 的 `CmiGlobal.modPackMainVersion`
- 新增 / 更换 Mod 必须登记进 `mods/.index`(更新清单据此生成)
- 策划与开发资料放在 `Developer/`, MBD2 注册参见 `Developer/MBD2代码注册文档`

---
<!--markdownlint-disable MD001 MD033 MD041 MD051-->

<div align="center">

# English

# Create: Mechanisms and Innovations (CMI)

A `Minecraft Forge 1.20.1` Create modpack led by [**`Re_Construction`**](https://space.bilibili.com/3461572013853145),
successor / improvement of `CIM(Create: Infinity Mechanism)`. Currently in **Beta (`2.5.0`)** stage, developed by **Team Nebula**.

[GitHub](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation) · [Gitee mirror](https://gitee.com/eternalsnowstorm/mechanism-and-innovation) · [Issues](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues)

</div>

---

## What is CMI

A Create-centred industrial progression pack: a custom **Mechanism** component layer ties iron, steel, steam, petrochemistry,
precision electronics, Mekanism, Thermal, Immersive Engineering, AE2 and Ad Astra space travel into one tech tree,
with its own multiblock machines, quest line and in-game guide.

- **Mechanisms**: dozens of custom components, mechanism parts, augments, drivers, random mechanisms and proliferators
- **Multiblocks & machines** (MBD2 + CMI Core): electrolyzer, chemical reactor, electronic blast furnace (16 parallel, three coil tiers),
  chemical gas extractor, flash disk writer, radar terminal, water well, large steam boiler, rockets
- **Steam & power**: HU → boiler → steam → engine → flywheel → Create stress network, bronze / cast iron / steel tiers
- **Geology & oil**: tiered ore deposits, configurable ore generation, geo vents, oil fields, oil shale, distillation chains
- **Materials**: one metal registry generates ingots / plates / rods / wires / dusts / gears and unifies Create, Mekanism,
  Thermal, Immersive Engineering and Tinkers' processing
- **Space**: reworked Ad Astra rockets (T1–T4), oxygen / cryo handling, custom lunar and Martian structures, Eden Ring dimension
- **Progression**: 8 FTB Quests chapters, GuideME in-game guide (WIP), custom Ponder scenes for AE2 and multiblocks
- **8 mods maintained by Team Nebula**: CMI Core, Nebula Tinker, Industrial Platform, Interlocked, FunctionalStorageJS,
  Storage Tweaks, Create: Steam Ages, Railway Automation

## Notes

### Server Pack

- Keep the `hotai` folder and **all** files inside it: the multiblock machines depend on these runtime patches.
- Remove client-only mods so the server runs properly.
- Please report bugs via [**`issues`**](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues).
- When editing JEI integration, run `kjs reload client_scripts` before `reload`.

### Updating

Use the scripts in `updater/` (`setup-gitee-sync` first, then `update-from-gitee`); they sync the Gitee mirror and
verify / download mods listed in `updater/update.json` without touching your saves. See `updater/CLIENT-GUIDE.md`.

### Packaging checklist

The Chinese section above lists every file / folder required for packaging (`config`, `defaultconfigs`, `hotai`, `kubejs`,
`mods`, `resourcepacks`, `ldlib`, `icon.png`, `LICENSE.md`, `README.md`, `UpdateLogs.md`, `updater`).

### Utilities for the community

Metal material registration, ore block registration, configurable ore generation, Tinkers' material generator,
Functional Storage drawer upgrade registration, diesel fuel registration and metal recipe integration —
see the links in the Chinese section above; they are free to reuse.

---

<div align="center">

感谢游玩 **机械动力: 构件与革新**!

Thanks for playing CMI!

</div>
