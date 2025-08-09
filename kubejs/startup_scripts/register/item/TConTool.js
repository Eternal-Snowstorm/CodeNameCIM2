let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $TinkerTags$Items =
	Java.loadClass("slimeknights.tconstruct.common.TinkerTags$Items")

StartupEvents.registry("item", (event) => {
	/**
	 * 按理说这里其实不需要返回也可以
	 * 但是我习惯了(😋)
	 * @param {String} name 注册名称
	 * @returns 注册匠魂工具类型
	*/
	function addTConToolType(name) {
		return $ToolDefinition.create(`${global.namespace}:${name}`)
	}

	/**
	 * 返回CustomBuilderObject可以
	 * 直接调用createCustom()下的方法
	 * @param {String} name 注册名称
	 * @returns 注册匠魂工具物品
	 */
	function addTConTool(name) {
		return event.createCustom(`${global.namespace}:${name}`, () => {
			return new $ModifiableItem(new $Item$Properties(), addTConToolType(name))
		}).tag("forge:tools").tag("minecraft:tools")
	}

	addTConTool("paxel")
		.tag("minecraft:pickaxes")
		.tag("minecraft:axes")
		.tag("minecraft:shovels")
		.tag(TinkerTags.MODIFIABLE)
		.tag(TinkerTags.MODIFIABLE)
		.tag(TinkerTags.MULTIPART_TOOL)
		.tag(TinkerTags.DURABILITY)
		.tag(TinkerTags.SMALL_TOOLS)
		.tag(TinkerTags.MELEE)
		.tag(TinkerTags.HELD)
		.tag(TinkerTags.HARVEST)
		.tag(TinkerTags.HARVEST_PRIMARY)
		.tag(TinkerTags.STONE_HARVEST)
		.tag(TinkerTags.INTERACTABLE)
		.tag(TinkerTags.INTERACTABLE_RIGHT)
})