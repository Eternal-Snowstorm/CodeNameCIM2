ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	// 扫描器
	create.sequenced_assembly("scannable:scanner", [
		"#forge:plates/iron"
	], [
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
	create.sequenced_assembly("scannable:blank_module", [
		"#forge:plates/plastic"
	], [
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
		]).energy(1000).maxChargeRate(1000)
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
	create.sequenced_assembly("ad_astra:etrionic_capacitor", [
		"#forge:plates/steel"
	], [
		create.deploying("ad_astra:etrionic_core", [
			"ad_astra:etrionic_core",
			"#forge:plates/etrium"
		]),
		create.deploying("ad_astra:etrionic_core", [
			"ad_astra:etrionic_core",
			"cmi:simple_battery"
		]),
		create.deploying("ad_astra:etrionic_core", [
			"ad_astra:etrionic_core",
			"#forge:wires/copper"
		]),
		create.pressing("ad_astra:etrionic_core", [
			"ad_astra:etrionic_core"
		])
	]).transitionalItem("ad_astra:etrionic_core").loops(1)
		.id("ad_astra:etrionic_capacitor")

	// 冷却设备
	create.sequenced_assembly("cmi:nuke_cooler", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying("#forge:plates/stainless_steel", [
			"#forge:plates/stainless_steel",
			"alexscaves:polymer_plate"
		]),
		create.deploying("#forge:plates/stainless_steel", [
			"#forge:plates/stainless_steel",
			"#forge:plates/platinum"
		]),
		create.deploying("#forge:plates/stainless_steel", [
			"#forge:plates/stainless_steel",
			"mekanism:structural_glass"
		])
	]).loops(1).transitionalItem(IngrUtils.getFirstItemId("#forge:plates/stainless_steel"))

	create.sequenced_assembly("cmi:nuke_cooler", [
		"alexscaves:charred_remnant"
	], [
		create.deploying("#forge:plates/stainless_steel", [
			"#forge:plates/stainless_steel",
			"alexscaves:polymer_plate"
		]),
		create.deploying("#forge:plates/stainless_steel", [
			"#forge:plates/stainless_steel",
			"#forge:plates/platinum"
		])
	]).loops(1).transitionalItem("alexscaves:charred_remnant")

	// 高压气体容器
	create.sequenced_assembly("steampowered:pressurized_gas_container", [
		"#forge:plates/aluminum"
	], [
		create.deploying("cmi:incomplete_gas_container", [
			"cmi:incomplete_gas_container",
			"#forge:glass_panes"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_gas_container",
			"cmi:incomplete_gas_container"
		).energy(1000).maxChargeRate(1000),
		create.deploying("cmi:incomplete_gas_container", [
			"cmi:incomplete_gas_container",
			"thermal:cured_rubber"
		]),
		create.pressing("cmi:incomplete_gas_container", [
			"cmi:incomplete_gas_container"
		]),
		vintageimprovements.vacuumizing("cmi:incomplete_gas_container", [
			"cmi:incomplete_gas_container"
		])
	]).loops(1).transitionalItem("cmi:incomplete_gas_container")
})