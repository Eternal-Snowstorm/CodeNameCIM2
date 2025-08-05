ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const ITEM_CONTAINER = Ingredient.of("#cmi:item_container")
	const FLUID_TANKS = Ingredient.of("#cmi:fluid_tanks")
	const BATTERIES = Ingredient.of("#cmi:batteries")

	// 锅炉
	addMachinePart({
		controllerID: "mm:large_steam_boiler",
		fluidIO: true,
		itemIO: true
	})

	// 裂解机
	addMachinePart({
		controllerID: "mm:cracker",
		fluidIO: true,
		energyIO: true
	})

	// 矿石处理机
	addMachinePart({
		controllerID: "mm:steam_ore_processor",
		fluidIO: true,
		itemIO: true
	})

	// 粒子碰装机
	addMachinePart({
		controllerID: "mm:particle_collision_machine",
		itemIO: true,
		energyIO: true
	})

	/**
	 * @returns 快捷添加机器接口配方
	 * @param {Object} options 配置对象
	 * @param {string} options.controllerID 控制器ID
	 * @param {boolean} [options.fluidIO] 是否添加流体输入/输出接口
	 * @param {boolean} [options.itemIO] 是否添加物品输入/输出接口
	 * @param {boolean} [options.energyIO] 是否添加能量输入/输出接口
	 */
	function addMachinePart(options) {
		let { controllerID, itemIO, fluidIO, energyIO } = options

		// 添加流体接口(输入+输出)
		if (fluidIO) {
			// 流体输入接口
			kubejs.shaped(`${controllerID}_fluid_input`, [
				"A",
				"B"
			], {
				A: FLUID_TANKS,
				B: controllerID
			}).keepIngredient(controllerID)

			// 流体输出接口
			kubejs.shaped(`${controllerID}_fluid_output`, [
				"A",
				"B"
			], {
				A: controllerID,
				B: FLUID_TANKS
			}).keepIngredient(controllerID)
		}

		// 添加物品接口(输入+输出)
		if (itemIO) {
			// 物品输入接口
			kubejs.shaped(`${controllerID}_item_input`, [
				"A",
				"B"
			], {
				A: ITEM_CONTAINER,
				B: controllerID
			}).keepIngredient(controllerID)

			// 物品输出接口
			kubejs.shaped(`${controllerID}_item_output`, [
				"A",
				"B"
			], {
				A: controllerID,
				B: ITEM_CONTAINER
			}).keepIngredient(controllerID)
		}

		// 添加能量接口(输入+输出)
		if (energyIO) {
			// 能量输入接口
			kubejs.shaped(`${controllerID}_energy_input`, [
				"A",
				"B"
			], {
				A: BATTERIES,
				B: controllerID
			}).keepIngredient(controllerID)

			// 能量输出接口
			kubejs.shaped(`${controllerID}_energy_output`, [
				"A",
				"B"
			], {
				A: controllerID,
				B: BATTERIES
			}).keepIngredient(controllerID)
		}
	}
})