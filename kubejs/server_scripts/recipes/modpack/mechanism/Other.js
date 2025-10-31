ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	addRecipes("cmi:tier_1_aviation_mechanism_basement", [
		"#forge:plates/tungsten_steel",
		"#forge:circuits/basic",
		"#forge:plates/etrium"
	])

	addRecipes("cmi:basic_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/basic",
		"#forge:plates/signalum"
	])

	addRecipes("cmi:ender_mechanism_basement", [
		"#forge:plates/obsidian",
		"#forge:dusts/sapphire",
		"#forge:dusts/ender_pearl"
	])

	addRecipes("cmi:tier_2_aviation_mechanism_basement", [
		"#forge:circuits/advanced",
		"#forge:plates/desh",
		"#forge:plates/etrium"
	])

	/**
	 * 
	 * @param {Internal.Item_} output 输出
	 * @param {Array<Internal.Item_>} inputs 输入
	 */
	function addRecipes(output, inputs) {
		return immersiveengineering.blueprint(output, inputs)
			.blueprint("mechanism_basements")
	}
})