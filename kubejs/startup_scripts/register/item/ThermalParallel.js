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
				.build()
			)
		})
	}

	addArgumentParallel(8)
	addArgumentParallel(16)
	addArgumentParallel(32)
	addArgumentParallel(64)
})