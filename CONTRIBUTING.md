# Create: Mechanism and Innovation 开源协作协议

## 第一章 总则

**第一条** 本协议适用于所有参与`Create: Mechanism and Innovation`(以下简称`CMI`)项目的开发人员及贡献者

**第二条** 项目主理人(Maintainer)`Unknown_Entity_`拥有版本迭代的最终决策权和协议解释权

## 第二章 版本管理

 - `CMI`版本号码由大中小版本号组成

 - `CMI`大、中版本号码由主创`Unknown_Entity_`进行规定

 - 版本号须在[**Global.js**](kubejs/startup_scripts/Global.js)第6行显式声明

## **第三条** GitHub仓库修改注释协议

 - GitHub每次进行修改上传(即`push origin`)需要输入该次修改的注释, 包含`summary`与`description`

 - 技术人员在上传的`commits message`中需使用中文(不限简繁体)或英语概述该次修改的内容

## 第三章 开发规范

**第四条** 命名规则:
1. 类名采用大驼峰式(**PascalCase**), 例: `RecipeSchema`
2. 函数/变量采用小驼峰式(**camelCase**), 例: `getMaterialList`
3. 常量采用全大写蛇形命名(**SNAKE_CASE**)
4. 不允许使用`var`来声明变量

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

3. 撰写物品逻辑时必须注释逻辑实现的功能并分步注释该步骤实现的内容

```js
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
        // 在指定方块上运行骨粉的逻辑
        Items.BONE_MEAL.useOn(useOnContext)
        // 玩家挥动手持的自然构件
        player.swing()
    }
})
```

**第六条** 注册规范:

在调用链式方法时`必须`换行

`严格禁止`使用`.displayName()`方法对其进行命名, 请前往[**lang**](kubejs/client_scripts/lang)文件夹下的语言文件内进行命名与修改

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