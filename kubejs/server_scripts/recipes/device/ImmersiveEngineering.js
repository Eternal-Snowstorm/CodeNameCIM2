ServerEvents.recipes((event) => {
	let { thermal, kubejs, minecraft } = event.getRecipes()

	minecraft.stonecutting("cmi:industrial_frame",
		"#forge:plates/industrial_iron"
	)
})