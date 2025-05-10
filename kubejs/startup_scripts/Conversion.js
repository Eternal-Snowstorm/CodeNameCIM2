StartupEvents.postInit((event) => {
	let $Category =
		Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
	let $ConversionRecipe =
		Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")

	function addConversionRecipes(output, input) {
		$Category.RECIPES.add($ConversionRecipe.create(input, output))
	}

	// 光辉石
	addConversionRecipes("create:refined_radiance", "create:chromatic_compound")

	// 暗影钢
	addConversionRecipes("create:shadow_steel", "create:chromatic_compound")

	// 桶
	addConversionRecipes("ue_addons:bucket", "minecraft:bucket")

	// 构件之力催生器
	addConversionRecipes("minecraft:andesite", "ue_addons:andesite_mechanism")
	addConversionRecipes("minecraft:iron_ore", "ue_addons:andesite_mechanism")
	addConversionRecipes("create:zinc_ore", "ue_addons:andesite_mechanism")
	addConversionRecipes("minecraft:deepslate_iron_ore", "ue_addons:andesite_mechanism")
	addConversionRecipes("create:deepslate_zinc_ore", "ue_addons:andesite_mechanism")
	
	addConversionRecipes("tconstruct:cobalt_ore", "ue_addons:cobalt_mechanism")
	
	addConversionRecipes("ue_addons:copper_mechanism", "ue_addons:copper_mechanism")
	addConversionRecipes("minecraft:gold_ore", "ue_addons:copper_mechanism")
	addConversionRecipes("minecraft:clay", "ue_addons:copper_mechanism")
	addConversionRecipes("minecraft:deepslate_copper_ore", "ue_addons:copper_mechanism")
	addConversionRecipes("minecraft:deepslate_gold_ore", "ue_addons:copper_mechanism")
	
	addConversionRecipes("minecraft:lapis_ore", "ue_addons:enchanted_mechanism")
	addConversionRecipes("create:experience_block", "ue_addons:enchanted_mechanism")
	addConversionRecipes("minecraft:deepslate_lapis_ore", "ue_addons:enchanted_mechanism")
	
	addConversionRecipes("minecraft:gold_ore", "ue_addons:gold_mechanism")
	addConversionRecipes("thermal:cinnabar_ore", "ue_addons:gold_mechanism")
	addConversionRecipes("ue_addons:quartz_ore", "ue_addons:gold_mechanism")
	addConversionRecipes("minecraft:deepslate_gold_ore", "ue_addons:gold_mechanism")
	addConversionRecipes("thermal:deepslate_cinnabar_ore", "ue_addons:gold_mechanism")
	addConversionRecipes("ue_addons:deepslate_quartz_ore", "ue_addons:gold_mechanism")
	
	addConversionRecipes("minecraft:iron_ore", "ue_addons:iron_mechanism")
	addConversionRecipes("minecraft:redstone_ore", "ue_addons:iron_mechanism")
	addConversionRecipes("thermal:nickel_ore", "ue_addons:iron_mechanism")
	addConversionRecipes("minecraft:deepslate_iron_ore", "ue_addons:iron_mechanism")
	addConversionRecipes("minecraft:deepslate_redstone_ore", "ue_addons:iron_mechanism")
	addConversionRecipes("ue_addons:deepslate_quartz_ore", "ue_addons:iron_mechanism")
	
	addConversionRecipes("minecraft:netherrack", "ue_addons:nether_mechanism")
	addConversionRecipes("minecraft:magma_block", "ue_addons:nether_mechanism")
	addConversionRecipes("minecraft:nether_quartz_ore", "ue_addons:nether_mechanism")
	addConversionRecipes("minecraft:nether_gold_ore", "ue_addons:nether_mechanism")
	addConversionRecipes("minecraft:ancient_debris", "ue_addons:nether_mechanism")
	
	addConversionRecipes("minecraft:redstone_ore", "vintageimprovements:redstone_module")
	addConversionRecipes("minecraft:deepslate_redstone_ore", "vintageimprovements:redstone_module")

	
	addConversionRecipes("minecraft:andesite", "ue_addons:stone_mechanism")
	addConversionRecipes("minecraft:diorite", "ue_addons:stone_mechanism")
	addConversionRecipes("minecraft:granite", "ue_addons:stone_mechanism")
	addConversionRecipes("create:limestone", "ue_addons:stone_mechanism")
	addConversionRecipes("tconstruct:seared_stone", "ue_addons:stone_mechanism")
	addConversionRecipes("minecraft:tuff", "ue_addons:stone_mechanism")
	addConversionRecipes("create:scoria", "ue_addons:stone_mechanism")
	addConversionRecipes("minecraft:dripstone_block", "ue_addons:stone_mechanism")
	addConversionRecipes("minecraft:smooth_basalt", "ue_addons:stone_mechanism")
	
	addConversionRecipes("minecraft:coal_ore", "ue_addons:wooden_mechanism")
	addConversionRecipes("minecraft:deepslate_coal_ore", "ue_addons:wooden_mechanism")
	addConversionRecipes("minecraft:deepslate_diamond_ore", "ue_addons:wooden_mechanism")
})