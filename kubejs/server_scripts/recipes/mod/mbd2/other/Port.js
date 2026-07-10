ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	const ITEM_CONTAINER = Ingredient.of("#cmi:item_container")
	const FLUID_TANKS = Ingredient.of("#cmi:fluid_tanks")
	const BATTERIES = Ingredient.of("#cmi:batteries")
	const CONTROLLER_NAMESPACE = Cmi.MODID

	// 高级焦炉
	addMachinePart("reinforced_coke_oven", {
		cIO: true
	})

	// 橡胶提取器
	addMachinePart("improved_rubber_extractor", {
		fO: true,
		eI: true
	})

	/**
	 * 快捷添加机器接口配方
	 *
	 * @param {string} controllerID 控制器ID(不带命名空间)
	 * @param {Object} options 配置对象
	 * @param {boolean} [options.iI] 是否添加物品输入接口
	 * @param {boolean} [options.iO] 是否添加物品输出接口
	 * @param {boolean} [options.iIO] 是否添加物品I/O接口
	 * @param {boolean} [options.fI] 是否添加流体输入接口
	 * @param {boolean} [options.fO] 是否添加流体输出接口
	 * @param {boolean} [options.fIO] 是否添加流体I/O接口
	 * @param {boolean} [options.eI] 是否添加能量输入接口
	 * @param {boolean} [options.eO] 是否添加能量输出接口
	 * @param {boolean} [options.eIO] 是否添加能量I/O接口
	 * @param {boolean} [options.cI] 是否添加通用输入接口
	 * @param {boolean} [options.cO] 是否添加通用输出接口
	 * @param {boolean} [options.cIO] 是否添加通用I/O接口
	 */
	function addMachinePart(controllerID, options) {
		const CONTROLLER = `${CONTROLLER_NAMESPACE}:${controllerID}`

		/**
		 * 添加接口配方
		 *
		 * @param {string} suffix 接口类型后缀
		 * @param {Internal.Ingredient_|Internal.Ingredient_[]} ingredient 接口材料
		 * @param {boolean} input 是否添加输入接口
		 * @param {boolean} output 是否添加输出接口
		 */
		function addBus(suffix, ingredient, input, output) {
			const resultPrefix = suffix ? `${CONTROLLER}_${suffix}` : CONTROLLER

			if (input) {
				kubejs.shaped(`${resultPrefix}_input_bus`, [
					"A",
					"B"
				], {
					A: ingredient,
					B: CONTROLLER
				}).keepIngredient(CONTROLLER)
			}

			if (output) {
				kubejs.shaped(`${resultPrefix}_output_bus`, [
					"A",
					"B"
				], {
					A: CONTROLLER,
					B: ingredient
				}).keepIngredient(CONTROLLER)
			}
		}

		/**
		 * @param {string} type 接口类型
		 * @returns {{input: boolean, output: boolean}}
		 */
		function getPortIO(type) {
			return {
				input: options[`${type}I`] || options[`${type}IO`] || false,
				output: options[`${type}O`] || options[`${type}IO`] || false
			}
		}

		const ITEM = getPortIO("item")
		const FLUID = getPortIO("fluid")
		const ENERGY = getPortIO("energy")
		const COMMON = getPortIO("common")

		addBus("item", ITEM_CONTAINER, ITEM.input, ITEM.output)
		addBus("fluid", FLUID_TANKS, FLUID.input, FLUID.output)
		addBus("energy", BATTERIES, ENERGY.input, ENERGY.output)
		addBus("", [ITEM_CONTAINER, FLUID_TANKS, BATTERIES], COMMON.input, COMMON.output)
	}
})