ServerEvents.recipes((event) => {
	let { create } = event.recipes

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
})