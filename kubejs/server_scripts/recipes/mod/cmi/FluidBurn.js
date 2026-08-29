ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()
	const BASIC_HU = 100

	addFluidBurn("minecraft:lava", BASIC_HU)
	addFluidBurn("tconstruct:blazing_blood", BASIC_HU * 2)

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} hu 
	 * @returns 
	 */
	function addFluidBurn(fluid, hu) {
		return cmi.fluid_burn(Fluid.of(fluid, 10), hu)
	}
})