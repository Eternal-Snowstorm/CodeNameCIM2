ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	// 硫化橡胶
	vintageimprovements.pressurizing(Fluid.of("cmi:cured_rubber", 200), [
		"#forge:dusts/sulfur",
		Fluid.of("mekanism:steam", 200),
		Fluid.of("thermal:latex", 200)
	]).heatRequirement("grilled")

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
	]).transitionalItem("create:unprocessed_obsidian_sheet").loops(5)

	// 致密坚固板
	create.compacting("cmi:dense_sturdy_sheet", [
		"4x create:sturdy_sheet"
	]).heated()
	vintageimprovements.hammering("cmi:dense_sturdy_sheet", [
		"create:sturdy_sheet"
	]).hammerBlows(3)
})