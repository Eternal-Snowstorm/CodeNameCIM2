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
		Item.of("cmi:computer_component")
	], "cmi:flame_retardant_plastic", [
		create.deploying("cmi:incomplete_computer_component", [
			"cmi:incomplete_computer_component",
			"cmi:mekanism_processor"
		]),
		create.deploying("cmi:incomplete_computer_component", [
			"cmi:incomplete_computer_component",
			"#ae2:glass_cable"
		]),
		create.deploying("cmi:incomplete_computer_component", [
			"cmi:incomplete_computer_component",
			"#ae2:illuminated_panel"
		]),
	]).transitionalItem("cmi:incomplete_computer_component").loops(1)

	// 扫描器
	create.sequenced_assembly([
		Item.of("scannable:scanner")
	], "#forge:plates/iron", [
		create.deploying("cmi:incomplete_scanner", [
			"cmi:incomplete_scanner",
			"immersiveengineering:survey_tools"
		]),
		create.deploying("cmi:incomplete_scanner", [
			"cmi:incomplete_scanner",
			"thermal:redstone_servo"
		]),
		create.deploying("cmi:incomplete_scanner", [
			"cmi:incomplete_scanner",
			"#forge:plates/electrum"
		]),
		create.deploying("cmi:incomplete_scanner", [
			"cmi:incomplete_scanner",
			"cmi:smart_mechanism"
		])
	]).transitionalItem("cmi:incomplete_scanner").loops(1)
		.id("scannable:scanner")

	// 空白扫描模块
	create.sequenced_assembly([
		Item.of("scannable:blank_module")
	], "#forge:plates/plastic", [
		create.deploying("cmi:incomplete_scanning_module", [
			"cmi:incomplete_scanning_module",
			"#forge:plates/electrum"
		]),
		create.deploying("cmi:incomplete_scanning_module", [
			"cmi:incomplete_scanning_module",
			"ae2:printed_silicon"
		]),
		create.pressing("cmi:incomplete_scanning_module", [
			"cmi:incomplete_scanning_module"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_scanning_module", [
			"cmi:incomplete_scanning_module"
		]).energy(1000).maxChargeRate(100)
	]).transitionalItem("cmi:incomplete_scanning_module").loops(1)
		.id("scannable:blank_module")
})