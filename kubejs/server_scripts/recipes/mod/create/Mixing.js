ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 熔融安山合金
	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 180), [
		"#forge:dusts/andesite",
		Fluid.of("tconstruct:molten_iron", 10)
	]).heatRequirement("grilled")
		.id("create:mixing/andesite_alloy")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 180), [
		"#forge:dusts/andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"#forge:dusts/andesite",
		"#forge:nuggets/iron"
	]).heatRequirement("grilled")
		.id("create:mixing/andesite_alloy_from_zinc")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"#forge:dusts/andesite",
		"#forge:nuggets/zinc"
	]).heatRequirement("grilled")

	// // 玫瑰石英
	// create.mixing("create:rose_quartz", [
	// 	"ae2:charged_certus_quartz_crystal",
	// 	Fluid.of("thermal:redstone", 200)
	// ])

	// create.mixing("create:rose_quartz", [
	// 	"minecraft:quartz",
	// 	Fluid.of("thermal:redstone", 400)
	// ])

	// 工业铁
	create.mixing(Fluid.of("cmi:molten_industrial_iron", 90), [
		[
			"#create:crushed_raw_materials/iron",
			"#forge:dusts/iron"
		],
		"cmi:lime"
	]).heated().id("createdeco:compacting/industrial_iron_ingot")

	// 殷钢
	create.mixing(Fluid.of("tconstruct:molten_invar", 270), [
		"2x #forge:ingots/iron",
		"#forge:ingots/nickel"
	]).heated()

	// 盐水
	create.mixing(Fluid.of("mekanism:brine", 50), [
		Fluid.of("minecraft:water", 50),
		"#forge:dusts/salt"
	])

	// 红石酸
	create.mixing(Fluid.of("immersiveengineering:redstone_acid", 200), [
		"#forge:dusts/redstone",
		Fluid.of("tconstruct:molten_lead", 90)
	]).heated()

	create.mixing(Fluid.of("immersiveengineering:redstone_acid", 400), [
		Fluid.of("thermal:redstone", 200),
		Fluid.of("tconstruct:molten_lead", 180)
	])

	// 杂酚油
	create.mixing("immersiveengineering:treated_wood_horizontal", [
		Fluid.of("immersiveengineering:creosote", 125),
		"#minecraft:planks"
	])

	create.mixing("8x immersiveengineering:treated_wood_horizontal", [
		Fluid.of("immersiveengineering:creosote", 1000),
		"8x #minecraft:planks"
	])

	// 砖块
	create.mixing(Fluid.of("tconstruct:seared_stone", 250), [
		"tconstruct:grout"
	]).processingTime(150).heatRequirement("grilled")

	create.mixing(Fluid.of("tconstruct:scorched_stone", 250), [
		"tconstruct:nether_grout"
	]).processingTime(150).heatRequirement("grilled")

	// 液态灵魂
	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"#minecraft:soul_fire_base_blocks"
	]).processingTime(150).heatRequirement("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"tconstruct:soul_glass"
	]).processingTime(150).heatRequirement("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 250), [
		"tconstruct:soul_glass_pane"
	]).processingTime(150).heatRequirement("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"4x minecraft:weeping_vines",
		"4x minecraft:twisting_vines",
		Fluid.of("minecraft:lava", 250)
	])

	// 晶体催生剂
	create.mixing(Fluid.of("cmi:crystal_catalyt", 1000), [
		Fluid.of("sliceanddice:fertilizer", 500),
		"#cmi:crystals",
		"16x #forge:crops"
	]).heated()

	create.mixing(Fluid.of("cmi:crystal_catalyt", 1000), [
		Fluid.of("sliceanddice:fertilizer", 500),
		"#cmi:crystals",
		"32x #forge:seeds"
	]).heated()

	// 熔融黄铜
	create.mixing(Fluid.of("tconstruct:molten_brass", 180), [
		Fluid.of("tconstruct:molten_zinc", 90),
		Fluid.of("tconstruct:molten_copper", 90)
	]).heated().id("create:mixing/brass_ingot")

	// 淤泥悬浊液
	create.mixing(Fluid.of("cmi:sludge_suspension", 1000), [
		{ fluidTag: "deepdrilling:sludge", amount: 500 },
		Fluid.of("minecraft:water", 500)
	])

	// 青铜(超前期配方)
	create.mixing(Fluid.of("tconstruct:molten_bronze", 90), [
		"2x #forge:ingots/copper",
		"2x #forge:ingots/tin"
	]).heatRequirement(global.HeatLevel["grilled"])

	create.mixing(Fluid.of("tconstruct:molten_bronze", 90), [
		"2x #forge:raw_materials/copper",
		"2x #forge:raw_materials/tin"
	]).heatRequirement(global.HeatLevel["grilled"])

	// 墨囊
	create.mixing("2x minecraft:ink_sac", [
		Fluid.of("minecraft:water", 250),
		"#forge:dyes/black",
		"immersiveengineering:ersatz_leather"
	])

	// 烈焰血
	create.mixing(Fluid.of("tconstruct:blazing_blood", 500), [
		Fluid.of("cmi:blood", 500),
		"minecraft:blaze_powder"
	]).heated()

	create.mixing(Fluid.of("tconstruct:blazing_blood", 2000), [
		Fluid.of("cmi:blood", 1000),
		"#forge:rods/blaze"
	]).superheated()

	// 不稳定红石
	create.mixing(Fluid.of("thermal:redstone", 50), [
		"#forge:dusts/redstone"
	]).heated()

	// 盐酸
	create.mixing(Fluid.of("cmi:hydrochloric_acid", 1000), [
		Fluid.of("mekanism:hydrogen_chloride", 500),
		Fluid.of("minecraft:water", 500)
	])

	// 泥土
	create.mixing("2x minecraft:dirt", [
		"#forge:sand",
		"#forge:fuels/bio"
	])

	// 工业铁
	create.mixing(Fluid.of("cmi:molten_industrial_iron", 90), [
		"#forge:dusts/iron"
	]).heatRequirement("grilled")
})