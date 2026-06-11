ServerEvents.recipes((event) => {
	removeRecipe(event, [
		"jei:/mekanism/processing/lategame/antimatter/from_pellet",
		"jei:/mekanism/evaporating/brine",
		"jei:/mekanism/processing/lategame/antimatter_pellet/from_gas",
		"jei:/mekanism/infusion_conversion/redstone/from_block",
		"jei:/mekanism/infusion_conversion/redstone/from_dust",
		"jei:/mekanism/infusion_conversion/carbon/from_coal_block",
		"jei:/mekanism/infusion_conversion/carbon/from_charcoal_block",
		"jei:/mekanism/infusion_conversion/carbon/from_coal",
		"jei:/mekanism/infusion_conversion/carbon/from_charcoal"
	])
})