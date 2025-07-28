let $ToolDefinition =
	Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition")
let $ModifiableItem =
	Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")

StartupEvents.registry("item", (event) => {
	const ITEM_PROPERTIES = new $Item$Properties().stacksTo(1)
	const PAXEL = $ToolDefinition.create(`${global.namespace}:paxel`)

	event.createCustom(`${global.namespace}:paxel`, () => {
		return new $ModifiableItem(ITEM_PROPERTIES, PAXEL)
	})
		.tag("forge:tools")
		.tag("tconstruct:modifiable")
		.tag("tconstruct:modifiable/multipart")
		.tag("tconstruct:modifiable/durability")
})