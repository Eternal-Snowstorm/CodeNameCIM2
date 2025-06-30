ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let iwm = "cmi:incomplete_wooden_mechanism"
	let ism = "cmi:incomplete_stone_mechanism"
	let iim = "cmi:incomplete_iron_mechanism"
	let icm = "cmi:incomplete_copper_mechanism"
	let iam = "cmi:incomplete_andesite_mechanism"
	let igm = "cmi:incomplete_gold_mechanism"
	let ipm = "cmi:incomplete_photosensitive_mechanism"
	let itm = "cmi:incomplete_thermal_mechanism"
	let ifm = "cmi:incomplete_feinforced_mechanism"
	let irm = "cmi:incomplete_resonant_mechanism"
	let inm = "cmi:incomplete_nature_mechanism"
	let itrm = "cmi:incomplete_nature_mechanism"
	let ilem = "cmi:incomplete_light_engineering_mechanism"
	let ihem = "cmi:incomplete_heavy_engineering_mechanism"
	let iem = "cmi:incomplete_ender_mechanism"
	let icom = "cmi:incomplete_coil_mechanism"
	let ienm = "cmi:incomplete_enchanted_mechanism"
	let ismm = "cmi:incomplete_smart_mechanism"
	let ibmm = "cmi:incomplete_basic_mekanism_mechanism"
	let iamm = "cmi:incomplete_advanced_mekanism_mechanism"
	let iemm = "cmi:incomplete_elite_mekanism_mechanism"
	let iumm = "cmi:incomplete_ultimate_mekanism_mechanism"
	let istm = "cmi:incomplete_structure_mechanism"
	let ium = "cmi:incomplete_nuclear_mechanism"
	let iatm = "cmi:incomplete_antimatter_mechanism"
	let iclm = "cmi:incomplete_colorful_mechanism"
	let iscm = "cmi:incomplete_sculk_mechanism"
	let iprm = "create:incomplete_precision_mechanism"
	let inem = "cmi:incomplete_nether_mechanism"
	let ipim = "cmi:incomplete_pigiron_mechanism"
	let icbm = "cmi:incomplete_cobalt_mechanism"
	let icpm = "cmi:incomplete_computing_mechanism"
	let iram = "cmi:incomplete_railway_mechanism"

	// 木质
	create.sequenced_assembly("cmi:wooden_mechanism", [
		"#minecraft:planks"
	], [
		create.pressing(iwm, iwm),
		create.deploying(iwm, [iwm, "minecraft:stick"]),
		create.cutting(iwm, iwm),
		create.deploying(iwm, [iwm, "cmi:basic_mechanism_part"])
	]).transitionalItem(iwm).loops(1)

	// 石质
	create.sequenced_assembly("cmi:stone_mechanism", [
		"#forge:stone"
	], [
		create.pressing(ism, ism),
		create.deploying(ism, [ism, "minecraft:flint"]),
		create.deploying(ism, [ism, "tconstruct:seared_brick"]),
		create.deploying(ism, [ism, "cmi:basic_mechanism_part"])
	]).transitionalItem(ism).loops(1)

	// 铁质
	create.sequenced_assembly("cmi:iron_mechanism", [
		"#forge:plates/iron"
	], [
		create.cutting(iim, iim),
		create.pressing(iim, iim),
		create.deploying(iim, [iim, "minecraft:iron_nugget"]),
		create.deploying(iim, [iim, "cmi:basic_mechanism_part"])
	]).transitionalItem(iim).loops(1)

	// 铜质
	create.sequenced_assembly("cmi:copper_mechanism", [
		"#forge:plates/copper"
	], [
		create.cutting(icm, icm),
		create.pressing(icm, icm),
		create.deploying(icm, [icm, "#forge:nuggets/copper"]),
		create.deploying(icm, [icm, "create:fluid_pipe"]),
		create.deploying(icm, [icm, "thermal:cured_rubber"]),
		create.filling(icm, [icm, Fluid.of("minecraft:water", 500)]),
		create.deploying(icm, [icm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(icm).loops(1)

	// 安山
	create.sequenced_assembly("cmi:andesite_mechanism", [
		"#forge:plates/andesite_alloy"
	], [
		create.cutting(iam, iam),
		create.pressing(iam, iam),
		create.deploying(iam, [iam, "create:cogwheel"]),
		create.deploying(iam, [iam, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iam).loops(1)

	// 金质
	create.sequenced_assembly("cmi:gold_mechanism", [
		"#forge:plates/gold"
	], [
		create.cutting(igm, igm),
		create.pressing(igm, igm),
		create.deploying(igm, [igm, "#forge:nuggets/gold"]),
		create.deploying(iam, [igm, "cmi:basic_mechanism_part"])
	]).transitionalItem(igm).loops(1)

	// 精密
	create.sequenced_assembly("create:precision_mechanism", [
		"#forge:plates/brass"
	], [
		create.cutting(iprm, iprm),
		create.pressing(iprm, iprm),
		create.deploying(iprm, [iprm, "create:cogwheel"]),
		create.deploying(iprm, [iprm, "create:electron_tube"]),
		create.deploying(iprm, [iprm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iprm).loops(1)

	// 感光
	create.sequenced_assembly("cmi:photosensitive_mechanism", [
		"minecraft:quartz_slab"
	], [
		create.pressing(ipm, ipm),
		create.deploying(ipm, [ipm, "cmi:charged_amethyst"]),
		create.deploying(ipm, [ipm, "minecraft:glowstone_dust"]),
		create.deploying(ipm, [ipm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(ipm).loops(1)

	// 热力
	create.sequenced_assembly("cmi:thermal_mechanism", [
		"#forge:plates/invar"
	], [
		create.cutting(itm, itm),
		create.pressing(itm, itm),
		create.deploying(itm, [itm, "thermal:rf_coil"]),
		create.deploying(itm, [itm, "#forge:gears/constantan"]),
		create.deploying(itm, [itm, "cmi:flux_mechanism_part"])
	]).transitionalItem(itm).loops(1)

	// 强化
	create.sequenced_assembly("cmi:feinforced_mechanism", [
		"#forge:plates/electrum"
	], [
		create.cutting(ifm, ifm),
		create.pressing(ifm, ifm),
		create.deploying(ifm, [ifm, "thermal:rf_coil"]),
		create.deploying(ifm, [ifm, "#forge:gears/signalum"]),
		create.deploying(ifm, [ifm, "cmi:flux_mechanism_part"])
	]).transitionalItem(ifm).loops(1)

	// 谐振
	create.sequenced_assembly("cmi:resonant_mechanism", [
		"#forge:plates/enderium"
	], [
		create.cutting(irm, irm),
		create.pressing(irm, irm),
		create.deploying(irm, [irm, "thermal:rf_coil"]),
		create.deploying(irm, [irm, "#forge:gears/lumium"]),
		create.deploying(irm, [irm, "cmi:flux_mechanism_part"])
	]).transitionalItem(irm).loops(1)

	// 自然
	create.sequenced_assembly("cmi:nature_mechanism", [
		"minecraft:grass_block"
	], [
		create.pressing(inm, inm),
		create.deploying(inm, [inm, "#minecraft:flowers"]),
		create.filling(inm, [inm, Fluid.of("minecraft:water", 500)]),
		create.deploying(inm, [inm, "cmi:magical_mechanism_part"])
	]).transitionalItem(inm).loops(1)

	// 铁路
	create.sequenced_assembly("cmi:railway_mechanism", [
		"cmi:dense_sturdy_sheet"
	], [
		create.pressing(iram, [iram, "#forge:plates/obsidian"]),
		create.deploying(iram, [iram, "#forge:nuggets/brass"]),
		create.deploying(iram, [iram, "#forge:nuggets/brass"]),
		create.deploying(iram, [iram, "#forge:nuggets/brass"]),
		create.deploying(iram, [iram, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iram).loops(1)

	// 末影
	create.sequenced_assembly("cmi:ender_mechanism", [
		"#forge:plates/obsidian"
	], [
		create.deploying(iem, [iem, "minecraft:ender_pearl"]),
		create.deploying(iem, [iem, "#forge:dusts/diamond"]),
		create.deploying(iem, [iem, "cmi:magical_mechanism_part"]),
	]).transitionalItem(iem).loops(1)

	// 轻型工程
	create.sequenced_assembly("cmi:light_engineering_mechanism", [
		"#forge:sheetmetals/iron"
	], [
		create.pressing(ilem, ilem),
		create.deploying(ilem, [ilem, "immersiveengineering:component_iron"]),
		create.deploying(ilem, [ilem, "#forge:wires/copper"]),
		create.deploying(ilem, [ilem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ilem).loops(1)

	// 重型工程
	create.sequenced_assembly("cmi:heavy_engineering_mechanism", [
		"#forge:sheetmetals/steel"
	], [
		create.pressing(ihem, ihem),
		create.deploying(ihem, [ihem, "immersiveengineering:component_steel"]),
		create.deploying(ihem, [ihem, "#forge:wires/electrum"]),
		create.deploying(ihem, [ihem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ihem).loops(1)

	// 线圈
	create.sequenced_assembly("cmi:coil_mechanism", [
		"cmi:light_engineering_mechanism"
	], [
		create.pressing(icom, icom),
		create.deploying(icom, [icom, "#forge:wires/copper"]),
		create.deploying(icom, [icom, "#forge:wires/electrum"]),
		create.deploying(icom, [icom, "#forge:wires/aluminum"]),
		create.deploying(icom, [icom, "#forge:wires/steel"]),
	]).transitionalItem(icom).loops(1)

	// 附魔
	create.sequenced_assembly("cmi:enchanted_mechanism", [
		"#forge:storage_blocks/lapis"
	], [
		create.pressing(ienm, ienm),
		create.filling(ienm, [ienm, Fluid.of("create_enchantment_industry:experience", 20)]),
		create.deploying(ienm, [ienm, "cmi:magical_mechanism_part"]),
	]).transitionalItem(ienm).loops(1)

	// 智能
	create.sequenced_assembly("cmi:smart_mechanism", [
		"#forge:plates/silver"
	], [
		create.cutting(ismm, ismm),
		create.deploying(ismm, [ismm, "ae2:logic_processor"]),
		create.deploying(ismm, [ismm, "ae2:calculation_processor"]),
		create.deploying(ismm, [ismm, "ae2:engineering_processor"]),
		create.deploying(ismm, [ismm, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ismm).loops(1)

	// 基础通用
	create.sequenced_assembly("cmi:basic_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.cutting(ibmm, ibmm),
		create.pressing(ibmm, ibmm),
		create.deploying(ibmm, [ibmm, "mekanism:basic_control_circuit"]),
		create.deploying(ibmm, [ibmm, "#forge:gears/ruby"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(ibmm).loops(1)

	// 高级通用
	create.sequenced_assembly("cmi:advanced_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.pressing(iamm, iamm),
		create.deploying(iamm, [iamm, "mekanism:advanced_control_circuit"]),
		create.deploying(iamm, [iamm, "mekanism:alloy_infused"]),
		create.deploying(iamm, [iamm, '#vintageimprovements:small_springs/osmium']),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iamm).loops(1)

	// 精英通用
	create.sequenced_assembly("cmi:elite_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.pressing(iemm, iemm),
		create.deploying(iemm, [iemm, "mekanism:elite_control_circuit"]),
		create.deploying(iemm, [iemm, "mekanism:alloy_reinforced"]),
		create.deploying(iemm, [iemm, "#forge:plates/gold"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iemm).loops(1)

	// 终极通用
	create.sequenced_assembly("cmi:ultimate_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.pressing(iumm, iumm),
		create.deploying(iumm, [iumm, "mekanism:ultimate_control_circuit"]),
		create.deploying(iumm, [iumm, "mekanism:alloy_atomic"]),
		create.deploying(iumm, [iumm, "ae2:engineering_processor"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iumm).loops(1)

	// 结构
	create.sequenced_assembly("cmi:structure_mechanism", [
		"#forge:plates/steel"
	], [
		create.cutting(istm, istm),
		create.pressing(istm, istm),
		create.deploying(istm, [istm, "mekanism:hdpe_sheet"]),
		create.deploying(istm, [istm, "#forge:plates/copper"]),
		create.deploying(istm, [istm, "#forge:plates/lead"]),
		create.deploying(istm, [istm, "#forge:plates/osmium"]),
		create.deploying(istm, [istm, "#forge:plates/tin"]),
		create.deploying(istm, [istm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(istm).loops(1)

	// 核能
	create.sequenced_assembly("cmi:nuclear_mechanism", [
		"#forge:plates/lead"
	], [
		create.cutting(ium, ium),
		create.pressing(ium, ium),
		create.deploying(ium, [ium, "mekanism:pellet_polonium"]),
		create.deploying(ium, [ium, "mekanism:pellet_plutonium"]),
		create.deploying(ium, [ium, "cmi:quantum_mechanism_part"]),
	]).transitionalItem(ium).loops(1)

	// 反物质
	create.sequenced_assembly("cmi:antimatter_mechanism", [
		"ae2:singularity"
	], [
		create.pressing(iatm, iatm),
		create.deploying(iatm, [iatm, "mekanism:pellet_antimatter"]),
		create.deploying(iatm, [iatm, "cmi:quantum_mechanism_part"]),
	]).transitionalItem(iatm).loops(1)

	// 多彩
	create.sequenced_assembly("cmi:colorful_mechanism", [
		"#minecraft:wooden_slabs"
	], [
		create.deploying(iclm, [iclm, "minecraft:red_dye"]),
		create.deploying(iclm, [iclm, "minecraft:yellow_dye"]),
		create.deploying(iclm, [iclm, "minecraft:blue_dye"]),
		create.deploying(iclm, [iclm, "minecraft:white_dye"]),
		create.deploying(iclm, [iclm, "minecraft:black_dye"]),
		create.deploying(iclm, [iclm, "cmi:magical_mechanism_part"])
	]).transitionalItem(iclm).loops(1)

	// 幽匿
	create.sequenced_assembly("cmi:sculk_mechanism", [
		"minecraft:sculk_catalyst"
	], [
		create.deploying(iscm, [iscm, "minecraft:sculk_sensor"]),
		create.deploying(iscm, [iscm, "minecraft:sculk_shrieker"]),
		create.deploying(iscm, [iscm, "cmi:magical_mechanism_part"])
	]).transitionalItem(iscm).loops(1)

	// 下界
	create.sequenced_assembly("cmi:nether_mechanism", [
		"create:blaze_cake"
	], [
		create.filling(inem, [inem, Fluid.of("tconstruct:liquid_soul", 500)]),
		create.deploying(inem, [inem, "#forge:nuggets/gold"]),
		create.deploying(inem, [inem, "cmi:magical_mechanism_part"]),
	]).transitionalItem(inem).loops(1)

	// 生铁
	create.sequenced_assembly("cmi:pigiron_mechanism", [
		"#forge:plates/pig_iron"
	], [
		create.filling(ipim, [ipim, Fluid.of("tconstruct:molten_pig_iron", 90)]),
		create.pressing(ipim, ipim),
		create.deploying(ipim, [ipim, "#forge:nuggets/pig_iron"]),
		create.deploying(ipim, [ipim, "cmi:basic_mechanism_part"])
	]).transitionalItem(ipim).loops(1)

	// 钴质
	create.sequenced_assembly("cmi:cobalt_mechanism", [
		"#forge:plates/cobalt"
	], [
		create.deploying(icbm, [icbm, "vintageimprovements:cobalt_spring"]),
		create.deploying(icbm, [icbm, "thermal:rf_coil"]),
		create.deploying(icbm, [icbm, "cmi:engineering_mechanism_part"])
	]).transitionalItem(icbm).loops(1)

	// 计算
	create.sequenced_assembly("cmi:computing_mechanism", [
		"cmi:single_crystal_silicon"
	], [
		create.pressing(icpm, icpm),
		create.deploying(icpm, [icpm, "cmi:computer_component"]),
		create.deploying(icpm, [icpm, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(icpm).loops(1)
})
