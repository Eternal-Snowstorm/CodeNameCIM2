ServerEvents.blockLootTables((event) => {
	event.addBlock("ue_addons:end_chromium_ore", (loot) => {
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
						"name": "ue_addons:end_chromium_ore"
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
						"name": "ue_addons:raw_chromium"
					}
				]
			})
		})
	})
})