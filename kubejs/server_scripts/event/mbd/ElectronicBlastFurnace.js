let $ProxyPartBlockEntity =
	Java.loadClass("com.lowdragmc.mbd2.api.blockentity.ProxyPartBlockEntity")

MBDMachineEvents.onStructureFormed(($) => {
	let event = $.getEvent()

	/**
	 * @type {Internal.MBDMultiblockMachine_}
	 */
	let machine = event.getMachine()
	let level = machine.getLevel()
	let id = machine.getDefinition().id()

	const NEED_COIL_COUNT = 24

	if (id.toString() !== "cmi:electronic_blast_furnace") {
		return
	}

	let count = getCoilCount(level, machine)

	if (count.lv === NEED_COIL_COUNT) {
		machine.setMachineLevel(0)
	} else if (count.mv === NEED_COIL_COUNT) {
		machine.setMachineLevel(1)
	} else if (count.hv === NEED_COIL_COUNT) {
		machine.setMachineLevel(2)
	} else {
		event.setCanceled(true)
	}

	getCoilLevel(machine, level)
	levelEfficiencyImprovement(machine, level)
})

let Coils = {
	LV: Block.getBlock("immersiveengineering:coil_lv"),
	MV: Block.getBlock("immersiveengineering:coil_mv"),
	HV: Block.getBlock("immersiveengineering:coil_hv")
}

/**
 * 
 * @param {Internal.MBDMachine_} machine 
 * @param {Internal.Level_} level 
 * @returns 
 */
function getCoilLevel(machine, level) {
	let count = getCoilCount(machine, level)

	if (count.lv === NEED_COIL_COUNT) {
		return 0
	}
	if (count.hv === NEED_COIL_COUNT) {
		return 2
	}
	if (count.mv === NEED_COIL_COUNT) {
		return 1
	}

	return -1
}

/**
 * 
 * @param {Internal.Level_} level 
 * @param {Internal.MBDMultiblockMachine_} machine 
 * @returns 
 */
function getCoilCount(level, machine) {
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

			if (block.equals(Coils.LV)) {
				result.lv++
			} else if (block.equals(Coils.MV)) {
				result.mv++
			} else if (block.equals(Coils.HV)) {
				result.hv++
			}
		})

	return result
}

/**
 * 
 * @param {Internal.MBDMultiblockMachine_} machine 
 * @param {Internal.Level_} level
 */
function levelEfficiencyImprovement(machine, level) {
	let coilLevel = getCoilLevel(machine, level)
	let recipe = machine.getRecipeLogic()
	let duration = recipe.getDuration()

	if (coilLevel === 0) {
		recipe.setDuration(duration * 2)
	} else if (coilLevel === 1) {
		recipe.setDuration(duration * 1)
	} else if (coilLevel === 1) {
		recipe.setDuration(duration * 0.5)
	}
}

/**
 * @param {Internal.Level_} level
 * @param {BlockPos_} pos
 * @returns 
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
		.machineLevel(1)
		.inputItems("#minecraft:planks")
		.outputItems("minecraft:apple")
})