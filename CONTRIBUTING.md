# Create: Mechanism and Innovation 开源协作协议

## 第一章 总则

**第一条** 本协议适用于所有参与`Create: Mechanism and Innovation`(以下简称`CMI`)项目的开发人员及贡献者

**第二条** 项目主理人(Maintainer)`Unknown_Entity_`拥有版本迭代的最终决策权和协议解释权

## 第二章 版本管理

 - `CMI`版本号码由大中小版本号组成

 - `CMI`大、中版本号码由主创`Unknown_Entity_`进行规定

 - 版本号须在[**Global.js**](kubejs/startup_scripts/Global.js)第6行显示声明

## **第三条** GitHub仓库修改注释协议

 - GitHub每次进行修改上传(即`push origin`)需要输入该次修改的注释, 包含`summary`与`description`

 - 技术人员在上传的`commits message`中需使用中文(不限简繁体)或英语概述该次修改的内容

 - 开发人员上传之前请确保Debug后并且没有问题, 确保没有问题后才能上传到GitHub, 如果自己解决不了请先全部注释掉并在开发群里或`commits message`内说明有什么错误, 卡在哪里, 什么解决不了

## 第三章 开发规范

**第四条** 命名规则:
1. 类名采用大驼峰式(**PascalCase**), 例: `RecipeSchema`
2. 函数/变量采用小驼峰式(**camelCase**), 例: `getMaterialList`
3. 常量采用全大写蛇形命名(**SNAKE_CASE**), 例: `GET_TAGS_ITEM`
4. **严格禁止**使用`var`来声明变量与常量, 只能使用`let`或`const`

**第五条** 脚本开发规范:
1. 配方脚本必须进行结构解构

```js
ServerEvents.recipes((event) => {
    let { create, kubejs, minecraft } = event.recipes
})
```

2. 有序配方必须使用标准模板

```js
kubejs.shaped("minecraft:stone", [
	"AAA",
	"BBB",
	"CCC"
], {
	A: "minecraft:sand",
	B: "#forge:gravel",
	C: "#forge:ingots/iron"
})
```

3. 无序配方或**Create**和**Thermal**等Mod的配方必须使用标准模板, 以下提供的几个模板请任选一个(但是无序合成请严格遵守前两个)

```js
// 无序
kubejs.shapeless("minecraft:stone", [
	"minecraft:sand"
])

kubejs.shapeless("minecraft:stone", [
	"minecraft:sand",
	"#forge:ingots/iron"
])

// Create
create.mixing("minecraft:stone", [
	"minecraft:sand"
])

create.mixing("minecraft:stone", [
	"minecraft:sand",
	Fluid.of("minecraft:water", 1000)
])

create.mixing([
	"2x minecraft:stone",
	Item.of("minecraft:sand", 2).withChance(0.5)
], [
	"minecraft:sand",
	Fluid.of("minecraft:water", 1000)
]).heated()

create.mixing([
	"2x minecraft:stone",
	Item.of("minecraft:sand", 2).withChance(0.5)
], "minecraft:sand").superheated()

// Thermal
thermal.centrifuge("minecraft:stone", [
	"minecraft:sand"
])

thermal.centrifuge("minecraft:stone", [
	"minecraft:sand",
	Fluid.of("minecraft:water", 1000)
])

thermal.centrifuge([
	"2x minecraft:stone",
	Item.of("minecraft:sand", 2).withChance(0.5)
], [
	"minecraft:sand",
	Fluid.of("minecraft:water", 1000)
]).energy(1000)

thermal.centrifuge([
	"2x minecraft:stone",
	Item.of("minecraft:sand", 2).withChance(0.5)
], "minecraft:sand").energy(1000)
```

4. **Create**序列合成规范
```js
create.sequenced_assembly([
	Item.of("create:sturdy_sheet").withChance(0.7),
	Item.of("create:powdered_obsidian").withChance(0.15),
	Item.of("minecraft:gravel").withChance(0.15)
], "#forge:dusts/obsidian", [
	create.pressing("#forge:dusts/obsidian", [
		"#forge:dusts/obsidian",
		"#forge:dusts/obsidian"
	])
]).transitionalItem("create:unprocessed_obsidian_sheet").loops(10)

create.sequenced_assembly(Item.of("create:sturdy_sheet").withChance(0.7), [
	"#forge:dusts/obsidian"
], [
	create.pressing("#forge:dusts/obsidian", [
		"#forge:dusts/obsidian",
		"#forge:dusts/obsidian"
	])
]).transitionalItem("create:unprocessed_obsidian_sheet").loops(10)
```

