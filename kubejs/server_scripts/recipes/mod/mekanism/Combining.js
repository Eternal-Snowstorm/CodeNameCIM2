ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.combining("advanced_ae:quantum_alloy",
		"cmi:superconducting_mercury_ingot",
		"ae2:singularity"
	).id("advanced_ae:quantum_alloy")

	// 破碎奇点粉
	mekanism.combining(
		"2x advanced_ae:quantum_infused_dust",
		"#forge:dusts/void",
		"ae2:singularity"
	)
})