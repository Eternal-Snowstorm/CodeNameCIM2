ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 坚固板
	create.sequenced_assembly([
		Item.of("create:sturdy_sheet").withChance(0.7),
		Item.of("create:powdered_obsidian").withChance(0.15),
		Item.of("minecraft:gravel").withChance(0.15)
	], "#forge:dusts/obsidian", [
		create.pressing("#forge:dusts/obsidian", [
			"#forge:dusts/obsidian",
			"#forge:dusts/obsidian"
		])
	]).loops(10).transitionalItem("create:unprocessed_obsidian_sheet")
})