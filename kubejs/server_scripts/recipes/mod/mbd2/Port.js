ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	const ITEM_CONTAINER = Ingredient.of("#cmi:item_container")
	const FLUID_TANKS = Ingredient.of("#cmi:fluid_tanks")
	const BATTERIES = Ingredient.of("#cmi:batteries")
	const CONTROLLER_NAMESPACE = Cmi.MODID

	// 高级焦炉
	addMachinePart({
		controllerID: "reinforced_coke_oven",
		commonIO: true
	})

	/**
	 * 快捷添加机器接口配方
	 *
	 * @param {Object} options 配置对象
	 * @param {string} options.controllerID 控制器ID(不带命名空间)
	 * @param {boolean} [options.itemIO] 是否添加物品I/O接口
	 * @param {boolean} [options.fluidIO] 是否添加流体I/O接口
	 * @param {boolean} [options.energyIO] 是否添加能量I/O接口
	 * @param {boolean} [options.commonIO] 是否添加通用I/O接口
	 */
	function addMachinePart(options) {
		let { controllerID, itemIO, fluidIO, energyIO, commonIO } = options
		const controller = `${CONTROLLER_NAMESPACE}:${controllerID}`

		/**
		 * 添加输入/输出接口配方
		 *
		 * @param {string} suffix 后缀
		 * @param {Internal.Ingredient_|Internal.Ingredient_[]} ingredient 接口材料
		 */
		function addBus(suffix, ingredient) {
			kubejs.shaped(`${controller}_${suffix}_input_bus`, [
				"A",
				"B"
			], {
				A: ingredient,
				B: controller
			}).keepIngredient(controller)

			kubejs.shaped(`${controller}_${suffix}_output_bus`, [
				"A",
				"B"
			], {
				A: controller,
				B: ingredient
			}).keepIngredient(controller)
		}

		if (itemIO) {
			addBus("item", ITEM_CONTAINER)
		}

		if (fluidIO) {
			addBus("fluid", FLUID_TANKS)
		}

		if (energyIO) {
			addBus("energy", BATTERIES)
		}

		if (commonIO) {
			kubejs.shaped(`${controller}_input_bus`, [
				"A",
				"B"
			], {
				A: [ITEM_CONTAINER, FLUID_TANKS, BATTERIES],
				B: controller
			}).keepIngredient(controller)

			kubejs.shaped(`${controller}_output_bus`, [
				"A",
				"B"
			], {
				A: controller,
				B: [ITEM_CONTAINER, FLUID_TANKS, BATTERIES]
			}).keepIngredient(controller)
		}
	}
})