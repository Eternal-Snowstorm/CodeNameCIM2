let $AugmentDataHelper =
	Java.loadClass("cofh.core.util.helpers.AugmentDataHelper")
let $AugmentItem =
	Java.loadClass("cofh.thermal.lib.common.item.AugmentItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $NBTTags =
	Java.loadClass("cofh.lib.util.constants.NBTTags")
StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {Number} value 并行数量 
	 */
	function addArgumentParallel(value) {
		const MOD = "MachineParallel"

		return event.createCustom(`${global.namespace}:argument_parallel_${value}`, () => {
			return new $AugmentItem(new $Item$Properties(), $AugmentDataHelper.builder()
				.type($NBTTags.TAG_AUGMENT_TYPE_MACHINE)
				.mod(MOD, value)
				.build())
		})
	}

	addArgumentParallel(8)
	addArgumentParallel(16)
	addArgumentParallel(32)
	addArgumentParallel(64)
})