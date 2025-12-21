ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 绿色染料
	kubejs.shapeless("2x minecraft:green_dye", [
		"#forge:dyes/yellow",
		"#forge:dyes/blue"
	])
})