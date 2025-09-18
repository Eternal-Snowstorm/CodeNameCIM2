ServerEvents.highPriorityData((event) => {
	/**
	 * 
	 * @param {String} name 矿物ID
	 * @param {String} dimention 生成维度
	 * @param {Number} size 矿簇体积
	 * @param {Number} count 矿石数量
	 * @returns 
	 */
	function addOreGeneratingType(name, type, size) {
		let oreType = {
			"overworld": "",
			"nether": "nether_",
			"end": "end_",
			"moon": "moon_",
			"mars": "mars_"
		}
		let configuredFeature = {
			type: "minecraft:ore",
			config: {
				discard_chance_on_air_exposure: 0.0,
				size: size,
				targets: {}
			}
		}
		let placedFeature = {
			feature: `${global.namespace}:${oreType[type]}${name}_ore`,
			placement: {}
		}
		let biomeModifier = {
			type: "forge:add_features",
			biomes: {},
			features: `${global.namespace}:${oreType[type]}${name}_ore`,
			step: "underground_ores"
		}

		function build() {
			event.addJson(`cmi:worldgen/configured_feature/${oreType[type]}${name}_ore`, configuredFeature)
			event.addJson(`cmi:worldgen/placed_feature/${oreType[type]}${name}_ore`, placedFeature)
			event.addJson(`cmi:forge/biome_modifier/${oreType[type]}${name}_ore`, biomeModifier)
			return this
		}

		return {
			overworld: function (count) {
				configuredFeature.config.targets = [
					{
						state: {
							Name: `${global.namespace}:${name}_ore`
						},
						target: {
							predicate_type: "minecraft:tag_match",
							tag: "minecraft:stone_ore_replaceables"
						}
					},
					{
						state: {
							Name: `${global.namespace}:deepslate_${name}_ore`
						},
						target: {
							predicate_type: "minecraft:tag_match",
							tag: "minecraft:deepslate_ore_replaceables"
						}
					}
				]
				placedFeature.placement = [
					{
						type: "minecraft:count",
						count: count
					},
					{
						type: "minecraft:in_square"
					},
					{
						type: "minecraft:height_range",
						height: {
							type: "minecraft:uniform",
							max_inclusive: {
								absolute: 52
							},
							min_inclusive: {
								absolute: -54
							}
						}
					},
					{
						type: "minecraft:biome"
					}
				]
				biomeModifier.biomes = "#minecraft:is_overworld"
				build()
				return this
			},
			nether: function (count) {
				configuredFeature.config.targets = [
					{
						state: {
							Name: `${global.namespace}:nether_${name}_ore`
						},
						target: {
							block: "minecraft:netherrack",
							predicate_type: "minecraft:block_match"
						}
					}
				]
				placedFeature.placement = [
					{
						type: "minecraft:count",
						count: count
					},
					{
						type: "minecraft:in_square"
					},
					{
						type: "minecraft:height_range",
						height: {
							type: "minecraft:trapezoid",
							max_inclusive: {
								absolute: 120
							},
							min_inclusive: {
								absolute: -8
							}
						}
					},
					{
						type: "minecraft:biome"
					}
				]
				biomeModifier.biomes = "#minecraft:is_nether"
				build()
				return this
			},
			end: function (count) {
				configuredFeature.config.targets = [
					{
						state: {
							"Name": `${global.namespace}:end_${name}_ore`
						},
						target: {
							block: "minecraft:end_stone",
							predicate_type: "minecraft:block_match"
						}
					}
				]
				placedFeature.placement = [
					{
						type: "minecraft:count",
						count: count
					},
					{
						type: "minecraft:in_square"
					},
					{
						type: "minecraft:height_range",
						height: {
							type: "minecraft:trapezoid",
							max_inclusive: {
								absolute: 120
							},
							min_inclusive: {
								absolute: 8
							}
						}
					},
					{
						type: "minecraft:biome"
					}
				]
				biomeModifier.biomes = "minecraft:end_highlands"
				build()
				return this
			},
			moon: function (count) {
				configuredFeature.config.targets = [
					{
						"state": {
							"Name": `${global.namespace}:moon_${name}_ore`
						},
						"target": {
							"block": "ad_astra:moon_stone",
							"predicate_type": "minecraft:block_match"
						}
					}
				]
				placedFeature.placement = [
					{
						type: "minecraft:count",
						count: count
					},
					{
						type: "minecraft:in_square"
					},
					{
						type: "minecraft:height_range",
						height: {
							type: "minecraft:trapezoid",
							max_inclusive: {
								absolute: 70
							},
							min_inclusive: {
								absolute: -60
							}
						}
					},
					{
						"type": "minecraft:biome"
					}
				]
				biomeModifier.biomes = "ad_astra:lunar_wastelands"
				build()
				return this
			},
			mars: function (count) {
				configuredFeature.config.targets = [
					{
						"state": {
							"Name": `${global.namespace}:mars_${name}_ore`
						},
						"target": {
							"block": "ad_astra:mars_stone",
							"predicate_type": "minecraft:block_match"
						}
					}
				]
				placedFeature.placement = [
					{
						type: "minecraft:count",
						count: count
					},
					{
						type: "minecraft:in_square"
					},
					{
						type: "minecraft:height_range",
						height: {
							type: "minecraft:trapezoid",
							max_inclusive: {
								absolute: 70
							},
							min_inclusive: {
								absolute: -60
							}
						}
					},
					{
						"type": "minecraft:biome"
					}
				]
				biomeModifier.biomes = "ad_astra:martian_wastelands"
				build()
				return this
			}
		}
	}

	// 赛特斯石英
	addOreGeneratingType("certus_quartz", "overworld", 9)
		.overworld(10)

	// 石英
	addOreGeneratingType("quartz", "overworld", 9)
		.overworld(10)

	// 钒
	addOreGeneratingType("vanadium", "overworld", 9)
		.overworld(10)

	// 红镍
	addOreGeneratingType("lateritic_nickel", "end", 8)
		.end(4)

	// 闪锌
	addOreGeneratingType("sphalerite", "end", 8)
		.end(4)

	// 磷酸铝
	addOreGeneratingType("variscite", "end", 8)
		.end(4)

	// 方铅
	addOreGeneratingType("galena", "mars", 4)
		.mars(4)

	// 方铀
	addOreGeneratingType("uraninite", "mars", 4)
		.mars(4)

	// 辉铜
	addOreGeneratingType("veridium", "mars", 4)
		.mars(4)

	// 钴
	addOreGeneratingType("cobalt", "moon", 4)
		.moon(4)

	// 铱锇
	addOreGeneratingType("osmiridium", "moon", 4)
		.moon(4)

	// 铂
	addOreGeneratingType("platinum", "moon", 4)
		.moon(4)

	// 黄锡
	addOreGeneratingType("stannine", "moon", 4)
		.moon(4)

	// 黄铁
	addOreGeneratingType("pyrite", "nether", 4)
		.nether(4)

	// 辉银
	addOreGeneratingType("argentite", "nether", 4)
		.nether(4)

	// 钨
	addOreGeneratingType("tungsten", "nether", 4)
		.nether(4)

	// 铀
	addOreGeneratingType("uranium", "nether", 4)
		.nether(4)

	// 钒（下界)
	addOreGeneratingType("vanadium", "nether", 9)
		.nether(10)
})