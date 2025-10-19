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
	 * @param {Number} multiplier 倍率
	 */
	function addArgumentParallel(multiplier) {
		event.createCustom(`${global.namespace}:argument_parallel_${multiplier}`, () => {
			return new $AugmentItem(new $Item$Properties(), $AugmentDataHelper.builder()
				.type($NBTTags.TAG_AUGMENT_TYPE_MACHINE)
				.mod("MachineParallel", multiplier)
				.build()
			)
		})
	}

	addArgumentParallel(1)
	addArgumentParallel(2)
	addArgumentParallel(4)
	addArgumentParallel(8)
	addArgumentParallel(16)
	addArgumentParallel(32)
	addArgumentParallel(64)
})