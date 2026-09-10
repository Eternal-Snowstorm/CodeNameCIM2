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

**以 `机械动力` 等 Mod 为核心构建的工业赞歌 —— 从第一块安山合金, 一路干到航天发射台。**

整合包用一套自定义元件 —— **构件(Mechanism)** —— 当作主要脉络, 把冶金、炼钢、蒸汽、石油化工、精密电子、计算机、复合材料与航天开拓串成一条能走到底的产线。每一阶段都有对应的任务与专属机器, 游玩体验与设计可能性双双拉满 —— 而不是把一堆 Mod 丢进压缩包就算完事。

| 项目 | 内容 |
| --- | --- |
| 游戏版本 | Minecraft `1.20.1` / Forge(本开发实例 `47.4.10`) |
| 整合包版本 | `Beta 2.5.0`(版本号由 CMI Core 的 `CmiGlobal.modPackMainVersion` 声明) |
| Mod 数量 | `mods/` 约 223 个 jar, 其中 **8 个由 Team Nebula 自研 / 维护** |
| 脚本规模 | KubeJS: `server_scripts` 242 个 · `startup_scripts` 74 个 · `client_scripts` 30 个; 数据包 `kubejs/data` 458 个文件 |
| 任务线 | FTB Quests 8 章(序章 + 主线 + 事项) |
| 语言 | 以简体中文为主(商店、任务、指南、Tooltip) |

---

## 核心内容

### 1. 构件(Mechanism)体系 —— 整合包的"整体脉络"

整合包最独特的部分: 把"做东西"这件事抽象成一层可复用的构件元件, 以构件探索一切, 制造一切, 连接一切 —— 主打一个"万物皆可构件"。

- **构件零件**: 构件的制造方式并不是一成不变的, 但是构件的成型方式高度一致: 将最为核心的`构件零件`安装上去, 这个构件就算是完工了
- **构件本体**: 安山合金、铜、铁、金、青铜、钴、线圈、计算、附魔、末影、气密、航空、航天、反物质、彩色, 以及通用机械系列等数十种
- **构件能力**: 每一种构件都对应着一系列设备与配方, 但是它们不是单纯的合成材料. 诸如投掷水瓶的流体构件, 无限啃食的生铁构件等神奇的构件能力, 可以进一步增添游玩的趣味 —— 整活空间相当可观
- **催生器 / 闪存盘体系**: 覆盖矿石催生, 数据获取等玩法, 避免产线单调, 提高设计多样性

### 2. 多方块与自研机器

- **MBD2(Multiblocked 2)多方块**: 电解槽(`electrolyzer`, 含流体 / 气体 / 物品 / 能量端口)、化学反应釜(`chemical_reactor`)、电子高炉(`electronic_blast_furnace`, 16 并行, 支持铜 / 琥珀金 / 高压电三级线圈, 代理电弧炉、熔炼、合金、车窑、旋转窑、电力高炉等配方类型)—— 产能直接原地起飞
- **CMI Core 机器**: 化学气体提取机、闪存写入机、雷达终端、简易离心机、水泵、蒸汽锅炉 / 大型蒸汽锅炉、火箭装配等
- **多方块水井 / 大型构件催生器** 等自定义结构
- 结构定义在 `ldlib/assets/mbd2/` 与 `kubejs/data/cmi/machines/`, 可用 `kubejs/server_scripts/event/mods/mbd/` 中的脚本自由扩展

> ⚠️ 多方块机器依赖根目录的 `hotai/` 热补丁目录, 打包 / 分发时**必须完整保留** —— 漏一个文件, 机器当场罢工。

### 3. 蒸汽、热力与动力

