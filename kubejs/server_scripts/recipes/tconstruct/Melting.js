ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	event.remove({
		id: "tconstruct:tools/materials/melting/plated_slimewood"
	})

	tconstruct.melting(Fluid.of("tconstruct:molten_obsidian", 1000))
		.ingredient("#forge:obsidian")
		.time(80)
		.temperature(800)
		.id("tconstruct:smeltery/melting/obsidian/block")

	/*
let moltenMaterialGroup = [
	["andesite_alloy", 30]
]
moltenMaterialGroup.forEach(([material, moltingTime]) => {
	tconstruct.melting(Fluid.of(`cmi:molten_${material}`, 90))
		.ingredient(`#forge:ingots/${material}`)
		.time(moltingTime)
		.temperature(800)

	tconstruct.melting(Fluid.of(`cmi:molten_${material}`, 810))
		.ingredient(`#forge:storage_blocks/${material}`)
		.time(3 * moltingTime)
		.temperature(800)

	tconstruct.melting(Fluid.of(`cmi:molten_${material}`, 90))
		.ingredient(`#forge:plates/${material}`)
		.time(moltingTime)
		.temperature(800)
})
		*/

	global.metalGroup.forEach((metal) => {

		event.remove([{
			id: new RegExp(`^tconstruct:smeltery/melting/metal/${metal}/.+`)
		}, {
			id: new RegExp(`^thermalconstruct:smeltery/melting/metal/${metal}/.+`)
		}, {
			id: new RegExp(`^tconstruct:tools/materials/melting/${metal}`)
		}, {
			id: new RegExp(`^thermalconstruct:smeltery/melting/${metal}`)
		}]
		)

		let meltingPoint = global.meltingPoints[metal]
		let fluidId = IngredientUtils.getFirstFluidId(`forge:molten_${metal}`)
		let namespace = global.materialNamespace[metal]
		let ingot = `#forge:ingots/${metal}`
		let plate = `#forge:plates/${metal}`
		let nugget = `#forge:nuggets/${metal}`
		let gear = `#forge:gears/${metal}`
		let dust = `#forge:dusts/${metal}`
		let rawMaterial = `#forge:raw_materials/${metal}`
		let block = `#forge:storage_blocks/${metal}`
		let rawBlock = `#forge:storage_blocks/raw_${metal}`

		if (fluidId != null) {
			if (IngredientUtils.isNotNull(ingot)) {
				tconstruct.melting(Fluid.of(fluidId, 90))
					.ingredient(ingot)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(plate)) {
				tconstruct.melting(Fluid.of(fluidId, 90))
					.ingredient(plate)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(nugget)) {
				tconstruct.melting(Fluid.of(fluidId, 10))
					.ingredient(nugget)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(gear)) {
				tconstruct.melting(Fluid.of(fluidId, 360))
					.ingredient(gear)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(dust)) {
				tconstruct.melting(Fluid.of(fluidId, 90))
					.ingredient(dust)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(rawMaterial)) {
				tconstruct.melting(Fluid.of(fluidId, 120))
					.ingredient(rawMaterial)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(rawBlock)) {
				tconstruct.melting(Fluid.of(fluidId, 1080))
					.ingredient(rawBlock)
					.time(40)
					.temperature(meltingPoint)
			}

			if (IngredientUtils.isNotNull(block)) {
				tconstruct.melting(Fluid.of(fluidId, 810))
					.ingredient(block)
					.time(40)
					.temperature(meltingPoint)
			}

			if (namespace = "v") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `tconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `forge:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			} if (namespace = "t") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `thermalconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `forge:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			} if (namespace = "c") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `cmi:${metal}`,
					"result": {
						"amount": 90,
						"tag": `forge:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			}

			console.log(`created recipes for material ${metal}`)

		}
	})

	// 充能萤石
	tconstruct.melting(Fluid.of("thermal:glowstone", 250))
		.ingredient("#forge:dusts/glowstone")
		.time(200)
		.temperature(1000)

	tconstruct.melting(Fluid.of("thermal:glowstone", 1000))
		.ingredient("#forge:storage_blocks/glowstone")
		.time(300)
		.temperature(1000)

	// 血液
	tconstruct.melting(Fluid.of("cmi:blood", 50))
		.ingredient("minecraft:rotten_flesh")
		.time(30)
		.temperature(36)

	// 焦黑熔石
	tconstruct.melting(Fluid.of("tconstruct:seared_stone", 250))
		.ingredient("#forge:stone")
		.time(20 * 10)
		.temperature(1000)

	event.custom({
		"type": "tconstruct:melting",
		"byproducts": [
			{
				"amount": 125,
				"fluid": "tconstruct:scorched_stone"
			}
		],
		"ingredient": {
			"tag": "create:stone_types/scorchia"
		},
		"result": {
			"amount": 250,
			"fluid": "tconstruct:seared_stone"
		},
		"temperature": 1000,
		"time": 20 * 10
	})
})