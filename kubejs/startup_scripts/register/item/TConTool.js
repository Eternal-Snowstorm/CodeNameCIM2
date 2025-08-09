let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $TinkerTags$Items =
	Java.loadClass("slimeknights.tconstruct.common.TinkerTags$Items")

StartupEvents.registry("item", (event) => {
	const ITEM_PRO = new $Item$Properties()
		.stacksTo(1)
	const PAXEL = $ToolDefinition.create(`${global.namespace}:paxel`)

	function addTConTool(name, tool) {
		return event.createCustom(name, () => {
			return new $ModifiableItem(ITEM_PRO, tool)
		})
	}

	addTConTool("paxel", PAXEL)
		.tag("forge:tools")
		.tag("minecraft:tools")
		.tag("minecraft:pickaxes")
		.tag("minecraft:axes")
		.tag("minecraft:shovels")
		.tag($TinkerTags$Items.MODIFIABLE)
		.tag($TinkerTags$Items.MULTIPART_TOOL)
		.tag($TinkerTags$Items.DURABILITY)
		.tag($TinkerTags$Items.SMALL_TOOLS)
		.tag($TinkerTags$Items.MELEE)
		.tag($TinkerTags$Items.HELD)
		.tag($TinkerTags$Items.HARVEST)
		.tag($TinkerTags$Items.HARVEST_PRIMARY)
		.tag($TinkerTags$Items.STONE_HARVEST)
		.tag($TinkerTags$Items.INTERACTABLE)
		.tag($TinkerTags$Items.INTERACTABLE_RIGHT)
})