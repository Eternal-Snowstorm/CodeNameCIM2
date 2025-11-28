StartupEvents.postInit((event) => {
	let $Category =
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
		return $Category.RECIPES.add($ConversionRecipe.create(input, output))
	}

	// 光辉石
	addConversionRecipe("create:refined_radiance", "create:chromatic_compound")

	// 暗影钢
	addConversionRecipe("create:shadow_steel", "create:chromatic_compound")

	// 桶
	addConversionRecipe("cmi:bucket", "minecraft:bucket")

	// 构件之力催生器
	addConversionRecipe("minecraft:andesite", "cmi:andesite_mechanism")
	addConversionRecipe("minecraft:iron_ore", "cmi:andesite_mechanism")
	addConversionRecipe("create:zinc_ore", "cmi:andesite_mechanism")
	addConversionRecipe("minecraft:deepslate_iron_ore", "cmi:andesite_mechanism")
	addConversionRecipe("create:deepslate_zinc_ore", "cmi:andesite_mechanism")

	addConversionRecipe("tconstruct:cobalt_ore", "cmi:cobalt_mechanism")

	addConversionRecipe("minecraft:copper_ore", "cmi:copper_mechanism")
	addConversionRecipe("minecraft:gold_ore", "cmi:copper_mechanism")
	addConversionRecipe("minecraft:clay", "cmi:copper_mechanism")
	addConversionRecipe("minecraft:deepslate_copper_ore", "cmi:copper_mechanism")
	addConversionRecipe("minecraft:deepslate_gold_ore", "cmi:copper_mechanism")

	addConversionRecipe("minecraft:lapis_ore", "cmi:enchanted_mechanism")
	addConversionRecipe("create:experience_block", "cmi:enchanted_mechanism")
	addConversionRecipe("minecraft:deepslate_lapis_ore", "cmi:enchanted_mechanism")

	addConversionRecipe("minecraft:gold_ore", "cmi:gold_mechanism")
	addConversionRecipe("thermal:cinnabar_ore", "cmi:gold_mechanism")
	addConversionRecipe("cmi:quartz_ore", "cmi:gold_mechanism")
	addConversionRecipe("minecraft:deepslate_gold_ore", "cmi:gold_mechanism")
	addConversionRecipe("thermal:deepslate_cinnabar_ore", "cmi:gold_mechanism")
	addConversionRecipe("cmi:deepslate_quartz_ore", "cmi:gold_mechanism")

	addConversionRecipe("minecraft:iron_ore", "cmi:iron_mechanism")
	addConversionRecipe("minecraft:redstone_ore", "cmi:iron_mechanism")
	addConversionRecipe("thermal:nickel_ore", "cmi:iron_mechanism")
	addConversionRecipe("minecraft:deepslate_iron_ore", "cmi:iron_mechanism")
	addConversionRecipe("minecraft:deepslate_redstone_ore", "cmi:iron_mechanism")
	addConversionRecipe("cmi:deepslate_quartz_ore", "cmi:iron_mechanism")

	addConversionRecipe("minecraft:netherrack", "cmi:nether_mechanism")
	addConversionRecipe("minecraft:magma_block", "cmi:nether_mechanism")
	addConversionRecipe("minecraft:nether_quartz_ore", "cmi:nether_mechanism")
	addConversionRecipe("minecraft:nether_gold_ore", "cmi:nether_mechanism")
	addConversionRecipe("minecraft:ancient_debris", "cmi:nether_mechanism")

	addConversionRecipe("minecraft:redstone_ore", "vintageimprovements:redstone_module")
	addConversionRecipe("minecraft:deepslate_redstone_ore", "vintageimprovements:redstone_module")


	addConversionRecipe("minecraft:andesite", "cmi:stone_mechanism")
	addConversionRecipe("minecraft:diorite", "cmi:stone_mechanism")
	addConversionRecipe("minecraft:granite", "cmi:stone_mechanism")
	addConversionRecipe("create:limestone", "cmi:stone_mechanism")
	addConversionRecipe("tconstruct:seared_stone", "cmi:stone_mechanism")
	addConversionRecipe("minecraft:tuff", "cmi:stone_mechanism")
	addConversionRecipe("create:scoria", "cmi:stone_mechanism")
	addConversionRecipe("minecraft:dripstone_block", "cmi:stone_mechanism")
	addConversionRecipe("minecraft:smooth_basalt", "cmi:stone_mechanism")

	addConversionRecipe("minecraft:coal_ore", "cmi:wooden_mechanism")
	addConversionRecipe("minecraft:deepslate_coal_ore", "cmi:wooden_mechanism")
	addConversionRecipe("minecraft:deepslate_diamond_ore", "cmi:wooden_mechanism")


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