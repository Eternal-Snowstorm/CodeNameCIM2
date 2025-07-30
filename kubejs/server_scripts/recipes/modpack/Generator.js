ServerEvents.recipes((event) => {
	let { create, kubejs, vintageimprovements } = event.recipes

	const BATTERIES = Ingredient.of(`#${global.namespace}:batteries`)

	kubejs.shaped("immersiveengineering:dynamo", [
		"EDE",
		"ECE",
		"ABA"
	], {
		A: BATTERIES,
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
		A: BATTERIES,
		B: "#forge:plates/constantan",
		C: "#forge:ingots/steel",
		D: "immersiveengineering:coil_lv"
	})

	kubejs.shaped("8x immersiveengineering:generator", [
		"DBD",
		"BCB",
		"ABA"
	], {
		A: BATTERIES,
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
		B: BATTERIES,
		C: "minecraft:blast_furnace",
		D: "cmi:stone_mechanism"
	})

	let incGoldRod = "createaddition:gold_rod"
	create.sequenced_assembly("thermal:rf_coil", [
		"#forge:rods/gold"
	], [
		create.deploying(incGoldRod, [incGoldRod, "#forge:dusts/redstone"]),
		vintageimprovements.laser_cutting(incGoldRod, [incGoldRod]).energy(1000),
	]).transitionalItem(incGoldRod).loops(1)
})