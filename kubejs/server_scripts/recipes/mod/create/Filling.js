ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	// 防腐木板
	create.filling("immersiveengineering:treated_wood_horizontal", [
		"#minecraft:planks",
		Fluid.of("immersiveengineering:creosote", 125)
	]).id("createaddition:filling/treated_wood_planks")

	// 石墨电极
	create.filling(Item.of("immersiveengineering:graphite_electrode").withNBT({
		Unbreakable: 1,
		Enchantments: [
			{}
		]
	}), [
		Fluid.of("create_enchantment_industry:hyper_experience", 1000),
		"immersiveengineering:graphite_electrode"
	])

	// 烈焰蛋糕
	create.filling("create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("minecraft:lava", 500)
	]).id("create:filling/blaze_cake")

	create.filling("2x create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("tconstruct:blazing_blood", 500)
	])

	// 超级刀
	create.filling("cmi:super_knife", [
		"farmersdelight:netherite_knife",
		Fluid.of("create_enchantment_industry:hyper_experience", 1000)
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
	// 高压蒸汽容器
	create.filling("steampowered:pressurized_steam_container", [
		"steampowered:pressurized_gas_container",
		Fluid.of("mekanism:steam", 1000)
	])
})