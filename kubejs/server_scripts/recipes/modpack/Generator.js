ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	const BATTERY = `#${global.namespace}:batteries`

	kubejs.shaped("immersiveengineering:dynamo", [
		"EDE",
		"ECE",
		"ABA"
	], {
		A: BATTERY,
		B: "#forge:dusts/redstone",
		C: "immersiveengineering:component_iron",
		D: "immersiveengineering:coil_lv",
		E: "#forge:plates/iron"
	})

	kubejs.shaped("immersiveengineering:thermoelectric_generator", [
		"CCC",
		"BDB",
		"AAA"
	], {
		A: BATTERY,
		B: "#forge:plates/constantan",
		C: "#forge:ingots/steel",
		D: "immersiveengineering:coil_lv"
	})

	kubejs.shaped("8x immersiveengineering:generator", [
		"DBD",
		"BCB",
		"ABA"
	], {
		A: BATTERY,
		B: "immersiveengineering:sheetmetal_steel",
		C: "cmi:heavy_engineering_mechanism",
		D: "immersiveengineering:component_iron"
	})

	kubejs.shaped("portality:generator", [
		"AAA",
		"ACA",
		"DBD"
	], {
		A: "portality:frame",
		B: BATTERY,
		C: "minecraft:blast_furnace",
		D: "cmi:stone_mechanism"
	})

	let incGoldRod = "createaddition:gold_rod"
	create.sequenced_assembly("thermal:rf_coil", [
		"#forge:rods/gold"
	], [
		create.deploying(incGoldRod, [incGoldRod, "#forge:dusts/redstone"]),
		create.deploying(incGoldRod, [incGoldRod, "#forge:wires/copper"]),
		create.deploying(incGoldRod, [incGoldRod, "#forge:dusts/redstone"]),
	]).transitionalItem(incGoldRod).loops(1)
})