5. 在非必要时刻禁止写分号`;`在代码行末

6. `if`或`else`语句禁止单行结束, 或者单行`return`

```js
if (a === b) return // X

if (a === b) {
	return
} // √
```

7. 所有条件判断只能使用三等号强等于判断`===`, 禁止使用双等号弱等于判断`==`

8. `KubeJS`的各种`event`中的`handler`必须使用`event`这个单词

```js
ServerEvents.recipes((event) => {})
```

9. 所有的箭头函数必须加上小括号`()`, 不管是`forEach`还是`event`

```js
xxx.forEach((value) => {})

ServerEvents.recipes((event) => {})
```

11. 所有的箭头函数括号必须在末尾加上大括号(花括号)`{}`, 不能直接传参

12. 所有的对象`{}`和数组`[]`内必须换行(数组内的数组随意)

```js
{
	"key": "value",
	"key1": "value1"
},
[
	"value",
	"value1"
],
[
	["value", "value1"],
	["value", "value1"]
],
[
	[
		"value", 
		"value1"
	],
	[
		"value",
		"value1"
	]
]
```

13. 禁止使用单引号`''`, 只能使用反引号` `` `或双引号`""`

14. 撰写物品逻辑时必须注释逻辑实现的功能并分步注释该步骤实现的内容

```js
let $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")

// 自然构件右键运行骨粉逻辑
BlockEvents.rightClicked((event) => {
	let { level, item, player, facing, block, hand } = event

	// 取消无效右键事件
	if (level.clientSide) {
		return
	}

	// 判断玩家手持物品为自然构件
	if (item === "cmi:nature_mechanism") {

		// 获取所点击的方块位置并调用MC原版骨粉逻辑
		let blockHitResult = new $BlockHitResult(player.pos, facing, block.pos, false)
		let useOnContext = new $UseOnContext(level, player, hand, "minecraft:bone_meal", blockHitResult)
		let boneMeal = Items.BONE_MEAL

		// 在指定方块上运行骨粉的逻辑
		boneMeal.useOn(useOnContext)

		// 玩家挥动手持的自然构件
		player.swing()
	}
})
```

15. 导入 Java 包

在脚本中导入 Java 类时, 应统一使用`Java.loadClass("package.ClassName")`, 并遵循以下规范:
 - 必须用 `let` 定义变量
 - 变量名统一采用 **`$`+类名** 的形式
 - 若为内部类(子类)，在变量名中使用 `$` 连接，例如: 

```js
let $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
let $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")
```

**第六条** 注册规范:

在调用链式方法时`必须`换行

**严格禁止**使用`.displayName()`方法对其进行命名, 请前往[**lang**](kubejs/client_scripts/lang)文件夹下的语言文件内进行命名与修改

```js
event.create(`${global.namespace}:smart_gear`)
    .texture(`${global.namespace}:item/smart_gear`)
    .burnTime(400)
```

## 第四章 代码管理

**第七条** 知识产权条款:

1. 贡献者保留其提交代码的著作权

2. 项目核心团队拥有代码架构的最终优化权

## 第五章 贡献流程

**第八条** **Pull Request**要求:

1. 必须包含至少1张有效运行截图

2. 必须通过基础测试套件验证

3. 禁止包含以下内容:
   - 二进制文件(`.jar/.zip`)

**第九条** **Issues**管理:

1. BUG报告必须包含:
   - 环境配置详情
   - 复现步骤
   - 错误日志片段
   - 确保没有加入任何影响到游戏性能与内容的Mod

## 第六章 版本控制

**第十条** 更新日志规范:
每次做出一个修改(看情况区分)需要在[**UpdateLogs.md**](UpdateLogs.md)中写上记录, 格式如下(每一行的`-`前后请记得空一个空格):

```markdown
## Beta 1.1.0

### 删除内容
 - 删除了XXX的Tags

### 添加内容
 - 新增钛合金冶炼配方体系
 - 实现自动化产线验证模块

### 修改(调整)内容
 - 修复多方块结构能量溢出问题
 - 解决合成表NBT校验异常
 - 优化机械臂碰撞体积计算
```