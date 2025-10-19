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
	let ilem = "cmi:incomplete_light_engineering_mechanism"
	let ihem = "cmi:incomplete_heavy_engineering_mechanism"
	let iem = "cmi:incomplete_ender_mechanism"
	let icom = "cmi:incomplete_coil_mechanism"
	let ienm = "cmi:incomplete_enchanted_mechanism"
	let ismm = "cmi:incomplete_smart_mechanism"
	let iom = "cmi:incomplete_air_tight_mechanism"
	let ibmm = "cmi:incomplete_basic_mekanism_mechanism"
	let iamm = "cmi:incomplete_advanced_mekanism_mechanism"
	let iemm = "cmi:incomplete_elite_mekanism_mechanism"
	let iumm = "cmi:incomplete_ultimate_mekanism_mechanism"
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
	let ir1m = "cmi:incomplete_tier_1_aviation_mechanism"
	let ir2m = "cmi:incomplete_tier_2_aviation_mechanism"
	let ir3m = "cmi:incomplete_tier_3_aviation_mechanism"
	let ir4m = "cmi:incomplete_tier_4_aviation_mechanism"
	let ipom = "cmi:incomplete_potion_mechanism"
	let irsm = "vintageimprovements:incomplete_redstone_module"
	let ibm = "cmi:incomplete_bronze_mechanism"

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
		create.deploying(iim, [iim, "minecraft:iron_nugget"]),
		create.deploying(iim, [iim, "cmi:basic_mechanism_part"])
	]).transitionalItem(iim).loops(1)

	// 铜质
	create.sequenced_assembly("cmi:copper_mechanism", [
		"#forge:plates/copper"
	], [
		create.cutting(icm, icm),
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
		create.deploying(iam, [iam, "create:cogwheel"]),
		create.deploying(iam, [iam, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iam).loops(1)

	// 金质
	create.sequenced_assembly("cmi:gold_mechanism", [
		"#forge:plates/gold"
	], [
		create.cutting(igm, igm),
		create.deploying(igm, [igm, "#forge:nuggets/gold"]),
		create.deploying(iam, [igm, "cmi:basic_mechanism_part"])
	]).transitionalItem(igm).loops(1)

	// 精密
	create.sequenced_assembly("create:precision_mechanism", [
		"#forge:plates/brass"
	], [
		create.deploying(iprm, [iprm, "create:cogwheel"]),
		create.deploying(iprm, [iprm, "create:electron_tube"]),
		create.deploying(iprm, [iprm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iprm).loops(1)

	// 感光
	create.sequenced_assembly("cmi:photosensitive_mechanism", [
		"minecraft:quartz_slab"
	], [
		create.deploying(ipm, [ipm, "cmi:charged_amethyst"]),
		create.deploying(ipm, [ipm, "minecraft:glowstone_dust"]),
		create.deploying(ipm, [ipm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(ipm).loops(1)

	// 热力
	create.sequenced_assembly("cmi:thermal_mechanism", [
		"#forge:plates/invar"
	], [
		create.deploying(itm, [itm, "thermal:rf_coil"]),
		create.deploying(itm, [itm, "#forge:gears/constantan"]),
		create.deploying(itm, [itm, "cmi:flux_mechanism_part"])
	]).transitionalItem(itm).loops(1)

	// 强化
	create.sequenced_assembly("cmi:feinforced_mechanism", [
		"#forge:plates/electrum"
	], [
		create.deploying(ifm, [ifm, "thermal:rf_coil"]),
		create.deploying(ifm, [ifm, "#forge:gears/signalum"]),
		create.deploying(ifm, [ifm, "cmi:flux_mechanism_part"])
	]).transitionalItem(ifm).loops(1)

	// 谐振
	create.sequenced_assembly("cmi:resonant_mechanism", [
		"#forge:plates/enderium"
	], [
		create.deploying(irm, [irm, "thermal:rf_coil"]),
		create.deploying(irm, [irm, "#forge:gears/lumium"]),
		create.deploying(irm, [irm, "cmi:flux_mechanism_part"])
	]).transitionalItem(irm).loops(1)

	// 自然
	create.sequenced_assembly("cmi:nature_mechanism", [
		"minecraft:grass_block"
	], [
		create.deploying(inm, [inm, "#minecraft:flowers"]),
		create.filling(inm, [inm, Fluid.of("minecraft:water", 500)]),
		create.deploying(inm, [inm, "cmi:magical_mechanism_part"])
	]).transitionalItem(inm).loops(1)

	// 铁路
	create.sequenced_assembly("cmi:railway_mechanism", [
		"cmi:dense_sturdy_sheet"
	], [
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
		create.deploying(ilem, [ilem, "immersiveengineering:component_iron"]),
		create.deploying(ihem, [ihem, "immersiveengineering:electron_tube"]),
		create.deploying(ilem, [ilem, "#forge:wires/copper"]),
		create.deploying(ilem, [ilem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ilem).loops(1)

	// 重型工程
	create.sequenced_assembly("cmi:heavy_engineering_mechanism", [
		"#forge:sheetmetals/steel"
	], [
		create.deploying(ihem, [ihem, "immersiveengineering:component_steel"]),
		create.deploying(ihem, [ihem, "immersiveengineering:component_electronic"]),
		create.deploying(ihem, [ihem, "#forge:wires/electrum"]),
		create.filling(ihem, [ihem, Fluid.of("cmi:lubricating_oil", 100)]),
		create.deploying(ihem, [ihem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ihem).loops(1)

	// 线圈
	create.sequenced_assembly("cmi:coil_mechanism", [
		"immersiveengineering:sheetmetal_iron"
	], [
		create.deploying(icom, [icom, "cmi:simple_battery"]),
		create.deploying(icom, [icom, "immersiveengineering:wirecoil_copper"]),
		create.deploying(icom, [icom, "immersiveengineering:wirecoil_electrum"]),
		create.deploying(icom, [icom, "cmi:engineering_mechanism_part"]),
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
		create.deploying(ismm, [ismm, "ae2:logic_processor"]),
		create.deploying(ismm, [ismm, "ae2:calculation_processor"]),
		create.deploying(ismm, [ismm, "ae2:engineering_processor"]),
		create.deploying(ismm, [ismm, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ismm).loops(1)

	// 气密
	create.sequenced_assembly("cmi:air_tight_mechanism", [
		"#forge:plates/osmium"
	], [
		create.deploying(iom, [iom, "#forge:gears/electrum"]),
		create.deploying(iom, [iom, "#forge:plates/polyolefin"]),
		create.deploying(iom, [iom, "thermal:florb"]),
		create.deploying(iom, [iom, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(iom).loops(1)

	// 基础通用
	create.sequenced_assembly("cmi:basic_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(ibmm, [ibmm, "mekanism:basic_control_circuit"]),
		create.deploying(ibmm, [ibmm, "#forge:gears/ruby"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(ibmm).loops(1)

	// 高级通用
	create.sequenced_assembly("cmi:advanced_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(iamm, [iamm, "mekanism:advanced_control_circuit"]),
		create.deploying(iamm, [iamm, "#vintageimprovements:small_springs/osmium"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iamm).loops(1)

	// 精英通用
	create.sequenced_assembly("cmi:elite_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(iemm, [iemm, "mekanism:elite_control_circuit"]),
		create.deploying(iemm, [iemm, "#forge:plates/gold"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iemm).loops(1)

	// 终极通用
	create.sequenced_assembly("cmi:ultimate_mekanism_mechanism", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(iumm, [iumm, "mekanism:ultimate_control_circuit"]),
		create.deploying(iumm, [iumm, "minecraft:diamond"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iumm).loops(1)

	// 核能
	create.sequenced_assembly("cmi:nuclear_mechanism", [
		"#forge:plates/lead"
	], [
		create.deploying(ium, [ium, "mekanism:pellet_polonium"]),
		create.deploying(ium, [ium, "mekanism:pellet_plutonium"]),
		create.pressing(ium, ium),
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
		create.deploying(ipim, [ipim, "cmi:magical_mechanism_part"])
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

	// 1航天
	create.sequenced_assembly("cmi:tier_1_aviation_mechanism", [
		"#forge:plates/tungsten_steel"
	], [
		create.deploying(ir1m, [ir1m, "cmi:computer_component"]),
		create.deploying(ir1m, [ir1m, "ad_astra:steel_cable"]),
		create.deploying(ir1m, [ir1m, "ad_astra:steel_tank"]),
		create.deploying(ir1m, [ir1m, "cmi:space_mechanism_part"]),
	]).transitionalItem(ir1m).loops(1)

	// 2航天
	create.sequenced_assembly("cmi:tier_2_aviation_mechanism", [
		"#forge:plates/desh"
	], [
		create.deploying(ir2m, [ir2m, "cmi:computer_component"]),
		create.deploying(ir2m, [ir2m, "ad_astra:desh_cable"]),
		create.deploying(ir2m, [ir2m, "ad_astra:desh_tank"]),
		create.deploying(ir2m, [ir2m, "cmi:space_mechanism_part"]),
	]).transitionalItem(ir2m).loops(1)

	// 3航天
	create.sequenced_assembly("cmi:tier_3_aviation_mechanism", [
		"#forge:plates/ostrum"
	], [
		create.deploying(ir3m, [ir3m, "cmi:computer_component"]),
		create.deploying(ir3m, [ir3m, "ad_astra:desh_fluid_pipe"]),
		create.deploying(ir3m, [ir3m, "ad_astra:ostrum_tank"]),
		create.deploying(ir3m, [ir3m, "cmi:space_mechanism_part"]),
	]).transitionalItem(ir3m).loops(1)

	// 4航天
	create.sequenced_assembly("cmi:tier_4_aviation_mechanism", [
		"#forge:plates/calorite"
	], [
		create.deploying(ir4m, [ir4m, "cmi:computer_component"]),
		create.deploying(ir4m, [ir4m, "ad_astra:ostrum_fluid_pipe"]),
		create.deploying(ir4m, [ir4m, "ad_astra:calorite_tank"]),
		create.deploying(ir4m, [ir4m, "cmi:space_mechanism_part"]),
	]).transitionalItem(ir4m).loops(1)

	// 秘药
	create.sequenced_assembly("cmi:potion_mechanism", [
		"#forge:glass"
	], [
		create.filling(ipom, [
			ipom,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:night_vision"
			})
		]),
		create.filling(ipom, [
			ipom,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:strength"
			})
		]),
		create.filling(ipom, [
			ipom,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:swiftness"
			})
		]),
		create.filling(ipom, [
			ipom,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:fire_resistance"
			})
		]),
		create.deploying(ipom, [ipom, "cmi:magical_mechanism_part"])
	]).transitionalItem(ipom).loops(1)

	// 红石
	create.sequenced_assembly("vintageimprovements:redstone_module", [
		"#create:sleepers"
	], [
		create.deploying(irsm, [irsm, "minecraft:redstone_torch"]),
		create.deploying(irsm, [irsm, "cmi:basic_mechanism_part"]),
	]).transitionalItem(irsm).loops(1)

	// 青铜
	create.sequenced_assembly("cmi:bronze_mechanism", [
		"#forge:plates/bronze"
	], [
		create.cutting(ibm, ibm),
		create.deploying(ibm, [ibm, "vintageimprovements:bronze_spring"]),
		create.deploying(ibm, [ibm, "#forge:nuggets/bronze"]),
		create.deploying(ibm, [ibm, "create:flywheel"]),
		create.deploying(ibm, [ibm, "cmi:mechanical_mechanism_part"]),
	]).transitionalItem(ibm).loops(1)
})