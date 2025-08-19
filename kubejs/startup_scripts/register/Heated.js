CreateHeatJS.registerHeatEvent((event) => {
	function addHeatLevel(name, color, block) {
		let heat = event.registerHeat(name, color)
		heat.addHeatSource(block)
			.jeiTip()
		return heat.register()
	}

	addHeatLevel("grilled", 0xFF8C00, "minecraft:fire")
})