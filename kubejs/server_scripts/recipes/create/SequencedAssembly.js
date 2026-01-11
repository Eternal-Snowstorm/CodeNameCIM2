ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes
	let Inc = {
		SCANNER: "cmi:incomplete_scanner",
		SCAMOD: "cmi:incomplete_scanning_module",
		ELETUBE: "cmi:incomplete_electron_tube",
		CAPACITOR: "ad_astra:etrionic_core",
		NUKE: "incomplete_nuke_cooler",
		GAS: "cmi:incomplete_gas_container"
	}

	// 扫描器
	create.sequenced_assembly("scannable:scanner", [
		"#forge:plates/iron"
	], [
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"immersiveengineering:survey_tools"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"thermal:redstone_servo"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"#forge:plates/electrum"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"cmi:smart_mechanism"
		])
	]).transitionalItem(Inc.SCANNER).loops(1)
		.id("scannable:scanner")

	// 空白扫描模块
	create.sequenced_assembly("scannable:blank_module", [
		"#forge:plates/plastic"
	], [
		create.deploying(Inc.SCAMOD, [
			Inc.SCAMOD,
			"#forge:plates/electrum"
		]),
		create.deploying(Inc.SCAMOD, [
			Inc.SCAMOD,
			"ae2:printed_silicon"
		]),
		create.pressing(Inc.SCAMOD, [
			Inc.SCAMOD
		]),
		vintageimprovements.laser_cutting(Inc.SCAMOD, [
			Inc.SCAMOD
		]).energy(1000).maxChargeRate(1000)
	]).transitionalItem(Inc.SCAMOD).loops(1)
		.id("scannable:blank_module")

	// 电子管
	create.sequenced_assembly([
		"create:electron_tube"
	], "#forge:plates/iron", [
		create.deploying(Inc.ELETUBE, [
			Inc.ELETUBE,
			"#forge:wires/copper"
		]),
		create.deploying(Inc.ELETUBE, [
			Inc.ELETUBE,
			"create:polished_rose_quartz"
		])
	]).transitionalItem(Inc.ELETUBE).loops(1)
		.id("create:crafting/materials/electron_tube")

	// Ad电容器
	create.sequenced_assembly("ad_astra:etrionic_capacitor", [
		"#forge:plates/steel"
	], [
		create.deploying(Inc.CAPACITOR, [
			Inc.CAPACITOR,
			"#forge:plates/etrium"
		]),
		create.deploying(Inc.CAPACITOR, [
			Inc.CAPACITOR,
			"cmi:simple_battery"
		]),
		create.deploying(Inc.CAPACITOR, [
			Inc.CAPACITOR,
			"#forge:wires/copper"
		]),
		create.pressing(Inc.CAPACITOR, [
			Inc.CAPACITOR
		])
	]).transitionalItem(Inc.CAPACITOR).loops(1)
		.id("ad_astra:etrionic_capacitor")

	// 冷却设备
	create.sequenced_assembly("cmi:nuke_cooler", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"alexscaves:polymer_plate"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"#forge:plates/platinum"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"mekanism:structural_glass"
		])
	]).loops(1).transitionalItem(Inc.NUKE)

	create.sequenced_assembly("cmi:nuke_cooler", [
		"alexscaves:charred_remnant"
	], [
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"alexscaves:polymer_plate"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"#forge:plates/platinum"
		])
	]).loops(1).transitionalItem(Inc.NUKE)

	// 高压气体容器
	create.sequenced_assembly("steampowered:pressurized_gas_container", [
		"#forge:plates/aluminum"
	], [
		create.deploying(Inc.GAS, [
			Inc.GAS,
			"#forge:glass_panes"
		]),
		vintageimprovements.laser_cutting(Inc.GAS,
			Inc.GAS
		).energy(1000).maxChargeRate(1000),
		create.deploying(Inc.GAS, [
			Inc.GAS,
			"thermal:cured_rubber"
		]),
		create.pressing(Inc.GAS, [
			Inc.GAS
		]),
		vintageimprovements.vacuumizing(Inc.GAS, [
			Inc.GAS
		])
	]).loops(1).transitionalItem(Inc.GAS)
})