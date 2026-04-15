ServerEvents.tags("worldgen/biome", (event) => {
	event.get("forge:is_cave")
		.add("cmi:andesite_cave")

	event.get("create_rns:has_deposit_nether")
		.removeAll()
		.add([
			"minecraft:crimson_forest",
			"minecraft:nether_wastes",
			"minecraft:soul_sand_valley",
			"minecraft:warped_forest"
		])
})