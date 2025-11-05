ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes
	let casing = "cmi:sky_stone_casing"
	let casingA = "cmi:computing_casing"
	let mech = "cmi:smart_mechanism"
	let mechA = "cmi:computing_mechanism"
	let silver = "#forge:plates/silver"
	let coreF = "ae2:formation_core"
	let coreA = "ae2:annihilation_core"

	// 迷你TNT
	kubejs.shapeless("ae2:tiny_tnt", [
		"minecraft:paper",
		"cmi:trinitrotoluene",
		"cmi:trinitrotoluene"
	]).id("ae2:misc/tiny_tnt")

	// ME控制器
	kubejs.shaped("4x ae2:controller", [
		"SCS",
		"CMC",
		"SCS"
	], {
		M: casing,
		S: "ae2:fluix_crystal",
		C: mech
	}).id("ae2:network/blocks/controller")

	// 压印器
	kubejs.shaped("ae2:inscriber", [
		" P ",
		"CZM",
		" P "
	], {
		P: "create:mechanical_press",
		C: "ae2:fluix_crystal",
		M: "create:precision_mechanism",
		Z: casing
	}).id("ae2:network/blocks/inscribers")

	// 陨石外壳
	kubejs.shaped("4x cmi:sky_stone_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: silver,
		B: "#ae2:all_certus_quartz",
		C: "ae2:smooth_sky_stone_block"
	})

	// 高级计算外壳
	kubejs.shaped("4x cmi:computing_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/platinum",
		B: "cmi:single_crystal_silicon",
		C: "cmi:osmium_tile"
	})

	// 充能器
	kubejs.shaped("ae2:charger", [
		"ABA",
		"A  ",
		"ABA"
	], {
		A: silver,
		B: "minecraft:amethyst_shard",
	}).id("ae2:network/blocks/crystal_processing_charger")

	// ME驱动器
	kubejs.shaped("ae2:drive", [
		"CAC",
		"DBD",
		"CAC"
	], {
		A: mech,
		B: casing,
		C: "#forge:plates/silver",
		D: "#ae2:glass_cable",
	}).id("ae2:network/blocks/storage_drive")

	// ME接口
	kubejs.shaped("ae2:interface", [
		"A",
		"B",
		"C"
	], {
		A: coreF,
		B: "cmi:sky_stone_casing",
		C: coreA,
	}).id("ae2:network/blocks/interfaces_interface")

	// 成型核心
	kubejs.shapeless("2x ae2:formation_core", [
		mech,
		"ae2:fluix_dust",
		"#ae2:all_certus_quartz"
	]).id("ae2:materials/formationcore")

	// 破坏核心
	kubejs.shapeless("2x ae2:annihilation_core", [
		mech,
		"ae2:fluix_dust",
		"minecraft:quartz"
	]).id("ae2:materials/annihilationcore")

	// 基础卡
	kubejs.shaped("2x ae2:basic_card", [
		"A",
		"B",
		"C"
	], {
		A: "#forge:plates/gold",
		B: mech,
		C: silver,
	}).id("ae2:materials/basiccard")

	// 高级卡
	kubejs.shaped("2x ae2:advanced_card", [
		"A",
		"B",
		"C"
	], {
		A: "minecraft:diamond",
		B: mech,
		C: silver,
	}).id("ae2:materials/advancedcard")

	// 溢出销毁卡
	kubejs.shapeless("ae2:void_card", [
		"#forge:dusts/obsidian",
		"ae2:basic_card"
	]).id("ae2:materials/cardvoid")

	// 加速卡
	kubejs.shapeless("ae2:speed_card", [
		"cmi:cobalt_mechanism",
		"ae2:advanced_card"
	]).id("ae2:materials/cardspeed")

	// 均分卡
	kubejs.shapeless("ae2:equal_distribution_card", [
		"minecraft:comparator",
		"ae2:advanced_card"
	]).id("ae2:materials/carddistribution")

	// 2^3空间组件
	kubejs.shapeless("ae2:spatial_cell_component_2", [
		"minecraft:glowstone_dust",
		mechA,
		"ae2:fluix_pearl"
	]).id("ae2:network/cells/spatial_components")

	// 16^3空间组件
	kubejs.shaped("ae2:spatial_cell_component_16", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "minecraft:glowstone_dust",
		B: "ae2:spatial_cell_component_2",
		C: mechA,
	}).id("ae2:network/cells/spatial_components_0")

	// 128^3空间组件
	kubejs.shaped("ae2:spatial_cell_component_128", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "minecraft:glowstone_dust",
		B: "ae2:spatial_cell_component_16",
		C: mechA,
	}).id("ae2:network/cells/spatial_components_1")

	// 1K ME存储原件
	kubejs.shapeless("ae2:cell_component_1k", [
		"minecraft:redstone",
		mech,
		"#ae2:all_certus_quartz"
	]).id("ae2:network/cells/item_storage_components_cell_1k_part")

	// 4K ME存储原件
	kubejs.shaped("ae2:cell_component_4k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "minecraft:redstone",
		B: "ae2:cell_component_1k",
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_4k_part")

	// 16K ME存储原件
	kubejs.shaped("ae2:cell_component_16k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "minecraft:glowstone_dust",
		B: "ae2:cell_component_4k",
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_16k_part")

	// 64K ME存储原件
	kubejs.shaped("ae2:cell_component_64k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "minecraft:glowstone_dust",
		B: "ae2:cell_component_16k",
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_64k_part")

	// 256K ME存储原件
	kubejs.shaped("ae2:cell_component_256k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "ae2:sky_dust",
		B: "ae2:cell_component_64k",
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_256k_part")

	// 石英玻璃
	create.mixing("ae2:quartz_glass", [
		"#forge:dusts/certus_quartz",
		"#forge:glass"
	])

	// 无线接收器
	kubejs.shaped("ae2:wireless_receiver", [
		" A ",
		"BCB",
		" B "
	], {
		A: "ae2:fluix_pearl",
		B: silver,
		C: "cmi:ender_mechanism",
	}).id("ae2:network/wireless_part")

	// 无线信号增幅卡
	kubejs.shaped("ae2:wireless_booster", [
		"ABC",
		"DDD",
	], {
		A: "ae2:fluix_dust",
		B: mech,
		D: silver,
		C: "cmi:ender_mechanism",
	}).id("ae2:network/wireless_booster")

	// ME无线访问点
	kubejs.shaped("ae2:wireless_access_point", [
		"A",
		"B",
	], {
		A: "ae2:wireless_receiver",
		B: mech,
	}).id("ae2:network/wireless_access_point")

	// 量子环
	kubejs.shapeless("ae2:quantum_ring", [
		mechA,
		"ae2:energy_cell",
		"#ae2:smart_dense_cable",
		silver,
	]).id("ae2:network/blocks/quantum_ring")

	// 空间塔
	kubejs.shaped("2x ae2:spatial_pylon", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "ae2:quartz_glass",
		B: "#ae2:glass_cable",
		C: mechA,
		D: casing
	}).id("ae2:network/blocks/spatial_io_pylon")

	// ME IO端口
	kubejs.shaped("ae2:io_port", [
		"CDC",
		"ABA",
		"CDC"
	], {
		A: "ae2:drive",
		C: "#ae2:glass_cable",
		D: mech,
		B: casing
	}).id("ae2:network/blocks/io_port")

	// 空间IO端口
	kubejs.shapeless("ae2:spatial_io_port", [
		mechA,
		"ae2:io_port",
		"ae2:spatial_pylon"
	]).id("ae2:network/blocks/spatial_io_port")

	// 陨石箱子
	kubejs.shaped("ae2:chest", [
		"A",
		"B",
		"C"
	], {
		A: "ae2:termal",
		C: mech,
		B: "ae2:drive"
	}).id("ae2:network/blocks/storage_chest")

	// 元件控制台
	kubejs.shaped("ae2:cell_workbench", [
		"A",
		"B",
		"C"
	], {
		C: "#forge:chests",
		A: mech,
		B: casing
	}).id("ae2:network/blocks/cell_workbench")

	// 能源接收器
	kubejs.shaped("ae2:energy_acceptor", [
		"A",
		"B"
	], {
		A: "#forge:rods/copper",
		B: casing
	}).id("ae2:network/blocks/energy_energy_acceptor")

	// 合成单元
	kubejs.shaped("ae2:crafting_unit", [
		" A ",
		"CBC",
		" A "
	], {
		A: mech,
		B: casing,
		C: "#ae2:glass_cable"
	}).id("ae2:network/crafting/cpu_crafting_unit")

	// 并行处理单元
	kubejs.shapeless("ae2:crafting_accelerator", [
		"ae2:crafting_unit",
		mech
	]).id("ae2:network/crafting/cpu_crafting_accelerator")

	// 催生器
	kubejs.shaped("ae2:growth_accelerator", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: casing,
		C: "ae2:fluix_block"
	}).id("ae2:network/blocks/crystal_processing_growth_accelerator")

	// 能源元件
	kubejs.shaped("ae2:energy_cell", [
		"A",
		"B",
		"C"
	], {
		A: "ae2:fluix_dust",
		B: casing,
		C: "#ae2:all_certus_quartz"
	}).id("ae2:network/blocks/energy_energy_cell")

	// 致密能源元件
	kubejs.shaped("ae2:dense_energy_cell", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "ae2:energy_cell",
		B: mech,
	}).id("ae2:network/blocks/energy_dense_energy_cell")

	// ME样板供应器
	kubejs.shapeless("ae2:pattern_provider", [
		"ae2:interface",
		"minecraft:crafting_table"
	]).id("ae2:network/blocks/pattern_providers_interface")

	// 分子装配室
	kubejs.shaped("2x ae2:molecular_assembler", [
		"EAE",
		"BCD",
		"EAE"
	], {
		A: "minecraft:crafting_table",
		B: coreA,
		D: coreF,
		C: casing,
		E: "ae2:quartz_glass",
	}).id("ae2:network/crafting/molecular_assembler")

	// 照明面板
	kubejs.shapeless("ae2:semi_dark_monitor", [
		"ae2:quartz_glass",
		"minecraft:redstone",
		"minecraft:glowstone_dust"
	])

	// ME终端
	kubejs.shapeless("ae2:terminal", [
		"#ae2:illuminated_panel",
		coreA,
		coreF,
		"cmi:smart_mechanism"
	]).id("ae2:network/parts/terminals")

	// 合成终端
	kubejs.shapeless("ae2:crafting_terminal", [
		"ae2:terminal",
		"minecraft:crafting_table",
		"cmi:smart_mechanism"
	]).id("ae2:network/parts/terminals_crafting")

	kubejs.shapeless("ae2:crafting_terminal", [
		"ae2:pattern_access_terminal",
	])

	// 样板编码终端
	kubejs.shapeless("ae2:pattern_encoding_terminal", [
		"ae2:crafting_terminal",
	]).id("ae2:network/parts/terminals_pattern_encoding")

	// ME样板管理终端
	kubejs.shapeless("ae2:pattern_access_terminal", [
		"ae2:pattern_encoding_terminal",
	]).id("ae2:network/parts/terminals_pattern_access")

	// ME P2P 通道
	kubejs.shaped("ae2:me_p2p_tunnel", [
		"ABA",
		"DCD",
	], {
		A: silver,
		C: mech,
		D: "ae2:fluix_crystal",
		B: "cmi:ender_mechanism",
	}).id("ae2:network/parts/tunnels_me")

	// 物质聚合器
	kubejs.shapeless("ae2:condenser", [
		"cmi:computing_casing",
		"cmi:computing_mechanism",
		"cmi:nuclear_mechanism"
	])
})