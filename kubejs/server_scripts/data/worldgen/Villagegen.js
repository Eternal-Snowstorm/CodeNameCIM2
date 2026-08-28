ServerEvents.highPriorityData((event) => {
	let villageBiomes = [
		"desert",
		"plains",
		"savanna",
		"snowy",
		"taiga"
	]

	villageBiomes.forEach((biome) => {
		event.addJson(`cmi:worldgen/template_pool/village/${biome}/large_houses`, {
			elements: [{
				element: {
					element_type: "minecraft:legacy_single_pool_element",
					location: `cmi:village/tinker/${biome}`,
					processors: "minecraft:mossify_10_percent",
					projection: "rigid"
				},
				weight: 2
			}],
			fallback: `minecraft:village/${biome}/terminators`
		})
	})
})