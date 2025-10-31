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

	// 电子管
	create.sequenced_assembly([
		"create:electron_tube"
	], "#forge:plates/iron", [
		create.deploying("cmi:incomplete_electron_tube", [
			"cmi:incomplete_electron_tube",
			"#forge:wires/copper"
		]),
		create.deploying("cmi:incomplete_electron_tube", [
			"cmi:incomplete_electron_tube",
			"create:polished_rose_quartz"
		])
	]).transitionalItem("cmi:incomplete_electron_tube").loops(1)
		.id("create:crafting/materials/electron_tube")

	// Ad电容器
	create.sequenced_assembly("ad_astra:etrionic_capacitor",
		"#forge:plates/steel", [
		create.deploying("ad_astra:etrionic_core", [
			'ad_astra:etrionic_core',
			"#forge:plates/etrium"
		]),
		create.deploying("ad_astra:etrionic_core", [
			'ad_astra:etrionic_core',
			"cmi:simple_battery"
		]),
		create.deploying("ad_astra:etrionic_core", [
			'ad_astra:etrionic_core',
			"#forge:wires/copper"
		]),
		create.pressing("ad_astra:etrionic_core",
			"ad_astra:etrionic_core"
		)
	]).transitionalItem('ad_astra:etrionic_core').loops(1).id("ad_astra:etrionic_capacitor")
})