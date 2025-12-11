ServerEvents.recipes((event) => {
	let { cmi } = event.recipes

	// 安山构件
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
	addRecipe("cmi:copper_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_copper_ore", 0.15),
		setOutput("minecraft:deepslate_gold_ore", 0.1),
		setOutput("minecraft:clay", 0.1),
		setOutput("thermal:deepslate_sulfur_ore", 0.05)
	])

	// 贰级科技航天构件
	addRecipe("cmi:tier_2_aviation_mechanism", "minecraft:deepslate", [
		setOutput("ad_astra:deepslate_desh_ore", 0.15),
		setOutput("minecraft:deepslate_iron_ore", 0.1),
		setOutput("thermal:deepslate_silver_ore", 0.1)
	])

	// 附魔构件
	addRecipe("cmi:enchanted_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_lapis_ore", 0.2),
		setOutput("create:experience_block", 0.01)
	])

	// 金质构件
	addRecipe("cmi:gold_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_gold_ore", 0.15),
		setOutput("thermal:deepslate_cinnabar_ore", 0.1),
		setOutput("cmi:deepslate_quartz_ore", 0.1)
	])

	// 铁质构件
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
	addRecipe("cmi:tier_3_aviation_mechanism", "minecraft:deepslate", [
		setOutput("ad_astra:deepslate_ostrum_ore", 0.15),
		setOutput("minecraft:deepslate_iron_ore", 0.1),
		setOutput("thermal:deepslate_silver_ore", 0.1)
	])

	// 精密构件
	addRecipe("create:precision_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_copper_ore", 0.1),
		setOutput("create:deepslate_zinc_ore", 0.1),
		setOutput("minecraft:deepslate_redstone_ore", 0.15)
	])

	// 红石构件
	addRecipe("vintageimprovements:redstone_module", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_redstone_ore", 0.25)
	])

	// 智能构件
	addRecipe("cmi:smart_mechanism", "minecraft:deepslate", [
		setOutput("cmi:deepslate_etrium_ore", 0.15),
		setOutput("minecraft:deepslate_gold_ore", 0.2),
		setOutput("cmi:deepslate_certus_quartz_ore", 0.2),
		setOutput("immersiveengineering:deepslate_ore_silver", 0.05)
	])

	// 石质构件
	addRecipe("cmi:stone_mechanism", "minecraft:deepslate", [
		setOutput("tconstruct:seared_stone", 0.1),
		setOutput("minecraft:tuff", 0.1),
		setOutput("create:scoria", 0.1),
		setOutput("minecraft:dripstone_block", 0.1),
		setOutput("minecraft:smooth_basalt", 0.1)
	])

	// 木质构件
	addRecipe("cmi:wooden_mechanism", "minecraft:deepslate", [
		setOutput("minecraft:deepslate_coal_ore", 0.15),
		setOutput("minecraft:deepslate_diamond_ore", 0.01)
	])

	// 气密构件
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