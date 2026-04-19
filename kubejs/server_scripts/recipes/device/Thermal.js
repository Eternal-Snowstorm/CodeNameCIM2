ServerEvents.recipes((event) => {
	let { thermal_extra, create, thermal } = event.recipes
	let inc = "cmi:incomplete_thermal_devices"

	/**
	 * 
	 * @param {(Internal.OutputFluid_|OutputItem_)[]} output 
	 * @param {(Internal.InputFluid_|InputItem_)[]} inputs 
	 * @returns 
	 */
	function addComponRecipe(output, inputs) {
		return thermal_extra.component_assembly(output, inputs)
			.energy(4000)
	}

	create.sequenced_assembly("thermal_extra:component_assembly", Casing.THERMAL, [
		create.deploying(inc, [inc, Mechanism.THERMAL.COM]),
		create.deploying(inc, [inc, "#forge:gears/iron"]),
		create.deploying(inc, [inc, "create:brass_hand"])
	]).transitionalItem(inc)
		.loops(1)
		.id("thermal_extra:crafting/component_assembly")

	addComponRecipe("thermal_extra:component_assembly", [
		Casing.THERMAL,
		Mechanism.THERMAL.COM,
		"#forge:gears/iron",
		"create:brass_hand"
	])

	thermal_extra.component_assembly("cmi:thermal_unit", [
		Fluid.of("thermal:resin", 50),
		"cmi:redstone_wire",
		"#forge:plates/invar"
	])
	thermal.smelter("cmi:blaze_unit", [
		"cmi:thermal_unit",
		"minecraft:blaze_powder"
	])
	thermal.smelter("cmi:basalz_unit", [
		"cmi:thermal_unit",
		"thermal:basalz_powder"
	])
	thermal.smelter("cmi:blitz_unit", [
		"cmi:thermal_unit",
		"thermal:blitz_powder"
	])
	thermal.smelter("cmi:blizz_unit", [
		"cmi:thermal_unit",
		"thermal:blizz_powder"
	])
})