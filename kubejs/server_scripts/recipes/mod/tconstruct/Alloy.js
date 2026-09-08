ServerEvents.recipes((event) => {
	let { tconstruct } = event.getRecipes()

	tconstruct.alloy(Fluid.of("tconstruct:molten_pig_iron", 90 * 2))
		.temperature(811)
		.inputs([
			Fluid.tag("tag", "forge:molten_iron", 90),
			Fluid.tag("tag", "cmi:pig_iron_material", 500),
			Fluid.tag("tag", "forge:honey", 250)
		])
		.id("tconstruct:smeltery/alloys/molten_pig_iron")

	tconstruct.alloy(Fluid.of("tconstruct:molten_signalum", 360))
		.temperature(1231)
		.inputs([
			Fluid.tag("tag", "tconstruct:molten_lead", 90),
			Fluid.tag("tag", "tconstruct:molten_copper", 270),
			Fluid.tag("tag", "forge:redstone", 400)
		])
		.id("tconstruct:smeltery/alloys/molten_signalum")

	tconstruct.alloy(Fluid.of("tconstruct:molten_lumium", 360))
		.temperature(993)
		.inputs([
			Fluid.tag("tag", "tconstruct:molten_gold", 90),
			Fluid.tag("tag", "tconstruct:molten_tin", 270),
			Fluid.tag("tag", "forge:glowstone", 500)
		])
		.id("tconstruct:smeltery/alloys/molten_lumium")
})