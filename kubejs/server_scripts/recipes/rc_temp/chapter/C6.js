ServerEvents.recipes((event) => {
	let { create, createdieselgenerators, thermal, thermal_extra, vintageimprovements, tconstruct, immersiveengineering, mekanism } = event.recipes

	thermal.centrifuge([
		Item.of("minecraft:blaze_powder").withChance(0.5),
		Item.of("thermal:basalz_powder").withChance(0.5),
		Item.of("thermal:blitz_powder").withChance(0.5),
		Item.of("thermal:blizz_powder").withChance(0.5),
	], [
		"#forge:dusts/void"
	])

	// 裂化润滑油
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "forge:steam", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:lubricant", 100).toJson(),
		"result": Fluid.of("cmi:cracked_lubricating_oil", 200).toJson()
	})

	// 聚烯烃 煤油
	thermal.refinery([
		Fluid.of("thermal_extra:polyolefin", 50),
		Fluid.of("cmi:kerosene", 50)
	], [
		Fluid.of("cmi:cracked_lubricating_oil", 100)
	]).id("thermal_extra:machine/refinery/polyolefin")

	thermal_extra.advanced_refinery([
		Fluid.of("thermal_extra:polyolefin", 100),
		Fluid.of("cmi:kerosene", 50)
	], [
		Fluid.of("cmi:cracked_lubricating_oil", 100)
	]).id("thermal_extra:machine/advanced_refinery/polyolefin")

	// 裂化柴油
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "forge:steam", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:diesel", 100).toJson(),
		"result": Fluid.of("cmi:cracked_diesel", 200).toJson()
	})

	// 乙烯醇
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/silver").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "cmi:acetylene", 100).toJson(),
		"result": Fluid.of("cmi:vinyl_alcohol", 100).toJson()
	})

	// 聚乙烯醇
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [],
		"input_fluids": [
			Fluid.tag("tag", "cmi:vinyl_alcohol", 200).toJson()
		],
		"result_fluids": [
			Fluid.of("cmi:polyvinyl_alcohol", 200).toJson()
		],
		"outputs": [],
		"time": 200
	})

	// 结构塑胶
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/copper").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "cmi:light_aldehyde", 100).toJson(),
		"input1": Fluid.tag("tag", "cmi:polyvinyl_alcohol", 100).toJson(),
		"result": Fluid.of("cmi:structural_plastic", 200).toJson()
	})

	// 结构玻璃
	thermal.bottler("mekanism:structural_glass", [
		Fluid.of("cmi:structural_plastic", 200),
		"ae2:quartz_glass"
	])

	// 轻芳烃
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "forge:naphtha", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:acetaldehyde", 100).toJson(),
		"result": Fluid.of("cmi:light_aromatics", 100).toJson()
	})

	// 乙醇
	immersiveengineering.fermenter(
		"#forge:fermentable",
		Fluid.of("immersiveengineering:ethanol", 100),
		Item.of("createaddition:biomass").withChance(0.1)
	).energy(2400)

	// 苯 乙烯
	thermal.refinery([
		Fluid.of("cmi:benzene", 50),
		Fluid.of("mekanism:ethene", 50)
	], [
		Fluid.of("cmi:light_aromatics", 100)
	])

	thermal_extra.advanced_refinery([
		Fluid.of("cmi:benzene", 50),
		Fluid.of("mekanism:ethene", 100)
	], [
		Fluid.of("cmi:light_aromatics", 100)
	])

	// 三硝基甲苯溶液
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [],
		"input_fluids": [
			Fluid.tag("tag", "cmi:nitric_acid", 200).toJson(),
			Fluid.tag("tag", "cmi:benzene", 200).toJson(),
			Fluid.tag("tag", "forge:ethene", 200).toJson()
		],
		"result_fluids": [
			Fluid.of("cmi:trinitrotoluene_solution", 600).toJson()
		],
		"outputs": [],
		"time": 200
	})

	// 三硝基甲苯
	thermal.refinery([
		"cmi:trinitrotoluene"
	], [
		Fluid.of("cmi:trinitrotoluene_solution", 100)
	])

	thermal_extra.advanced_refinery([
		"2x cmi:trinitrotoluene"
	], [
		Fluid.of("cmi:trinitrotoluene_solution", 100)
	])

	// 萤石粉
	vintageimprovements.laser_cutting("minecraft:glowstone_dust", [
		"#forge:dusts/amethyst"
	])

	// 浑浊废液
	thermal.compression_fuel(Fluid.of("cmi:turbid_waste_liquid", 1000), 10000)

	// 浓缩海水
	mekanism.evaporating(Fluid.of("cmi:sea_water", 10),
		Fluid.of("cmi:concentrated_sea_water", 1)
	)

	// 卤水
	mekanism.evaporating(Fluid.of("cmi:concentrated_sea_water", 10),
		Fluid.of("cmi:brine", 1)
	)

	// 碱性卤水
	create.mixing(Fluid.of("cmi:alkaline_brine", 500), [
		"4x cmi:furnaced_lime",
		Fluid.of("cmi:brine", 500)
	])

	// 溴 废卤水
	thermal_extra.fluid_mixer([
		Fluid.of("cmi:waste_brine", 100),
		Fluid.of("cmi:bromine", 100)
	], [
		Fluid.of("cmi:alkaline_brine", 100),
		Fluid.of("mekanism:chlorine", 100)
	])

	// 氯
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"fluid": {
			"tag": "cmi:brine",
			"amount": 500
		},
		"result_fluid": {
			"fluid": "mekanism:chlorine",
			"amount": 100
		},
		"result": {
			"item": "ratatouille:salt",
			"count": 1
		},
		"large_only": true,
		"time": 200
	})

	// 含锂电解液
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"fluid": {
			"tag": "cmi:waste_brine",
			"amount": 200
		},
		"result_fluid": {
			"fluid": "cmi:lithium_containing_electrolyte",
			"amount": 100
		},
		"result": {
			"item": "ratatouille:salt",
			"count": 1
		},
		"large_only": true,
		"time": 200
	})

	// 液态锂
	mekanism.evaporating(Fluid.of("cmi:lithium_containing_electrolyte", 10),
		Fluid.of("mekanism:lithium", 1)
	).id("mekanism:evaporating/lithium")
})