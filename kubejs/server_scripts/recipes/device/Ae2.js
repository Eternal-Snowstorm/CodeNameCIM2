ServerEvents.recipes((event) => {
	let { kubejs, thermal_extra } = event.getRecipes()
	const DRIVE = /^ae2:(?!.*portable)(?!.*spatial).*cell(?!.*workbench$).+$/;
	event.remove([
		{
			type: "minecraft:crafting_shaped",
			output: DRIVE
		}
	])

	// ME物品元件外壳
	kubejs.shaped("2x ae2:item_cell_housing", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: Mechanism.WOODEN.COM,
		X: "#forge:plates/iron",
		Y: "ae2:quartz_glass",
	}).id("ae2:network/cells/item_cell_housing")

	// ME流体元件外壳
	kubejs.shaped("2x ae2:fluid_cell_housing", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: Mechanism.COPPER.COM,
		X: "#forge:plates/copper",
		Y: "ae2:quartz_glass"
	}).id("ae2:network/cells/fluid_cell_housing")

	// ME化学元件外壳
	kubejs.shaped("2x appmek:chemical_cell_housing", [
		"PAP",
		"AMA",
		"PAP"
	], {
		P: "#forge:plates/osmium",
		A: "ae2:quartz_glass",
		M: Mechanism.AIR.COM
	}).id("appmek:chemical_cell_housing")

	// 网络工具
	kubejs.shapeless("ae2:network_tool", [
		"#ae2:quartz_wrench",
		Mechanism.SMART.COM
	]).id("ae2:tools/network_tool")

	// 机壳
	thermal_extra.component_assembly("4x cmi:smart_casing", [
		"#forge:plates/iron",
		"#forge:plates/iron",
		"#forge:plates/silver",
		"#forge:dusts/certus_quartz",
		Fluid.of("thermal:resin", 100)
	])

	// 压印机
	thermal_extra.component_assembly("ae2:inscriber", [
		Casing.SMART,
		Mechanism.SMART.COM,
		"ae2:fluix_crystal",
		"cmi:hammer_head"
	]).id("ae2:network/blocks/inscribers")

	// 存储单元
	thermal_extra.component_assembly("ae2:cell_component_1k", [
		"create_connected:control_chip",
		"#forge:plates/silver",
		"#forge:dusts/certus_quartz",
		"cmi:ferrit_core",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_1k_part")

	thermal_extra.component_assembly("ae2:cell_component_4k", [
		"ae2:logic_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_4k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_4k_part")

	thermal_extra.component_assembly("ae2:cell_component_16k", [
		"ae2:calculation_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_16k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_16k_part")

	thermal_extra.component_assembly("ae2:cell_component_64k", [
		"ae2:engineering_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_64k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_64k_part")

	thermal_extra.component_assembly("ae2:cell_component_256k", [
		"advanced_ae:quantum_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_256k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_256k_part")

	// 整合组件
	kubejs.shaped("cmi:combined_component_4k", [
		" C ",
		"CPC",
		" C "
	], {
		C: "ae2:cell_component_1k",
		P: "#forge:plates/silver"
	})
	kubejs.shaped("cmi:combined_component_16k", [
		" C ",
		"CPC",
		" C "
	], {
		C: "ae2:cell_component_4k",
		P: "#forge:plates/silver"
	})
	kubejs.shaped("cmi:combined_component_64k", [
		" C ",
		"CPC",
		" C "
	], {
		C: "ae2:cell_component_16k",
		P: "#forge:plates/silver"
	})
	kubejs.shaped("cmi:combined_component_256k", [
		" C ",
		"CPC",
		" C "
	], {
		C: "ae2:cell_component_64k",
		P: "#forge:plates/silver"
	})

	// 样板
	kubejs.shaped("4x ae2:blank_pattern", [
		"PGP",
		"GMG",
		"PGP"
	], {
		P: "#forge:plates/iron",
		G: "ae2:quartz_glass",
		M: Mechanism.SMART.COM
	}).id("ae2:network/crafting/patterns_blank")

	// 内存卡
	kubejs.shaped("ae2:memory_card", [
		"PMP",
		"WEW"
	], {
		P: "#forge:plates/iron",
		M: Mechanism.SMART.COM,
		W: "#forge:wires/redstone",
		E: "#forge:plates/electrum"
	}).id("ae2:tools/network_memory_card")

	// 充能器
	kubejs.shaped("ae2:charger", [
		"PAP",
		" M ",
		"PAP"
	], {
		P: "#forge:plates/iron",
		M: Mechanism.COIL.COM,
		A: "#forge:gems/amethyst"
	}).id("ae2:network/blocks/crystal_processing_charger")

	// 高级充能器
	kubejs.shaped("expatternprovider:ex_charger", [
		"PCP",
		"CMC",
		"PCP"
	], {
		P: "#forge:dusts/emerald",
		C: Mechanism.SMART.COM,
		M: "ae2:charger"
	}).id("expatternprovider:ex_charger")

	// 无线发信
	thermal_extra.component_assembly("ae2:wireless_receiver", [
		"ae2:fluix_pearl",
		"create:transmitter",
		"#forge:plates/iron",
		Mechanism.ENDER.COM
	]).id("ae2:network/wireless_part")

	thermal_extra.component_assembly("ae2:wireless_access_point", [
		Casing.SMART,
		Mechanism.SMART.COM,
		"ae2:wireless_receiver"
	]).id("ae2:network/wireless_access_point")

	// 控制器
	kubejs.shaped("ae2:controller", [
		"MSM",
		"SCS",
		"MSM"
	], {
		M: Mechanism.SMART.COM,
		S: "ae2:sky_dust",
		C: Casing.SMART
	}).id("ae2:network/blocks/controller")

	// 驱动器
	thermal_extra.component_assembly("ae2:drive", [
		Casing.SMART,
		Mechanism.SMART.COM,
		"cmi:ferrit_core",
		"#forge:gems/fluix"
	]).id("ae2:network/blocks/storage_drive")

	// 照明面板
	thermal_extra.component_assembly("ae2:semi_dark_monitor", [
		"ae2:quartz_glass",
		Mechanism.PHOTO.COM,
		"#forge:plates/silver",
		"#forge:plates/redstone"
	]).id("ae2:network/parts/panels_semi_dark_monitor")

	// 破坏核心
	thermal_extra.component_assembly("2x ae2:annihilation_core", [
		Mechanism.SMART.COM,
		"#forge:dusts/fluix",
		"#forge:ingots/refined_radiance"
	]).id("ae2:materials/annihilationcore")

	// 成型核心
	thermal_extra.component_assembly("2x ae2:formation_core", [
		Mechanism.SMART.COM,
		"#forge:dusts/fluix",
		"#forge:ingots/shadow_steel"
	]).id("ae2:materials/formationcore")

	// ME终端
	thermal_extra.component_assembly("ae2:terminal", [
		"#ae2:illuminated_panel",
		"ae2:annihilation_core",
		"ae2:formation_core",
		Mechanism.SMART.COM
	]).id("ae2:network/parts/terminals")

	// 合成终端
	kubejs.shapeless("ae2:crafting_terminal", [
		"ae2:terminal",
		"create:crafting_blueprint"
	]).id("ae2:network/parts/terminals_crafting")

	// 样板编码
	thermal_extra.component_assembly("ae2:pattern_encoding_terminal", [
		"#ae2:illuminated_panel",
		Mechanism.SMART.COM,
		"#forge:ingots/overcharged_alloy"
	]).id("ae2:network/parts/terminals_pattern_encoding")

	// 样板管理
	thermal_extra.component_assembly("ae2:pattern_access_terminal", [
		"#ae2:illuminated_panel",
		Mechanism.SMART.COM,
		"create:transmitter"
	]).id("ae2:network/parts/terminals_pattern_access")

	// 监控器
	thermal_extra.component_assembly("ae2:storage_monitor", [
		"#ae2:illuminated_panel",
		Mechanism.SMART.COM
	]).id("ae2:network/parts/monitors_storage")

	// 交换监控器
	thermal_extra.component_assembly("ae2:conversion_monitor", [
		"ae2:storage_monitor",
		"ae2:annihilation_core",
		"ae2:formation_core"
	]).id("ae2:network/parts/monitors_conversion")

	// 电池
	thermal_extra.component_assembly("ae2:energy_cell", [
		Casing.SMART,
		"#forge:dusts/fluix",
		"#ae2:all_certus_quartz"
	]).id("ae2:network/blocks/energy_energy_cell")

	// 物质聚合器
	thermal_extra.component_assembly("ae2:condenser", [
		Casing.SMART,
		"#forge:dusts/fluix",
	]).id("ae2:network/blocks/io_condenser")

	// 能源接收器
	kubejs.shaped("ae2:energy_acceptor", [
		" AA",
		"AC ",
		" AA"
	], {
		A: "#forge:wires/copper",
		C: Casing.SMART
	}).id("ae2:network/blocks/energy_energy_acceptor")

	// ME接口
	thermal_extra.component_assembly("ae2:interface", [
		Casing.SMART,
		"ae2:annihilation_core",
		"ae2:formation_core"
	]).id("ae2:network/blocks/interfaces_interface")

	// 样板供应器
	kubejs.shapeless("ae2:pattern_provider", [
		"#ae2:interface",
		"minecraft:crafting_table"
	]).id("ae2:network/blocks/pattern_providers_interface")

	// ME箱子
	thermal_extra.component_assembly("ae2:chest", [
		Casing.SMART,
		"ae2:terminal",
		"#ae2:glass_cable"
	]).id("ae2:network/blocks/storage_chest")

	// 卡
	thermal_extra.component_assembly("4x ae2:basic_card", [
		"#forge:plates/iron",
		Mechanism.SMART.COM,
		"#forge:ingots/gold"
	]).id("ae2:materials/basiccard")

	thermal_extra.component_assembly("4x ae2:advanced_card", [
		"#forge:plates/silver",
		Mechanism.SMART.COM,
		"#forge:gems/diamond"
	]).id("ae2:materials/advancedcard")

	thermal_extra.component_assembly("ae2:wireless_booster", [
		"#forge:plates/silver",
		Mechanism.ENDER.COM,
		"#forge:dusts/fluix"
	]).id("ae2:network/wireless_booster")

	// ME IO端口
	thermal_extra.component_assembly("ae2:io_port", [
		"ae2:drive",
		Mechanism.SMART.COM,
		"#ae2:glass_cable"
	]).id("ae2:network/blocks/io_port")

	// 催生器
	thermal_extra.component_assembly("ae2:growth_accelerator", [
		Casing.SMART,
		"ae2:fluix_block",
		"#ae2:glass_cable"
	]).id("ae2:network/blocks/crystal_processing_growth_accelerator")

	// 合成单元
	thermal_extra.component_assembly("ae2:crafting_unit", [
		Casing.SMART,
		Mechanism.SMART.COM
	]).id("ae2:network/crafting/cpu_crafting_unit")

	// 并行处理单元
	kubejs.shapeless("ae2:crafting_accelerator", [
		"ae2:crafting_unit",
		Mechanism.SMART.COM
	]).id("ae2:network/crafting/cpu_crafting_accelerator")

	// 分子装配室
	thermal_extra.component_assembly("ae2:molecular_assembler", [
		Casing.SMART,
		"ae2:annihilation_core",
		"ae2:formation_core",
		"minecraft:crafting_table",
		"ae2:quartz_glass"
	]).id("ae2:network/crafting/molecular_assembler")

	// P2P
	thermal_extra.component_assembly("2x ae2:me_p2p_tunnel", [
		Mechanism.SMART.COM,
		"#ae2:glass_cable",
		"#forge:plates/silver",
		"#forge:gems/fluix"
	]).id("ae2:network/parts/tunnels_me")


})