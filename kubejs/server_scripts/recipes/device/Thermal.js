ServerEvents.recipes((event) => {
	let { thermal_extra, create, thermal, kubejs } = event.recipes
	let Inc = "cmi:incomplete_thermal_devices"

	/**
	 * 
	 * @param {(Internal.OutputFluid_|OutputItem_)[]} output 
	 * @param {(Internal.InputFluid_|InputItem_)[]} inputs 
	 * @returns 
	 */
	function addComponRecipe(output, inputs) {
		return thermal_extra.component_assembly(output, inputs)
			.energy(4000)
	}

	create.sequenced_assembly("thermal_extra:component_assembly", Casing.THERMAL, [
		create.deploying(Inc, [Inc, Mechanism.THERMAL.COM]),
		create.deploying(Inc, [Inc, "#forge:gears/iron"]),
		create.deploying(Inc, [Inc, "create:brass_hand"])
	]).transitionalItem(Inc)
		.loops(1)
		.id("thermal_extra:crafting/component_assembly")

	addComponRecipe("thermal_extra:component_assembly", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"thermal:rf_coil",
		"create:brass_hand"
	])

	// 热力单元
	addComponRecipe("cmi:thermal_unit", [
		Fluid.of("thermal:resin", 50),
		"#forge:plates/redstone",
		"#forge:plates/invar"
	])
	thermal.bottler("cmi:blaze_unit", [
		"cmi:thermal_unit",
		Fluid.of("tconstruct:blazing_blood", 100)
	])
	thermal.bottler("cmi:basalz_unit", [
		"cmi:thermal_unit",
		Fluid.of("thermalconstruct:basalz_blood", 100)
	])
	thermal.bottler("cmi:blitz_unit", [
		"cmi:thermal_unit",
		Fluid.of("thermalconstruct:blitz_blood", 100)
	])
	thermal.bottler("cmi:blizz_unit", [
		"cmi:thermal_unit",
		Fluid.of("thermalconstruct:blizz_blood", 100)
	])

	// 热力单元
	// 磨粉机
	addComponRecipe("thermal:machine_pulverizer", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		"#forge:gears/iron"
	]).id("thermal:machine_pulverizer")
	// 灌装机
	addComponRecipe("thermal:machine_bottler", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		Mechanism.COPPER.COM
	]).id("thermal:machine_bottler")
	// 合成器
	addComponRecipe("thermal:machine_crafter", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		"create:crafting_blueprint"
	]).id("thermal:machine_crafter")
	// 锯木机
	addComponRecipe("thermal:machine_sawmill", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		"thermal:saw_blade"
	]).id("thermal:machine_sawmill")
	// 粉末
	addComponRecipe("cmi:void_dust_collector", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		"thermal:drill_head"
	])
	// 离心机
	addComponRecipe("thermal:machine_centrifuge", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:thermal_unit",
		"#vintageimprovements:springs"
	]).id("thermal:machine_centrifuge")

	// 烈焰单元
	// 电炉
	addComponRecipe("thermal:machine_furnace", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:blaze_unit",
		"create:blaze_burner"
	]).id("thermal:machine_furnace")
	// 感应炉
	addComponRecipe("thermal:machine_smelter", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:blaze_unit",
		"create:whisk"
	]).id("thermal:machine_smelter")
	// 精炼机
	addComponRecipe("thermal:machine_refinery", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"cmi:blaze_unit",
		Mechanism.IRON.COM
	]).id("thermal:machine_refinery")
	// 脱水机
	addComponRecipe("thermal_extra:endothermic_dehydrator", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blaze_unit",
		Mechanism.NETHER.COM
	]).id("thermal_extra:crafting/endothermic_dehydrator")
	// 熔岩炉
	addComponRecipe("thermal:machine_crucible", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blaze_unit",
		Mechanism.STONE.COM
	]).id("thermal:machine_crucible")
	// 高级精炼机
	addComponRecipe("thermal_extra:advanced_refinery", [
		"thermal:machine_refinery",
		Mechanism.REINFORCED.COM,
		"cmi:blaze_unit",
		Mechanism.IRON.COM
	]).id("thermal_extra:crafting/advanced_refinery")

	// 大地单元
	// TNT
	addComponRecipe("thermal_extra:nitratic_igniter", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:basalz_unit",
		"#forge:gears/tungsten_steel"
	]).id("thermal_extra:crafting/nitratic_igniter")
	// 热解炉
	addComponRecipe("thermal:machine_pyrolyzer", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:basalz_unit",
		"create:blaze_burner"
	]).id("thermal:machine_pyrolyzer")
	// 冲压机
	addComponRecipe("thermal:machine_press", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:basalz_unit",
		"cmi:hammer_head"
	]).id("thermal:machine_press")

	// 狂风单元
	// 结晶器
	addComponRecipe("thermal:machine_crystallizer", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blitz_unit",
		"create:propeller"
	]).id("thermal:machine_crystallizer")
	// 有机灌注
	addComponRecipe("thermal:machine_insolator", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blitz_unit",
		Mechanism.NATURE.COM
	]).id("thermal:machine_insolator")
	// 酿造
	addComponRecipe("thermal:machine_brewer", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blitz_unit",
		Mechanism.POTION.COM
	]).id("thermal:machine_brewer")

	// 暴雪单元
	// 冷冻机
	addComponRecipe("thermal:machine_chiller", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blizz_unit",
		"create:propeller"
	]).id("thermal:machine_chiller")
	// 混合机
	addComponRecipe("thermal_extra:fluid_mixer", [
		Casing.THERMAL,
		Mechanism.REINFORCED.COM,
		"cmi:blizz_unit",
		"create:whisk"
	]).id("thermal_extra:crafting/fluid_mixer")

	// 能源炉
	// 烧煤的
	addComponRecipe("thermal:dynamo_stirling", [
		Mechanism.COIL.COM,
		Mechanism.STONE.COM,
		"cmi:thermal_unit",
		"#forge:plates/invar",
		"#forge:plates/stone"
	]).id("thermal:dynamo_stirling")
	// 烧岩浆的
	addComponRecipe("thermal:dynamo_magmatic", [
		Mechanism.COIL.COM,
		Mechanism.NETHER.COM,
		"cmi:blaze_unit",
		"#forge:plates/invar",
		"minecraft:nether_bricks"
	]).id("thermal:dynamo_magmatic")
	// 烧油的
	addComponRecipe("thermal:dynamo_compression", [
		Mechanism.COIL.COM,
		Mechanism.THERMAL.COM,
		"cmi:basalz_unit",
		"#forge:plates/invar",
		"#forge:plates/steel"
	]).id("thermal:dynamo_compression")
	// 燃烧我的卡路里
	addComponRecipe("thermal:dynamo_gourmand", [
		Mechanism.COIL.COM,
		Mechanism.PIG_IRON.COM,
		"cmi:basalz_unit",
		"#forge:plates/invar",
		"#forge:plates/bronze"
	]).id("thermal:dynamo_gourmand")
	// 烧冰的
	addComponRecipe("thermal_extra:dynamo_frost", [
		Mechanism.COIL.COM,
		Mechanism.COBALT.COM,
		"cmi:blizz_unit",
		"#forge:plates/invar",
		"#forge:plates/silver"
	]).id("thermal_extra:crafting/dynamo_frost")
	// 烧宝石的
	addComponRecipe("thermal:dynamo_lapidary", [
		Mechanism.COIL.COM,
		Mechanism.PHOTO.COM,
		"cmi:blizz_unit",
		"#forge:plates/invar",
		"#forge:gems/diamond"
	]).id("thermal:dynamo_lapidary")
	// 烧钱的
	addComponRecipe("thermal:dynamo_numismatic", [
		Mechanism.COIL.COM,
		Mechanism.GOLD.COM,
		"cmi:blitz_unit",
		"#forge:plates/invar",
		"#forge:plates/electrum"
	]).id("thermal:dynamo_numismatic")
	// 烧附魔书的
	addComponRecipe("thermal:dynamo_disenchantment", [
		Mechanism.COIL.COM,
		Mechanism.ENCHANTED.COM,
		"cmi:blitz_unit",
		"#forge:plates/invar",
		"#forge:storage_blocks/lapis"
	]).id("thermal:dynamo_disenchantment")

	// 设备
	// 树脂提取
	kubejs.shaped("thermal:device_tree_extractor", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "treetap:tap"
	}).id("thermal:device_tree_extractor")
	// 水产捕捞
	kubejs.shaped("thermal:device_fisher", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "minecraft:fishing_rod"
	}).id("thermal:device_fisher")
	// 蓄水器
	kubejs.shaped("thermal:device_water_gen", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.COPPER.COM,
		C: Casing.COPPER,
		X: "minecraft:bucket"
	}).id("thermal:device_water_gen")
	// 堆肥桶
	kubejs.shaped("thermal:device_composter", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "minecraft:composter"
	}).id("thermal:device_composter")
	// 造石机
	kubejs.shaped("thermal:device_rock_gen", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "minecraft:piston"
	}).id("thermal:device_rock_gen")
	// 真空漏斗
	kubejs.shaped("thermal:device_collector", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ENDER.COM,
		C: Casing.THERMAL,
		X: "minecraft:hopper"
	}).id("thermal:device_collector")
	// 经验聚集
	kubejs.shaped("thermal:device_xp_condenser", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ENCHANTED.COM,
		C: Casing.THERMAL,
		X: "thermal:xp_crystal"
	}).id("thermal:device_xp_condenser")
	// 销毁器
	kubejs.shaped("thermal:device_nullifier", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "minecraft:lava_bucket"
	}).id("thermal:device_nullifier")
	// 药水雾化
	kubejs.shaped("thermal:device_potion_diffuser", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ENCHANTED.COM,
		C: Casing.THERMAL,
		X: Mechanism.POTION.COM
	}).id("thermal:device_potion_diffuser")
	//蜂箱漏斗
	kubejs.shaped("thermal:device_hive_extractor", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "minecraft:shears",
	}).id("thermal:device_hive_extractor")
})