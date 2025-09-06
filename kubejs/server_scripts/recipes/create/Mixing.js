ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	// 熔融安山合金
	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_iron", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
		"minecraft:andesite",
		"#forge:nuggets/iron"
	]).heatRequirement("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 120), [
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
})