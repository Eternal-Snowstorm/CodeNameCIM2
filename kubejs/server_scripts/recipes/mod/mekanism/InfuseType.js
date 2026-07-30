ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	// 埃特恩
	mekanism.infusion_conversion(
		"#forge:dusts/etrium",
		"cmi:etrium"
	)

	// 钴电解质
	mekanism.infusion_conversion(
		"cmi:cobalt_electrolyte",
		"cmi:cobalt_electrolyte"
	)

	// 灌注锇
	mekanism.infusion_conversion(
		"cmi:infuse_osmium",
		"cmi:infuse_osmium"
	)

	// 钛氧化物
	mekanism.infusion_conversion(
		"cmi:magnetic_source",
		"cmi:titanium_oxide"
	)

	// 灌注量子
	mekanism.infusion_conversion(
		"advanced_ae:quantum_infused_dust",
		"cmi:infuse_quantum"
	)

	// 混沌虚空
	mekanism.infusion_conversion(
		"cmi:chaotic_void_dust",
		"cmi:chaotic_void"
	)
})