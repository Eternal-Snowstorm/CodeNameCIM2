ServerEvents.recipes((event) => {
	let { vintageimprovements, create } = event.recipes

	vintageimprovements.polishing([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.5),
		Item.of("ae2:sky_dust", 2).withChance(0.25),
		"ae2:sky_stone_block"
	], "ae2:sky_stone_block")

	create.milling([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.25),
		Item.of("ae2:sky_dust", 2).withChance(0.125),
		Item.of("ae2:sky_stone_block").withChance(0.25)
	], "ae2:sky_stone_block")

	create.crushing([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.5),
		Item.of("ae2:sky_dust", 2).withChance(0.25),
		Item.of("ae2:sky_stone_block").withChance(0.5)
	], "ae2:sky_stone_block")
})