ServerEvents.recipes(event => {
	let { kubejs } = event.recipes

	let materials = [
		{
			id: "bronze",
			block: "tconstruct:seared_bricks"
		},
		{
			id: "cast_iron",
			block: "tconstruct:scorched_bricks"
		},
		{
			id: "steel",
			block: "immersiveengineering:blastbrick"
		}
	]

	materials.forEach((material) => {
		let ingot = `#forge:ingots/${material.id}`
		let plate = `#forge:plates/${material.id}`

		// 小齿轮
		kubejs.shapeless(`steampowered:${material.id}_cogwheel`, [
			"create:shaft",
			ingot
		])

		// 大齿轮
		kubejs.shapeless(`steampowered:${material.id}_large_cogwheel`, [
			"create:shaft",
			ingot,
			ingot
		])

		// 锅炉
		kubejs.shaped(`steampowered:${material.id}_boiler`, [
			"AAA",
			"ACA",
			"ABA"
		], {
			A: [plate, ingot],
			B: "create:fluid_pipe",
			C: "create:fluid_tank"
		})

		// 燃烧室
		kubejs.shaped(`steampowered:${material.id}_burner`, [
			"AAA",
			"ABA",
			"CCC"
		], {
			A: [plate, ingot],
			B: ["minecraft:furnace", "minecraft:smoker", "minecraft:blast_furnace"],
			C: material.block
		})

		// 蒸汽引擎
		kubejs.shaped(`steampowered:${material.id}_steam_engine`, [
			"ABC",
			"EDF",
			"ABC"
		], {
			A: plate,
			B: ingot,
			C: "create:andesite_alloy",
			D: "cmi:bronze_mechanism",
			E: "create:fluid_pipe",
			F: "create:shaft"
		})

		// 飞轮
		kubejs.shaped(`steampowered:${material.id}_flywheel`, [
			"AB ",
			"BCB",
			"AB "
		], {
			A: "createdieselgenerators:engine_piston",
			B: plate,
			C: "create:flywheel"
		})
	})
})