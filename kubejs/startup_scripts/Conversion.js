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

	// 矿石(如果想要批量获取矿石ID, 就去Debug.js把Tag换成"#forge:ores")
	let oreGroup = [
		"minecraft:coal_ore",
		"minecraft:deepslate_coal_ore",
		"ad_astra:venus_coal_ore",
		"ad_astra:glacio_coal_ore",
		"minecraft:copper_ore",
		"minecraft:deepslate_copper_ore",
		"ad_astra:glacio_copper_ore",
		"minecraft:diamond_ore",
		"minecraft:deepslate_diamond_ore",
		"ad_astra:mars_diamond_ore",
		"ad_astra:venus_diamond_ore",
		"minecraft:emerald_ore",
		"minecraft:deepslate_emerald_ore",
		"minecraft:gold_ore",
		"minecraft:nether_gold_ore",
		"minecraft:deepslate_gold_ore",
		"ad_astra:venus_gold_ore",
		"minecraft:iron_ore",
		"minecraft:deepslate_iron_ore",
		"ad_astra:moon_iron_ore",
		"ad_astra:mars_iron_ore",
		"ad_astra:mercury_iron_ore",
		"ad_astra:glacio_iron_ore",
		"minecraft:lapis_ore",
		"minecraft:deepslate_lapis_ore",
		"ad_astra:glacio_lapis_ore",
		"minecraft:redstone_ore",
		"minecraft:deepslate_redstone_ore",
		"minecraft:nether_quartz_ore",
		"ue_addons:quartz_ore",
		"ue_addons:deepslate_quartz_ore",
		"minecraft:ancient_debris",
		"thermal:apatite_ore",
		"thermal:deepslate_apatite_ore",
		"thermal:cinnabar_ore",
		"thermal:deepslate_cinnabar_ore",
		"thermal:lead_ore",
		"thermal:deepslate_lead_ore",
		"immersiveengineering:ore_lead",
		"immersiveengineering:deepslate_ore_lead",
		"mekanism:lead_ore",
		"mekanism:deepslate_lead_ore",
		"thermal:nickel_ore",
		"thermal:deepslate_nickel_ore",
		"immersiveengineering:ore_nickel",
		"immersiveengineering:deepslate_ore_nickel",
		"thermal:niter_ore",
		"thermal:deepslate_niter_ore",
		"thermal:ruby_ore",
		"thermal:deepslate_ruby_ore",
		"thermal:sapphire_ore",
		"thermal:deepslate_sapphire_ore",
		"thermal:silver_ore",
		"thermal:deepslate_silver_ore",
		"immersiveengineering:ore_silver",
		"immersiveengineering:deepslate_ore_silver",
		"thermal:sulfur_ore",
		"thermal:deepslate_sulfur_ore",
		"thermal:tin_ore",
		"thermal:deepslate_tin_ore",
		"mekanism:tin_ore",
		"mekanism:deepslate_tin_ore",
		"tconstruct:cobalt_ore",
		"ue_addons:moon_cobalt_ore",
		"immersiveengineering:ore_aluminum",
		"immersiveengineering:deepslate_ore_aluminum",
		"immersiveengineering:ore_uranium",
		"immersiveengineering:deepslate_ore_uranium",
		"mekanism:uranium_ore",
		"mekanism:deepslate_uranium_ore",
		"create:zinc_ore",
		"create:deepslate_zinc_ore",
		"mekanism:osmium_ore",
		"mekanism:deepslate_osmium_ore",
		"mekanism:fluorite_ore",
		"mekanism:deepslate_fluorite_ore",
		"ad_astra:venus_calorite_ore",
		"ad_astra:deepslate_calorite_ore",
		"ad_astra:moon_cheese_ore",
		"ad_astra:moon_desh_ore",
		"ad_astra:deepslate_desh_ore",
		"ad_astra:moon_ice_shard_ore",
		"ad_astra:mars_ice_shard_ore",
		"ad_astra:glacio_ice_shard_ore",
		"ad_astra:deepslate_ice_shard_ore",
		"ad_astra:mars_ostrum_ore",
		"ad_astra:deepslate_ostrum_ore"
	]
	oreGroup.forEach((ore) => {
		addConversionRecipes(ore, "ue_addons:the_accelerator_of_mechanism_power")
	})
})