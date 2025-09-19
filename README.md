<!--markdownlint-disable MD001 MD033 MD041 MD051-->

<div align="center">

# Chinese

# Create: Mechanisms and Innovations(CMI)
由[**`Unknown_Entity_`**](https://space.bilibili.com/3461572013853145)领头的`Minecraft Forge 1.20.1-47.4.0`机械动力整合包, `CIM(Creare: Infinity Mechanism)`的续作/改良 目前处于Beta阶段

</div>

---

## 注意事项

### 服务端
 - 在打包时请保留根目录下的`hotai`和`ldlib`文件夹以及内部的**所有**文件, 确保多方块机器运行正常
 - 删除影响服务端的客户端Mod确保服务端运行正常
 - 出现BUG**一定**要反馈(能够使用[**`issues`**](https://github.com/VechniMetel/CodeNameCIM2/issues)最好!)
 - 在修改JEI的时候需要先运行`kjs reload client_scripts`后再运行`reload`

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
 - **ldlib**
 - **mods**
 - **resourcepacks**
 - **icon.png**
 - **LICENSE.md**
 - **README.md**
 - **UpdateLogs.md**

---

### 本整合包提供了非常多的轮子, 我们非常欢迎社区去使用我们的轮子, 包括但不限于:
 - [**金属材料注册**](kubejs/startup_scripts/register/Metal.js)
 - [**矿石方块注册**](kubejs/startup_scripts/register/block/ore/Common.js)
 - [**可配置矿石生成**](kubejs/server_scripts/data/OresGenerating.js)
 - [**帕秋莉多方块API封装**](kubejs/server_scripts/utils/DefineMultiBlockStructure.js)
 - [**匠魂材料构建器**](kubejs/server_scripts/utils/TConMaterialGenerator.js)
 - [**匠魂材料纹理生成器**](kubejs/server_scripts/utils/TConTexturesGenerator.js)
 - [**功能性存储抽屉升级注册**](kubejs/startup_scripts/register/item/DrawerUpgrade.js)
 - [**柴油动力燃料添加**](kubejs/server_scripts/data/DieselEngineFuelTypes.js)
 - [**金属材料配方集成处理**](kubejs/server_scripts/recipes/alone/metal)

<!--markdownlint-disable MD001 MD033 MD041 MD051-->

<div align="center">

# English

# Create: Mechanisms and Innovations (CMI)

A `Minecraft Forge 1.20.1-47.4.0` Create modpack led by [**`Unknown_Entity_`**](https://space.bilibili.com/3461572013853145),
successor/improvement of `CIM(Creare: Infinity Mechanism)`.
Currently in Beta stage.

</div>

---

## Notes

### Server Pack
- Please keep the `hotai` and `ldlib` folders under the root directory and **all** files inside during packaging to ensure the normal operation of multi-block machines.
- Delete the client mod that affects the server to ensure the normal operation of the server.
- BUG **must** feedback (it is best to use [**`issues`**](https://github.com/VechniMetel/CodeNameCIM2/issues)!)


### Files required for modpack packaging
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
 - **ldlib**
 - **mods**
 - **resourcepacks**
 - **icon.png**
 - **LICENSE.md**
 - **README.md**
 - **UpdateLogs.md**

---

### This modpack provides a wide variety of utilities, and we highly encourage the community to make use of them, including but not limited to:

* [**Metal Material Registration**](kubejs/startup_scripts/register/Metal.js)
* [**Ore Block Registration**](kubejs/startup_scripts/register/block/ore/Common.js)
* [**Configurable Ore Generation**](kubejs/server_scripts/data/OresGenerating.js)
* [**Patchouli Multiblock API Wrapper**](kubejs/server_scripts/utils/DefineMultiBlockStructure.js)
* [**Tinkers’ Construct Material Generator**](kubejs/server_scripts/utils/TConMaterialGenerator.js)
* [**Tinkers’ Construct Texture Generator**](kubejs/server_scripts/utils/TConTexturesGenerator.js)
* [**Functional Storage Drawer Upgrade Registration**](kubejs/startup_scripts/register/item/DrawerUpgrade.js)
* [**Diesel Engine Fuel Addition**](kubejs/server_scripts/data/DieselEngineFuelTypes.js)
* [**Metal Material Recipe Integration Handling**](kubejs/server_scripts/recipes/alone/metal)
