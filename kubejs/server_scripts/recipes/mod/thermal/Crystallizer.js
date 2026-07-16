ServerEvents.recipes((event) => {
	let { thermal } = event.getRecipes()

	// 钴电解质
	thermal.crystallizer("cmi:cobalt_electrolyte", [
		"#forge:dusts/cobalt",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	])

	// 富集锇结晶
	thermal.crystallizer("cmi:enriched_osmium_crystal", [
		"cmi:pure_semi_molten_osmium",
		Fluid.of("minecraft:water", 1000)
	])

	// 石墨烯
	thermal.crystallizer("cmi:graphene", [
		"cmi:carbon_deposition_catalytic_plate",
		Fluid.of("cmi:hdpe", 100)
	])
})