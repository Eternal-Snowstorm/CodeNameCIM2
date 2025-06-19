ServerEvents.highPriorityData((event) => {
	/**
	 * @param {string} id
	 * @param {number} tier
	 * @param {boolean} hidden
	 */
	function addTConMaterial(id, tier, hidden) {
		let [namespace, materialId] = id.split(":", 2)

		let builder = {
			namespace: namespace,
			id: materialId,

			definition: {
				craftable: true,
				tier: tier,
				sortOrder: 26,
				hidden: hidden
			},

			stats: {
				stats: {}
			},

			traits: {},

			materialRecipes: [],

			materialFluidRecipes: [],

			materialMeltingRecipes: [],

			/** 
			* @param {boolean} craftable
			*/
			craftable(craftable) {
				this.definition.craftable = craftable
				return this
			},

			/**
			* @param {number} sortOrder 
			*/
			sortOrder(sortOrder) {
				this.definition.sortOrder = sortOrder
				return this
			},

			/**
			 * @param {number} durability 
			 * @param {number} meleeAttack 
			 * @param {number} miningSpeed 
			 * @param {string} miningTier 
			 */
			head(durability, meleeAttack, miningSpeed, miningTier) {
				this.stats.stats["tconstruct:head"] = {
					durability: durability,
					melee_attack: meleeAttack,
					mining_speed: miningSpeed,
					mining_tier: miningTier
				}
				return this
			},

			/**
			 * @param {number} durability 
			 * @param {number} meleeDamage 
			 * @param {number} meleeSpeed 
			 * @param {number} miningSpeed 
			 */
			handle(durability, meleeDamage, meleeSpeed, miningSpeed) {
				this.stats.stats["tconstruct:handle"] = {
					durability: durability,
					melee_damage: meleeDamage,
					melee_speed: meleeSpeed,
					mining_speed: miningSpeed
				}
				return this
			},

			binding() {
				this.stats.stats["tconstruct:binding"] = {}
				return this
			},

			/**
			 * @param {number} accuracy 
			 * @param {number} drawSpeed 
			 * @param {number} durability 
			 * @param {number} velocity 
			 */
			limb(accuracy, drawSpeed, durability, velocity) {
				this.stats.stats["tconstruct:limb"] = {
					accuracy: accuracy,
					draw_speed: drawSpeed,
					durability: durability,
					velocity: velocity
				}
				return this
			},

			/**
			 * @param {number} accuracy 
			 * @param {number} durability 
			 * @param {number} meleeDamage 
			 */
			grip(accuracy, durability, meleeDamage) {
				this.stats.stats["tconstruct:grip"] = {
					accuracy: accuracy,
					durability: durability,
					melee_damage: meleeDamage
				}
				return this
			},

			bowstring() {
				this.stats.stats["tconstruct:bowstring"] = {}
				return this
			},

			/**
			 * @param {number} armor 
			 * @param {number} durability 
			 * @param {number} knockbackResistance 
			 * @param {number} toughness 
			 */
			platingHelmet(armor, durability, knockbackResistance, toughness) {
				this.stats.stats["tconstruct:plating_helmet"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockbackResistance,
					toughness: toughness
				}
				return this
			},

			/**
			 * @param {number} armor 
			 * @param {number} durability 
			 * @param {number} knockbackResistance 
			 * @param {number} toughness 
			 */
			platingChestplate(armor, durability, knockbackResistance, toughness) {
				this.stats.stats["tconstruct:plating_chestplate"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockbackResistance,
					toughness: toughness
				}
				return this
			},

			/**
			 * @param {number} armor 
			 * @param {number} durability 
			 * @param {number} knockbackResistance 
			 * @param {number} toughness 
			 */
			platingLeggings(armor, durability, knockbackResistance, toughness) {
				this.stats.stats["tconstruct:plating_leggings"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockbackResistance,
					toughness: toughness
				}
				return this
			},

			/**
			 * @param {number} armor 
			 * @param {number} durability 
			 * @param {number} knockbackResistance 
			 * @param {number} toughness 
			 */
			platingBoots(armor, durability, knockbackResistance, toughness) {
				this.stats.stats["tconstruct:plating_boots"] = {
					armor: armor,
					durability: durability,
					knockback_resistance: knockbackResistance,
					toughness: toughness
				}
				return this
			},

			/**
			 * @param {number} durability 
			 * @param {number} knockbackResistance 
			 * @param {number} toughness 
			 */
			platingShield(durability, knockbackResistance, toughness) {
				this.stats.stats["tconstruct:plating_shield"] = {
					durability: durability,
					knockback_resistance: knockbackResistance,
					toughness: toughness
				}
				return this
			},

			maille() {
				this.stats.stats["tconstruct:maille"] = {}
				return this
			},

			shieldCore() {
				this.stats.stats["tconstruct:shield_core"] = {}
				return this
			},

			/**
			 * @param {function} func
			 */
			setTraits(func) {
				let traitsBuilder = {
					traits: {
						default: [],
						perStat: {
							"tconstruct:armor": [],
							"tconstruct:head": [],
							"tconstruct:handle": [],
							"tconstruct:binding": [],
							"tconstruct:limb": [],
							"tconstruct:grip": [],
							"tconstruct:bowstring": [],
							"tconstruct:melee_harvest": [],
							"tconstruct:ranged": []
						},
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addDefault(name, level) {
						this.traits.default.push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addArmor(name, level) {
						this.traits.perStat["tconstruct:armor"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addHead(name, level) {
						this.traits.perStat["tconstruct:head"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addHandle(name, level) {
						this.traits.perStat["tconstruct:handle"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addBinding(name, level) {
						this.traits.perStat["tconstruct:binding"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addLimb(name, level) {
						this.traits.perStat["tconstruct:limb"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addGrip(name, level) {
						this.traits.perStat["tconstruct:grip"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * @param {string} name
					 * @param {number} level
					 */
					addBowstring(name, level) {
						this.traits.perStat["tconstruct:bowstring"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * 新增: 添加melee_harvest特性
					 * @param {string} name
					 * @param {number} level
					 */
					addMeleeHarvest(name, level) {
						this.traits.perStat["tconstruct:melee_harvest"].push({
							name: name,
							level: level
						})
						return this
					},

					/**
					 * 新增: 添加ranged特性
					 * @param {string} name
					 * @param {number} level
					 */
					addRanged(name, level) {
						this.traits.perStat["tconstruct:ranged"].push({
							name: name,
							level: level
						})
						return this
					}
				}
				traitsBuilder = func(traitsBuilder)
				this.traits = traitsBuilder.traits
				return this
			},

			/**
			 * @param {string} ingredient
			 * @param {function} func
			 */
			addMaterialRecipe(ingredient, func) {
				let recipeBuilder = {
					recipe: {
						type: "tconstruct:material",
						ingredient: Ingredient.of(ingredient).toJson(),
						needed: 1,
						value: 1
					},

					/**
					 * @param {number} needed
					 */
					needed(needed) {
						this.recipe.needed = needed
						return this
					},

					/**
					 * @param {number} value
					 */
					value(value) {
						this.recipe.value = value
						return this
					},

					/**
					 * @param {Internal.ItemStack} itemStack
					 */
					leftover(itemStack) {
						this.recipe.leftover = itemStack.toJson()
						return this
					}
				}
				recipeBuilder.recipe.material = `${this.namespace}:${this.id}`
				recipeBuilder = func(recipeBuilder)
				this.materialRecipes.push(recipeBuilder.recipe)
				return this
			},

			/**
			 * @param {string} fluid
			 * @param {function} func
			 */
			addMaterialFluidRecipe(fluid, func) {
				let recipeBuilder = {
					recipe: {
						type: "tconstruct:material_fluid",
						fluid: {
							amount: 1000
						},
						temperature: 1000
					},

					/**
					 * @param {number} amount
					 */
					amount(amount) {
						this.recipe.fluid.amount = amount
						return this
					},

					/**
					 * @param {number} temperature
					 */
					temperature(temperature) {
						this.recipe.temperature = temperature
						return this
					},

					/**
					 * @param {string} input
					 */
					input(input) {
						this.recipe.input = input
						return this
					}
				}
				if (fluid.charAt(0) == "#") {
					recipeBuilder.recipe.fluid.tag = fluid.slice(1)
				} else {
					recipeBuilder.recipe.fluid.name = fluid
					recipeBuilder.recipe.output = `${this.namespace}:${this.id}`
					recipeBuilder = func(recipeBuilder)
					this.materialFluidRecipes.push(recipeBuilder.recipe)
				}
				return this
			},

			/**
			 * @param {string} fluid
			 * @param {function} func
			 */
			addMaterialMeltingRecipe(fluid, func) {
				let recipeBuilder = {
					recipe: {
						type: "tconstruct:material_melting",
						result: {
							amount: 1000,
							fluid: fluid
						},
						temperature: 1000
					},

					/**
					 * @param {number} amount
					 */
					amount(amount) {
						this.recipe.result.amount = amount
						return this
					},

					/**
					 * @param {number} temperature
					 */
					temperature(temperature) {
						this.recipe.temperature = temperature
						return this
					}
				}
				recipeBuilder.recipe.input = `${this.namespace}:${this.id}`
				recipeBuilder = func(recipeBuilder)
				this.materialMeltingRecipes.push(recipeBuilder.recipe)
				return this
			},

			build() {
				event.addJson(`${this.namespace}:tinkering/materials/definition/${this.id}.json`, this.definition)
				event.addJson(`${this.namespace}:tinkering/materials/stats/${this.id}.json`, this.stats)
				event.addJson(`${this.namespace}:tinkering/materials/traits/${this.id}.json`, this.traits)

				for (let i = 0; i < this.materialRecipes.length; i++) {
					event.addJson(`${this.namespace}:recipes/materials/material/${this.id}/${i}.json`, this.materialRecipes[i])
				}

				for (let i = 0; i < this.materialFluidRecipes.length; i++) {
					event.addJson(`${this.namespace}:recipes/materials/material_fluid/${this.id}/${i}.json`, this.materialFluidRecipes[i])
				}
				for (let i = 0; i < this.materialMeltingRecipes.length; i++) {
					event.addJson(`${this.namespace}:recipes/materials/material_melting/${this.id}/${i}.json`, this.materialMeltingRecipes[i])
				}
				return this
			}
		}

		return builder
	}

	// 使用示例
	addTConMaterial("test:material", 2, false)
		.craftable(true)
		.sortOrder(26)
		.head(320, 1.5, 5.5, "minecraft:diamond")
		.handle(1.5, 1.5, 1.5, 1.5)
		.binding()
		.limb(1.0, 1.0, 1.0, 1.0)
		.grip(1.0, 1.0, 1.0)
		.bowstring()
		.platingHelmet(1.0, 1.0, 1.0, 1.0)
		.platingChestplate(1.0, 1.0, 1.0, 1.0)
		.platingLeggings(1.0, 1.0, 1.0, 1.0)
		.platingBoots(1.0, 1.0, 1.0, 1.0)
		.platingShield(1.0, 1.0, 1.0, 1.0)
		.maille()
		.shieldCore()
		.setTraits((builder) => builder
			.addArmor("tconstruct:projectile_protection", 1)
			.addBowstring("tconstruct:magnetic", 1)
			.addMeleeHarvest("tconstruct:experienced", 1)
			.addRanged("cmi:smart", 1)
			.addArmor("cmi:magical_shield", 2))
		.addMaterialRecipe("minecraft:dirt", (builder) => builder
			.needed(2)
			.value(3)
			.leftover(Item.of("minecraft:oak_planks", 1)))
		.addMaterialFluidRecipe("minecraft:water", (builder) => builder
			.amount(200)
			.temperature(1200)
			.input("tconstruct:iron"))
		.addMaterialMeltingRecipe("create:chocolate", (builder) => builder
			.amount(200)
			.temperature(800))
		.build()
})