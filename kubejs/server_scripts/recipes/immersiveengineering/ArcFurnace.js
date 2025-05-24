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

	immersiveengineering.arc_furnace("minecraft:iron_ingot")
		.secondaries([
			Item.of("minecraft:iron_nugget").withChance(0.5),
			Item.of("minecraft:iron_nugget").withChance(0.5)
		])
		.input("#forge:ingots/steel")
		.slag("#forge:slag")
		.additives([
			"#forge:ingots/chromium",
			"#forge:ingots/invar"
		])
		.time(400)
		.energy(8000)
})