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

	// 玫瑰石英
	vintageimprovements.polishing("create:polished_rose_quartz", [
		"create:rose_quartz"
	])

	// 水泵
	create.sequenced_assembly("cmi:water_pump", [
		"#forge:treated_wood"
	], [
		create.pressing("immersiveengineering:treated_wood_horizontal", [
			"immersiveengineering:treated_wood_horizontal"
		]),
		create.deploying("immersiveengineering:treated_wood_horizontal", [
			"immersiveengineering:treated_wood_horizontal",
			"cmi:copper_mechanism"
		]),
		create.cutting("immersiveengineering:treated_wood_horizontal", [
			"immersiveengineering:treated_wood_horizontal"
		]),
		create.deploying("immersiveengineering:treated_wood_horizontal", [
			"immersiveengineering:treated_wood_horizontal",
			"thermal:iron_gear"
		]),
		create.deploying("immersiveengineering:treated_wood_horizontal", [
			"immersiveengineering:treated_wood_horizontal",
			"tconstruct:seared_brick"
		])
	]).loops(1).transitionalItem("immersiveengineering:treated_wood_horizontal")
})