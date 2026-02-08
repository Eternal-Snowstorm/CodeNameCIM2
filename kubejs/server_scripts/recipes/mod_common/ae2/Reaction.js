ServerEvents.recipes((event) => {
	/*
	addRecipe(setOutput("minecraft:diamond", 3, "item"))
		.energy(114514)
		.setInputs([
			addItemInput("#forge:coal", 3),
			addFluidInput("minecraft:water", 500)
		])
		.build()
	*/

	/**
	 * @param {object} output
	 * @returns 
	 */
	function addRecipe(output) {
		let json = {
			type: "advanced_ae:reaction",
			output: output,
			fluid: {
				fluidStack: {}
			},
			input_items: []
		}

		return {
			/**
			 * 定义配方的输入物品和流体
			 * 
			 * @param {Array[object]} inputs - 数组, 包含物品和流体输入
			 */
			setInputs: function (inputs) {
				inputs.forEach(input => {
					if (input.fluidStack) {
						json.fluid = input
					} else {
						json.input_items.push(input)
					}
				})
				return this
			},
			/**
			 * 定义所需的电量
			 * 
			 * @param {number} energy
			 */
			energy: function (energy) {
				json.energy = energy
				return this
			},
			/**
			 * 构造配方
			 * 
			 * @returns 
			 */
			build: function () {
				return event.custom(json)
			}
		}
	}

	/**
	 * 定义配方的流体输入
	 * 
	 * 在`.setInputs()`内只能拥有一个`addFluidInput()`
	 * 
	 * @param {Internal.FluidStackJS_} fluid 流体id
	 * @param {number} amount 流体量(单位mB)
	 * 
	 * @example
	 * // 输入1500mB水
	 * addFluidInput("minecraft:water", 1500)
	 * 
	 * @returns 
	 */
	function addFluidInput(fluid, amount) {
		return {
			fluidStack: {
				FluidName: Fluid.of(fluid).toJson(),
				Amount: amount
			}
		}
	}

	/**
	 * 定义配方的原料输入
	 * 
	 * @param {Internal.Ingredient_} ingredient 输入原料(兼容Tag)
	 * @param {number} count 原料数量
	 * 
	 * @example
	 * // 输入64个粗铁
	 * addItemInput("minecraft:raw_iron", 64)
	 * 
	 * @returns 
	 */
	function addItemInput(ingredient, count) {
		return {
			amount: count,
			ingredient: Ingredient.of(ingredient).toJson()
		}
	}

	/**
	 * 定义配方的输出项, 在第3个定义输出类型
	 * 
	 * 如果为`"item"`, 那么输出的`count`按照物品数量作为单位
	 * 
	 * 同时支持`ItemTag`作为输出, 如果使用`ItemTag`那么则取Tag内的第一个物品
	 * 
	 * 如果为`"fluid"`, 那么输出的`amount`按照`millioBucket(mB)`作为单位
	 * 
	 * @example 
	 * // 输出64个钻石
	 * setOutput("minecraft:diamond", 64, "item")
	 * // 输出1500mB熔岩
	 * setOutput("minecraft:lava", 1500, "fluid")
	 * 
	 * @param {Internal.Ingredient_ | Internal.FluidStackJS_} id 输出id(兼容ItemTag)
	 * @param {number} count 物品数量 || 流体量
	 * @param {"item" | "fluid"} type 输出类型
	 * 
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