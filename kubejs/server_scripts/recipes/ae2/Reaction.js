ServerEvents.recipes((event) => {
	// Example(Not tested)
	addRecipe(setOutput("minecraft:diamond", 3, "item"))
		.energy(114514)
		.items([
			addItemInput("#forge:ingots/iron", 3),
			addItemInput("#forge:rods/gold", 1)
		])
		.fluids(addFluidInput("minecraft:water", 500))
		.build()
	/**
	 * 
	 * @param {object} output
	 */
	function addRecipe(output) {
		let json = {
			type: "advanced_ae:reaction",
			output: output
		}

		return {
			items: function (inputItems) {
				json.input_items = inputItems
				return this
			},
			fluids: function (inputFluid) {
				json.fluid = inputFluid
				return this
			},
			energy: function (energy) {
				json.energy = energy
				return this
			},
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
			ingredient: Ingredient.of(ingredient).toJson(),
			amount: count
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