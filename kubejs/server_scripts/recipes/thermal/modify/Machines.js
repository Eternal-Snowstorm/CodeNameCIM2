ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	const COPPER_MECH = "ue_addons:copper_mechanism"
	const IRON_MECH = "ue_addons:iron_mechanism"
	const THERMAL_MECH = "ue_addons:thermal_mechanism"

	const COPPER_INGOT = "#forge:ingots/copper"
	const IRON_INGOT = "#forge:ingots/iron"

	const GLASS = "#forge:glass"

	// 流体单元框架
	kubejs.shaped("thermal:fluid_cell_frame", [
		"ABA",
		"C C",
		"CDC"
	], {
		A: COPPER_INGOT,
		B: COPPER_MECH,
		C: GLASS,
		D: THERMAL_MECH
	}).id("thermal:fluid_cell_frame")

	// 机器框架
	kubejs.shaped("thermal:machine_frame", [
		"ABA",
		"BCB",
		"DBD"
	], {
		A: IRON_MECH,
		B: GLASS,
		C: "#forge:gears/tin",
		D: IRON_INGOT
	}).id("thermal:machine_frame")

	kubejs.shaped("thermal:device_potion_diffuser", [
		["#forge:ingots/silver", "ue_addons:thermal_mechanism", "#forge:ingots/silver"],
		["#forge:glass", "minecraft:glass_bottle", "#forge:glass"],
		["#forge:ingots/silver", "vintageimprovements:redstone_module", "#forge:ingots/silver"]
	]);
	kubejs.shaped("thermal:device_nullifier", [
		["#forge:ingots/silver", "vintageimprovements:redstone_module", "#forge:ingots/silver"],
		["#forge:glass", "minecraft:lava_bucket", "#forge:glass"],
		["#forge:ingots/silver", "ue_addons:thermal_mechanism", "#forge:ingots/silver"]
	]);
	kubejs.shaped("thermal:device_xp_condenser", [
		["#forge:ingots/silver", "ue_addons:enchanted_mechanism", "#forge:ingots/silver"],
		["#forge:glass", "thermal:xp_crystal", "#forge:glass"],
		["#forge:ingots/silver", "ue_addons:thermal_mechanism", "#forge:ingots/silver"]
	]);
	kubejs.shaped("thermal:device_collector", [
		["#forge:ingots/tin", "", "#forge:ingots/tin"],
		["#forge:glass", "minecraft:hopper", "#forge:glass"],
		["#forge:ingots/tin", "ue_addons:thermal_mechanism", "#forge:ingots/tin"]
	]);
	kubejs.shaped("thermal:redstone_servo", [
		["vintageimprovements:redstone_module", "", ""],
		["", "#forge:ingots/iron", ""],
		["", "", "minecraft:redstone"]
	]);
	kubejs.shaped("thermal:device_composter", [
		["ue_addons:wooden_mechanism", "ue_addons:iron_mechanism", "#minecraft:planks"],
		["#forge:glass", "minecraft:composter", "#forge:glass"],
		["#minecraft:planks", "vintageimprovements:redstone_module", "#minecraft:planks"]
	]);
	kubejs.shaped("thermal:device_fisher", [
		["#minecraft:planks", "ue_addons:copper_mechanism", "#minecraft:planks"],
		["#forge:glass", "minecraft:fishing_rod", "#forge:glass"],
		["#minecraft:planks", "ue_addons:thermal_mechanism", "#minecraft:planks"]
	]);
	kubejs.shaped("16x thermal:rf_coil", [
		["ue_addons:gold_mechanism", "", ""],
		["", "minecraft:redstone", ""],
		["", "", "ue_addons:gold_mechanism"]
	]);
	kubejs.shaped("thermal:dynamo_stirling", [
		["", "minecraft:redstone", ""],
		["minecraft:stone", "", "minecraft:stone"],
		["ue_addons:stone_mechanism", "minecraft:flint", "ue_addons:stone_mechanism"]
	]);
	event.recipes.create.item_application("thermal:dynamo_compression", ["thermal:dynamo_stirling", "ue_addons:thermal_mechanism"])
	event.recipes.create.item_application("thermal:dynamo_disenchantment", ["thermal:dynamo_compression", "ue_addons:enchanted_mechanism"])
	event.recipes.create.item_application("thermal:dynamo_magmatic", ["thermal:dynamo_compression", "ue_addons:feinforced_mechanism"])
	kubejs.shaped("thermal:dynamo_gourmand", [
		["", "", ""],
		["", "ue_addons:pigiron_mechanism", ""],
		["minecraft:bone", "thermal:dynamo_compression", "minecraft:bone"]
	]);
	kubejs.shaped("thermal:machine_crafter", [
		["", "minecraft:crafting_table", ""],
		["", "thermal:machine_frame", ""],
		["#forge:ingots/tin", "ue_addons:copper_mechanism", "#forge:ingots/tin"]
	]);
	kubejs.shaped("thermal:machine_bottler", [
		["", "thermal:machine_frame", ""],
		["", "create:spout", ""],
		["", "ue_addons:thermal_mechanism", ""]
	]);
	event.recipes.create.item_application("thermal:machine_crucible", ["thermal:machine_frame", "ue_addons:nether_mechanism"])
	kubejs.shaped("thermal:machine_press", [
		["", "", ""],
		["thermal:machine_frame", "create:mechanical_press", "createaddition:electric_motor"],
		["", "ue_addons:thermal_mechanism", ""]
	]);
	kubejs.shaped("thermal:machine_centrifuge", [
		["", "ue_addons:coil_mechanism", ""],
		["", "vintageimprovements:centrifuge", ""],
		["", "thermal:machine_frame", ""]
	]);
	kubejs.shaped("thermal:machine_furnace", [
		["", "vintageimprovements:redstone_module", ""],
		["", "thermal:machine_frame", ""],
		["", "minecraft:furnace", ""]
	]);
	event.recipes.create.item_application("thermal:machine_pyrolyzer", ["thermal:machine_crucible", "ue_addons:feinforced_mechanism"])
	kubejs.shaped("thermal:machine_pulverizer", [
		["", "create:chute", ""],
		["", "thermal:machine_frame", ""],
		["", "ue_addons:iron_mechanism", ""]
	]);
	kubejs.shaped("thermal:machine_sawmill", [
		["", "create:mechanical_saw", ""],
		["", "thermal:machine_frame", ""],
		["", "ue_addons:thermal_mechanism", ""]
	]);
})