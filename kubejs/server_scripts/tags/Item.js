ServerEvents.tags("item", (event) => {
	event.get("create:mechanisms")
		.add("create:precision_mechanism")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")

	global.dyeColorGroup.forEach((color) => {
		event.get(`forge:dyes/${color}`)
			.add("ue_addons:colorful_mechanism")
	})

	event.get("curios:mechanisms")
		.add("ue_addons:cobalt_mechanism")
		.add("ue_addons:photosensitive_mechanism")
		.add("ue_addons:nether_mechanism")

	event.get("minecraft:sand")
		.add("#forge:sand")

	event.get("tconstruct:gauge")
		.add("tconstruct:seared_fuel_gauge")
		.add("tconstruct:seared_ingot_gauge")

	event.get("forge:stone")
		.add("#forge:cobblestone")

	event.get("forge:ingots/andesite_alloy")
		.add("create:andesite_alloy")

	event.get("forge:plates/andesite_alloy")
		.add("vintageimprovements:andesite_sheet")
		.add("createdeco:andesite_sheet")

	event.get("forge:plates/andesite")
		.add("#forge:plates/andesite_alloy")
})