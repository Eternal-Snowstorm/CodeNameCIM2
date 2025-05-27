ServerEvents.recipes((event) => {
	let { vintageimprovements, create } = event.recipes

	// 陨石刮痧
	vintageimprovements.polishing([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.5),
		Item.of("ae2:sky_dust", 2).withChance(0.25),
		"ae2:sky_stone_block"
	], "ae2:sky_stone_block")

	// 玫瑰石英
	vintageimprovements.polishing("create:polished_rose_quartz", [
		"create:rose_quartz"
	])
})