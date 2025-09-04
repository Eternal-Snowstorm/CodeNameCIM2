ServerEvents.recipes((event) => {
	function addFluidFuel(name, temperature) {
		return event.custom({
			"type": "tconstruct:melting_fuel",
			"duration": 150,
			"fluid": {
				"amount": 50,
				"fluid": name
			},
			"rate": temperature / 100,
			"temperature": temperature
		})
	}

	function addTagFuel(tag, temperature) {
		return event.custom({
			"type": "tconstruct:melting_fuel",
			"duration": 150,
			"fluid": {
				"amount": 50,
				"tag": tag
			},
			"rate": temperature / 100,
			"temperature": temperature
		})
	}
})