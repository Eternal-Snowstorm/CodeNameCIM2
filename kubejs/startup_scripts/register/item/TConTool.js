let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $TinkerTags$Items =
	Java.loadClass("slimeknights.tconstruct.common.TinkerTags$Items")

StartupEvents.registry("item", (event) => {
	/*
	 * 封装TinkerItemTags
	 * 只有在.toString()后才能被.tag()识别并调用
	*/
	let TinkerItemTags = {}
	Object.keys($TinkerTags$Items)
		.forEach((key) => {
			let value = $TinkerTags$Items[key]
			if (value && typeof value.location === "function") {
				TinkerItemTags[key] = value.location().toString()
			}
		})

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
		.tag(TinkerItemTags.MODIFIABLE)
		.tag(TinkerItemTags.MULTIPART_TOOL)
		.tag(TinkerItemTags.DURABILITY)
		.tag(TinkerItemTags.SMALL_TOOLS)
		.tag(TinkerItemTags.MELEE)
		.tag(TinkerItemTags.HELD)
		.tag(TinkerItemTags.HARVEST)
		.tag(TinkerItemTags.HARVEST_PRIMARY)
		.tag(TinkerItemTags.STONE_HARVEST)
		.tag(TinkerItemTags.INTERACTABLE)
		.tag(TinkerItemTags.INTERACTABLE_RIGHT)
})