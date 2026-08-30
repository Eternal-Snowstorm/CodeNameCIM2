ServerEvents.highPriorityData((event) => {
	let villageBiomes = [
		"desert",
		"plains",
		"savanna",
		"snowy",
		"taiga"
	]

	let buildingTypes = [
		"tinker"
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
	})

	let processorList = {
		"processors": [
			{
				"processor_type": "minecraft:rule",
				"rules": [
					{
						"input_predicate": {
							"block": "minecraft:stone_bricks",
							"predicate_type": "minecraft:block_match"
						},
						"location_predicate": {
							"block": "minecraft:water",
							"predicate_type": "minecraft:block_match"
						},
						"output_state": {
							"Name": "minecraft:oak_planks"
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:stone_bricks",
							"predicate_type": "minecraft:random_block_match",
							"probability": 0.2
						},
						"location_predicate": {
							"predicate_type": "minecraft:always_true"
						},
						"output_state": {
							"Name": "minecraft:cracked_stone_bricks"
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:stone_bricks",
							"predicate_type": "minecraft:random_block_match",
							"probability": 0.2
						},
						"location_predicate": {
							"predicate_type": "minecraft:always_true"
						},
						"output_state": {
							"Name": "minecraft:cobblestone"
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:stone_bricks",
							"predicate_type": "minecraft:random_block_match",
							"probability": 0.2
						},
						"location_predicate": {
							"predicate_type": "minecraft:always_true"
						},
						"output_state": {
							"Name": "minecraft:mossy_stone_bricks"
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:stone_bricks",
							"predicate_type": "minecraft:random_block_match",
							"probability": 0.2
						},
						"location_predicate": {
							"predicate_type": "minecraft:always_true"
						},
						"output_state": {
							"Name": "minecraft:gravel"
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:grass_block",
							"predicate_type": "minecraft:block_match"
						},
						"location_predicate": {
							"block": "minecraft:water",
							"predicate_type": "minecraft:block_match"
						},
						"output_state": {
							"Name": "minecraft:water",
							"Properties": {
								"level": "0"
							}
						}
					},
					{
						"input_predicate": {
							"block": "minecraft:dirt",
							"predicate_type": "minecraft:block_match"
						},
						"location_predicate": {
							"block": "minecraft:water",
							"predicate_type": "minecraft:block_match"
						},
						"output_state": {
							"Name": "minecraft:water",
							"Properties": {
								"level": "0"
							}
						}
					}
				]
			}
		]
	}

	event.addJson("cmi:worldgen/processor_list/road.json", processorList)
})