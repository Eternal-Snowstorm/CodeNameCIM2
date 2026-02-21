ServerEvents.recipes((event) => {
	let { cmi, createaddition, create, vintageimprovements } = event.recipes

	// 石英粉
	create.crushing("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])
	create.milling("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])

	// 纯净沙
	create.emptying([
		Fluid.of("cmi:pure_sand", 100),
		"thermal:niter_dust"
	], [
		"#minecraft:sand"
	])

	// 纯净石英粉
	vintageimprovements.pressurizing("cmi:pure_quartz_dust", [
		"#forge:dusts/quartz",
		Fluid.of("cmi:pure_sand", 100)
	]).superheated()

	// 玫瑰石英
	create.mixing("create:rose_quartz", [
		"#forge:dusts/pure_quartz",
		Fluid.of("thermal:redstone", 100)
	])

	// 晶体催生剂
	create.mixing(Fluid.of("cmi:crystal_catalyt", 200), [
		"#forge:fuels/bio",
		Fluid.of("createdieselgenerators:plant_oil", 100),
		Fluid.of("minecraft:water", 100)
	])

	// 紫水晶
	create.filling("minecraft:small_amethyst_bud", [
		"#forge:dusts/amethyst",
		Fluid.of("cmi:crystal_catalyt", 50)
	])
	create.filling("minecraft:medium_amethyst_bud", [
		"minecraft:small_amethyst_bud",
		Fluid.of("cmi:crystal_catalyt", 50)
	])
	create.filling("minecraft:large_amethyst_bud", [
		"minecraft:medium_amethyst_bud",
		Fluid.of("cmi:crystal_catalyt", 50)
	])
	create.filling("minecraft:amethyst_cluster", [
		"minecraft:large_amethyst_bud",
		Fluid.of("cmi:crystal_catalyt", 50)
	])

	// 充能紫水晶
	createaddition.charging("cmi:charged_amethyst", [
		"#forge:gems/amethyst"
	]).energy(400)

	cmi.grinding([
		"minecraft:amethyst_shard",
		"minecraft:redstone",
		Item.of("minecraft:redstone").withChance(0.5)
	], "cmi:charged_amethyst")

	// 玫瑰石英
	cmi.grinding("create:polished_rose_quartz", [
		"create:rose_quartz"
	])

	// 植物油
	create.compacting(Fluid.of("createdieselgenerators:plant_oil",100),[
		"#forge:seeds"
	])
})