- **Create: Steam Ages / Steam Powered**: 燃烧室 → `HU(热量单位)` → 锅炉 → 蒸汽 → 蒸汽引擎 → 飞轮 → 应力网络 的完整链路, 青铜 / 铸铁 / 钢三级设备各有独立数值(详见 `Developer/蒸汽和HU之间的算法.md`)
- **汽鸣铁道(Steam 'n' Rails) / 铁道智行**: 列车套件,列车信号, 自动化运输与快捷的铁路建设
- 应力来源与传输被重新平衡: `kubejs/server_scripts/recipes/device/StressSource.js`、`StressTransport.js`

### 4. 地质、矿脉与石油化工

- **矿床 / 矿脉系统**: 煤矿、铁矿、铜矿、金矿、铅矿、镍矿、油页岩、石英、红石、钴矿等均有 small / medium / large 三级结构(`kubejs/data/cmi/structures/deposit/`)—— 矿脉管够, 挖到手软
- **可配置矿石生成**: `kubejs/server_scripts/data/worldgen/OresGen.js`、`OreNodeGen.js`、`GeoVentGen.js`、`OilGen.js`(地热喷口、油田、火星熔岩湖)
- **石油化工线**: 原油开采 → 分馏 → 柴油 / 生物柴油 / 硅橡胶等, 燃料统一在 `kubejs/server_scripts/data/FuelTypes.js` 中登记
- **洞穴与结构**: `kubejs/data/cmi/structures/cave/` 等自定义结构

### 5. 材料的统一与冶炼

- **金属材料注册器**: `kubejs/startup_scripts/register/material/` 一次性定义锭 / 板 / 杆 / 线 / 粉 / 齿轮 / 熔融流体, 自动铺开全部配方 —— 加一种材料, 剩下的交给代码
- **跨 Mod 处理统一**: 同一材料的 Create、Mekanism、Thermal、沉浸工程、匠魂、Ad Astra 处理链互相打通(`kubejs/server_scripts/recipes/material/metal/`)
- **流体与物品统一(Unify)**: `kubejs/server_scripts/data/unification/` + OneEnoughItem / Block / Fluid 全局替换
- **匠魂集成**: `TConMaterial.js` 材料构建器 + 熔铸 / 浇筑配方 + Nebula Tinker 扩展, 另有 `#cmi:steam_upgrades` 等升级体系

### 6. 航天与维度

- **Ad Astra** 深度改造: 火箭 1–4 级模型与装配、氧气与低温处理、空间站配方、行星渲染器(`kubejs/assets/cmi/planet_renderers/`)—— 从手搓齿轮到点火升空, 一步到位
- **Alex's Caves** 深度改动: 将Alex洞穴群系独立为Ad Astra星球, 增添探索感与游玩趣味
- **Eden Ring(伊甸星环)** 维度与传送门(`event/functional/server/EdenPortal.js`)

### 7. 任务线、指南与思索

- **FTB Quests**: 序章(`prologue`)、开始(`start`)、机械学习(`machine_learning`)、燃料(`fuel`)、汽鸣铁道(`steam_railway`)、精密构件(`precision_component`)、油燃而升(`ascend_on_burning_oil`)、实用工具(`utilities`), 任务线尚未完工, 敬请期待 —— 先别急着催更
- 章节分为「主线」与「一些事项(WIP)」两组, 早期章节承担阶段解锁(破坏方块 / 合成权限由阶段控制)
- **思索(Ponder)**: 为 AE2 的 ME 控制器 / 驱动器 / 空间 IO / P2P / 量子环, 以及多方块水井等编写了自定义思索场景(`kubejs/assets/cmi/ponder/`、`cmi:water_well`)

### 8. 生活质量与性能

能不能长期玩下去, 很多时候就看这些细节:

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
| Interlocked | `interlocked` | 1.1 | 机械动力套壳(Encasing)连锁 |
| FunctionalStorageJS | `functional_storage_js` | 1.3 | 功能性存储的抽屉升级注册接口 |
| Storage Tweaks | `storage_tweaks` | 1.0.0 | 物品 / 流体存储系统升级调整 |
| Create: Steam Ages | `create_steam_ages` | 1.0 | 为机械动力蒸汽锅炉提供新的工作方式 |
| Railway Automation | `railway_automation` | 1.0 | 自动化铺设轨道交通系统 |

