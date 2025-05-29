ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 火药
	kubejs.shapeless("minecraft:gunpowder", [
		"#forge:dusts/sulfur",
		"2x #forge:dusts/niter",
		"3x #forge:dusts/charcoal"
	])
})