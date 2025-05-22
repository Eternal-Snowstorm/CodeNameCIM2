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
})