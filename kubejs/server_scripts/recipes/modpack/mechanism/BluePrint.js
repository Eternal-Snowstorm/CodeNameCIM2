ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	addRecipe("cmi:tier_1_aviation_mechanism_basement", [
		"#forge:plates/tungsten_steel",
		"#forge:circuits/basic",
		"#forge:plates/etrium"
	])

	addRecipe("cmi:basic_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/basic",
		"#forge:plates/signalum"
	])

	addRecipe("cmi:ender_mechanism_basement", [
		"#forge:plates/obsidian",
		"#forge:dusts/sapphire",
		"#forge:dusts/ender_pearl"
	])

	addRecipe("cmi:tier_2_aviation_mechanism_basement", [
		"#forge:circuits/advanced",
		"#forge:plates/desh",
		"#forge:plates/etrium"
	])

	addRecipe("cmi:advanced_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/advanced",
		"#forge:plates/twinite"
	])

	addRecipe("cmi:tier_3_aviation_mechanism_basement", [
		"#forge:plates/ostrum",
		"#forge:plates/etrium",
		"#forge:circuits/elite"
	])

	addRecipe("cmi:elite_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"ae2:engineering_processor",
		"#forge:plates/dragonsteel"
	])

	/**
	 * 
	 * @param {Internal.Item_} output 输出物品
	 * @param {Array<Internal.Item_>} inputs 输入物品
	 */
	function addRecipe(output, inputs) {
		return immersiveengineering.blueprint(output, inputs)
			.blueprint("mechanism_basements")
	}
})