let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")

StartupEvents.registry("item", (event) => {
	/**
	 * 按理说这里其实不需要返回也可以
	 * 但是我习惯了(😋)
	 * @param {String} name 注册名称
	 * @returns 注册匠魂工具类型
	*/
	function addTConToolType(name) {
		return $ToolDefinition.create(`${CmiCore.MODID}:${name}`)
	}

	/**
	 * 返回CustomBuilderObject可以
	 * 直接调用createCustom()下的方法
	 * @param {String} name 注册名称
	 * @returns 注册匠魂工具物品
	 */
	function addTConTool(name) {
		let toolItemBuilder =
			event.createCustom(`${CmiCore.MODID}:${name}`, () => {
				return new $ModifiableItem(new $Item$Properties(), addTConToolType(name))
			})

		toolItemBuilder.tag("forge:tools")
		toolItemBuilder.tag("minecraft:tools")

		return toolItemBuilder
	}

	addTConTool("paxel")
		.tag("minecraft:pickaxes")
		.tag("minecraft:axes")
		.tag("minecraft:shovels")
		.tag(global.TinkerItemTags.MODIFIABLE)
		.tag(global.TinkerItemTags.MULTIPART_TOOL)
		.tag(global.TinkerItemTags.DURABILITY)
		.tag(global.TinkerItemTags.SMALL_TOOLS)
		.tag(global.TinkerItemTags.MELEE)
		.tag(global.TinkerItemTags.HELD)
		.tag(global.TinkerItemTags.HARVEST)
		.tag(global.TinkerItemTags.HARVEST_PRIMARY)
		.tag(global.TinkerItemTags.STONE_HARVEST)
		.tag(global.TinkerItemTags.INTERACTABLE)
		.tag(global.TinkerItemTags.INTERACTABLE_RIGHT)
		.tag(global.TinkerItemTags.NUGGETS_NETHERITE)
		.tag(global.TinkerItemTags.NUGGETS_NETHERITE_SCRAP)
		.tag(global.TinkerItemTags.INGOTS_NETHERITE_SCRAP)
		.tag(global.TinkerItemTags.BONUS_SLOTS)
})