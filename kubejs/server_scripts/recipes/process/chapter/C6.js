ServerEvents.recipes((event) => {
	let { create, createdieselgenerators, thermal, thermal_extra, vintageimprovements, tconstruct, immersiveengineering } = event.recipes

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
		"input0": {
			"amount": 100,
			"tag": "forge:steam"
		},
		"input1": {
			"amount": 100,
			"tag": "forge:lubricant"
		},
		"result": {
			"amount": 200,
			"fluid": "cmi:cracked_lubricating_oil",
		}
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
		"input0": {
			"amount": 100,
			"tag": "forge:steam"
		},
		"input1": {
			"amount": 100,
			"tag": "forge:diesel"
		},
		"result": {
			"amount": 200,
			"fluid": "cmi:cracked_diesel",
		}
	})

	// 乙炔 轻醛烃
	createdieselgenerators.distillation([
		Fluid.of("cmi:light_aldehyde", 50),
		Fluid.of("cmi:acetylene", 50)
	], [
		Fluid.of("cmi:cracked_diesel", 100)
	]).heatRequirement(global.HeatLevel["heated"])

	// 乙烯醇
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/silver").toJson(),
		"energy": 120,
		"input0": {
			"amount": 100,
			"tag": "cmi:acetylene"
		},
		"result": {
			"amount": 100,
			"fluid": "cmi:vinyl_alcohol",
		}
	})

	// 聚乙烯醇
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
		],
		"input_fluids": [
			{
				"tag": "cmi:vinyl_alcohol",
				"amount": 200
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:polyvinyl_alcohol",
				"amount": 200
			}
		],
		"outputs": [
		],
		"time": 200
	})
	
	// 结构塑胶
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/copper").toJson(),
		"energy": 120,
		"input0": {
			"amount": 100,
			"tag": "cmi:light_aldehyde"
		},
		"input1": {
			"amount": 100,
			"tag": "cmi:polyvinyl_alcohol"
		},
		"result": {
			"amount": 100,
			"fluid": "cmi:structural_plastic",
		}
	})

	// 结构玻璃
	thermal.bottler("mekanism:structural_glass",[
		Fluid.of("cmi:structural_plastic",200),
		"ae2:quartz_glass"
	])
})