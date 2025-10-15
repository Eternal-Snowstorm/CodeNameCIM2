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
		.time(100)
		.energy(8000)

	// 钢
	immersiveengineering.arc_furnace("#forge:ingots/steel")
		.input("#forge:dusts/cast_iron")
		.slag("#forge:slag")
		.additives([
			"#forge:dusts/lime",
		])
		.time(400)
		.energy(8000)
})