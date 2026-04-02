ServerEvents.recipes((event) => {
	let { treetap } = event.getRecipes()

	// 橡胶树
	treetap.tap_extract(
		"thermal:latex_bucket",
		"#forge:rubberwood_logs",
		"thermal:latex"
	).processing_time(60 * 20 * 3)
})