ServerEvents.tags("worldgen/biome", (event) => {
	event.get("forge:is_cave")
		.add("cmi:andesite_cave")

	event.get("create_rns:has_deposit_nether")
		.remove("minecraft:basalt_deltas")
})