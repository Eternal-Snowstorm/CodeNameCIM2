ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {Internal.JsonElement_} output 
	 */
	function ReactionRecipe(output) {
		this.recipe = {
			type: "advanced_ae:reaction",
			output: output,
			fluid: {
				fluidStack: {}
			},
			input_items: []
		}
	}

	/**
	 * 至少为1000
	 * 
	 * @param {number} energy 
	 * @returns 
	 */
	ReactionRecipe.prototype.energy = function (energy) {
		this.recipe.energy = energy
		return this
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} amount 
	 * @returns 
	 */
	ReactionRecipe.prototype.fluid = function (fluid, amount) {
		this.recipe.fluid = {
			fluidStack: {
				FluidName: fluid,
				Amount: amount
			}
		}
		return this
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} input 
	 * @param {number} [count] 
	 * @returns 
	 */
	ReactionRecipe.prototype.input = function (input, count) {
		this.recipe.input_items.push({
			amount: count || 1,
			ingredient: Ingredient.of(input).toJson()
		})
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 
	 * @returns 
	 */
	ReactionRecipe.prototype.build = function (id) {
		let recipe = event.custom(this.recipe)

		if (id) {
			recipe.id(id)
		}

		return recipe
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} item 
	 * @param {number} [count] 
	 * @returns 
	 */
	function item(item, count) {
		return {
			"#c": "ae2:i",
			id: item,
			"#": count || 1
		}
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} [amount] 
	 * @returns 
	 */
	function fluid(fluid, amount) {
		return {
			"#c": "ae2:f",
			id: fluid,
			"#": amount || 1000
		}
	}


})