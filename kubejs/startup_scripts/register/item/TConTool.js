let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")

StartupEvents.registry("item", (event) => {
	const ITEM_BUILD = new $Item$Properties()
	const PAXEL = $ToolDefinition.create(`${global.namespace}:paxel`)

	event.createCustom(`${global.namespace}:paxel`, () => {
		return new $ModifiableItem(ITEM_BUILD.stacksTo(1), PAXEL)
	})
		.tag("forge:tools")
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
})