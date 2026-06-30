ServerEvents.recipes((event) => {
	/**
	 * @constructor
	 * @param {Internal.ItemStack_} output
	 */
	function InscriberRecipe(output) {
		this.recipe = {
			type: "ae2:inscriber",
			ingredients: {},
			result: Item.of(output).toJson()
		}
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns
	 */
	InscriberRecipe.prototype.middle = function (input) {
		this.recipe.ingredients.middle = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns 
	 */
	InscriberRecipe.prototype.top = function (input) {
		this.recipe.ingredients.top = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	InscriberRecipe.prototype.bottom = function (input) {
		this.recipe.ingredients.bottom = Ingredient.of(input).toJson()
		return this
	}

	InscriberRecipe.prototype.press = function () {
		this.recipe.mode = "press"
		return event.custom(this.recipe)
	}

	InscriberRecipe.prototype.inscribe = function () {
		this.recipe.mode = "inscribe"
		return event.custom(this.recipe)
	}

	// 碳化硅板
	new InscriberRecipe("cmi:silicon_carbide_plate")
		.middle("cmi:silicon_carbide")
		.top("ae2:silicon_press")
		.inscribe()

	// 线刻硅板
	new InscriberRecipe("cmi:inscribed_silicon")
		.middle("ae2:printed_silicon")
		.top("cmi:redstone_wire")
		.press()

	// 铁氧体磁芯
	new InscriberRecipe("cmi:ferrit_core")
		.bottom("#forge:plates/nickel")
		.middle("#forge:plates/iron")
		.top("#forge:plates/zinc")
		.press()

	// 控制芯片
	new InscriberRecipe(Processor.CONTROL)
		.bottom("#forge:plates/redstone")
		.middle("#forge:plates/copper")
		.top("cmi:inscribed_silicon")
		.press()

	// 逻辑电路板
	new InscriberRecipe(Print.LOGIC)
		.top("ae2:logic_processor_press")
		.middle("#forge:ingots/electrum")
		.inscribe()
		.id("ae2:inscriber/logic_processor_print")

	// 工程电路板
	new InscriberRecipe(Print.ENGINEERING)
		.top("ae2:engineering_processor_press")
		.middle("#forge:ingots/etrium")
		.inscribe()
		.id("ae2:inscriber/engineering_processor_print")

	// 并发电路板
	new InscriberRecipe(Print.LOGIC)
		.top("cmi:concurrent_processor_press")
		.middle("#forge:gems/entro")
		.inscribe()

	// 逻辑处理器
	new InscriberRecipe(Processor.LOGIC)
		.bottom("create:polished_rose_quartz")
		.middle(Print.LOGIC)
		.top("cmi:inscribed_silicon")
		.press()
		.id("ae2:inscriber/logic_processor")

	// 计算处理器
	new InscriberRecipe(Processor.CALCULATION)
		.bottom("#forge:ingots/hop_graphite")
		.middle(Print.CALCULATION)
		.top("cmi:inscribed_silicon")
		.press()
		.id("ae2:inscriber/calculation_processor")

	// 工程处理器
	new InscriberRecipe(Processor.ENGINEERING)
		.bottom("#forge:silicon")
		.middle(Print.ENGINEERING)
		.top("cmi:inscribed_silicon")
		.press()
		.id("ae2:inscriber/engineering_processor")

	// 并发处理器
	new InscriberRecipe(Processor.CONCURRENT)
		.bottom("cmi:silicon_carbide")
		.middle(Print.CONCURRENT)
		.top("cmi:inscribed_silicon")
		.press()

	// 量子处理器
	new InscriberRecipe(Processor.QUANTUM)
		.bottom("cmi:enriched_silicon")
		.middle(Print.QUANTUM)
		.top("cmi:inscribed_silicon")
		.press()
		.id("advanced_ae:quantum_processor")

	// 基础控制电路
	new InscriberRecipe("mekanism:basic_control_circuit")
		.bottom("cmi:enriched_alloy")
		.middle("cmi:osmium_wafer")
		.top("cmi:inscribed_silicon")
		.press()
})