ServerEvents.blockLootTables((event) => {
	let namespace = Cmi.MODID

	let AddOreLoots = {
		/**
		 * 
		 * @param {string} ore 
		 */
		common(ore) {
			// 定义前缀列表
			let prefixes = [
				"",
				"deepslate_",
				"nether_",
				"end_",
				"moon_",
				"mars_",
				"venus_",
				"glacio_",
				"mercury_",
				"galena_",
				"radrock_"
			]
			prefixes.forEach((prefix) => {
				let blockId = `${namespace}:${prefix + ore}_ore`

				event.addBlock(blockId, (loot) => {
					loot.addPool((pool) => {
						pool.addEntry({
							"type": "minecraft:alternatives",
							"children": [
								{
									"type": "minecraft:item",
									"conditions": [
										{
											"condition": "minecraft:match_tool",
											"predicate": {
												"enchantments": [
													{
														"enchantment": "minecraft:silk_touch",
														"levels": {
															"min": 1
														}
													}
												]
											}
										}
									],
									"name": blockId
								},
								{
									"type": "minecraft:item",
									"functions": [
										{
											"enchantment": "minecraft:fortune",
											"formula": "minecraft:ore_drops",
											"function": "minecraft:apply_bonus"
										},
										{
											"function": "minecraft:explosion_decay"
										}
									],
									"name": `${namespace}:raw_${ore}`
								}
							]
						})
					})
				})
			})
		},

		/**
		 * 
		 * @param {Special.Block} oreBlock 
		 * @param {Special.Item} lootItem 
		 */
		alone(oreBlock, lootItem) {
			event.addBlock(oreBlock, (loot) => {
				loot.addPool((pool) => {
					pool.addEntry({
						"type": "minecraft:alternatives",
						"children": [
							{
								"type": "minecraft:item",
								"conditions": [
									{
										"condition": "minecraft:match_tool",
										"predicate": {
											"enchantments": [
												{
													"enchantment": "minecraft:silk_touch",
													"levels": {
														"min": 1
													}
												}
											]
										}
									}
								],
								"name": oreBlock
							},
							{
								"type": "minecraft:item",
								"functions": [
									{
										"enchantment": "minecraft:fortune",
										"formula": "minecraft:ore_drops",
										"function": "minecraft:apply_bonus"
									},
									{
										"function": "minecraft:explosion_decay"
									}
								],
								"name": lootItem
							}
						]
					})
				})
			})
		}
	}

	// 银
	AddOreLoots.alone("cmi:moon_silver_ore", "thermal:raw_silver")
	// 赛特斯石英
	AddOreLoots.alone("cmi:certus_quartz_ore", "ae2:certus_quartz_crystal")
	AddOreLoots.alone("cmi:deepslate_certus_quartz_ore", "ae2:certus_quartz_crystal")
	// 铬
	AddOreLoots.alone("cmi:moon_chromium_ore", "cmi:raw_chromium")
	// 钴
	AddOreLoots.alone("cmi:moon_cobalt_ore", "tconstruct:raw_cobalt")
	// 铂
	AddOreLoots.alone("cmi:moon_platinum_ore", "cmi:raw_platinum")
	// 石英
	AddOreLoots.alone("cmi:quartz_ore", "minecraft:quartz")
	AddOreLoots.alone("cmi:deepslate_quartz_ore", "minecraft:quartz")
	// 钨
	AddOreLoots.common("tungsten")
	// 钒
	AddOreLoots.alone("cmi:nether_vanadium_ore", "cmi:raw_vanadium")
	// 埃忒恩
	AddOreLoots.common("etrium")
	// 阿迪特
	AddOreLoots.common("ardite")
	// 锇
	AddOreLoots.alone("cmi:nether_osmium_ore", "mekanism:raw_osmium")
	// 钛
	AddOreLoots.common("titanium")
})