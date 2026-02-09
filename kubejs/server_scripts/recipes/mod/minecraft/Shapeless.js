ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 绿色染料
	kubejs.shapeless("2x minecraft:green_dye", [
		"#forge:dyes/yellow",
		"#forge:dyes/blue"
	])

	// 火药
	kubejs.shapeless("minecraft:gunpowder", [
		"#forge:dusts/sulfur",
		"2x #forge:dusts/niter",
		"3x #forge:dusts/charcoal"
	]).id("immersiveengineering:crafting/gunpowder_from_dusts")
})