此外使用了 [`hotai`](https://github.com/youyihj/hotai)("Patch mods easily")以 `.badiff` 热补丁的形式在不改动 Mod 本体的前提下修正第三方行为 —— 这就是根目录 `hotai/` 必须随包分发的原因, 别问, 问就是必须带上。

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
| `updater/` | 一键更新整合包mods与脚本 |
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

脚本只处理 `mods / config / kubejs / defaultconfigs / resourcepacks` 等可替换目录, **不会碰存档与 `options.txt`** —— 存档什么的, 一根毛都不会动; 详细说明见 `updater/CLIENT-GUIDE.md`, 方案讨论见 `热更新方案.md`。

---

## 注意事项

### 服务端

- 在打包时请保留根目录下的 `hotai` 文件夹以及内部的**所有**文件, 确保多方块机器运行正常
- 删除影响服务端的客户端 Mod 确保服务端运行正常
- 出现 BUG **一定**要反馈, 别自己憋着(能够使用 [**`issues`**](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues)最好!)
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
successor / improvement of `CIM(Create: Infinity Mechanism)`.

**`Beta 2.5.0`** · Public Beta · Built by **Team Nebula**

[GitHub](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation) · [Gitee mirror](https://gitee.com/eternalsnowstorm/mechanism-and-innovation) · [Issues](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues)

</div>

---

## What is this

**An industrial anthem built around `Create` and friends — you start with one Andesite Alloy and end up on a launch pad.**

A single custom component layer — **Mechanisms** — is the spine of the whole pack. Metallurgy, steelmaking, steam,
petrochemistry, precision electronics, computing, composites and space exploration all hang off it, forming a
progression line you can genuinely follow to the end, instead of bouncing between a few hundred mods and a wiki.

Every stage ships with its own quests and dedicated machines, so the gameplay and the design space both go hard.
This is not "dump a pile of mods into a zip and call it a day" — no cap.

| Item | Details |
| --- | --- |
| Game version | Minecraft `1.20.1` / Forge (dev instance `47.4.10`) |
| Pack version | `Beta 2.5.0` (declared by `CmiGlobal.modPackMainVersion` in CMI Core) |
| Mod count | ~223 jars in `mods/`, **8 of them developed / maintained by Team Nebula** |
| Script scale | KubeJS: 242 `server_scripts` · 74 `startup_scripts` · 30 `client_scripts`; 458 files under the `kubejs/data` datapack |
| Quest line | 8 FTB Quests chapters (prologue + main line + misc) |
| Language | Simplified Chinese first (shop, quests, guide, tooltips) |

---

## Core content

### 1. The Mechanism system — the pack's backbone

Here's the part nobody else really pulls off: "making things" is abstracted into one reusable component layer.
Explore everything, build everything, connect everything with Mechanisms. One rule to rule them all.

- **Mechanism Part**: how a Mechanism is *made* is never set in stone — how it's *finished* always is. Slot the core
  `Mechanism Part` in and the Mechanism is done. Total crafting freedom, one consistent finish line.
- **Mechanism bodies**: dozens of them — Andesite Alloy, Copper, Iron, Gold, Bronze, Cobalt, Coil, Computing,
  Enchanted, Ender, Airtight, Aeronautic, Astronautic, Antimatter, Chromatic, plus the whole Mekanism family.
- **Mechanism abilities**: every Mechanism unlocks its own set of machines and recipes, and they are *not* reskinned
  crafting intermediates. A Fluid Mechanism that hurls water bottles, a Pig Iron Mechanism that never stops chewing —
  that kind of unhinged behaviour is exactly where the fun lives.
- **Proliferator / Flash Disk system**: ore proliferation, data acquisition and more, so your production lines never go
  stale and your builds never run out of ideas.

### 2. Multiblocks & in-house machines

- **MBD2 (Multiblocked 2) multiblocks**: Electrolyzer (`electrolyzer`, with fluid / gas / item / energy ports),
  Chemical Reactor (`chemical_reactor`) and the Electronic Blast Furnace (`electronic_blast_furnace`) — 16 parallel,
  three coil tiers of copper / electrum / high voltage, and it proxies Arc Furnace, Smelting, Alloying, Car Kiln,
  Rotary Kiln and Powered Blast Furnace recipe types. Throughput is genuinely cracked.
- **CMI Core machines**: Chemical Gas Extractor, Flash Disk Writer, Radar Terminal, Simple Centrifuge, Water Pump,
  Steam Boiler / Large Steam Boiler, Rocket Assembly and more.
- Custom structures such as the **multiblock Water Well / Large Mechanism Proliferator**.
- Structures live in `ldlib/assets/mbd2/` and `kubejs/data/cmi/machines/`, and you can extend them freely with
  scripts under `kubejs/server_scripts/event/mods/mbd/`.

> ⚠️ Multiblocks depend on the `hotai/` hot-patch folder in the repo root. **Keep every single file.** Ship the pack
> without it and your machines will simply clock out.

### 3. Steam, heat and power

- **Create: Steam Ages / Steam Powered**: Combustion Chamber → `HU (Heat Unit)` → Boiler → Steam → Steam Engine →
  Flywheel → stress network, end to end. Copper / cast iron / steel tiers each carry their own numbers
  (see `Developer/蒸汽和HU之间的算法.md`). Steam hits different when the chain runs this deep.
- **Steam 'n' Rails / Railway Automation**: train kits, signals, automated hauling, and railways you can lay down fast.
- Stress sources and transport got a full rebalance: `kubejs/server_scripts/recipes/device/StressSource.js`, `StressTransport.js`.

### 4. Geology, ore veins and petrochemistry

- **Deposit / ore vein system**: coal, iron, copper, gold, lead, nickel, oil shale, quartz, redstone and cobalt, each in
  small / medium / large tiers (`kubejs/data/cmi/structures/deposit/`). Veins for days — you will not run out of things
  to dig.
- **Configurable ore generation**: `kubejs/server_scripts/data/worldgen/OresGen.js`, `OreNodeGen.js`, `GeoVentGen.js`,
  `OilGen.js` (geo vents, oil fields, Martian lava lakes).
- **Petrochemical line**: crude extraction → fractionation → diesel / biodiesel / silicone rubber, with every fuel
  registered in one place — `kubejs/server_scripts/data/FuelTypes.js`.
- **Caves & structures**: custom structures such as `kubejs/data/cmi/structures/cave/`.

### 5. Material unification & smelting

- **Metal material registry**: `kubejs/startup_scripts/register/material/` defines ingots / plates / rods / wires /
  dusts / gears / molten fluids in one shot and rolls out every recipe for you. Add one material, let the code cook.
- **Cross-mod processing unification**: Create, Mekanism, Thermal, Immersive Engineering, Tinkers' Construct and
  Ad Astra processing chains for the same material are all wired together (`kubejs/server_scripts/recipes/material/metal/`).
- **Fluid & item unification (Unify)**: `kubejs/server_scripts/data/unification/` + global OneEnoughItem / Block / Fluid
  replacement.
- **Tinkers' integration**: the `TConMaterial.js` material builder + casting / melting recipes + the Nebula Tinker
  extension, plus upgrade systems such as `#cmi:steam_upgrades`.

### 6. Space & dimensions

- **Ad Astra**, heavily reworked: T1–T4 rocket models and assembly, oxygen and cryo handling, space station recipes,
  planet renderers (`kubejs/assets/cmi/planet_renderers/`). Hand-cranked gears to lit engines, no detours — space is
  the endgame, and it shows.
- **Alex's Caves**, heavily reworked: the cave biomes are split off into their own Ad Astra planets. Exploration value:
  doubled. Certified banger of a side quest.
- **Eden Ring** dimension and portal (`event/functional/server/EdenPortal.js`).

### 7. Quest line, guide and Ponder

- **FTB Quests**: Prologue (`prologue`), Start (`start`), Machine Learning (`machine_learning`), Fuel (`fuel`),
  Steam Railway (`steam_railway`), Precision Component (`precision_component`), Ascend on Burning Oil
  (`ascend_on_burning_oil`) and Utilities (`utilities`). Still under construction — stay tuned, and please don't
  rush us.
- Chapters are grouped into "Main line" and "Some matters (WIP)". Early chapters gate your progression: block breaking
  and crafting permissions are locked behind stages.
- **Ponder**: hand-built Ponder scenes for AE2's ME Controller / Drive / Spatial IO / P2P / Quantum Ring, plus the
  multiblock Water Well (`kubejs/assets/cmi/ponder/`, `cmi:water_well`).

### 8. Quality of life & performance

Staying power is mostly a details game, and this pack does not sleep on it:

| Category | Contents |
| --- | --- |
| Storage | Functional Storage (with FunctionalStorageJS drawer upgrade registration), Sophisticated Backpacks, AE2 + ExtendedAE + Applied Mekanistics |
| Building | Industrial Platform, Construction Wand, Multi Builder Tool |
| Information | Jade + JadeAddons, JEI, TConPlanner, Not Enough Recipe Book, Untranslated Items |
| Maps | Xaero's Minimap / World Map, Explorer's Compass, Nature's Compass |
| Performance | Embeddium, Oculus, ModernFix, FerriteCore, EntityCulling, ImmediatelyFast, Noisium, Ksyxis, Smooth Boot, Packet Fixer, CreateBetterFPS and more |
| Convenience | Mouse Tweaks, Controlling, AppleSkin, Torcherino, Time in a Bottle, Easy Repair, Fast Leaf Decay, TreeChop |
| Experience | FancyMenu + Drippy Loading Screen (custom main menu / loading screen), Jade themes (Windows XP / War Thunder / Stardew Valley and more), Extreme Sound Muffler |

---

## Mods developed / maintained by the team

The scripts are only half the story. The pack also ships mods built or maintained by Team Nebula:

| Mod | Mod ID | Version | What it does |
| --- | --- | --- | --- |
| CMI Core | `cmi` | 1.3 | Pack core: Mechanism system, machines, multiblocks, material and equipment registration |
| Nebula Tinker | `nebula_tinker` | 1.0.0 | Tinkers' Construct extension |
| Industrial Platform | `industrial_platform` | 1.8.0 | Quickly build industrial platforms |
| Interlocked | `interlocked` | 1.1 | Create Encasing chaining |
| FunctionalStorageJS | `functional_storage_js` | 1.3 | Drawer upgrade registration API for Functional Storage |
| Storage Tweaks | `storage_tweaks` | 1.0.0 | Item / fluid storage system upgrade adjustments |
| Create: Steam Ages | `create_steam_ages` | 1.0 | New ways for Create steam boilers to work |
| Railway Automation | `railway_automation` | 1.0 | Automated railway track laying |

On top of that, the pack uses [`hotai`](https://github.com/youyihj/hotai) ("Patch mods easily") to fix third-party
behaviour with `.badiff` hot patches, without ever touching the mods themselves. That's exactly why `hotai/` has to
ship with the pack — don't ask, just bring it along.

---

## Directory structure

| Path | Description |
| --- | --- |
| `mods/` | The mods themselves; `mods/.index/` holds packwiz metadata (`project-id` / `file-id` / sha1) that the update script validates against |
| `kubejs/` | Main pack content: `startup_scripts` (registration) / `server_scripts` (recipes, events, worldgen) / `client_scripts` (language and display) / `data` (datapack) / `assets` (textures, models, lang, guides, Ponder) |
| `config/` `defaultconfigs/` | Mod configs; `config/ftbquests/quests/` is the quest line itself and may be updated with the pack |
| `hotai/` | Runtime hot patches (`.badiff`), required by the multiblocks |
| `ldlib/` | MBD2 multiblock structure definitions |
| `resourcepacks/` | Bundled resource packs (Create pipes, drawers, chromatic frames, etc.) |
| `updater/` | One-click updater for the pack's mods and scripts |
| `Developer/` | Development docs: design documents, MBD2 registration docs, steam / HU algorithm notes, conversion scripts |
| `UpdateLogs.md` | Changelog (write it every time you change something) |
| `CONTRIBUTING.md` | Open-source collaboration agreement and KubeJS code style |

---

## Install & update

### First install

1. Install Minecraft `1.20.1` and the matching Forge.
2. Drop this repo's contents into your instance's `.minecraft` folder — the folder name doesn't matter.
3. Already have Git? Just pull with the update script (below).

### Daily updates

`updater/` ships cross-platform scripts that sync the
[Gitee mirror repository](https://gitee.com/eternalsnowstorm/mechanism-and-innovation) down to your machine, then
verify and fill in mods against `update.json`:

```bat
:: Windows (first time)
updater\setup-gitee-sync.bat
:: Windows (daily)
updater\update-from-gitee.bat
```

```bash
# Linux / macOS
bash updater/setup-gitee-sync.sh
bash updater/update-from-gitee.sh
```

They only touch replaceable folders — `mods / config / kubejs / defaultconfigs / resourcepacks` — and **never touch
your saves or `options.txt`**. Not a single block. Full details in `updater/CLIENT-GUIDE.md`, design discussion in
`热更新方案.md`.

---

## Notes

### Server side

- Packaging? Keep the `hotai` folder in the repo root together with **all** files inside it, or your multiblocks will misbehave.
- Strip out client-only mods so the server actually runs.
- Hit a BUG? **Report it** — don't just sit on it. [**`issues`**](https://github.com/Eternal-Snowstorm/Create-Mechanism-and-Innovation/issues) is the best place for it.
- Editing JEI integration? Run `kjs reload client_scripts` before `reload`.

---

### Files required for packaging

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

### This pack ships a lot of wheels, and the community is very welcome to reuse them — including but not limited to:

 - [**Metal material registration**](kubejs/startup_scripts/register/utils/Material.js)
 - [**Ore block registration**](kubejs/startup_scripts/register/block/CommonOres.js)
 - [**Configurable ore generation**](kubejs/server_scripts/data/worldgen/OresGen.js)
 - [**Tinkers' material builder**](kubejs/server_scripts/data/tconstruct/TConMaterial.js)
 - [**Functional Storage drawer upgrade registration**](kubejs/startup_scripts/register/other/Drawer.js)
 - [**Diesel fuel registration**](kubejs/server_scripts/data/FuelTypes.js)
 - [**Metal material recipe integration**](kubejs/server_scripts/recipes/material/metal)

---

## Contributing

- Code style, commit conventions and PR / Issue requirements live in [**`CONTRIBUTING.md`**](CONTRIBUTING.md)
- Every change has to be logged in [**`UpdateLogs.md`**](UpdateLogs.md) (format: chapter 10 of the collaboration agreement)
- The version number lives in CMI Core's `CmiGlobal.modPackMainVersion`
- Adding or swapping mods must be registered in `mods/.index` — the update manifest is generated from it
- Design and dev docs go in `Developer/`; for MBD2 registration see `Developer/MBD2代码注册文档`

---

<div align="center">

感谢游玩 **机械动力: 构件与革新**!

Thanks for playing CMI!

</div>
