ServerEvents.highPriorityData((event) => {
	let villageBiomes = [
		"desert",
		"plains",
		"savanna",
		"snowy",
		"taiga"
	]

	let buildingTypes = [
		"tinker",
		"farm_1",
		"farm_3"
	]

	let streetTypes = [
		"straight",
		"corner",
		"crossroad"
	]

	villageBiomes.forEach((biome) => {
		let templatePool = {
			elements: [],
			fallback: `minecraft:village/${biome}/terminators`
		}
		buildingTypes.forEach((type) => {
			templatePool.elements.push({
				element: {
					element_type: "minecraft:legacy_single_pool_element",
					location: `cmi:village/${biome}/${type}`,
					processors: "minecraft:mossify_10_percent",
					projection: "rigid"
				},
				weight: 2
			})
		})
		templatePool.elements.push({
			"element": {
				"element_type": "minecraft:empty_pool_element"
			},
			"weight": 3
		})

		event.addJson(`cmi:worldgen/template_pool/village/${biome}/houses.json`, templatePool)

		let streetPool = {
			elements: [],
			fallback: "minecraft:village/taiga/terminators"
		}
		streetTypes.forEach((type) => {
			for (let i = 1; i <= 3; i++) {
				let weight = 6

				if (type == "crossroad") {
					weight = 2
				}
				if (type == "corner") {
					weight = 3
				}
				streetPool.elements.push({
					element: {
						element_type: "minecraft:legacy_single_pool_element",
						location: `cmi:village/${biome}/streets/${type}_${i}`,
						processors: "cmi:road",
						projection: "terrain_matching"
					},
					"weight": weight
				})
			}
		})

		event.addJson(`minecraft:worldgen/template_pool/village/${biome}/streets.json`, streetPool)
	})
})