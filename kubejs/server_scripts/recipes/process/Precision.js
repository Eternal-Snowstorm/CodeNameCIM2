ServerEvents.recipes((event) => {
	let { vintageimprovements, create } = event.recipes

	//赛特斯石英
	create.mixing("2x ae2:certus_quartz_crystal", [
		"#forge:dusts/certus_quartz",
		Fluid.of("minecraft:water", 500)
	])

	// 玫瑰石英
	create.mixing("create:rose_quartz", [
		"ae2:charged_certus_quartz_crystal",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	])

	vintageimprovements.polishing([
		Item.of("minecraft:redstone").withChance(0.25),
		"minecraft:amethyst_shard"
	], "cmi:charged_amethyst")

	create.deploying("create:electron_tube", [
		"#forge:plates/iron",
		"create:polished_rose_quartz"
	])
})