ServerEvents.highPriorityData((event) => {
	let villageBiomes = [
		"desert",
		"plains",
		"savanna",
		"snowy",
		"taiga"
	]

	villageBiomes.forEach((biome) => {
		event.addJson(`cmi:village/${biome}/large_houses`, {
			name: `cmi:village/${biome}/large_houses`,
			elements: [{
				element: {
					element_type: "minecraft:legacy_single_pool_element",
					location: `cmi:village/tinker/${biome}`,
					processors: "minecraft:empty",
					projection: "rigid"
				},
				weight: 10
			}, {
				element: {
					element_type: "minecraft:empty_pool_element"
				},
				weight: 5
			}],
			fallback: `minecraft:village/${biome}/terminators`
		})
	})
})