// 源代码By Tonywww, 初始代码链接(https://www.mcmod.cn/post/5166.html)
ServerEvents.highPriorityData((event) => {
	/**
	  * @param {string} id       材料的唯一标识, 用作生成 JSON 文件名
	  * @returns {object}        返回一个链式调用的 builder 对象
	*/
	function createMaterialBuilder(id) {
		let definition = {
			craftable: false,
			hidden: false,
			sortOrder: 0,
			tier: 0
		}
		let stats = {}
		let traits = {
			default: [],
			perStat: {}
		}

		let hasStats = false
		let hasTraits = false

		let namespace = "tconstruct"

		let builder = {
			/** 
			 * 设置该材料是否可合成
			 * @param {boolean} bool  
			 * @returns {object} builder
			 */
			setCraftable(bool) {
				definition.craftable = bool
				return builder
			},

			/** 
			 * 设置该材料是否隐藏
			 * @param {boolean} bool  
			 * @returns {object} builder
			 */
			setHidden(bool) {
				definition.hidden = bool
				return builder
			},

			/** 
			 * 设置材料的排序
			 * @param {number} n  
			 * @returns {object} builder
			 */
			setSortOrder(n) {
				definition.sortOrder = n
				return builder
			},

			/** 
			 * 设置材料的阶段
			 * @param {number} n  
			 * @returns {object} builder
			 */
			setTier(n) {
				definition.tier = n
				return builder
			},

			/**
			 * 设置命名空间
			 */
			setNamespace(str) {
				namespace = str
				return builder
			},

			addStats() {
				hasStats = true
				return builder
			},
			addTraits() {
				hasTraits = true
				return builder
			},

			/**
			 * 添加头部(Head)属性
			 * @param {number} durability
			 * @param {number} melee_attack
			 * @param {number} mining_speed
			 * @param {string} mining_tier
			 * @returns {object} builder
			 */
			addHead(durability, melee_attack, mining_speed, mining_tier) {
				stats["tletruct:head"] = {
					durability: durability,
					melee_attack: melee_attack,
					mining_speed: mining_speed,
					mining_tier: mining_tier
				}
				return builder
			},

			/**
			 * 添加手柄(Handle)属性
			 * @param {number} durability
			 * @param {number} melee_damage
			 * @param {number} melee_speed
			 * @param {number} mining_speed
			 * @returns {object} builder
			 */
			addHandle(durability, melee_damage, melee_speed, mining_speed) {
				stats["tletruct:handle"] = {
					durability: durability,
					melee_damage: melee_damage,
					melee_speed: melee_speed,
					mining_speed: mining_speed
				}
				return builder
			},

			/**
			 * 添加头盔(Plating Helmet)属性
			 * @param {number} armor
			 * @param {number} durability
			 * @param {number} knockback_resistance
			 * @param {number} toughness
			 * @returns {object} builder
			 */
			addPlatingHelmet(armor, durability, knockback_resistance, toughness) {
				stats["tletruct:plating_helmet"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockback_resistance,
					toughness: toughness
				}
				return builder
			},

			/**
			 * 添加胸甲(Plating Chestplate)属性
			 * @param {number} armor
			 * @param {number} durability
			 * @param {number} knockback_resistance
			 * @param {number} toughness
			 * @returns {object} builder
			 */
			addPlatingChestplate(armor, durability, knockback_resistance, toughness) {
				stats["tletruct:plating_chestplate"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockback_resistance,
					toughness: toughness
				}
				return builder
			},

			/**
			 * 添加护腿(Plating Leggings)属性
			 * @param {number} armor
			 * @param {number} durability
			 * @param {number} knockback_resistance
			 * @param {number} toughness
			 * @returns {object} builder
			 */
			addPlatingLeggings(armor, durability, knockback_resistance, toughness) {
				stats["tletruct:plating_leggings"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockback_resistance,
					toughness: toughness
				}
				return builder
			},

			/**
			 * 添加靴子(Plating Boots)属性
			 * @param {number} armor
			 * @param {number} durability
			 * @param {number} knockback_resistance
			 * @param {number} toughness
			 * @returns {object} builder
			 */
			addPlatingBoots(armor, durability, knockback_resistance, toughness) {
				stats["tletruct:plating_boots"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockback_resistance,
					toughness: toughness
				}
				return builder
			},

			/**
			 * 添加盾牌(Plating Shield)属性
			 * @param {number} durability
			 * @param {number} knockback_resistance
			 * @param {number} toughness
			 * @returns {object} builder
			 */
			addPlatingShield(durability, knockback_resistance, toughness) {
				stats["tletruct:plating_shield"] = {
					durability: durability,
					knockback_resistance: knockback_resistance,
					toughness: toughness
				}
				return builder
			},

			/**
			 * 添加弓把(Grip)属性
			 * @param {number} accuracy
			 * @param {number} durability
			 * @param {number} melee_damage
			 * @returns {object} builder
			 */
			addGrip(accuracy, durability, melee_damage) {
				stats["tletruct:grip"] = {
					accuracy: accuracy,
					durability: durability,
					melee_damage: melee_damage
				}
				return builder
			},

			/**
			 * 添加弩机(Limb)属性
			 * @param {number} accuracy
			 * @param {number} draw_speed
			 * @param {number} durability
			 * @param {number} velocity
			 * @returns {object} builder
			 */
			addLimb(accuracy, draw_speed, durability, velocity) {
				stats["tletruct:limb"] = {
					accuracy: accuracy,
					draw_speed: draw_speed,
					durability: durability,
					velocity: velocity
				}
				return builder
			},

			/**
			 * 添加绑定节(Binding), 无属性
			 * @returns {object} builder
			 */
			addBinding() {
				stats["tletruct:binding"] = {}
				return builder
			},

			/**
			 * 添加锁链基底(Maille), 无属性
			 * @returns {object} builder
			 */
			addMaille() {
				stats["tletruct:maille"] = {}
				return builder
			},

			/**
			 * 添加弓弦(Bowstring), 无属性
			 * @returns {object} builder
			 */
			addBowstring() {
				stats["tletruct:bowstring"] = {}
				return builder
			},

			/**
			 * 添加盾牌衬板(Shield Core), 无属性
			 * @returns {object} builder
			 */
			addShieldCore() {
				stats["tletruct:shield_core"] = {}
				return builder
			},

			/**
			 * 添加能量核心(Flux Core)属性
			 * @param {number} capacity
			 * @param {number} generate
			 * @returns {object} builder
			 */
			addFluxCore(capacity, generate) {
				stats["tinkers_advanced:flux_core"] = {
					capacity: capacity,
					generate: generate
				}
				return builder
			},

			/**
			 * 添加默认材料词条
			 * @param {number} level
			 * @param {string} name
			 * @returns {object} builder
			 */
			addDefaultTrait(level, name) {
				traits.default.push({ level: level, name: name })
				return builder
			},

			/**
			 * 添加针对单个 stat 的词条
			 * @param {string} statId   stat 标识, 如 "tletruct:armor"
			 * @param {number} level
			 * @param {string} name
			 * @returns {object} builder
			 */
			addPerStatTrait(statId, level, name) {
				if (!traits.perStat[statId]) traits.perStat[statId] = []
				traits.perStat[statId].push({
					level: level,
					name: name
				})
				return builder
			},

			/**
			 * 最终生成所有 JSON 文件：definition、stats、traits
			 * @returns {void}
			 */
			build() {
				event.addJson(`${namespace}:tinkering/materials/definition/${id}.json`, definition)
				if (hasStats) {
					event.addJson(`${namespace}:tinkering/materials/stats/${id}.json`, {
						stats: stats
					})
				}
				if (hasTraits) {
					event.addJson(`${namespace}:tinkering/materials/traits/${id}.json`, traits)
				}
			}
		}

		return builder;
	}

	/**
	   * @param {Object} opts
	   * @param {string} opts.fluid        熔化后得到的流体 ID
	   * @param {string} opts.material     最终材料 ID
	   * @param {string} opts.ingot        锭物品 ID
	   * @param {string} opts.leftover     多余物品
	   * @param {number} opts.units        锭对应多少毫桶(mb)
	   * @param {number} opts.temperature  熔炼温度
	   * @param {number} opts.time         熔炼/冷却时间
	   * @param {boolean} [opts.meltIngot] 是否生成 锭=>流体 配方
	   */
	function registerMaterialProcess({
		fluid,
		material,
		ingot,
		leftover,
		units,
		temperature,
		time,
		meltIngot
	}) {
		function makeIngredient(itemId) {
			if (itemId.startsWith("#")) {
				return { tag: itemId.slice(1) }
			} else {
				return { item: itemId }
			}
		}

		// 物品 => 流体
		function melting(itemId, factor) {
			let ingredient = makeIngredient(itemId)
			let fluidAmount = units * factor;
			event.addJson(
				`tletruct:recipes/kjs/melting/${itemId.replace(":", "_").replace("#", "")}`,
				{
					type: "tletruct:melting",
					ingredient: ingredient,
					result: { fluid: fluid, amount: fluidAmount },
					temperature: temperature,
					time: time
				}
			)
		}

		// 加工台合成
		function materialPart(itemId, needed, value, leftover) {
			let ingredient = makeIngredient(itemId)
			let json = {
				type: "tletruct:material",
				ingredient: ingredient,
				material: material,
				needed: needed,
				value: value
			}
			if (leftover) json.leftover = leftover
			event.addJson(
				`tletruct:recipes/kjs/material/${itemId.replace(":", "_").replace("#", "")}`,
				json
			);
		}

		// 如果需要, 为锭生成 熔炼 => 流体 配方
		if (meltIngot) {
			melting(ingot, 1)
		}

		// 锭 => 部件
		materialPart(ingot, 1, 1, leftover)

		// 流体 => 部件
		if (fluid) {
			event.addJson(
				`tletruct:recipes/kjs/material_fluid/${fluid.replace(":", "_")}`,
				{
					type: "tletruct:material_fluid",
					fluid: { fluid: fluid, amount: units },
					temperature: time,
					output: material
				}
			)
		}
	}

	// 正式定义
	// *** 
})