ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	let Inc = {
		WOODEN: "cmi:incomplete_wooden_mechanism",
		STONE: "cmi:incomplete_stone_mechanism",
		IRON: "cmi:incomplete_iron_mechanism",
		COPPER: "cmi:incomplete_copper_mechanism",
		ANDESITE: "cmi:incomplete_andesite_mechanism",
		GOLD: "cmi:incomplete_gold_mechanism",
		PHOTO: "cmi:incomplete_photosensitive_mechanism",
		THERMAL: "cmi:incomplete_thermal_mechanism",
		REINFORCED: "cmi:incomplete_reinforced_mechanism",
		RESONANT: "cmi:incomplete_resonant_mechanism",
		NATURE: "cmi:incomplete_nature_mechanism",
		LIGHT: "cmi:incomplete_light_engineering_mechanism",
		HEAVY: "cmi:incomplete_heavy_engineering_mechanism",
		ENDER: "cmi:incomplete_ender_mechanism",
		COIL: "cmi:incomplete_coil_mechanism",
		ENCHANTED: "cmi:incomplete_enchanted_mechanism",
		SMART: "cmi:incomplete_smart_mechanism",
		AIR: "cmi:incomplete_air_tight_mechanism",
		BASIC: "cmi:incomplete_basic_mekanism_mechanism",
		ADVANCED: "cmi:incomplete_advanced_mekanism_mechanism",
		ELITE: "cmi:incomplete_elite_mekanism_mechanism",
		ULTIMATE: "cmi:incomplete_ultimate_mekanism_mechanism",
		NUKE: "cmi:incomplete_nuclear_mechanism",
		ANTI: "cmi:incomplete_antimatter_mechanism",
		COLOR: "cmi:incomplete_colorful_mechanism",
		SCULK: "cmi:incomplete_sculk_mechanism",
		PRES: "create:incomplete_precision_mechanism",
		NETHER: "cmi:incomplete_nether_mechanism",
		PIG_IRON: "cmi:incomplete_pig_iron_mechanism",
		COBALT: "cmi:incomplete_cobalt_mechanism",
		COMPUTE: "cmi:incomplete_computing_mechanism",
		RAILWAY: "cmi:incomplete_railway_mechanism",
		T1: "cmi:incomplete_tier_1_aviation_mechanism",
		T2: "cmi:incomplete_tier_2_aviation_mechanism",
		T3: "cmi:incomplete_tier_3_aviation_mechanism",
		T4: "cmi:incomplete_tier_4_aviation_mechanism",
		POTION: "cmi:incomplete_potion_mechanism",
		REDSTONE: "vintageimprovements:incomplete_redstone_module",
		STEAM: "cmi:incomplete_bronze_mechanism"
	}

	// 木质
	create.sequenced_assembly("cmi:wooden_mechanism", [
		"#minecraft:planks"
	], [
		create.pressing(Inc.WOODEN, Inc.WOODEN),
		create.deploying(Inc.WOODEN, [Inc.WOODEN, "minecraft:stick"]),
		create.cutting(Inc.WOODEN, Inc.WOODEN),
		create.deploying(Inc.WOODEN, [Inc.WOODEN, "cmi:basic_mechanism_part"])
	]).transitionalItem(Inc.WOODEN).loops(1)

	// 石质
	create.sequenced_assembly("cmi:stone_mechanism", [
		"#forge:stone"
	], [
		create.pressing(Inc.STONE, Inc.STONE),
		create.deploying(Inc.STONE, [Inc.STONE, "minecraft:flint"]),
		create.deploying(Inc.STONE, [Inc.STONE, "tconstruct:seared_brick"]),
		create.deploying(Inc.STONE, [Inc.STONE, "cmi:basic_mechanism_part"])
	]).transitionalItem(Inc.STONE).loops(1)

	// 铁质
	create.sequenced_assembly("cmi:iron_mechanism", [
		"#forge:plates/iron"
	], [
		create.cutting(Inc.IRON, Inc.IRON),
		create.deploying(Inc.IRON, [Inc.IRON, "minecraft:iron_nugget"]),
		create.deploying(Inc.IRON, [Inc.IRON, "cmi:basic_mechanism_part"])
	]).transitionalItem(Inc.IRON).loops(1)

	// 铜质
	create.sequenced_assembly("cmi:copper_mechanism", [
		"#forge:plates/copper"
	], [
		create.deploying(Inc.COPPER, [Inc.COPPER, "#forge:nuggets/copper"]),
		create.filling(Inc.COPPER, [Inc.COPPER, Fluid.of("minecraft:water", 500)]),
		create.deploying(Inc.COPPER, [Inc.COPPER, "#forge:glass_panes"]),
		create.deploying(Inc.COPPER, [Inc.COPPER, "thermal:cured_rubber"]),
		create.deploying(Inc.COPPER, [Inc.COPPER, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(Inc.COPPER).loops(1)

	// 安山
	create.sequenced_assembly("cmi:andesite_mechanism", [
		"#forge:plates/andesite_alloy"
	], [
		create.deploying(Inc.ANDESITE, [Inc.ANDESITE, "#create:incomplete_cogwheels"]),
		create.deploying(Inc.ANDESITE, [Inc.ANDESITE, "#create:incomplete_large_cogwheels"]),
		create.deploying(Inc.ANDESITE, [Inc.ANDESITE, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(Inc.ANDESITE).loops(1)

	// 金质
	create.sequenced_assembly("cmi:gold_mechanism", [
		"#forge:plates/gold"
	], [
		create.cutting(Inc.GOLD, Inc.GOLD),
		create.deploying(Inc.GOLD, [Inc.GOLD, "#forge:nuggets/gold"]),
		create.deploying(Inc.ANDESITE, [Inc.GOLD, "cmi:basic_mechanism_part"])
	]).transitionalItem(Inc.GOLD).loops(1)

	// 精密
	create.sequenced_assembly("create:precision_mechanism", [
		"#forge:plates/brass"
	], [
		create.deploying(Inc.PRES, [Inc.PRES, "#forge:nuggets/brass"]),
		create.pressing(Inc.PRES, Inc.PRES),
		create.deploying(Inc.PRES, [Inc.PRES, "#create:incomplete_large_cogwheels"]),
		create.deploying(Inc.PRES, [Inc.PRES, "create:electron_tube"]),
		create.deploying(Inc.PRES, [Inc.PRES, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(Inc.PRES).loops(1)

	// 感光
	create.sequenced_assembly("cmi:photosensitive_mechanism", [
		"#forge:gems/quartz"
	], [
		create.pressing(Inc.PHOTO, Inc.PHOTO),
		create.deploying(Inc.PHOTO, [Inc.PHOTO, "cmi:charged_amethyst"]),
		vintageimprovements.polishing(Inc.PHOTO, Inc.PHOTO),
		create.deploying(Inc.PHOTO, [Inc.PHOTO, "minecraft:glowstone_dust"]),
		create.deploying(Inc.PHOTO, [Inc.PHOTO, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(Inc.PHOTO).loops(1)

	// 热力
	create.sequenced_assembly("cmi:thermal_mechanism", [
		"#forge:plates/invar"
	], [
		create.deploying(Inc.THERMAL, [Inc.THERMAL, "thermal:redstone_servo"]),
		create.cutting(Inc.THERMAL, Inc.THERMAL),
		create.deploying(Inc.THERMAL, [Inc.THERMAL, "cmi:thermal_mechanism_augment"]),
		create.deploying(Inc.THERMAL, [Inc.THERMAL, "cmi:flux_mechanism_part"])
	]).transitionalItem(Inc.THERMAL).loops(1)

	// 强化
	create.sequenced_assembly("cmi:reinforced_mechanism", [
		"#forge:plates/electrum"
	], [
		create.deploying(Inc.REINFORCED, [Inc.REINFORCED, "thermal:redstone_servo"]),
		create.cutting(Inc.REINFORCED, Inc.REINFORCED),
		create.deploying(Inc.REINFORCED, [Inc.REINFORCED, "cmi:reinforced_mechanism_augment"]),
		create.deploying(Inc.REINFORCED, [Inc.REINFORCED, "cmi:flux_mechanism_part"])
	]).transitionalItem(Inc.REINFORCED).loops(1)

	// 谐振
	create.sequenced_assembly("cmi:resonant_mechanism", [
		"#forge:plates/enderium"
	], [
		create.deploying(Inc.RESONANT, [Inc.RESONANT, "thermal:redstone_servo"]),
		create.cutting(Inc.RESONANT, Inc.RESONANT),
		create.deploying(Inc.RESONANT, [Inc.RESONANT, "cmi:resonant_mechanism_augment"]),
		create.deploying(Inc.RESONANT, [Inc.RESONANT, "cmi:flux_mechanism_part"])
	]).transitionalItem(Inc.RESONANT).loops(1)

	// 自然
	create.sequenced_assembly("cmi:nature_mechanism", [
		"minecraft:grass_block"
	], [
		create.deploying(Inc.NATURE, [Inc.NATURE, "#minecraft:flowers"]),
		create.filling(Inc.NATURE, [Inc.NATURE, Fluid.of("minecraft:water", 500)]),
		create.deploying(Inc.NATURE, [Inc.NATURE, "cmi:magical_mechanism_part"])
	]).transitionalItem(Inc.NATURE).loops(1)

	// 铁路
	create.sequenced_assembly("cmi:railway_mechanism", [
		"cmi:dense_sturdy_sheet"
	], [
		vintageimprovements.curving(Inc.RAILWAY, [Inc.RAILWAY]).mode(1),
		create.deploying(Inc.RAILWAY, [Inc.RAILWAY, "#vintageimprovements:small_springs/brass"]),
		create.deploying(Inc.RAILWAY, [Inc.RAILWAY, "#forge:plates/brass"]),
		create.cutting(Inc.RAILWAY, Inc.RAILWAY),
		create.deploying(Inc.RAILWAY, [Inc.RAILWAY, "cmi:mechanical_mechanism_part"])
	]).transitionalItem(Inc.RAILWAY).loops(1)

	// 末影
	create.sequenced_assembly("cmi:ender_mechanism", [
		"cmi:ender_mechanism_basement"
	], [
		create.deploying(Inc.ENDER, [Inc.ENDER, "#forge:gears/sapphire"]),
		create.deploying(Inc.ENDER, [Inc.ENDER, "#forge:ender_pearls"]),
		create.deploying(Inc.ENDER, [Inc.ENDER, "cmi:magical_mechanism_part"]),
	]).transitionalItem(Inc.ENDER).loops(1)

	// 轻型工程
	create.sequenced_assembly("cmi:light_engineering_mechanism", [
		"#forge:plates/iron"
	], [
		create.deploying(Inc.LIGHT, [Inc.LIGHT, "#vintageimprovements:springs/constantan"]),
		create.filling(Inc.LIGHT, [Inc.LIGHT, Fluid.of("immersiveengineering:creosote", 100)]),
		create.deploying(Inc.LIGHT, [Inc.LIGHT, "cmi:light_engineering_mechanism_augment"]),
		create.deploying(Inc.LIGHT, [Inc.LIGHT, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(Inc.LIGHT).loops(1)

	// 重型工程
	create.sequenced_assembly("cmi:heavy_engineering_mechanism", [
		"#forge:plates/steel"
	], [
		create.deploying(Inc.HEAVY, [Inc.HEAVY, "#vintageimprovements:springs/invar"]),
		create.filling(Inc.HEAVY, [Inc.HEAVY, Fluid.of("thermal_extra:lubricant", 100)]),
		create.deploying(Inc.HEAVY, [Inc.HEAVY, "cmi:heavy_engineering_mechanism_augment"]),
		create.deploying(Inc.HEAVY, [Inc.HEAVY, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(Inc.HEAVY).loops(1)

	// 线圈
	create.sequenced_assembly("cmi:coil_mechanism", [
		"#forge:plates/iron"
	], [
		create.deploying(Inc.COIL, [Inc.COIL, "#forge:plates/copper"]),
		create.filling(Inc.COIL, [Inc.COIL, Fluid.of("thermal:redstone", 1000)]),
		create.deploying(Inc.COIL, [Inc.COIL, "cmi:coil_mechanism_augment"]),
		create.deploying(Inc.COIL, [Inc.COIL, "#forge:plates/electrum"]),
		create.deploying(Inc.COIL, [Inc.COIL, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(Inc.COIL).loops(1)

	// 附魔
	create.sequenced_assembly("cmi:enchanted_mechanism", [
		"#forge:gems/lapis"
	], [
		create.pressing(Inc.ENCHANTED, Inc.ENCHANTED),
		create.deploying(Inc.ENCHANTED, [Inc.ENCHANTED, "create:experience_nugget"]),
		create.deploying(Inc.ENCHANTED, [Inc.ENCHANTED, "minecraft:book"]),
		create.filling(Inc.ENCHANTED, [Inc.ENCHANTED, Fluid.of("create_enchantment_industry:experience", 30)]),
		create.deploying(Inc.ENCHANTED, [Inc.ENCHANTED, "cmi:magical_mechanism_part"]),
	]).transitionalItem(Inc.ENCHANTED).loops(1)

	// 智能
	create.sequenced_assembly("cmi:smart_mechanism", [
		"#forge:plates/silver"
	], [
		create.deploying(Inc.SMART, [Inc.SMART, "ae2:printed_silicon"]),
		create.pressing(Inc.SMART, Inc.SMART),
		create.deploying(Inc.SMART, [Inc.SMART, "cmi:smart_mechanism_augment"]),
		create.deploying(Inc.SMART, [Inc.SMART, "cmi:engineering_mechanism_part"]),
	]).transitionalItem(Inc.SMART).loops(1)

	// 气密
	create.sequenced_assembly("cmi:air_tight_mechanism", [
		"cmi:air_tight_mechanism_basement"
	], [
		create.deploying(Inc.AIR, [Inc.AIR, "#forge:plates/polyolefin"]),
		create.deploying(Inc.AIR, [Inc.AIR, "#forge:nuggets/silver"]),
		create.deploying(Inc.AIR, [Inc.AIR, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(Inc.AIR).loops(1)

	// 基础通用
	create.sequenced_assembly("cmi:basic_mekanism_mechanism", [
		"cmi:basic_mekanism_mechanism_basement"
	], [
		create.deploying(Inc.BASIC, [Inc.BASIC, "ae2:logic_processor"]),
		create.deploying(Inc.BASIC, [Inc.BASIC, "cmi:chromeplated_steel_gear"]),
		create.deploying(Inc.BASIC, [Inc.BASIC, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(Inc.BASIC).loops(1)

	// 高级通用
	create.sequenced_assembly("cmi:advanced_mekanism_mechanism", [
		"cmi:advanced_mekanism_mechanism_basement"
	], [
		create.deploying(Inc.ADVANCED, [Inc.ADVANCED, "ae2:calculation_processor"]),
		create.deploying(Inc.ADVANCED, [Inc.ADVANCED, "#forge:gears/chromeplated_steel"]),
		create.deploying(Inc.ADVANCED, [Inc.ADVANCED, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(Inc.ADVANCED).loops(1)

	// 精英通用
	create.sequenced_assembly("cmi:elite_mekanism_mechanism", [
		"cmi:elite_mekanism_mechanism_basement"
	], [
		create.deploying(Inc.ELITE, [Inc.ELITE, "ae2:engineering_processor"]),
		create.deploying(Inc.ELITE, [Inc.ELITE, "#forge:gears/chromeplated_steel"]),
		create.deploying(Inc.ELITE, [Inc.ELITE, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(Inc.ELITE).loops(1)

	// 终极通用
	create.sequenced_assembly("cmi:ultimate_mekanism_mechanism", [
		"cmi:ultimate_mekanism_mechanism_basement"
	], [
		create.deploying(Inc.ULTIMATE, [Inc.ULTIMATE, "advanced_ae:quantum_processor"]),
		create.deploying(Inc.ULTIMATE, [Inc.ULTIMATE, "#forge:gears/chromeplated_steel"]),
		create.deploying(Inc.ULTIMATE, [Inc.ULTIMATE, "cmi:mekanism_mechanism_part"]),
	]).transitionalItem(Inc.ULTIMATE).loops(1)

	// 核能
	create.sequenced_assembly("cmi:nuclear_mechanism", [
		"cmi:nuclear_mechanism_basement"
	], [
		create.deploying(Inc.NUKE, [Inc.NUKE, "mekanism:pellet_polonium"]),
		create.deploying(Inc.NUKE, [Inc.NUKE, "mekanism:pellet_plutonium"]),
		create.deploying(Inc.NUKE, [Inc.NUKE, "#forge:circuits/elite"]),
		create.deploying(Inc.NUKE, [Inc.NUKE, "cmi:quantum_mechanism_part"]),
	]).transitionalItem(Inc.NUKE).loops(1)

	// 反物质
	create.sequenced_assembly("cmi:antimatter_mechanism", [
		"cmi:antimatter_mechanism_basement"
	], [
		create.deploying(Inc.ANTI, [Inc.ANTI, "#forge:dusts/azure_neodymium"]),
		create.filling(Inc.ANTI, [Inc.ANTI, Fluid.of("cmi:molten_azure_neodymium", 90)]),
		create.deploying(Inc.ANTI, [Inc.ANTI, "#forge:pellets/antimatter"])
	]).transitionalItem(Inc.ANTI).loops(1)

	// 多彩
	create.sequenced_assembly("cmi:colorful_mechanism", [
		"#minecraft:wooden_slabs"
	], [
		create.deploying(Inc.COLOR, [Inc.COLOR, "minecraft:red_dye"]),
		create.deploying(Inc.COLOR, [Inc.COLOR, "minecraft:yellow_dye"]),
		create.deploying(Inc.COLOR, [Inc.COLOR, "minecraft:blue_dye"]),
		create.deploying(Inc.COLOR, [Inc.COLOR, "minecraft:white_dye"]),
		create.deploying(Inc.COLOR, [Inc.COLOR, "minecraft:black_dye"]),
		create.deploying(Inc.COLOR, [Inc.COLOR, "cmi:magical_mechanism_part"])
	]).transitionalItem(Inc.COLOR).loops(1)

	// 幽匿
	create.sequenced_assembly("cmi:sculk_mechanism", [
		"minecraft:sculk_catalyst"
	], [
		create.deploying(Inc.SCULK, [Inc.SCULK, "minecraft:sculk_sensor"]),
		create.deploying(Inc.SCULK, [Inc.SCULK, "minecraft:sculk_shrieker"]),
		create.deploying(Inc.SCULK, [Inc.SCULK, "cmi:magical_mechanism_part"])
	]).transitionalItem(Inc.SCULK).loops(1)

	// 下界
	create.sequenced_assembly("cmi:nether_mechanism", [
		"create:blaze_cake_base"
	], [
		create.pressing(Inc.NETHER, Inc.NETHER),
		create.filling(Inc.NETHER, [Inc.NETHER, Fluid.of("tconstruct:liquid_soul", 250)]),
		create.deploying(Inc.NETHER, [Inc.NETHER, "#tconstruct:fireballs"]),
		create.deploying(Inc.NETHER, [Inc.NETHER, "#forge:nuggets/gold"]),
		create.deploying(Inc.NETHER, [Inc.NETHER, "#forge:gems/quartz"]),
		create.deploying(Inc.NETHER, [Inc.NETHER, "cmi:magical_mechanism_part"]),
	]).transitionalItem(Inc.NETHER).loops(1)

	// 生铁
	create.sequenced_assembly("cmi:pig_iron_mechanism", [
		"#forge:plates/pig_iron"
	], [
		create.filling(Inc.PIG_IRON, [Inc.PIG_IRON, Fluid.of("tconstruct:molten_pig_iron", 90)]),
		create.pressing(Inc.PIG_IRON, Inc.PIG_IRON),
		create.deploying(Inc.PIG_IRON, [Inc.PIG_IRON, "#forge:nuggets/pig_iron"]),
		create.deploying(Inc.PIG_IRON, [Inc.PIG_IRON, "cmi:magical_mechanism_part"])
	]).transitionalItem(Inc.PIG_IRON).loops(1)

	// 钴质
	create.sequenced_assembly("cmi:cobalt_mechanism", [
		"#forge:plates/cobalt"
	], [
		create.deploying(Inc.COBALT, [Inc.COBALT, "vintageimprovements:cobalt_spring"]),
		create.deploying(Inc.COBALT, [Inc.COBALT, "thermal:rf_coil"]),
		create.deploying(Inc.COBALT, [Inc.COBALT, "cmi:engineering_mechanism_part"])
	]).transitionalItem(Inc.COBALT).loops(1)

	// 计算
	create.sequenced_assembly("cmi:computing_mechanism", [
		"cmi:computing_mechanism_basement"
	], [
		vintageimprovements.laser_cutting(Inc.COMPUTE, Inc.COMPUTE).energy(1000).maxChargeRate(100),
		create.deploying(Inc.COMPUTE, [Inc.COMPUTE, "ae2:logic_processor"]),
		create.deploying(Inc.COMPUTE, [Inc.COMPUTE, "ae2:calculation_processor"]),
		create.deploying(Inc.COMPUTE, [Inc.COMPUTE, "ae2:engineering_processor"]),
		create.deploying(Inc.COMPUTE, [Inc.COMPUTE, "advanced_ae:quantum_processor"]),
		create.deploying(Inc.COMPUTE, [Inc.COMPUTE, "cmi:mekanism_mechanism_part"])
	]).transitionalItem(Inc.COMPUTE).loops(1)

	// 1航天
	create.sequenced_assembly("cmi:tier_1_aviation_mechanism", [
		"cmi:tier_1_aviation_mechanism_basement"
	], [
		create.deploying(Inc.T1, [Inc.T1, "ad_astra:steel_tank"]),
		create.deploying(Inc.T1, [Inc.T1, "ad_astra:steel_engine"]),
		create.deploying(Inc.T1, [Inc.T1, "cmi:space_mechanism_part"])
	]).transitionalItem(Inc.T1).loops(1)

	// 2航天
	create.sequenced_assembly("cmi:tier_2_aviation_mechanism", [
		"cmi:tier_2_aviation_mechanism_basement"
	], [
		create.deploying(Inc.T2, [Inc.T2, "ad_astra:desh_tank"]),
		create.deploying(Inc.T2, [Inc.T2, "ad_astra:desh_engine"]),
		create.deploying(Inc.T2, [Inc.T2, "cmi:space_mechanism_part"])
	]).transitionalItem(Inc.T2).loops(1)

	// 3航天
	create.sequenced_assembly("cmi:tier_3_aviation_mechanism", [
		"cmi:tier_3_aviation_mechanism_basement"
	], [
		create.deploying(Inc.T3, [Inc.T3, "ad_astra:ostrum_tank"]),
		create.deploying(Inc.T3, [Inc.T3, "ad_astra:ostrum_engine"]),
		create.deploying(Inc.T3, [Inc.T3, "cmi:space_mechanism_part"])
	]).transitionalItem(Inc.T3).loops(1)

	// 4航天
	create.sequenced_assembly("cmi:tier_4_aviation_mechanism", [
		"cmi:tier_4_aviation_mechanism_basement"
	], [
		create.deploying(Inc.T4, [Inc.T4, "ad_astra:calorite_tank"]),
		create.deploying(Inc.T4, [Inc.T4, "ad_astra:calorite_engine"]),
		create.deploying(Inc.T4, [Inc.T4, "cmi:space_mechanism_part"])
	]).transitionalItem(Inc.T4).loops(1)

	// 秘药
	create.sequenced_assembly("cmi:potion_mechanism", [
		"#forge:glass"
	], [
		create.filling(Inc.POTION, [
			Inc.POTION,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:night_vision"
			})
		]),
		create.filling(Inc.POTION, [
			Inc.POTION,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:strength"
			})
		]),
		create.filling(Inc.POTION, [
			Inc.POTION,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:swiftness"
			})
		]),
		create.filling(Inc.POTION, [
			Inc.POTION,
			Fluid.of("create:potion", 250, {
				Bottle: "REGULAR",
				Potion: "minecraft:fire_resistance"
			})
		]),
		create.deploying(Inc.POTION, [Inc.POTION, "cmi:magical_mechanism_part"])
	]).transitionalItem(Inc.POTION).loops(1)

	// 红石
	create.sequenced_assembly("vintageimprovements:redstone_module", [
		"#create:sleepers"
	], [
		create.pressing(Inc.REDSTONE, Inc.REDSTONE),
		create.filling(Inc.REDSTONE, [Inc.REDSTONE, Fluid.of("thermal:redstone", 100)]),
		create.deploying(Inc.REDSTONE, [Inc.REDSTONE, "minecraft:redstone_torch"]),
		create.deploying(Inc.REDSTONE, [Inc.REDSTONE, "cmi:basic_mechanism_part"]),
	]).transitionalItem(Inc.REDSTONE).loops(1)

	// 青铜
	create.sequenced_assembly("cmi:bronze_mechanism", [
		"#forge:plates/bronze"
	], [
		create.deploying(Inc.STEAM, [Inc.STEAM, ["cmi:incomplete_bronze_cogwheel", "#forge:gears/bronze"]]),
		create.deploying(Inc.STEAM, [Inc.STEAM, "vintageimprovements:bronze_spring"]),
		create.deploying(Inc.STEAM, [Inc.STEAM, "#forge:nuggets/andesite_alloy"]),
		vintageimprovements.vibrating(Inc.STEAM, Inc.STEAM),
		create.deploying(Inc.STEAM, [Inc.STEAM, "cmi:mechanical_mechanism_part"]),
	]).transitionalItem(Inc.STEAM).loops(1)
})