ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.mixing(Fluid.of("ue_addons:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_iron", 30)
	]).heatLevel("grilled")

	create.mixing(Fluid.of("ue_addons:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		Fluid.of("tconstruct:molten_zinc", 10)
	]).heatLevel("grilled")

	create.mixing(Fluid.of("ue_addons:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"3x #forge:nuggets/iron"
	]).heatLevel("grilled")

	create.mixing(Fluid.of("ue_addons:molten_andesite_alloy", 90), [
		"minecraft:andesite",
		"#forge:nuggets/zinc"
	]).heatLevel("grilled")

	create.mixing([Fluid.of("create_enchantment_industry:experience",3),'create_enchantment_industry:experience_rotor'],
  ['create:experience_nugget','create_enchantment_industry:experience_rotor']).heated()

  create.mixing([Fluid.of("create_enchantment_industry:experience",27),'create_enchantment_industry:experience_rotor'],
  ['create:experience_block','create_enchantment_industry:experience_rotor']).heated()
})