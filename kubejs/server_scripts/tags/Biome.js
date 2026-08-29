ServerEvents.tags("worldgen/biome", (event) => {
	// 洞穴群系
	event.get("forge:is_cave")
		.add("cmi:andesite_cave")

	// 有矿藏的群系
	removeTagAllId("create_rns:has_deposit_nether")
		.add([
			"minecraft:crimson_forest",
			"minecraft:nether_wastes",
			"minecraft:soul_sand_valley",
			"minecraft:warped_forest"
		])

	function removeTagAllId(tag) {
		return event.get(tag)
			.removeAll()
	}

})