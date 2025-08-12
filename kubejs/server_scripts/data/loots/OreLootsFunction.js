function addCommonOreLoots(event, ore) {
	event.addBlock(`cmi:${ore}_ore`, (loot) => {
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
						"name": `cmi:${ore}_ore`
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
						"name": `cmi:raw_${ore}`
					}
				]
			})
		})
	})

	event.addBlock(`cmi:deepslate_${ore}_ore`, (loot) => {
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
						"name": `cmi:deepslate_${ore}_ore`
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
						"name": `cmi:raw_${ore}`
					}
				]
			})
		})
	})
}

function addAloneOreLoots(event, ore_id, item_id) {
	event.addBlock(ore_id, (loot) => {
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
						"name": ore_id
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
						"name": item_id
					}
				]
			})
		})
	})
}