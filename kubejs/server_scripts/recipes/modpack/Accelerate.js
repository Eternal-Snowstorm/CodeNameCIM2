ServerEvents.recipes((event) => {
	let { cmi } = event.recipes

	// 安山构件
	addRecipe("cmi:andesite_mechanism", "minecraft:stone", [
		setOutput("minecraft:andesite", 0.2),
		setOutput("minecraft:iron_ore", 0.05),
		setOutput("create:zinc_ore", 0.05)
	])
	addRecipe("cmi:andesite_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:andesite", 0.15),
		setOutput("minecraft:deepslate_iron_ore", 0.1),
		setOutput("create:deepslate_zinc_ore", 0.1)
	])

	// 钴质构件
	addRecipe("cmi:cobalt_mechanism", "minecraft:netherrack", [
		setOutput("tconstruct:cobalt_ore", 0.2)
	])

	// 铜质构件
	addRecipe("cmi:copper_mechanism", "minecraft:stone", [
		setOutput("minecraft:copper_ore", 0.2),
		setOutput("minecraft:gold_ore", 0.05),
		setOutput("minecraft:clay", 0.05),
		setOutput("thermal:sulfur_ore", 0.05)
	])
	addRecipe("cmi:copper_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_copper_ore", 0.15),
		setOutput("minecraft:deepslate_gold_ore", 0.1),
		setOutput("minecraft:clay", 0.1),
		setOutput("thermal:deepslate_sulfur_ore", 0.05)
	])

	// 贰级科技航天构件
	addRecipe("cmi:tier_2_aviation_mechanism", "ad_astra:moon_stone", [
		setOutput("ad_astra:moon_desh_ore", 0.2),
		setOutput("ad_astra:moon_ice_shard_ore", 0.05),
		setOutput("thermal:steel_block", 0.05)
	])
	addRecipe("cmi:tier_2_aviation_mechanism", "minecraft:deepslate", [
		setOutput("ad_astra:deepslate_desh_ore", 0.15),
		setOutput("minecraft:deepslate_iron_ore", 0.1),
		setOutput("thermal:deepslate_silver_ore", 0.1)
	])

	// 附魔构件
	addRecipe("cmi:enchanted_mechanism", "minecraft:stone", [
		setOutput("minecraft:lapis_ore", 0.2),
		setOutput("create:experience_block", 0.01)
	])
	addRecipe("cmi:enchanted_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_lapis_ore", 0.2),
		setOutput("create:experience_block", 0.01)
	])

	// 金质构件
	addRecipe("cmi:gold_mechanism", "minecraft:stone", [
		setOutput("minecraft:gold_ore", 0.2),
		setOutput("thermal:cinnabar_ore", 0.05),
		setOutput("cmi:quartz_ore", 0.05)
	])
	addRecipe("cmi:gold_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_gold_ore", 0.15),
		setOutput("thermal:deepslate_cinnabar_ore", 0.1),
		setOutput("cmi:deepslate_quartz_ore", 0.1)
	])

	// 铁质构件
	addRecipe("cmi:iron_mechanism", "minecraft:stone", [
		setOutput("minecraft:iron_ore", 0.2),
		setOutput("minecraft:redstone_ore", 0.05),
		setOutput("thermal:nickel_ore", 0.05)
	])
	addRecipe("cmi:iron_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_iron_ore", 0.15),
		setOutput("minecraft:deepslate_redstone_ore", 0.15),
		setOutput("thermal:deepslate_nickel_ore", 0.15)
	])

	// 下界构件
	addRecipe("cmi:nether_mechanism", "minecraft:netherrack", [
		setOutput("minecraft:blackstone", 0.1),
		setOutput("minecraft:magma_block", 0.03),
		setOutput("minecraft:soul_sand", 0.03),
		setOutput("minecraft:soul_soil", 0.03),
		setOutput("minecraft:gilded_blackstone", 0.03),
		setOutput("minecraft:nether_gold_ore", 0.03),
		setOutput("minecraft:ancient_debris", 0.03),
		setOutput("minecraft:nether_quartz_ore", 0.03),
		setOutput("minecraft:glowstone", 0.03)
	])

	// 叁级科技航天构件
	addRecipe("cmi:tier_3_aviation_mechanism", "ad_astra:mars_stone", [
		setOutput("ad_astra:mars_ostrum_ore", 0.2),
		setOutput("ad_astra:mars_ice_shard_ore", 0.05),
		setOutput("ad_astra:desh_block", 0.05)
	])
	addRecipe("cmi:tier_3_aviation_mechanism", "minecraft:deepslate", [
		setOutput("ad_astra:deepslate_ostrum_ore", 0.15),
		setOutput("minecraft:deepslate_iron_ore", 0.1),
		setOutput("thermal:deepslate_silver_ore", 0.1)
	])

	// 精密构件
	addRecipe("create:precision_mechanism", "minecraft:stone", [
		setOutput("minecraft:copper_ore", 0.15),
		setOutput("create:zinc_ore", 0.15),
		setOutput("minecraft:redstone_ore", 0.1)
	])
	// addRecipe("create:precision_mechanism", "minecraft:deepslate", [
	// 	setOutput("minecraft:deepslate_copper_ore", 0.1),
	// 	setOutput("create:deepslate_zinc_ore", 0.1),
	// 	setOutput("minecraft:deepslate_redstone_ore", 0.15)
	// ])

	// 红石构件
	addRecipe("vintageimprovements:redstone_module", "minecraft:stone", [
		setOutput("minecraft:redstone_ore", 0.2)
	])
	addRecipe("vintageimprovements:redstone_module", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_redstone_ore", 0.25)
	])

	// 智能构件
	addRecipe("cmi:smart_mechanism", "minecraft:stone", [
		setOutput("cmi:etrium_ore", 0.1),
		setOutput("minecraft:gold_ore", 0.2),
		setOutput("cmi:certus_quartz_ore", 0.2),
		setOutput("immersiveengineering:ore_silver", 0.05)
	])
	addRecipe("cmi:smart_mechanism", "minecraft:deepslate", [
		setOutput("cmi:deepslate_etrium_ore", 0.15),
		setOutput("minecraft:deepslate_gold_ore", 0.2),
		setOutput("cmi:deepslate_certus_quartz_ore", 0.2),
		setOutput("immersiveengineering:deepslate_ore_silver", 0.05)
	])

	// 石质构件
	addRecipe("cmi:stone_mechanism", "minecraft:stone", [
		setOutput("minecraft:andesite", 0.1),
		setOutput("minecraft:diorite", 0.1),
		setOutput("minecraft:granite", 0.1),
		setOutput("create:limestone", 0.1),
		setOutput("tconstruct:seared_stone", 0.1)
	])
	addRecipe("cmi:stone_mechanism", "minecraft:deepslate", [
		setOutput("tconstruct:seared_stone", 0.1),
		setOutput("minecraft:tuff", 0.1),
		setOutput("create:scoria", 0.1),
		setOutput("minecraft:dripstone_block", 0.1),
		setOutput("minecraft:smooth_basalt", 0.1)
	])

	// 木质构件
	addRecipe("cmi:wooden_mechanism", "minecraft:stone", [
		setOutput("minecraft:coal_ore", 0.2)
	])
	addRecipe("cmi:wooden_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_coal_ore", 0.15),
		setOutput("minecraft:deepslate_diamond_ore", 0.01)
	])

	// 气密构件
	addRecipe("cmi:air_tight_mechanism", "minecraft:stone", [
		setOutput("mekanism:osmium_ore", 0.2),
		setOutput("thermal:silver_ore", 0.1),
		setOutput("minecraft:gold_ore", 0.1)
	])
	addRecipe("cmi:air_tight_mechanism", "minecraft:deepslate", [
		setOutput("mekanism:deepslate_osmium_ore", 0.15),
		setOutput("thermal:deepslate_silver_ore", 0.15),
		setOutput("minecraft:deepslate_gold_ore", 0.15)
	])

	/**
	 * 设置输出项Json
	 * 
	 * @param {Internal.Block_} id 
	 * @param {number} chance 
	 */
	function setOutput(id, chance) {
		return {
			"id": id,
			"chance": chance
		}
	}

	/**
	 * 定义配方轮子
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @param {Internal.Block_} target 
	 * @param {Array<{
	 * 		id: Internal.Block_,
	 * 		chance: number
	 * }>} output
	 * @returns 
	 */
	function addRecipe(input, target, output) {
		return cmi.accelerator(output)
			.input(input)
			.target(target)
	}

	cmi.accelerator([
		{
			"id": "minecraft:deepslate_copper_ore",
			"chance": 0.1
		},
		{
			"id": "create:deepslate_zinc_ore",
			"chance": 0.1
		},
		{
			"id": "minecraft:deepslate_redstone_ore",
			"chance": 0.1
		}
	]).input("create:precision_mechanism").target("minecraft:deepslate")

	event.custom({
		"type": "cmi:accelerator",
		"target": "minecraft:sandstone",
		"input": {
			"tag": "forge:ingots/iron"
		},
		"output": [
			{
				"id": "minecraft:iron_block",
				"chance": 0.3
			},
			{
				"id": "minecraft:gold_block",
				"chance": 0.3
			}
		]
	})
})