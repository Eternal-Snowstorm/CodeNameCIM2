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
		"ae2:logic_processor",
		"#forge:plates/silver",
		"#forge:dusts/certus_quartz",
		"cmi:ferrit_core",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_1k_part")

	thermal_extra.component_assembly("ae2:cell_component_4k", [
		"ae2:calculation_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_4k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_4k_part")

	thermal_extra.component_assembly("ae2:cell_component_16k", [
		"ae2:engineering_processor",
		"#forge:gems/certus_quartz",
		"cmi:combined_component_16k",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	]).id("ae2:network/cells/item_storage_components_cell_16k_part")

	thermal_extra.component_assembly("ae2:cell_component_64k", [
		"cmi:concurrent_processor",
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
		"#forge:plates/silicon_rubber",
		"#forge:ingots/electrum"
	]).id("ae2:materials/basiccard")

	thermal_extra.component_assembly("4x ae2:advanced_card", [
		"#forge:plates/silver",
		Mechanism.SMART.COM,
		"#forge:plates/silicon_rubber",
		"#forge:ingots/etrium"
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

	// 熵变机械臂
	thermal_extra.component_assembly("ae2:entropy_manipulator", [
		Mechanism.SMART.COM,
		Mechanism.NATURE.COM,
		'ae2:fluix_crystal',
		'ae2:energy_cell',
		'#forge:rods/silver'
	]).id("ae2:tools/misctools_entropy_manipulator")

	// 充能手杖
	thermal_extra.component_assembly("ae2:charged_staff", [
		Mechanism.COIL.COM,
		'ae2:charged_certus_quartz_crystal',
		'#forge:rods/silver'
	]).id("ae2:tools/misctools_charged_staff")

	// 染色器
	thermal_extra.component_assembly('ae2:color_applicator', [
		Mechanism.SMART.COM,
		Mechanism.COLOR.COM,
		'#forge:plates/silver',
		'ae2:energy_cell',
		'#forge:rods/silver'
	]).id("ae2:tools/network_color_applicator")

	// 物质炮
	thermal_extra.component_assembly("ae2:matter_cannon", [
		Mechanism.SMART.COM,
		Mechanism.ANDESITE.COM,
		'#forge:ingots/silver',
		'ae2:energy_cell',
		'#forge:rods/silver'
	]).id("ae2:tools/matter_cannon")

	// 元件工作台
	thermal_extra.component_assembly("ae2:cell_workbench", [
		Casing.SMART,
		"ae2:calculation_processor"
	]).id("ae2:network/blocks/cell_workbench")

	// 水晶共振器
	thermal_extra.component_assembly("ae2:crystal_resonance_generator", [
		Casing.SMART,
		Mechanism.COIL.COM,
		"ae2:fluix_block",
		"ae2:charged_certus_quartz_crystal"
	]).id("ae2:network/crystal_resonance_generator")

	// 谐振仓
	thermal_extra.component_assembly("ae2:vibration_chamber", [
		Casing.SMART,
		Mechanism.COIL.COM,
		Mechanism.STONE.COM,
		"#forge:plates/copper",
		"#forge:plates/copper"
	]).id("ae2:network/blocks/energy_vibration_chamber")

	// 量子环
	thermal_extra.component_assembly("ae2:quantum_ring", [
		"#forge:plates/silver",
		"ae2:energy_cell",
		Mechanism.SMART.COM,
		"#ae2:smart_dense_cable"
	]).id("ae2:network/blocks/quantum_ring")

	// 量子链接仓
	thermal_extra.component_assembly("ae2:quantum_link", [
		"ae2:quartz_glass",
		Mechanism.ENDER.COM,
		"ae2:fluix_pearl"
	]).id("ae2:network/blocks/quantum_link")

	// 空间塔
	thermal_extra.component_assembly("ae2:spatial_pylon", [
		Casing.SMART,
		"ae2:fluix_crystal",
		"ae2:fluix_glass_cable",
		Mechanism.ENDER.COM
	]).id("ae2:network/blocks/spatial_io_pylon")

	// 空间io端口
	thermal_extra.component_assembly("ae2:spatial_io_port", [
		"ae2:io_port",
		"#ae2:glass_cable",
		Mechanism.ENDER.COM
	]).id("ae2:network/blocks/spatial_io_port")

	// 存储总线
	thermal_extra.component_assembly("ae2:storage_bus", [
		"#ae2:interface",
		"create:andesite_funnel",
		"create:andesite_tunnel"
	]).id("ae2:network/parts/storage_bus")

	// 输入总线
	thermal_extra.component_assembly("ae2:import_bus", [
		"ae2:annihilation_core",
		"create:andesite_tunnel"
	]).id("ae2:network/parts/import_bus")

	// 输出总线
	thermal_extra.component_assembly("ae2:export_bus", [
		"ae2:formation_core",
		"create:andesite_funnel"
	]).id("ae2:network/parts/export_bus")

	// 触发总线
	thermal_extra.component_assembly("ae2:toggle_bus", [
		"ae2:fluix_glass_cable",
		"minecraft:lever"
	]).id("ae2:network/parts/toggle_bus")

	// 成型面板
	thermal_extra.component_assembly("ae2:formation_plane", [
		"ae2:formation_core",
		"create:brass_hand"
	]).id("ae2:network/parts/formation_plane")

	// 破坏面板
	thermal_extra.component_assembly("ae2:annihilation_plane", [
		"ae2:annihilation_core",
		"thermal:drill_head"
	]).id("ae2:network/parts/annihilation_plane_alt")

	// 放置工具
	thermal_extra.component_assembly('meplacementtool:me_placement_tool', [
		"#forge:rods/silver",
		"ae2:wireless_terminal",
		"constructionwand:iron_wand"
	]).id("meplacementtool:me_placement_tool")

	// 多方块放置工具
	thermal_extra.component_assembly('meplacementtool:multiblock_placement_tool', [
		"#forge:rods/silver",
		"ae2:wireless_terminal",
		"constructionwand:infinity_wand"
	]).id("meplacementtool:multiblock_placement_tool")

	//  线缆放置工具
	thermal_extra.component_assembly('meplacementtool:me_cable_placement_tool', [
		"#forge:rods/silver",
		"ae2:wireless_terminal",
		Mechanism.COLOR.COM,
		"ae2:smart_dense_cable"
	]).id("meplacementtool:me_cable_placement_tool")

	// 装配矩阵框架
	thermal_extra.component_assembly('4x expatternprovider:assembler_matrix_frame', [
		Casing.SMART,
		Mechanism.IRON.COM,
		'minecraft:lapis',
		'cmi:pure_quartz_prism'
	]).id("expatternprovider:assembler_matrix_frame")

	// 装配矩阵墙壁
	thermal_extra.component_assembly('4x expatternprovider:assembler_matrix_wall', [
		'cmi:pure_quartz_prism',
		'#ae2:smart_cable',
		Casing.SMART
	]).id("expatternprovider:assembler_matrix_wall")

	// 装配矩阵玻璃
	thermal_extra.component_assembly('4x expatternprovider:assembler_matrix_glass', [
		'ae2:quartz_glass',
		'#ae2:smart_cable',
		'cmi:pure_quartz_prism'
	]).id("expatternprovider:assembler_matrix_glass")

	// 装配矩阵样板核心
	thermal_extra.component_assembly('expatternprovider:assembler_matrix_pattern', [
		'cmi:pure_quartz_prism',
		'#expatternprovider:extended_pattern_provider'
	]).id("expatternprovider:assembler_matrix_pattern")

	// 装配矩阵速度核心
	thermal_extra.component_assembly('expatternprovider:assembler_matrix_speed', [
		'cmi:pure_quartz_prism',
		Mechanism.COBALT.COM
	]).id("expatternprovider:assembler_matrix_speed")

	// 装配矩阵合成核心
	thermal_extra.component_assembly('expatternprovider:assembler_matrix_crafter', [
		'cmi:pure_quartz_prism',
		'expatternprovider:ex_molecular_assembler'
	]).id("expatternprovider:assembler_matrix_crafter")

	// 扩展样板供应器
	thermal_extra.component_assembly('expatternprovider:ex_pattern_provider', [
		'#ae2:pattern_provider',
		'ae2:capacity_card',
		'create_connected:control_chip',
		Mechanism.GOLD.COM
	]).id("expatternprovider:epp")

	//样板供应器升级
	thermal_extra.component_assembly('expatternprovider:pattern_provider_upgrade', [
		'ae2:capacity_card',
		'create_connected:control_chip',
		Mechanism.GOLD.COM
	]).id("expatternprovider:epp_upgrade")

	// 扩展Me接口
	thermal_extra.component_assembly('expatternprovider:ex_interface', [
		'#ae2:interface',
		'ae2:capacity_card',
		'ae2:logic_processor',
		Mechanism.GOLD.COM
	]).id("expatternprovider:ei")

	//Me接口升级
	thermal_extra.component_assembly('expatternprovider:interface_upgrade', [
		'ae2:capacity_card',
		'ae2:logic_processor',
		Mechanism.GOLD.COM
	]).id("expatternprovider:ei_upgrade")

	// 扩展输入总线
	thermal_extra.component_assembly('expatternprovider:ex_import_bus_part', [
		'ae2:import_bus',
		'ae2:calculation_processor',
		Mechanism.COBALT.COM
	]).id("expatternprovider:ebus_in")

	// 扩展输出总线
	thermal_extra.component_assembly('expatternprovider:ex_export_bus_part', [
		'ae2:export_bus',
		'ae2:calculation_processor',
		Mechanism.COBALT.COM
	]).id("expatternprovider:ebus_out")

	// 输入输出总线升级
	thermal_extra.component_assembly('expatternprovider:io_bus_upgrade', [
		'ae2:calculation_processor',
		Mechanism.COBALT.COM
	]).id("expatternprovider:ebus_upgrade")

	// 扩展样板管理终端
	thermal_extra.component_assembly('expatternprovider:ex_pattern_access_part', [
		'ae2:pattern_access_terminal',
		Mechanism.GOLD.COM,
		'ae2:logic_processor'
	]).id("expatternprovider:epa")

	// 样板管理终端升级
	thermal_extra.component_assembly('expatternprovider:pattern_terminal_upgrade', [
		Mechanism.GOLD.COM,
		'ae2:logic_processor'
	]).id("expatternprovider:epa_upgrade")

	// Me封装胶带	
	thermal_extra.component_assembly('expatternprovider:me_packing_tape', [
		'#forge:ingots/silver',
		'minecraft:slime_ball',
		'ae2:fluix_dust',
		'create:cardboard_block'
	]).id("expatternprovider:tape")

	// 扩展驱动器
	thermal_extra.component_assembly('expatternprovider:ex_drive', [
		'ae2:drive',
		Mechanism.GOLD.COM,
		'ae2:fluix_dust',
		'#forge:dusts/emerald'
	]).id("expatternprovider:ex_drive")

	// 驱动器升级
	thermal_extra.component_assembly('expatternprovider:drive_upgrade', [
		Mechanism.GOLD.COM,
		'ae2:fluix_dust',
		'#forge:dusts/emerald'
	]).id("expatternprovider:ex_drive_upgrade")

	// 扩展分子装配室
	thermal_extra.component_assembly('expatternprovider:ex_molecular_assembler', [
		'ae2:fluix_crystal',
		'ae2:molecular_assembler',
		'ae2:engineering_processor',
		Mechanism.GOLD.COM
	]).id("expatternprovider:ex_molecular_assembler")

	// 电路切片器
	thermal_extra.component_assembly('expatternprovider:circuit_cutter', [
		'thermal:saw_blade',
		Casing.SMART,
		Mechanism.SMART.COM,
		'ae2:sky_stone_tank',
		'ae2:not_so_mysterious_block',
		'#forge:dusts/emerald'
	]).id("expatternprovider:circuit_cutter")

	//扩展io端口
	thermal_extra.component_assembly('expatternprovider:ex_io_port', [
		'ae2:io_port',
		Mechanism.COBALT.COM,
		'ae2:engineering_processor',
		'#forge:dusts/emerald'
	]).id("expatternprovider:ex_io_port")

	// Me超大接口
	thermal_extra.component_assembly('expatternprovider:oversize_interface', [
		'expatternprovider:ingredient_buffer',
		'#expatternprovider:extended_interface',
		'cmi:smart_mechanism_augment',
		'cmi:smart_mechanism_augment',
		'cmi:smart_mechanism_augment',
		'cmi:smart_mechanism_augment'
	]).id("expatternprovider:oversize_interface")

	//原料缓存器
	thermal_extra.component_assembly('expatternprovider:ingredient_buffer', [
		'ae2:quartz_glass',
		'ae2:cell_component_1k',
	]).id("expatternprovider:ingredient_buffer")

	//扩展压印器
	thermal_extra.component_assembly('expatternprovider:ex_inscriber', [
		'ae2:inscriber',
		Mechanism.GOLD.COM,
		'#forge:dusts/emerald',
		'#ae2:interface',
		Mechanism.SMART.COM
	]).id("expatternprovider:ex_inscriber")

	//扩展充能器
	thermal_extra.component_assembly('expatternprovider:ex_charger', [
		'ae2:charger',
		Mechanism.GOLD.COM,
		'#forge:dusts/emerald',
		'#ae2:interface',
		Mechanism.SMART.COM
	]).id("expatternprovider:ex_charger")

	//水晶修复器
	thermal_extra.component_assembly('expatternprovider:crystal_fixer', [
		'ae2:crystal_resonance_generator',
		'#forge:dusts/emerald',
		Casing.SMART,
		Mechanism.SMART.COM
	]).id("expatternprovider:crystal_fixer")

	// 装罐机
	thermal_extra.component_assembly('expatternprovider:caner', [
		'expatternprovider:ingredient_buffer',
		'create:spout',
		'#forge:dusts/emerald'
	]).id("expatternprovider:caner")

	//无线连接器
	thermal_extra.component_assembly('expatternprovider:wireless_connect', [
		'ae2:wireless_access_point',
		'ae2:sky_dust',
		Casing.SMART,
		'#ae2:smart_cable'
	]).id("expatternprovider:wireless_connect")

	//无线集线器
	thermal_extra.component_assembly('expatternprovider:wireless_hub', [
		'expatternprovider:wireless_connect',
		'ae2:quantum_link',
		'ae2:engineering_processor'
	]).id("expatternprovider:wireless_hub")

	// 高级样板供应器
	thermal_extra.component_assembly('advanced_ae:small_adv_pattern_provider', [
		'ae2:pattern_provider',
		'ae2:fluix_pearl',
		'ae2:logic_processor'
	]).id("advanced_ae:smalladvpatpro")

	// 高级扩展样板供应器
	thermal_extra.component_assembly('advanced_ae:adv_pattern_provider', [
		'expatternprovider:ex_pattern_provider',
		'ae2:logic_processor',
		'#forge:dusts/emerald'
	]).id("advanced_ae:eaeadvpatpro")

	// 高级样板供应器升级
	thermal_extra.component_assembly('advanced_ae:adv_pattern_provider_upgrade', [
		'ae2:fluix_pearl',
		'ae2:logic_processor'
	]).id("advanced_ae:smallappupgrade")

	// 2^3空间组件
	thermal_extra.component_assembly('ae2:spatial_cell_component_2', [
		'ae2:engineering_processor',
		'#forge:plates/silver',
		'ae2:fluix_dust',
		'cmi:ferrit_core'
	]).id("ae2:network/cells/spatial_components")

	// 16^3空间组件
	thermal_extra.component_assembly('ae2:spatial_cell_component_16', [
		'ae2:engineering_processor',
		'#forge:plates/silver',
		'ae2:spatial_cell_component_2',
		'ae2:spatial_cell_component_2',
		'ae2:spatial_cell_component_2',
		'ae2:spatial_cell_component_2'
	]).id("ae2:network/cells/spatial_components_0")

	// 128^3空间组件
	thermal_extra.component_assembly('ae2:spatial_cell_component_128', [
		'advanced_ae:quantum_processor',
		'#forge:plates/silver',
		'ae2:spatial_cell_component_16',
		'ae2:spatial_cell_component_16',
		'ae2:spatial_cell_component_16',
		'ae2:spatial_cell_component_16'
	]).id("ae2:network/cells/spatial_components_1")
})