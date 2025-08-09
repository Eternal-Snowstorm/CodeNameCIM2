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

	event.createCustom(`${global.namespace}:paxel`, () => {
		return new $ModifiableItem(ITEM_PRO, PAXEL)
	})
		.tag("forge:tools")
		.tag("minecraft:tools")
		.tag("minecraft:pickaxes")
		.tag("minecraft:axes")
		.tag("minecraft:shovels")
		.tag("tconstruct:modifiable")
		.tag("tconstruct:modifiable/multipart")
		.tag("tconstruct:modifiable/durability")
		.tag("tconstruct:modifiable/small")
		.tag("tconstruct:modifiable/melee")
		.tag("tconstruct:modifiable/held")
		.tag("tconstruct:modifiable/harvest")
		.tag("tconstruct:modifiable/harvest/primary")
		.tag("tconstruct:modifiable/harvest/stone")
		.tag("tconstruct:modifiable/interactable")
		.tag("tconstruct:modifiable/interactable/right")
})