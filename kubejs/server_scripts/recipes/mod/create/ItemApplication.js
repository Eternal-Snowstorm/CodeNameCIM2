ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	// 哭泣黑曜石
	create.item_application("minecraft:crying_obsidian", [
		"minecraft:obsidian",
		"#forge:vegetables/onion"
	])
})