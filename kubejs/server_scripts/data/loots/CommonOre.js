ServerEvents.blockLootTables((event) => {
	// 辉银
	addOreLoots.common("argentite")
	// 赛特斯石英
	addOreLoots.alone("cmi:certus_quartz_ore", "ae2:certus_quartz_crystal")
	// 铬
	addOreLoots.alone("cmi:moon_chromium_ore", "cmi:raw_chromium")
	// 钴
	addOreLoots.alone("cmi:moon_cobalt_ore", "tconstruct:raw_cobalt")
	// 方铅
	addOreLoots.common("galena")
	// 红镍
	addOreLoots.common("lateritic_nickel")
	// 铱锇
	addOreLoots.common("osmiridium")
	// 铂
	addOreLoots.alone("cmi:moon_platinum_ore", "cmi:raw_platinum")
	// 黄铁
	addOreLoots.common("pyrite")
	// 石英
	addOreLoots.alone("cmi:quartz_ore", "minecraft:quartz")
	addOreLoots.alone("cmi:deepslate_quartz_ore", "minecraft:quartz")
	// 闪锌
	addOreLoots.common("sphalerite")
	// 黄锡
	addOreLoots.common("stannine")
	// 钨
	addOreLoots.common("tungsten")
	// 方铀
	addOreLoots.common("uraninite")
	// 铀
	addOreLoots.alone("cmi:nether_uranium_ore", "immersiveengineering:raw_uranium")
	// 钒
	addOreLoots.alone("cmi:nether_vanadium_ore", "cmi:raw_vanadium")
	// 磷酸铝
	addOreLoots.common("variscite")
	// 辉铜
	addOreLoots.common("veridium")

	let addOreLoots = {
		common: function (ore) {
			// 定义前缀列表
			let prefixes = [
				"",
				"deepslate",
				"nether",
				"end",
				"moon",
				"mars",
				"venus",
				"glacio",
				"mercury"
			]
			prefixes.forEach((prefix) => {
				let blockId = `cmi:${prefix}_${ore}_ore`

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
									"name": `cmi:raw_${ore}`
								}
							]
						})
					})
				})
			})
		},

		alone: function (oreBlock, lootItem) {
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
})