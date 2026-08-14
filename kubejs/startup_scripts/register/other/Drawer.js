FunctionalStorageJSEvents.register((event) => {
	addDrawerUpgrade("amethyst_bronze", 2)
	addDrawerUpgrade("rose_gold", 4)
	addDrawerUpgrade("steel", 8)
	addDrawerUpgrade("hepatizon", 16)

	/**
	 * 
	 * @param {string} name 
	 * @param {number} multiplier 
	 */
	function addDrawerUpgrade(name, multiplier) {
		event.addUpgrade(`cmi:${name}_upgrade`, (builder) => {
			builder.multiplier(multiplier)
				.fluidMultiplier(multiplier)
				.rangeMultiplier(multiplier)
		})
	}

	addDrawer("rubberwood", "thermal:rubberwood_log", "thermal:rubberwood_planks")

	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Block_} log 
	 * @param {Internal.Block_} planks 
	 */
	function addDrawer(name, log, planks) {
		event.addDrawer(`cmi:${name}`, (builder) => {
			builder.log(log)
				.planks(planks)
				.sideTexture(`cmi:block/drawer/${name}/side`)
				.frontTexture(`cmi:block/drawer/${name}/front`)
		})
	}
})