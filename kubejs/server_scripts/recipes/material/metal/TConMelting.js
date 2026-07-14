ServerEvents.recipes((event) => {
	let { tconstruct } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId()

		event.remove([
			{
				id: new RegExp(`^tconstruct:smeltery/melting/metal/${metal}/.+`)
			}, {
				id: new RegExp(`^thermalconstruct:smeltery/melting/metal/${metal}/.+`)
			}, {
				id: new RegExp(`^tconstruct:tools/materials/melting/${metal}`)
			}, {
				id: new RegExp(`^thermalconstruct:smeltery/melting/${metal}`)
			}
		])

		let meltingPoint = CmiMetalRegistry.getMetal(metal).getMeltingPoint()
		let fluidId = `tconstruct:molten_${metal}`
		let namespace = CmiMetalRegistry.getMetal(metal).getNamespace()
		let ingot = `#forge:ingots/${metal}`
		let plate = `#forge:plates/${metal}`
		let nugget = `#forge:nuggets/${metal}`
		let gear = `#forge:gears/${metal}`
		let dust = `#forge:dusts/${metal}`
		let rawMaterial = `#forge:raw_materials/${metal}`
		let block = `#forge:storage_blocks/${metal}`
		let rawBlock = `#forge:storage_blocks/raw_${metal}`

		if (fluidId !== null) {
			if (Ingredient.isNotNull(ingot)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 90))
					.ingredient(ingot)
					.time(100)
					.temperature(meltingPoint)
			}

			if (Ingredient.isNotNull(plate)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 90))
					.ingredient(plate)
					.time(100)
					.temperature(meltingPoint)
			}

			if (Ingredient.isNotNull(nugget)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 10))
					.ingredient(nugget)
					.time(60)
					.temperature(meltingPoint)
			}

			if (Ingredient.isNotNull(gear)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 90 * 4))
					.ingredient(gear)
					.time(120)
					.temperature(meltingPoint)
			}

			if (Ingredient.isNotNull(dust)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 90))
					.ingredient(dust)
					.time(80)
					.temperature(meltingPoint)
			}

			if (metal.toString() !== "aluminum" && Ingredient.isNotNull(rawMaterial)) {
				tconstruct.melting(Fluid.tag("tag", fluidId, 90))
					.ingredient(rawMaterial)
					.time(100)
					.temperature(meltingPoint)
			}

			if (Ingredient.isNotNull(rawBlock)) {
				if (
					metal.toString() !== "aluminum"
					&& metal.toString() !== "desh"
					&& metal.toString() !== "ostrum"
					&& metal.toString() !== "calorite"
				) {
					tconstruct.melting(Fluid.tag("tag", fluidId, 1080))
						.ingredient(rawBlock)
						.time(200)
						.temperature(meltingPoint)
				}
			}

			if (Ingredient.isNotNull(block)) {
				if (
					metal.toString() !== "aluminum"
					&& metal.toString() !== "desh"
					&& metal.toString() !== "ostrum"
					&& metal.toString() !== "calorite"
				) {
					tconstruct.melting(Fluid.tag("tag", fluidId, 90 * 9))
						.ingredient(block)
						.time(200)
						.temperature(meltingPoint)
				}
			}

			if (namespace === "v") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `tconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `tconstruct:molten_${metal}`
					},
					"temperature": meltingPoint
				})

			} if (namespace === "t") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `thermalconstruct:${metal}`,
					"result": {
						"amount": 90,
						"tag": `tconstruct:molten_${metal}`
					},
					"temperature": meltingPoint
				})

			} if (namespace === "c") {
				event.custom({
					"type": "tconstruct:material_melting",
					"input": `cmi:${metal}`,
					"result": {
						"amount": 90,
						"tag": `tconstruct:molten_${metal}`
					},
					"temperature": meltingPoint
				})
			}
			// console.log(`created recipes for material ${metal}`)
		}
	})
})