ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	// 熔融安山合金
	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 180), [
		"#forge:dusts/andesite",
		Fluid.of("tconstruct:molten_iron", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 180), [
		"#forge:dusts/andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"#forge:dusts/andesite",
		"#forge:nuggets/iron"
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"#forge:dusts/andesite",
		"#forge:nuggets/zinc"
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_iron", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"#forge:nuggets/iron"
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"#forge:nuggets/zinc"
	]).heatRequirement("grilled")

	// 殷钢
	create.mixing(Fluid.of("tconstruct:molten_invar", 270), [
		"2x #forge:ingots/iron",
		"#forge:ingots/nickel"
	]).heated()

	// 末影
	create.mixing(Fluid.of("thermal:ender", 1000), [
		Fluid.of("thermal:ender", 250),
		"minecraft:chorus_fruit"
	]).heated()

	// 石英纤维
	create.mixing("ae2:quartz_fiber", [
		"ae2:certus_quartz_dust", "#forge:glass"
	])

	// 盐水
	create.mixing(Fluid.of("mekanism:brine", 50), [
		Fluid.of("minecraft:water", 50),
		"#forge:dusts/salt"
	])

	// 四氯化硅
	vintageimprovements.pressurizing(Fluid.of("cmi:tetrachlorosilane", 500), [
		Fluid.of("mekanism:chlorine", 500),
		"#forge:silicon"
	]).processingTime(200).superheated()

	// 晶体催生剂
	create.mixing(Fluid.of("cmi:crystal_catalyt", 1000), [
		Fluid.of("immersiveengineering:redstone_acid", 500),
		"#cmi:crystals",
		"16x #forge:crops"
	]).heated()

	create.mixing(Fluid.of("cmi:crystal_catalyt", 1000), [
		Fluid.of("immersiveengineering:redstone_acid", 500),
		"#cmi:crystals",
		"32x #forge:seeds"
	]).heated()

	// 淤泥悬浊液
	// create.mixing(Fluid.of("cmi:sludge_suspension", 1000), [
	// 	Fluid.of("deepdrilling:sludge", 500),
	// 	Fluid.of("minecraft:water", 500)
	// ])

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

	create.mixing(Fluid.of("cmi:hydrochloric_acid", 1000), [
		Fluid.of("mekanism:hydrogen_chloride", 500),
		Fluid.of("minecraft:water", 500)
	])
})