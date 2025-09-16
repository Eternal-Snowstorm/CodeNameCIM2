ServerEvents.recipes((event) => {
	let { create, kubejs, vintageimprovements } = event.recipes

	let ice = "#forge:treated_wood_slab"
	let icea = "immersiveengineering:plate_duroplast"

	create.sequenced_assembly("immersiveengineering:component_electronic", [
		ice
	], [
		create.deploying(ice, [ice, "minecraft:redstone"]),
		create.deploying(ice, [ice, "minecraft:quartz"])
	]).transitionalItem(ice).loops(1)

	vintageimprovements.vacuumizing("immersiveengineering:electron_tube", [
		"create:electron_tube",
		"#forge:plates/nickel"
	])

	create.sequenced_assembly("immersiveengineering:component_electronic_adv", [
		icea
	], [
		create.deploying(icea, [icea, "immersiveengineering:electron_tube"]),
		create.deploying(icea, [icea, "immersiveengineering:electron_tube"])
	]).transitionalItem(icea).loops(1)

	kubejs.shapeless("immersiveindustry:refractory_kiln_brick", [
		"minecraft:clay_ball",
		"#forge:ingots/brick"
	]).id("immersiveindustry:crafting/refractory_kiln_brick")

	kubejs.shapeless("immersiveengineering:light_engineering", [
		"cmi:light_engineering_mechanism"
	]).id("immersiveengineering:crafting/light_engineering")

	kubejs.shapeless("immersiveengineering:heavy_engineering", [
		"cmi:heavy_engineering_mechanism"
	]).id("immersiveengineering:crafting/heavy_engineering")

	kubejs.shapeless("immersiveengineering:rs_engineering", [
		"vintageimprovements:redstone_module",
		"#forge:sheetmetals/iron"
	]).id("immersiveengineering:crafting/rs_engineering")

	kubejs.shapeless("immersiveengineering:generator", [
		"cmi:coil_mechanism"
	]).id("minecraft:kjs/immersiveengineering_generator")

	kubejs.shapeless("immersiveengineering:radiator", [
		"cmi:cobalt_mechanism",
		"#forge:sheetmetals/steel",
		"cmi:bronze_mechanism"
	]).id("immersiveengineering:crafting/radiator")

	kubejs.shaped("immersiveindustry:electrolyzer", [
		"ABE",
		"CDC"
	], {
		A: "#forge:rods/gold",
		B: "cmi:coil_mechanism",
		E: "#forge:rods/silver",
		C: "#forge:plates/steel",
		D: "cmi:light_engineering_mechanism"
	}).id("immersiveindustry:crafting/electrolyzer")

	kubejs.shaped("immersiveengineering:dynamo", [
		" A ",
		"CBC",
		" A "
	], {
		A: "#forge:plates/iron",
		B: "cmi:coil_mechanism",
		C: "cmi:simple_battery"
	}).id("minecraft:kjs/immersiveengineering_dynamo")

	kubejs.shaped("immersiveengineering:thermoelectric_generator", [
		"AAA",
		"CBC",
		"ADA"
	], {
		B: "cmi:coil_mechanism",
		A: "#forge:plates/steel",
		D: "createaddition:capacitor",
		C: "#forge:plates/constantan"
	}).id("minecraft:kjs/immersiveengineering_thermoelectric_generator")

	kubejs.shaped("immersiveengineering:cloche", [
		"ABA",
		"A A",
		"DCD"
	], {
		D: "#forge:treated_wood",
		A: "#forge:glass",
		B: "cmi:nature_mechanism",
		C: "cmi:light_engineering_mechanism"
	}).id("immersiveengineering:crafting/cloche")

	kubejs.shaped("immersiveengineering:fluid_pump", [
		"A",
		"B",
		"C"
	], {
		A: "#forge:plates/iron",
		B: "cmi:light_engineering_mechanism",
		C: "immersiveengineering:fluid_pipe"
	}).id("immersiveengineering:crafting/fluid_pump")

	kubejs.shaped("immersiveengineering:furnace_heater", [
		"A",
		"B",
		"C"
	], {
		A: "cmi:bronze_mechanism",
		B: "#forge:storage_blocks/constantan",
		C: "cmi:coil_mechanism"
	}).id("immersiveengineering:crafting/furnace_heater")

	kubejs.shaped("immersiveengineering:floodlight", [
		"ABB",
		"CDA",
		"AMB"
	], {
		A: "#forge:plates/silver",
		B: "#forge:ingots/steel",
		C: "#forge:glass",
		D: "immersiveengineering:light_bulb",
		M: "cmi:light_engineering_mechanism"
	}).id("immersiveengineering:crafting/floodlight")

	kubejs.shaped("16x immersiveengineering:conveyor_basic", [
		"AAA",
		"BCB"
	], {
		A: "create:belt_connector",
		B: "#forge:ingots/iron",
		C: "minecraft:redstone"
	}).id("immersiveengineering:crafting/conveyor_basic")

	create.filling(Item.of("immersiveengineering:graphite_electrode", "{Unbreakable:1b}"), [
		"immersiveengineering:graphite_electrode",
		Fluid.of("create_enchantment_industry:hyper_experience", 1000)
	])
})