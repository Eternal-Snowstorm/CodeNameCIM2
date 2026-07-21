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

	let Coils = {
		LV: Block.getBlock("immersiveengineering:coil_lv"),
		MV: Block.getBlock("immersiveengineering:coil_mv"),
		HV: Block.getBlock("immersiveengineering:coil_hv")
	}

	function getCoilCount() {
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

	let count = getCoilCount()

	if (count.lv === NEED_COIL_COUNT) {
		machine.setMachineLevel(0)
	} else if (count.mv === NEED_COIL_COUNT) {
		machine.setMachineLevel(1)
	} else if (count.hv === NEED_COIL_COUNT) {
		machine.setMachineLevel(2)
	} else {
		event.setCanceled(true)
	}
})

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