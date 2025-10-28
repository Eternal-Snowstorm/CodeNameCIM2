ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	addMechanismBasementsRecipes("cmi:tier_1_aviation_mechanism_basement", [
		"#forge:plates/tungsten_steel",
		"#forge:circuits/basic",
		"#forge:plates/etrium"
	])

	addMechanismBasementsRecipes("cmi:basic_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/basic",
		"#forge:plates/signalum"
	])

	/**
	 * 
	 * @param {Internal.Item_} output 输出
	 * @param {Array<Internal.Item_>} inputs 输入
	 */
	function addMechanismBasementsRecipes(output, inputs) {
		return immersiveengineering.blueprint(output, inputs)
			.blueprint("mechanism_basements")
	}
})