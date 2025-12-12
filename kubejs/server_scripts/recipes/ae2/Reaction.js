ServerEvents.recipes((event) => {
	// Example(Not tested)
	addRecipe(setOutput("minecraft:diamond", 3, "item"))
		.energy(114514)
		.items([
			addItemInput("#forge:coal", 3)
		])
		.fluids("minecraft:water", 500)
		.build()

	/**
	 * @param {object} output
	 * @returns {
	 * 	 {
	 *   	items: function(object[]): object,
	 *   	fluids: function(object[]): object,
	 *   	energy: function(number): object,
	 *   	build: function(): Internal.RecipesEventJS
	 *   }
	 * }
	 */
	function addRecipe(output) {
		let json = {
			type: "advanced_ae:reaction",
			output: output,
			fluid: {
				fluidStack: {
				}
			},
			input_items: []
		}

		return {
			/**
			 * @param {object[]} inputItems
			 * @returns {object}
			 */
			items: function (inputItems) {
				json.input_items = inputItems
				return this
			},
			fluids: function (name, amount) {
				json.fluid.fluidStack = {
					Amount: amount,
					FluidName: name
				}
				return this
			},

			/**
			 * @param {number} energy
			 * @returns {object}
			 */
			energy: function (energy) {
				json.energy = energy
				return this
			},

			/**
			 * @returns {Internal.RecipesEventJS}
			 */
			build: function () {
				return event.custom(json)
			}
		}
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} amount 
	 * @returns 
	 */
	function addFluidInput(fluid, amount) {
		return {
			fluidStack: {
				FluidName: Fluid.of(fluid).toJson(),
				Amound: amount
			}
		}
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} ingredient 
	 * @param {number} count 
	 * @returns 
	 */
	function addItemInput(ingredient, count) {
		return {
			amount: count,
			ingredient: Ingredient.of(ingredient).toJson()
		}
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_ | Internal.Ingredient_} id 输出id
	 * @param {number} count 数量 || 流体量
	 * @param {"item" | "fluid"} type 输出类型
	 * @returns 
	 */
	function setOutput(id, count, type) {
		let amount = count
		let fluid = id
		if (type === "item") {
			return {
				"#c": "ae2:i",
				"id": IngrUtils.getFirstItemId(id),
				"#": count
			}
		} else if (type === "fluid") {
			return {
				"#c": "ae2:f",
				"id": Fluid.of(fluid).toJson(),
				"#": amount
			}
		}
	}
})