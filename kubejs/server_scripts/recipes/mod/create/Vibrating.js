ServerEvents.recipes((event) => {
	let { vintageimprovements } = event.getRecipes()

	// 橡胶粉
	vintageimprovements.vibrating(Item.of("cmi:rubber_dust").withChance(0.15), [
		"thermal:rubberwood_leaves"
	])
	vintageimprovements.vibrating(Item.of("cmi:rubber_dust").withChance(0.05), [
		"cmi:rubber_tree_bark"
	])
})