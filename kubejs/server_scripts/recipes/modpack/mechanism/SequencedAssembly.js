ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes
	let iwm = "cmi:incomplete_wooden_mechanism"
	let ism = "cmi:incomplete_stone_mechanism"
	let iim = "cmi:incomplete_iron_mechanism"
	let icm = "cmi:incomplete_copper_mechanism"
	let iam = "cmi:incomplete_andesite_mechanism"
	let igm = "cmi:incomplete_gold_mechanism"
	let ipm = "cmi:incomplete_photosensitive_mechanism"
	let itm = "cmi:incomplete_thermal_mechanism"
	let ifm = "cmi:incomplete_reinforced_mechanism"
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
		create.deploying(icm, [icm, "#forge:nuggets/copper"]),
		create.filling(icm, [icm, Fluid.of("minecraft:water", 500)]),
		create.deploying(icm, [icm, "#forge:glass_panes"]),
		create.deploying(icm, [icm, "thermal:cured_rubber"]),
		create.deploying(icm, [icm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(icm).loops(1)

	// 安山
	create.sequenced_assembly("cmi:andesite_mechanism", [
		"#forge:plates/andesite_alloy"
	], [
		create.deploying(iam, [iam, "#create:incomplete_cogwheels"]),
		create.deploying(iam, [iam, "#create:incomplete_large_cogwheels"]),
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
		create.deploying(iprm, [iprm, "#forge:nuggets/brass"]),
		create.pressing(iprm, iprm),
		create.deploying(iprm, [iprm, "#create:incomplete_large_cogwheels"]),
		create.deploying(iprm, [iprm, "create:electron_tube"]),
		create.deploying(iprm, [iprm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iprm).loops(1)

	// 感光
	create.sequenced_assembly("cmi:photosensitive_mechanism", [
		"#forge:gems/quartz"
	], [
		create.pressing(ipm, ipm),
		create.deploying(ipm, [ipm, "cmi:charged_amethyst"]),
		vintageimprovements.polishing(ipm, ipm),
		create.deploying(ipm, [ipm, "minecraft:glowstone_dust"]),
		create.deploying(ipm, [ipm, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(ipm).loops(1)

	// 热力
	create.sequenced_assembly("cmi:thermal_mechanism", [
		"#forge:plates/invar"
	], [
		create.deploying(itm, [itm, "thermal:redstone_servo"]),
		create.cutting(itm, itm),
		create.deploying(itm, [itm, "cmi:thermal_mechanism_augment"]),
		create.deploying(itm, [itm, "cmi:flux_mechanism_part"])
	]).transitionalItem(itm).loops(1)

	// 强化
	create.sequenced_assembly("cmi:reinforced_mechanism", [
		"#forge:plates/electrum"
	], [
		create.deploying(ifm, [ifm, "thermal:redstone_servo"]),
		create.cutting(ifm, ifm),
		create.deploying(ifm, [ifm, "cmi:reinforced_mechanism_augment"]),
		create.deploying(ifm, [ifm, "cmi:flux_mechanism_part"])
	]).transitionalItem(ifm).loops(1)

	// 谐振
	create.sequenced_assembly("cmi:resonant_mechanism", [
		"#forge:plates/enderium"
	], [
		create.deploying(irm, [irm, "thermal:redstone_servo"]),
		create.cutting(irm, irm),
		create.deploying(irm, [irm, "cmi:resonant_mechanism_augment"]),
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
		vintageimprovements.curving(iram, iram)
			.head("vintageimprovements:convex_curving_head"),
		create.deploying(iram, [iram, "#vintageimprovements:small_springs/brass"]),
		create.deploying(iram, [iram, "#forge:plates/brass"]),
		create.cutting(iram, iram),
		create.deploying(iram, [iram, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(iram).loops(1)

	// 末影
	create.sequenced_assembly("cmi:ender_mechanism", [
		"cmi:ender_mechanism_basement"
	], [
		create.deploying(iem, [iem, "#forge:gears/sapphire"]),
		create.deploying(iem, [iem, "#forge:ender_pearls"]),
		create.deploying(iem, [iem, "cmi:magical_mechanism_part"]),
	]).transitionalItem(iem).loops(1)

	// 轻型工程
	create.sequenced_assembly("cmi:light_engineering_mechanism", [
		"#forge:plates/iron"
	], [
		create.deploying(ilem, [ilem, "#vintageimprovements:springs/constantan"]),
		create.filling(ilem, [ilem, Fluid.of("immersiveengineering:creosote", 100)]),
		create.deploying(ilem, [ilem, "cmi:light_engineering_mechanism_augment"]),
		create.deploying(ilem, [ilem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ilem).loops(1)

	// 重型工程
	create.sequenced_assembly("cmi:heavy_engineering_mechanism", [
		"#forge:plates/steel"
	], [
		create.deploying(ihem, [ihem, "#vintageimprovements:springs/invar"]),
		create.filling(ihem, [ihem, Fluid.of("cmi:lubricating_oil", 100)]),
		create.deploying(ihem, [ihem, "cmi:heavy_engineering_mechanism_augment"]),
		create.deploying(ihem, [ihem, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ihem).loops(1)

	// 线圈
	create.sequenced_assembly("cmi:coil_mechanism", [
		"#forge:plates/iron"
	], [
		create.deploying(icom, [icom, "#forge:plates/copper"]),
		create.filling(icom, [icom, Fluid.of("immersiveengineering:redstone_acid", 1000)]),
		create.deploying(icom, [icom, "cmi:coil_mechanism_augment"]),
		create.deploying(icom, [icom, "#forge:plates/electrum"]),
		create.deploying(icom, [icom, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(icom).loops(1)

	// 附魔
	create.sequenced_assembly("cmi:enchanted_mechanism", [
		"#forge:gems/lapis"
	], [
		create.pressing(ienm, ienm),
		create.deploying(ienm, [ienm, "create:experience_nugget"]),
		create.deploying(ienm, [ienm, "minecraft:book"]),
		create.filling(ienm, [ienm, Fluid.of("create_enchantment_industry:experience", 30)]),
		create.deploying(ienm, [ienm, "cmi:magical_mechanism_part"]),
	]).transitionalItem(ienm).loops(1)

	// 智能
	create.sequenced_assembly("cmi:smart_mechanism", [
		"#forge:plates/silver"
	], [
		create.deploying(ismm, [ismm, "#forge:ingots/hop_graphite"]),
		create.pressing(ismm, ismm),
		create.deploying(ismm, [ismm, "cmi:smart_mechanism_augment"]),
		create.deploying(ismm, [ismm, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(ismm).loops(1)

	// 气密
	create.sequenced_assembly("cmi:air_tight_mechanism", [
		"cmi:air_tight_mechanism_basement"
	], [
		create.deploying(iom, [iom, "#forge:plates/polyolefin"]),
		create.deploying(iom, [iom, "#forge:nuggets/platinum"]),
		create.deploying(iom, [iom, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(iom).loops(1)

	// 基础通用
	create.sequenced_assembly("cmi:basic_mekanism_mechanism", [
		"cmi:basic_mekanism_mechanism_basement"
	], [
		create.deploying(ibmm, [ibmm, "ae2:logic_processor"]),
		create.deploying(ibmm, [ibmm, "cmi:chromeplated_steel_gear"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(ibmm).loops(1)

	// 高级通用
	create.sequenced_assembly("cmi:advanced_mekanism_mechanism", [
		"cmi:advanced_mekanism_mechanism_basement"
	], [
		create.deploying(iamm, [iamm, "ae2:calculation_processor"]),
		create.deploying(iamm, [iamm, "#forge:gears/chromeplated_steel"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iamm).loops(1)

	// 精英通用
	create.sequenced_assembly("cmi:elite_mekanism_mechanism", [
		"cmi:elite_mekanism_mechanism_basement"
	], [
		create.deploying(iemm, [iemm, "ae2:engineering_processor"]),
		create.deploying(iemm, [iemm, "#forge:gears/chromeplated_steel"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iemm).loops(1)

	// 终极通用
	create.sequenced_assembly("cmi:ultimate_mekanism_mechanism", [
		"cmi:ultimate_mekanism_mechanism_basement"
	], [
		create.deploying(iumm, [iumm, "cmi:general_processor"]),
		create.deploying(iumm, [iumm, "#forge:gears/chromeplated_steel"]),
		create.deploying(ibmm, [ibmm, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(iumm).loops(1)

	// 核能
	create.sequenced_assembly("cmi:nuclear_mechanism", [
		"cmi:nuclear_mechanism_basement"
	], [
		create.deploying(ium, [ium, "mekanism:pellet_polonium"]),
		create.deploying(ium, [ium, "mekanism:pellet_plutonium"]),
		create.deploying(ium, [ium, "#forge:circuits/elite"]),
		create.deploying(ium, [ium, "cmi:quantum_mechanism_part"]),
	]).transitionalItem(ium).loops(1)

	// 反物质
	create.sequenced_assembly("cmi:antimatter_mechanism", [
		"cmi:antimatter_mechanism_basement"
	], [
		create.deploying(iatm, [iatm, "#forge:dusts/azure_neodymium"]),
		create.filling(iatm, [iatm, Fluid.of("cmi:molten_azure_neodymium", 90)]),
		create.deploying(iatm, [iatm, "#forge:pellets/antimatter"])
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
		"create:blaze_cake_base"
	], [
		create.pressing(inem, inem),
		create.filling(inem, [inem, Fluid.of("tconstruct:liquid_soul", 250)]),
		create.deploying(inem, [inem, "#tconstruct:fireballs"]),
		create.deploying(inem, [inem, "#forge:nuggets/gold"]),
		create.deploying(inem, [inem, "#forge:gems/quartz"]),
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
		"cmi:computing_mechanism_basement"
	], [
		vintageimprovements.laser_cutting(icpm, icpm).energy(1000).maxChargeRate(100),
		create.deploying(icbm, [icbm, "ae2:logic_processor"]),
		create.deploying(icbm, [icbm, "ae2:calculation_processor"]),
		create.deploying(icbm, [icbm, "ae2:engineering_processor"]),
		create.deploying(icbm, [icbm, "cmi:general_processor"]),
		create.deploying(icbm, [icbm, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(icpm).loops(1)

	// 1航天
	create.sequenced_assembly("cmi:tier_1_aviation_mechanism", [
		"cmi:tier_1_aviation_mechanism_basement"
	], [
		create.deploying(ir1m, [ir1m, "ad_astra:steel_tank"]),
		create.deploying(ir1m, [ir1m, "ad_astra:steel_engine"]),
		create.deploying(ir1m, [ir1m, "cmi:space_mechanism_part"])
	]).transitionalItem(ir1m).loops(1)

	// 2航天
	create.sequenced_assembly("cmi:tier_2_aviation_mechanism", [
		"cmi:tier_2_aviation_mechanism_basement"
	], [
		create.deploying(ir2m, [ir2m, "ad_astra:desh_tank"]),
		create.deploying(ir2m, [ir2m, "ad_astra:desh_engine"]),
		create.deploying(ir2m, [ir2m, "cmi:space_mechanism_part"])
	]).transitionalItem(ir2m).loops(1)

	// 3航天
	create.sequenced_assembly("cmi:tier_3_aviation_mechanism", [
		"cmi:tier_3_aviation_mechanism_basement"
	], [
		create.deploying(ir3m, [ir3m, "ad_astra:ostrum_tank"]),
		create.deploying(ir3m, [ir3m, "ad_astra:ostrum_engine"]),
		create.deploying(ir3m, [ir3m, "cmi:space_mechanism_part"])
	]).transitionalItem(ir3m).loops(1)

	// 4航天
	create.sequenced_assembly("cmi:tier_4_aviation_mechanism", [
		"cmi:tier_4_aviation_mechanism_basement"
	], [
		create.deploying(ir3m, [ir3m, "ad_astra:calorite_tank"]),
		create.deploying(ir3m, [ir3m, "ad_astra:calorite_engine"]),
		create.deploying(ir3m, [ir3m, "cmi:space_mechanism_part"])
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
		create.pressing(iram, iram),
		create.filling(iram, [iram, Fluid.of("thermal:redstone", 100)]),
		create.deploying(irsm, [irsm, "minecraft:redstone_torch"]),
		create.deploying(irsm, [irsm, "cmi:basic_mechanism_part"]),
	]).transitionalItem(irsm).loops(1)

	// 青铜
	create.sequenced_assembly("cmi:bronze_mechanism", [
		"#forge:plates/bronze"
	], [
		create.deploying(ibm, [ibm, "cmi:incomplete_bronze_cogwheel"]),
		create.deploying(ibm, [ibm, "vintageimprovements:bronze_spring"]),
		create.deploying(ibm, [ibm, "#forge:nuggets/andesite_alloy"]),
		vintageimprovements.vibrating(ibm, ibm),
		create.deploying(ibm, [ibm, "cmi:mechanical_mechanism_part"]),
	]).transitionalItem(ibm).loops(1)
})