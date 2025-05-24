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
	addConversionRecipes("cmi:bucket", "minecraft:bucket")

	// 构件之力催生器
	addConversionRecipes("minecraft:andesite", "cmi:andesite_mechanism")
	addConversionRecipes("minecraft:iron_ore", "cmi:andesite_mechanism")
	addConversionRecipes("create:zinc_ore", "cmi:andesite_mechanism")
	addConversionRecipes("minecraft:deepslate_iron_ore", "cmi:andesite_mechanism")
	addConversionRecipes("create:deepslate_zinc_ore", "cmi:andesite_mechanism")
	
	addConversionRecipes("tconstruct:cobalt_ore", "cmi:cobalt_mechanism")
	
	addConversionRecipes("minecraft:copper_ore", "cmi:copper_mechanism")
	addConversionRecipes("minecraft:gold_ore", "cmi:copper_mechanism")
	addConversionRecipes("minecraft:clay", "cmi:copper_mechanism")
	addConversionRecipes("minecraft:deepslate_copper_ore", "cmi:copper_mechanism")
	addConversionRecipes("minecraft:deepslate_gold_ore", "cmi:copper_mechanism")
	
	addConversionRecipes("minecraft:lapis_ore", "cmi:enchanted_mechanism")
	addConversionRecipes("create:experience_block", "cmi:enchanted_mechanism")
	addConversionRecipes("minecraft:deepslate_lapis_ore", "cmi:enchanted_mechanism")
	
	addConversionRecipes("minecraft:gold_ore", "cmi:gold_mechanism")
	addConversionRecipes("thermal:cinnabar_ore", "cmi:gold_mechanism")
	addConversionRecipes("cmi:quartz_ore", "cmi:gold_mechanism")
	addConversionRecipes("minecraft:deepslate_gold_ore", "cmi:gold_mechanism")
	addConversionRecipes("thermal:deepslate_cinnabar_ore", "cmi:gold_mechanism")
	addConversionRecipes("cmi:deepslate_quartz_ore", "cmi:gold_mechanism")
	
	addConversionRecipes("minecraft:iron_ore", "cmi:iron_mechanism")
	addConversionRecipes("minecraft:redstone_ore", "cmi:iron_mechanism")
	addConversionRecipes("thermal:nickel_ore", "cmi:iron_mechanism")
	addConversionRecipes("minecraft:deepslate_iron_ore", "cmi:iron_mechanism")
	addConversionRecipes("minecraft:deepslate_redstone_ore", "cmi:iron_mechanism")
	addConversionRecipes("cmi:deepslate_quartz_ore", "cmi:iron_mechanism")
	
	addConversionRecipes("minecraft:netherrack", "cmi:nether_mechanism")
	addConversionRecipes("minecraft:magma_block", "cmi:nether_mechanism")
	addConversionRecipes("minecraft:nether_quartz_ore", "cmi:nether_mechanism")
	addConversionRecipes("minecraft:nether_gold_ore", "cmi:nether_mechanism")
	addConversionRecipes("minecraft:ancient_debris", "cmi:nether_mechanism")
	
	addConversionRecipes("minecraft:redstone_ore", "vintageimprovements:redstone_module")
	addConversionRecipes("minecraft:deepslate_redstone_ore", "vintageimprovements:redstone_module")

	
	addConversionRecipes("minecraft:andesite", "cmi:stone_mechanism")
	addConversionRecipes("minecraft:diorite", "cmi:stone_mechanism")
	addConversionRecipes("minecraft:granite", "cmi:stone_mechanism")
	addConversionRecipes("create:limestone", "cmi:stone_mechanism")
	addConversionRecipes("tconstruct:seared_stone", "cmi:stone_mechanism")
	addConversionRecipes("minecraft:tuff", "cmi:stone_mechanism")
	addConversionRecipes("create:scoria", "cmi:stone_mechanism")
	addConversionRecipes("minecraft:dripstone_block", "cmi:stone_mechanism")
	addConversionRecipes("minecraft:smooth_basalt", "cmi:stone_mechanism")
	
	addConversionRecipes("minecraft:coal_ore", "cmi:wooden_mechanism")
	addConversionRecipes("minecraft:deepslate_coal_ore", "cmi:wooden_mechanism")
	addConversionRecipes("minecraft:deepslate_diamond_ore", "cmi:wooden_mechanism")
})
