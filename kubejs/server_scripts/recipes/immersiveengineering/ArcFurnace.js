ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	// 不锈钢
	immersiveengineering.arc_furnace("#forge:ingots/stainless_steel")
		.input("#forge:ingots/steel")
		.slag("#forge:slag")
		.additives([
			"#forge:ingots/chromium",
			"#forge:ingots/invar"
		])
		.time(400)
		.energy(8000)
})