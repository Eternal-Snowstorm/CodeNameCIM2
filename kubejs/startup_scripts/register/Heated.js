CreateHeatJS.registerHeatEvent((event) => {
	function addHeatLevel(name, number, color, block) {
		event.registerHeat(name, number, color)
			.addHeatSource(block)
			.register()
	}

	addHeatLevel("grilled", 1, 0xFF8C00, "minecraft:fire")
})