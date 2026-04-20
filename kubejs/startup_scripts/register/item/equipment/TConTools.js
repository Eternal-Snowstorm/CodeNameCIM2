let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
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
		return $ToolDefinition.create(`${CmiCore.MODID}:${name}`)
	}

	/**
	 * 返回`CustomBuilderObject`可以
	 * 直接调用`createCustom()`下的方法
	 * @param {String} name 注册名称
	 * @returns 注册匠魂工具物品
	 */
	function addTConTool(name) {
		let toolItemBuilder =
			event.createCustom(`${CmiCore.MODID}:${name}`, () => {
				return new $ModifiableItem(new Item$Properties(), addTConToolType(name))
			})

		toolItemBuilder.tag("forge:tools")
		toolItemBuilder.tag("minecraft:tools")

		return toolItemBuilder
	}

	addTConTool("paxel")
		.tag("minecraft:pickaxes")
		.tag("minecraft:axes")
		.tag("minecraft:shovels")
		.tag(useJavaTag($TinkerTags$Items.MODIFIABLE))
		.tag(useJavaTag($TinkerTags$Items.MULTIPART_TOOL))
		.tag(useJavaTag($TinkerTags$Items.DURABILITY))
		.tag(useJavaTag($TinkerTags$Items.SMALL_TOOLS))
		.tag(useJavaTag($TinkerTags$Items.MELEE))
		.tag(useJavaTag($TinkerTags$Items.HELD))
		.tag(useJavaTag($TinkerTags$Items.HARVEST))
		.tag(useJavaTag($TinkerTags$Items.HARVEST_PRIMARY))
		.tag(useJavaTag($TinkerTags$Items.STONE_HARVEST))
		.tag(useJavaTag($TinkerTags$Items.INTERACTABLE))
		.tag(useJavaTag($TinkerTags$Items.INTERACTABLE_RIGHT))
		.tag(useJavaTag($TinkerTags$Items.NUGGETS_NETHERITE))
		.tag(useJavaTag($TinkerTags$Items.NUGGETS_NETHERITE_SCRAP))
		.tag(useJavaTag($TinkerTags$Items.INGOTS_NETHERITE_SCRAP))
		.tag(useJavaTag($TinkerTags$Items.BONUS_SLOTS))
})