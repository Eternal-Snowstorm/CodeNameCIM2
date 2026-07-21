let $ProxyPartBlockEntity =
	Java.loadClass("com.lowdragmc.mbd2.api.blockentity.ProxyPartBlockEntity")

const NEED_COIL_COUNT = 24

const COILS = {
	LV: Block.getBlock("immersiveengineering:coil_lv"),
	MV: Block.getBlock("immersiveengineering:coil_mv"),
	HV: Block.getBlock("immersiveengineering:coil_hv")
}

MBDMachineEvents.onStructureFormed(($) => {
	let event = $.getEvent()

	/**
	 * @type {Internal.MBDMultiblockMachine_}
	 */
	let machine = event.getMachine()
	let id = machine.getDefinition().id()
	let name = id.toString()

	if (name !== "cmi:electronic_blast_furnace") {
		return
	}

	let coilLevel = getCoilLevel(machine)

	if (coilLevel === -1) {
		// 线圈数量不足，阻止结构成型
		event.setCanceled(true)
		return
	}

	machine.setMachineLevel(coilLevel)

	levelEfficiencyImprovement(machine)
})

/**
 * 获取线圈等级
 *
 * 0 = LV
 * 1 = MV
 * 2 = HV
 * -1 = 不满足要求
 *
 * @param {Internal.MBDMultiblockMachine_} machine
 * @returns {number}
 */
function getCoilLevel(machine) {
	let count = getCoilCount(machine)

	if (count.lv === NEED_COIL_COUNT) {
		return 0
	}

	if (count.mv === NEED_COIL_COUNT) {
		return 1
	}

	if (count.hv === NEED_COIL_COUNT) {
		return 2
	}

	return -1
}

/**
 *
 * @param {Internal.MBDMultiblockMachine_} machine
 * @returns {{lv:number,mv:number,hv:number}}
 */
function getCoilCount(machine) {
	let level = machine.getLevel()

	let result = {
		lv: 0,
		mv: 0,
		hv: 0
	}

	machine.getMultiblockState()
		.getCache()
		.forEach((pos) => {
			let state = getRealState(level, pos)
			let block = state.getBlock()

			if (block.equals(COILS.LV)) {
				result.lv++
			} else if (block.equals(COILS.MV)) {
				result.mv++
			} else if (block.equals(COILS.HV)) {
				result.hv++
			}
		})

	return result
}

/**
 * 
 * @param {Internal.MBDMultiblockMachine_} machine
 */
function levelEfficiencyImprovement(machine) {
	let coilLevel = getCoilLevel(machine)

	let recipe = machine.getRecipeLogic()
	let duration = recipe.getDuration()

	switch (coilLevel) {
		case 0:
			recipe.setDuration(duration * 2)
			break

		case 1:
			// MV 不变
			break

		case 2:
			recipe.setDuration(duration * 0.5)
			break
	}
}

/**
 * 
 * @param {Internal.Level_} level
 * @param {BlockPos_} pos
 * @returns {Internal.BlockState_}
 */
function getRealState(level, pos) {
	let state = level.getBlockState(pos)
	let entity = level.getBlockEntity(pos)

	if (entity instanceof $ProxyPartBlockEntity) {
		let original = entity.getOriginalState()
		if (original != null) {
			return original
		}
	}

	return state
}

ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.electronic_blast_furnace()
		.machineLevel(2)
		.inputItems("#forge:raw_materials/tungsten")
		.outputItems("cmi:tungsten_ingot")

	cmi.electronic_blast_furnace()
		.machineLevel(1)
		.inputItems("#forge:raw_materials/nickel")
		.outputItems("thermal:nickel_ingot")

	cmi.electronic_blast_furnace()
		.machineLevel(0)
		.inputItems("#forge:raw_materials/iron")
		.outputItems("minecraft:iron_ingot")
})