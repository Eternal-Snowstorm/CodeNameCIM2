ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let iwm = "ue_addons:incomplete_wooden_mechanism"
	let ism = "ue_addons:incomplete_stone_mechanism"
	let iim = "ue_addons:incomplete_iron_mechanism"
	let icm = "ue_addons:incomplete_copper_mechanism"
	let iam = "ue_addons:incomplete_andesite_mechanism"
	let igm = "ue_addons:incomplete_gold_mechanism"
	let ipm = "ue_addons:incomplete_photosensitive_mechanism"
	let itm = "ue_addons:incomplete_thermal_mechanism"
	let ifm = "ue_addons:incomplete_feinforced_mechanism"
	let irm = "ue_addons:incomplete_resonant_mechanism"
	let inm = "ue_addons:incomplete_nature_mechanism"
	let itrm = "ue_addons:incomplete_nature_mechanism"
	let ilem = "ue_addons:incomplete_light_engineering_mechanism"
	let ihem = "ue_addons:incomplete_heavy_engineering_mechanism"
	let iem = "ue_addons:incomplete_ender_mechanism"
	let icom = "ue_addons:incomplete_coil_mechanism"
	let ienm = "ue_addons:incomplete_enchanted_mechanism"
	let ismm = "ue_addons:incomplete_smart_mechanism"
	let ibmm = "ue_addons:incomplete_basic_mekanism_mechanism"
	let iamm = "ue_addons:incomplete_advanced_mekanism_mechanism"
	let iemm = "ue_addons:incomplete_elite_mekanism_mechanism"
	let iumm = "ue_addons:incomplete_ultimate_mekanism_mechanism"
	let istm = "ue_addons:incomplete_structure_mechanism"
	let ium = "ue_addons:incomplete_nuclear_mechanism"
	let iatm = "ue_addons:incomplete_antimatter_mechanism"
	let iclm = "ue_addons:incomplete_colorful_mechanism"
	let iscm = "ue_addons:incomplete_sculk_mechanism"
	let iprm = "create:incomplete_precision_mechanism"
	let inem = "ue_addons:incomplete_nether_mechanism"
	let ipim = "ue_addons:incomplete_pigiron_mechanism"
	let iCom = "ue_addons:incomplete_cobalt_mechanism"

	// 木质
	create.sequenced_assembly("ue_addons:wooden_mechanism", [
		"#forge:stripped_logs"
	], [
		create.pressing(iwm, iwm),
		create.deploying(iwm, [iwm, "minecraft:stick"]),
		create.cutting(iwm, iwm),
		create.deploying(iwm, [iwm, "ue_addons:basic_mechanism_part"])
	]).transitionalItem(iwm).loops(1)

	// 石质
	create.sequenced_assembly("ue_addons:stone_mechanism", [
		"#forge:stone"
	], [
		create.pressing(ism, ism),
		create.deploying(ism, [ism, "minecraft:flint"]),
		create.deploying(ism, [ism, "tconstruct:seared_brick"]),
		create.deploying(ism, [ism, "ue_addons:basic_mechanism_part"])
	]).transitionalItem(ism).loops(1)

	// 铁质
	create.sequenced_assembly("ue_addons:iron_mechanism", [
		"#forge:plates/iron"
	], [
		create.cutting(iim, iim),
		create.pressing(iim, iim),
		create.deploying(iim, [iim, "minecraft:iron_nugget"]),
		create.deploying(iim, [iim, "ue_addons:basic_mechanism_part"])
	]).transitionalItem(iim).loops(1)

	// 铜质
	create.sequenced_assembly("ue_addons:copper_mechanism", [
		"#forge:plates/copper"
	], [
		create.cutting(icm, icm),
		create.pressing(icm, icm),
		create.deploying(icm, [icm, "#forge:nuggets/copper"]),
		create.deploying(icm, [icm, "create:fluid_pipe"]),
		create.deploying(icm, [icm, "thermal:cured_rubber"]),
		create.filling(icm, [icm, Fluid.of("minecraft:water", 500)]),
		create.deploying(icm, [icm, "ue_addons:mechanical_mechanism_part"])
	]).transitionalItem(icm).loops(1)

	// 安山
	create.sequenced_assembly("ue_addons:andesite_mechanism", [
		"#forge:plates/andesite_alloy"
	], [
		create.cutting(iam, iam),
		create.pressing(iam, iam),
		create.deploying(iam, [iam, "create:cogwheel"]),
		create.deploying(iam, [iam, "ue_addons:mechanical_mechanism_part"])
	]).transitionalItem(iam).loops(1)

	// 金质
	create.sequenced_assembly("ue_addons:gold_mechanism", [
		"#forge:plates/gold"
	], [
		create.cutting(igm, igm),
		create.pressing(igm, igm),
		create.deploying(igm, [igm, "#forge:nuggets/gold"]),
		create.deploying(iam, [igm, "ue_addons:basic_mechanism_part"])
	]).transitionalItem(igm).loops(1)

	// 精密
	create.sequenced_assembly("create:precision_mechanism", [
		"#forge:plates/brass"
	], [
		create.cutting(iprm, iprm),
		create.pressing(iprm, iprm),
		create.deploying(iprm, [iprm, "create:cogwheel"]),
		create.deploying(iprm, [iprm, "create:electron_tube"]),
		create.deploying(iprm, [iprm, "ue_addons:mechanical_mechanism_part"])
	]).transitionalItem(iprm).loops(1).id("create:sequenced_assembly/precision_mechanism")

	// 感光
	create.sequenced_assembly("ue_addons:photosensitive_mechanism", [
		"minecraft:quartz_slab"
	], [
		create.pressing(ipm, ipm),
		create.deploying(ipm, [ipm, "minecraft:amethyst_shard"]),
		create.deploying(ipm, [ipm, "minecraft:glowstone_dust"]),
		create.deploying(ipm, [ipm, "ue_addons:mechanical_mechanism_part"])
	]).transitionalItem(ipm).loops(1)

	// 热力
	create.sequenced_assembly("ue_addons:thermal_mechanism", [
		"#forge:plates/invar"
	], [
		create.cutting(itm, itm),
		create.pressing(itm, itm),
		create.deploying(itm, [itm, "thermal:rf_coil"]),
		create.deploying(itm, [itm, "#forge:gears/constantan"]),
		create.deploying(itm, [itm, "ue_addons:flux_mechanism_part"])
	]).transitionalItem(itm).loops(1)

	// 强化
	create.sequenced_assembly("ue_addons:feinforced_mechanism", [
		"#forge:plates/electrum"
	], [
		create.cutting(ifm, ifm),
		create.pressing(ifm, ifm),
		create.deploying(ifm, [ifm, "thermal:rf_coil"]),
		create.deploying(ifm, [ifm, "#forge:gears/signalum"]),
		create.deploying(ifm, [ifm, "ue_addons:flux_mechanism_part"])
	]).transitionalItem(ifm).loops(1)

	// 谐振
	create.sequenced_assembly("ue_addons:resonant_mechanism", [
		"#forge:plates/enderium"
	], [
		create.cutting(irm, irm),
		create.pressing(irm, irm),
		create.deploying(irm, [irm, "thermal:rf_coil"]),
		create.deploying(irm, [irm, "#forge:gears/lumium"]),
		create.deploying(irm, [irm, "ue_addons:flux_mechanism_part"])
	]).transitionalItem(irm).loops(1)

	// 自然
	create.sequenced_assembly("ue_addons:nature_mechanism", [
		"minecraft:grass_block"
	], [
		create.pressing(inm, inm),
		create.deploying(inm, [inm, "#minecraft:flowers"]),
		create.filling(inm, [inm, Fluid.water(500)]),
		create.deploying(inm, [inm, "ue_addons:magical_mechanism_part"])
	]).transitionalItem(inm).loops(1)

	// 铁路
	create.sequenced_assembly("ue_addons:railway_mechanism", [
		"create:precision_mechanism"
	], [
		create.deploying(itrm, [itrm, "#forge:plates/obsidian"]),
		create.cutting(itrm, itrm),
		create.pressing(itrm, itrm),
	]).transitionalItem(itrm).loops(1)

	// 末影
	create.sequenced_assembly("ue_addons:ender_mechanism", [
		"#forge:plates/obsidian"
	], [
		create.deploying(iem, [iem, "minecraft:ender_pearl"]),
		create.deploying(iem, [iem, "#forge:dusts/diamond"]),
		create.deploying(iem, [iem, "ue_addons:magical_mechanism_part"]),
	]).transitionalItem(iem).loops(1)

	// 轻型工程
	create.sequenced_assembly("ue_addons:light_engineering_mechanism", [
		"#forge:sheetmetals/iron"
	], [
		create.pressing(ilem, ilem),
		create.deploying(ilem, [ilem, "immersiveengineering:component_iron"]),
		create.deploying(ilem, [ilem, "#forge:wires/copper"]),
		create.deploying(ilem, [ilem, "ue_addons:engineering_mechanism_part"]),
	]).transitionalItem(ilem).loops(1)

	// 重型工程
	create.sequenced_assembly("ue_addons:heavy_engineering_mechanism", [
		"#forge:sheetmetals/steel"
	], [
		create.pressing(ihem, ihem),
		create.deploying(ihem, [ihem, "immersiveengineering:component_steel"]),
		create.deploying(ihem, [ihem, "#forge:wires/electrum"]),
		create.deploying(ihem, [ihem, "ue_addons:engineering_mechanism_part"]),
	]).transitionalItem(ihem).loops(1)

	// 线圈
	create.sequenced_assembly("ue_addons:coil_mechanism", [
		"ue_addons:light_engineering_mechanism"
	], [
		create.pressing(icom, icom),
		create.deploying(icom, [icom, "#forge:wires/copper"]),
		create.deploying(icom, [icom, "#forge:wires/electrum"]),
		create.deploying(icom, [icom, "#forge:wires/aluminum"]),
		create.deploying(icom, [icom, "#forge:wires/steel"]),
	]).transitionalItem(icom).loops(1)

	// 附魔
	create.sequenced_assembly("ue_addons:enchanted_mechanism", [
		"#forge:storage_blocks/lapis"
	], [
		create.pressing(ienm, ienm),
		create.filling(ienm, [ienm, Fluid.of("create_enchantment_industry:experience", 500)]),
		create.deploying(ienm, [ienm, "ue_addons:magical_mechanism_part"]),
	]).transitionalItem(ienm).loops(1)

	// 智能
	create.sequenced_assembly("ue_addons:smart_mechanism", [
		"#forge:plates/silver"
	], [
		create.pressing(ismm, ismm),
		create.deploying(ismm, [ismm, "ae2:logic_processor"]),
		create.deploying(ismm, [ismm, "ae2:calculation_processor"]),
		create.deploying(ismm, [ismm, "ae2:engineering_processor"]),
		create.deploying(ismm, [ismm, "ue_addons:engineering_mechanism_part"]),
	]).transitionalItem(ismm).loops(1)

	// 基础通用
	create.sequenced_assembly("ue_addons:basic_mekanism_mechanism", [
		"#forge:plates/steel"
	], [
		create.cutting(ibmm, ibmm),
		create.pressing(ibmm, ibmm),
		create.deploying(ibmm, [ibmm, "mekanism:basic_control_circuit"]),
		create.deploying(ibmm, [ibmm, "minecraft:redstone"]),
		create.deploying(ibmm, [ibmm, "#forge:ingots/iron"]),
		create.deploying(ibmm, [ibmm, "ue_addons:mekanism_mechanism_part"]),
	]).transitionalItem(ibmm).loops(1)

	// 高级通用
	create.sequenced_assembly("ue_addons:advanced_mekanism_mechanism", [
		"ue_addons:basic_mekanism_mechanism"
	], [
		create.pressing(iamm, iamm),
		create.deploying(iamm, [iamm, "mekanism:advanced_control_circuit"]),
		create.deploying(iamm, [iamm, "mekanism:alloy_infused"]),
		create.deploying(iamm, [iamm, "#forge:ingots/osmium"]),
	]).transitionalItem(iamm).loops(1)

	// 精英通用
	create.sequenced_assembly("ue_addons:elite_mekanism_mechanism", [
		"ue_addons:advanced_mekanism_mechanism"
	], [
		create.pressing(iemm, iemm),
		create.deploying(iemm, [iemm, "mekanism:elite_control_circuit"]),
		create.deploying(iemm, [iemm, "mekanism:alloy_reinforced"]),
		create.deploying(iemm, [iemm, "#forge:ingots/gold"]),
	]).transitionalItem(iemm).loops(1)

	// 终极通用
	create.sequenced_assembly("ue_addons:ultimate_mekanism_mechanism", [
		"ue_addons:elite_mekanism_mechanism"
	], [
		create.pressing(iumm, iumm),
		create.deploying(iumm, [iumm, "mekanism:ultimate_control_circuit"]),
		create.deploying(iumm, [iumm, "mekanism:alloy_atomic"]),
		create.deploying(iumm, [iumm, "#forge:gems/diamond"]),
	]).transitionalItem(iumm).loops(1)

	// 结构
	create.sequenced_assembly("ue_addons:structure_mechanism", [
		"#forge:plates/steel"
	], [
		create.cutting(istm, istm),
		create.pressing(istm, istm),
		create.deploying(istm, [istm, "mekanism:hdpe_sheet"]),
		create.deploying(istm, [istm, "#forge:plates/copper"]),
		create.deploying(istm, [istm, "#forge:plates/lead"]),
		create.deploying(istm, [istm, "#forge:plates/osmium"]),
		create.deploying(istm, [istm, "#forge:plates/tin"]),
		create.deploying(istm, [istm, "ue_addons:mekanism_mechanism_part"]),
	]).transitionalItem(istm).loops(1)

	// 核能
	create.sequenced_assembly("ue_addons:nuclear_mechanism", [
		"#forge:plates/lead"
	], [
		create.cutting(ium, ium),
		create.pressing(ium, ium),
		create.deploying(ium, [ium, "mekanism:pellet_polonium"]),
		create.deploying(ium, [ium, "mekanism:pellet_plutonium"]),
		create.deploying(ium, [ium, "ue_addons:quantum_mechanism_part"]),
	]).transitionalItem(ium).loops(1)

	// 反物质
	create.sequenced_assembly("ue_addons:antimatter_mechanism", [
		"ae2:singularity"
	], [
		create.pressing(iatm, iatm),
		create.deploying(iatm, [iatm, "mekanism:pellet_antimatter"]),
		create.deploying(iatm, [iatm, "ue_addons:quantum_mechanism_part"]),
	]).transitionalItem(iatm).loops(1)

	// 多彩
	create.sequenced_assembly("ue_addons:colorful_mechanism", [
		"mekanism:dye_base"
	], [
		create.deploying(iclm, [iclm, "ae2:black_lumen_paint_ball"]),
		create.deploying(iclm, [iclm, "ae2:red_lumen_paint_ball"]),
		create.deploying(iclm, [iclm, "ae2:green_lumen_paint_ball"]),
		create.deploying(iclm, [iclm, "ae2:blue_lumen_paint_ball"]),
		create.deploying(iclm, [iclm, "ae2:white_lumen_paint_ball"]),
		create.deploying(iclm, [iclm, "ue_addons:magical_mechanism_part"])
	]).transitionalItem(iclm).loops(1)

	// 幽匿
	create.sequenced_assembly("ue_addons:sculk_mechanism", [
		"minecraft:netherite_ingot"
	], [
		create.deploying(iscm, [iscm, "minecraft:sculk_sensor"]),
		create.deploying(iscm, [iscm, "minecraft:sculk_shrieker"]),
		create.deploying(iscm, [iscm, "minecraft:sculk_catalyst"]),
		create.deploying(iscm, [iscm, "ue_addons:magical_mechanism_part"])
	]).transitionalItem(iscm).loops(1)

	// 下界
	create.sequenced_assembly("ue_addons:nether_mechanism", [
		"create:blaze_cake"
	], [
		create.filling(inem, [inem, Fluid.of("tconstruct:liquid_soul", 500)]),
		create.deploying(inem, [inem, "#forge:nuggets/gold"]),
		create.deploying(inem, [inem, "ue_addons:magical_mechanism_part"]),
	]).transitionalItem(inem).loops(1)

	// 生铁
	create.sequenced_assembly("ue_addons:pigiron_mechanism",[
		"#forge:plates/pig_iron"
	],[
		create.filling(ipim,[ipim,Fluid.of("tconstruct:molten_pig_iron",90)]),
		create.pressing(ipim,ipim),
		create.deploying(ipim,[ipim,"#forge:nuggets/pig_iron"]),
		create.deploying(ipim,[ipim,"ue_addons:basic_mechanism_part"])
	]).transitionalItem(ipim).loops(1)

	// 钴质
	create.sequenced_assembly('ue_addons:cobalt_mechanism',[
		'#forge:plates/cobalt'
	],[
		create.deploying(iCom,[iCom,'vintageimprovements:cobalt_spring']),
		create.deploying(iCom,[iCom,'thermal:rf_coil']),
		create.deploying(iCom,[iCom,'ue_addons:engineering_mechanism_part'])
	]).transitionalItem(iCom).loops(1)
})