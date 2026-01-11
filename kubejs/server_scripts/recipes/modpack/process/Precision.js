ServerEvents.recipes((event) => {
	let { vintageimprovements, create } = event.recipes

	// 玫瑰石英
	create.mixing("create:rose_quartz", [
		"ae2:charged_certus_quartz_crystal",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	])

	// 充能紫水晶加工
	vintageimprovements.polishing([
		"minecraft:amethyst_shard",
		Item.of("minecraft:redstone").withChance(0.5)
	], "#forge:gems/charged_amethyst")
		.processingTime(10)
})