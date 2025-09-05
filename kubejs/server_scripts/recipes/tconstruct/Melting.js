ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

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

		let meltingPoint = global.meltingPoints[metal]
		let fluidId = IngredientUtils.getFirstFluidId(`forge:molten_${metal}`)
		let ingot = `#forge:ingots/${metal}`
		let plate = `#forge:plates/${metal}`
		let nugget = `#forge:nuggets/${metal}`
		let gear = `#forge:gears/${metal}`
		let dust = `#forge:dusts/${metal}`
		let raw_material = `#forge:raw_materials/${metal}`
		let block = `#forge:storage_blocks/${metal}`
		let rawBlock = `#forge:storage_blocks/raw_${metal}`

		event.remove(
			{
				id: `tconstruct:smeltery/melting/metal/${metal}/*`
			}
		)

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