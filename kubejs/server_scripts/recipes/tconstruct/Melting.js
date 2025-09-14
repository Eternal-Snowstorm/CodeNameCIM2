ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	event.remove({
		id: "tconstruct:tools/materials/melting/plated_slimewood"
	})

	function addRemoveId(id) {
		return {
			id: new RegExp(id)
		}
	}

	tconstruct.melting(Fluid.of("tconstruct:molten_obsidian", 1000))
		.ingredient("#forge:obsidian")
		.time(80)
		.temperature(800)
		.id("tconstruct:smeltery/melting/obsidian/block")

	global.metalGroup.forEach((metal) => {
		event.remove([
			addRemoveId(`^tconstruct:smeltery/melting/metal/${metal}/.+`), ,
			addRemoveId(`^thermalconstruct:smeltery/melting/metal/${metal}/.+`),
			addRemoveId(`^tconstruct:tools/materials/melting/${metal}`),
			addRemoveId(`^thermalconstruct:smeltery/melting/${metal}`)
		])

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

		if (fluidId !== null) {
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

			if (namespace === "v") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `tconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `forge:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			} if (namespace === "t") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `thermalconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `forge:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			} if (namespace === "c") {
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
			Fluid.of("tconstruct:scorched_stone", 125).toJson()
		],
		"ingredient": Ingredient.of("#create:stone_types/scorchia").toJson(),
		"result": Fluid.of("tconstruct:seared_stone", 250).toJson(),
		"temperature": 1000,
		"time": 20 * 10
	})
})