ServerEvents.blockLootTables((event) => {
	event.addBlock("cmi:pyrite_ore", (loot) => {
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
						"name": "cmi:pyrite_ore"
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
						"name": "cmi:raw_pyrite"
					}
				]
			})
		})
	})

	event.addBlock("cmi:deepslate_pyrite_ore", (loot) => {
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
						"name": "cmi:deepslate_pyrite_ore"
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
						"name": "cmi:raw_pyrite"
					}
				]
			})
		})
	})
})