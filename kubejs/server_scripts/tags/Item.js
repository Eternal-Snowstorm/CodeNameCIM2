ServerEvents.tags("item", (event) => {
	event.get("create:mechanisms")
		.add("create:precision_mechanism")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")

	global.dyeColorGroup.forEach((color) => {
		event.get(`forge:dyes/${color}`)
			.add("ue_addons:colorful_mechanism")
	})

	event.get("functionalstorage:upgrades")
		.add("functionalstorage:copper_upgrade")
		.add("functionalstorage:gold_upgrade")
		.add("functionalstorage:diamond_upgrade")
		.add("functionalstorage:netherite_upgrade")
		.add("functionalstorage:iron_downgrade")
		.add("functionalstorage:max_storage_upgrade")
		.add("functionalstorage:collector_upgrade")
		.add("functionalstorage:puller_upgrade")
		.add("functionalstorage:pusher_upgrade")
		.add("functionalstorage:creative_vending_upgrade")
		.add("functionalstorage:void_upgrade")
		.add("functionalstorage:redstone_upgrade")

	event.get("thermal:dynamos")
		.add("thermal:dynamo_stirling")
		.add("thermal:dynamo_magmatic")
		.add("thermal:dynamo_compression")
		.add("thermal_extra:dynamo_frost")
		.add("thermal:dynamo_numismatic")
		.add("thermal:dynamo_lapidary")
		.add("thermal:dynamo_disenchantment")
		.add("thermal:dynamo_gourmand")

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

	event.get("forge:plates/polyolefin")
		.add("thermal_extra:polyolefin_plate")

	event.get("forge:plates/andesite")
		.add("#forge:plates/andesite_alloy")

	event.get("forge:rods")
		.add("immersiveengineering:stick_steel")
		.add("immersiveengineering:stick_aluminum")
})