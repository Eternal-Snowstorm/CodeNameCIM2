CreateHeatJS.registerHeatEvent((event) => {
	function addHeatLevel(name, number, color, block) {
		let heatLevelRegister =
			event.registerHeat(name, number, color)
				.addHeatSource(block)
				.register()

		return heatLevelRegister
	}

	addHeatLevel("grilled", 1, 0xFF8C00, "minecraft:fire")
})