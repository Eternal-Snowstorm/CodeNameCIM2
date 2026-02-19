ServerEvents.recipes((event) => {
	let {cmi, createaddition, farmersdelight, create, createdieselgenerators, immersiveengineering, tconstruct, ratatouille, vintageimprovements } = event.recipes

	// 石英粉
	create.crushing("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])
	create.milling("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])

	// 纯净沙
	create.emptying([Fluid.of("cmi:pure_sand", 100),
		"thermal:niter_dust"], [
		"#minecraft:sand"
	])

	// 纯净石英
	vintageimprovements.pressurizing("cmi:pure_quartz_dust", [
		"#forge:dusts/quartz", Fluid.of("cmi:pure_sand", 100)
	]).superheated()
	create.compacting("cmi:pure_quartz_prism", [
		"cmi:pure_quartz_dust"
	]).heated()

	// 玫瑰石英
	create.mixing("create:rose_quartz", [
		"cmi:pure_quartz_prism",
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
	createaddition.charging("cmi:charged_amethyst",
		["#forge:gems/amethyst"], 400
	)
	// vintageimprovements.polishing(["minecraft:amethyst_shard",
	// 	"minecraft:redstone"], [
	// 	"cmi:charged_amethyst"
	// ])
	cmi.grinding("cmi:charged_amethyst",[
		"minecraft:amethyst_shard",
		"minecraft:redstone",
		Item.of("minecraft:redstone").withChance(0.5)
	] )

	// 玫瑰石英
	cmi.grinding("create:rose_quartz",[
		"create:polished_rose_quartz"
		])
})