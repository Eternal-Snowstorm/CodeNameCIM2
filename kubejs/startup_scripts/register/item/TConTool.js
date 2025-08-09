let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $TinkerTags$Items =
	Java.loadClass("slimeknights.tconstruct.common.TinkerTags$Items")

StartupEvents.registry("item", (event) => {
	let TinkerItemTags = {}
	Object.keys($TinkerTags$Items)
		.forEach((key) => {
			let value = $TinkerTags$Items[key]
			if (value && typeof value.location === "function") {
				TinkerItemTags[key] = value.location().toString()
			}
		})
	function addTConToolType(name) {
		return $ToolDefinition.create(`${global.namespace}:${name}`)
	}
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