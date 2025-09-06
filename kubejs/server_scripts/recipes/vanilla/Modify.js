ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 火药
	kubejs.shapeless("minecraft:gunpowder", [
		"#forge:dusts/sulfur",
		"2x #forge:dusts/niter",
		"3x #forge:dusts/charcoal"
	])

	// 泥土
	kubejs.shapeless("2x minecraft:dirt", [
		"#minecraft:sand",
		"minecraft:dirt"
	])

	kubejs.shapeless(
		"6x supplementaries:soap",
		[
			"cmi:fatty_acid_bucket",
			"supplementaries:ash",
			"supplementaries:ash",
			"supplementaries:ash",
			"supplementaries:ash"
		])
		.replaceIngredient("cmi:fatty_acid_bucket", "minecraft:bucket")
		.id("supplementaries:soap")
})