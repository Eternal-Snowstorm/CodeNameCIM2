ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const BLOCK = `#forge:storage_blocks/${metal}`
		const RAW_ORE = `#forge:raw_materials/${metal}`
		const RAW_BLOCK = `#forge:storage_blocks/raw_${metal}`
		const RAW_NUGGET = `#forge:raw_nuggets/${metal}`

		if (IngrUtils.isNotNull(BLOCK)) {
			kubejs.shapeless(`9x ${INGOT}`, [
				BLOCK
			])
			kubejs.shaped(BLOCK, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: INGOT
			})
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}
		if (IngrUtils.isNotNull(NUGGET)) {
			kubejs.shapeless(`9x ${NUGGET}`, [
				INGOT
			])
			kubejs.shaped(INGOT, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: NUGGET
			})
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}
		if (IngrUtils.isNotNull(RAW_ORE)) {
			if (IngrUtils.isNotNull(RAW_BLOCK)) {
				kubejs.shapeless(`9x ${RAW_ORE}`, [
					RAW_BLOCK
				])

				kubejs.shaped(RAW_BLOCK, [
					"AAA",
					"AAA",
					"AAA"
				], {
					A: RAW_ORE
				})
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if (IngrUtils.isNotNull(RAW_NUGGET)) {
				kubejs.shapeless(`4x ${RAW_NUGGET}`, [
					RAW_ORE
				])
				kubejs.shaped(RAW_ORE, [
					"AA",
					"AA"
				], {
					A: RAW_NUGGET
				})
			} else {
				console.warn(`No nugget found for raw ${metal}!`)
			}
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		event.remove([
			{
				type: "minecraft:crafting_shapeless",
				output: INGOT
			}, {
				type: "minecraft:crafting_shaped",
				output: INGOT
			}, {
				type: "minecraft:crafting_shapeless",
				output: NUGGET
			}, {
				type: "minecraft:crafting_shapeless",
				output: BLOCK
			}, {
				type: "minecraft:crafting_shaped",
				output: BLOCK
			}, {
				type: "minecraft:crafting_shapeless",
				output: RAW_ORE
			}, {
				type: "minecraft:crafting_shapeless",
				output: RAW_BLOCK
			}, {
				type: "minecraft:crafting_shaped",
				output: RAW_BLOCK
			}
		])
	})
})