ServerEvents.highPriorityData((event) => {
	// 赛特斯石英
	addOreGeneratingType("certus_quartz", "overworld", 5)
		.overworld(2)

	// 银
	addOreGeneratingType("silver", "moon", 8)
		.moon(7)

	// 埃忒恩
	addOreGeneratingType("etrium", "overworld", 4)
		.overworld(4)

	// 石英
	addOreGeneratingType("quartz", "overworld", 9)
		.overworld(3)

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
	addOreGeneratingType("cobalt", "moon", 6)
		.moon(5)

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

	// 钒
	addOreGeneratingType("vanadium", "nether", 9)
		.nether(10)

	/**
	 * 
	 * @param {String} name 矿物ID
	 * @param {"overworld" | "nether" | "end" | "moon" | "mars"} type 生成维度
	 * @param {Number} size 矿簇体积
	 * @param {Number} count 矿簇数量(单个区块)
	 * @returns 
	 */
	function addOreGeneratingType(name, type, size) {
		// 矿物类型
		let oreType = {
			"overworld": "",
			"nether": "nether_",
			"end": "end_",
			"moon": "moon_",
			"mars": "mars_"
		}

		// 已配置的地物
		let configuredFeature = {
			type: "minecraft:ore",
			config: {
				discard_chance_on_air_exposure: 0.0,
				size: size,
				targets: {}
			}
		}

		// 已放置的地物
		let placedFeature = {
			feature: `${global.namespace}:${oreType[type]}${name}_ore`,
			placement: {}
		}

		// 群系定义
		let biomeModifier = {
			type: "forge:add_features",
			biomes: {},
			features: `${global.namespace}:${oreType[type]}${name}_ore`,
			step: "underground_ores"
		}

		// 生成数据包
		function build() {
			event.addJson(`cmi:worldgen/configured_feature/${oreType[type]}${name}_ore`, configuredFeature)
			event.addJson(`cmi:worldgen/placed_feature/${oreType[type]}${name}_ore`, placedFeature)
			event.addJson(`cmi:forge/biome_modifier/${oreType[type]}${name}_ore`, biomeModifier)
			return this
		}

		// 配置维度类型
		return {

			// 主世界
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

			// 下界
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

			// 末地
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

			// 月球
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

			// 火星
			mars: function (count) {
				configuredFeature.config.targets = [
					{
						state: {
							"Name": `${global.namespace}:mars_${name}_ore`
						},
						target: {
							predicate_type: "minecraft:tag_match",
							tag: "ad_astra:mars_stone_replaceables"
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
								absolute: 56
							},
							min_inclusive: {
								absolute: -24
							}
						}
					},
					{
						type: "minecraft:biome"
					}
				]
				biomeModifier.biomes = "ad_astra:martian_wastelands"
				build()
				return this
			}
		}
	}
})