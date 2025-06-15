ServerEvents.recipes(event => {
	function AlloyingRecipe() {
		this.recipe = {
			type: "ad_astra:alloying",
			cookingtime: 100,
			energy: 1000,
			ingredients: [],
			result: {}
		}
	}

	AlloyingRecipe.prototype = {
		// 设置输出物品
		setOutput: function (output) {
			if (typeof output === "string") {
				const MATCH = output.match(/^(\d+)x\s*(.+)$/)
				this.recipe.result = MATCH
					? { id: MATCH[2], count: parseInt(MATCH[1]) }
					: { id: output, count: 1 }
			} else {
				this.recipe.result = output
			}
			return this
		},

		// 添加输入材料
		addIngredient: function (ingredient) {
			if (typeof ingredient === "string") {
				const MATCH = ingredient.match(/^(\d+)x\s*(.+)$/)
				if (MATCH) {
					const count = parseInt(MATCH[1])
					const item = MATCH[2]
					for (let i = 0; i < count; i++) {
						this.recipe.ingredients.push(item.startsWith("#")
							? { tag: item.substring(1) }
							: { item: item })
					}
				} else {
					this.recipe.ingredients.push(ingredient.startsWith("#")
						? { tag: ingredient.substring(1) }
						: { item: ingredient })
				}
			} else {
				this.recipe.ingredients.push(ingredient)
			}
			return this
		},

		// 设置能量消耗
		setEnergy: function (energy) {
			this.recipe.energy = energy
			return this
		},

		// 设置冶炼时间
		setTime: function (time) {
			this.recipe.cookingtime = time
			return this
		},

		// 构建配方
		build: function (recipename) {
			event.custom(this.recipe)
				.id(recipename)
		},
		// 替换配方
		replaceRecipe: function (recipeid) {
			event.remove({ id: recipeid })
			let recipename = recipeid.split(":").pop()
			this.build(recipename)
		}
	}

	// 使用构建器创建配方
	new AlloyingRecipe()
		.setOutput("tconstruct:steel_block")
		.addIngredient("#forge:storage_blocks/iron")
		.addIngredient("#forge:coal_coke")
		.build("aaa:aaa")
})