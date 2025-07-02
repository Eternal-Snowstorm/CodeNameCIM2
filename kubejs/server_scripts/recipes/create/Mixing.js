ServerEvents.recipes((event) => {
	let { create } = event.recipes

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
})