ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

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
	]).transitionalItem("create:unprocessed_obsidian_sheet").loops(10)

	// 计算机组件
	create.sequenced_assembly([
		Item.of("cmi:computer_component"),
	], "#forge:plates/silver", [
		create.deploying("cmi:incomplete_computer_component", ["cmi:incomplete_computer_component", "cmi:mekanism_processor"]),
		create.deploying("cmi:incomplete_computer_component", ["cmi:incomplete_computer_component", "#ae2:glass_cable"]),
		create.deploying("cmi:incomplete_computer_component", ["cmi:incomplete_computer_component", "#ae2:illuminated_panel"]),
	]).transitionalItem("cmi:incomplete_computer_component").loops(1)
})