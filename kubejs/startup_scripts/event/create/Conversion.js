StartupEvents.postInit((event) => {
	let $MysteriousItemConversionCategory =
		Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
	let $ConversionRecipe =
		Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")

	/**
	 * 
	 * @param {Internal.ItemStack_} output 
	 * @param {Internal.ItemStack_} input 
	 * @returns 
	 */
	function addConversionRecipe(output, input) {
		let create = $ConversionRecipe.create(input, output)
		return $MysteriousItemConversionCategory.RECIPES.add(create)
	}

	// 光辉石
	addConversionRecipe("create:refined_radiance", "create:chromatic_compound")

	// 暗影钢
	addConversionRecipe("create:shadow_steel", "create:chromatic_compound")

	// 桶
	addConversionRecipe("cmi:bucket", "minecraft:bucket")

	// ???
	addConversionRecipe("torcherino:torcherino", "minecraft:torch")
	addConversionRecipe("torcherino:lantern", "minecraft:lantern")
	addConversionRecipe("torcherino:lanterino", "minecraft:jack_o_lantern")
	addConversionRecipe("torcherino:compressed_torcherino", "torcherino:torcherino")
	addConversionRecipe("torcherino:compressed_lantern", "torcherino:lantern")
	addConversionRecipe("torcherino:compressed_lanterino", "torcherino:lanterino")
	addConversionRecipe("torcherino:double_compressed_torcherino", "torcherino:compressed_torcherino")
	addConversionRecipe("torcherino:double_compressed_lantern", "torcherino:compressed_lantern")
	addConversionRecipe("torcherino:double_compressed_lanterino", "torcherino:compressed_lanterino")

	let machines = [
		"smelting",
		"enriching",
		"crushing",
		"compressing",
		"combining",
		"purifying",
		"injecting",
		"infusing",
		"sawing"
	]
	machines.forEach((id) => {
		addConversionRecipe(`mekanism:basic_${id}_factory`, "mekanism:basic_tier_installer")
		addConversionRecipe(`mekanism:advanced_${id}_factory`, "mekanism:advanced_tier_installer")
		addConversionRecipe(`mekanism:elite_${id}_factory`, "mekanism:elite_tier_installer")
		addConversionRecipe(`mekanism:ultimate_${id}_factory`, "mekanism:ultimate_tier_installer")
	})
})