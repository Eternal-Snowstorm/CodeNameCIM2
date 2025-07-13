ServerEvents.recipes((event) => {
	let { create, mekanism, vintageimprovements } = event.recipes

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_iron", 30)
	]).heatLevel("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatLevel("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"3x #forge:nuggets/iron"
	]).heatLevel("grilled")

	create.mixing(Fluid.of("cmi:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"#forge:nuggets/zinc"
	]).heatLevel("grilled")

	//殷钢
	create.mixing(Fluid.of("tconstruct:molten_invar", 270), [
		"2x #forge:ingots/iron",
		"#forge:ingots/nickel"
	]).heated()

	//末影
	create.mixing(Fluid.of("thermal:ender", 1000), [
		Fluid.of("thermal:ender", 250),
		"minecraft:chorus_fruit"
	]).heated()

	// 盐水
	create.mixing(Fluid.of("mekanism:brine", 50), [
		Fluid.of("minecraft:water", 50),
		"#forge:dusts/salt"
	])

	// SiCl4
	vintageimprovements.pressurizing(Fluid.of("cmi:tetrachlorosilane", 500), [
		Fluid.of("mekanism:chlorine", 500),
		"#forge:silicon"
	]).processingTime(200).superheated()
})