ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.alloy(Fluid.of("tconstruct:molten_pig_iron", 90 * 2))
		.temperature(811)
		.inputs([
			Fluid.tag("tag", "forge:molten_iron", 90),
			Fluid.tag("tag", "cmi:pig_iron_material", 500),
			Fluid.tag("tag", "forge:honey", 250)
		])
		.id("tconstruct:smeltery/alloys/molten_pig_iron")
})