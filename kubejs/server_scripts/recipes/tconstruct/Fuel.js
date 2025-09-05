ServerEvents.recipes((event) => {
	addFuel("ad_astra:cryo_fuel", 4000)
	addFuel("cmi:delta_unstable_solution", 1200)
	addFuel("ad_astra:fuel", 1400)
	addFuel("#forge:oil", 1200)
	addFuel("thermal:refined_fuel", 2000)
	addFuel("cmi:turbid_waste_liquid", 1200)

	function addFuel(name, temperature) {
		return event.custom({
			"type": "tconstruct:melting_fuel",
			"duration": 150,
			"fluid": {
				"amount": 50,
				[name.charAt(0) === "#" ? "tag" : "fluid"]: name.charAt(0) === "#" ? name.substring(1) : name
			},
			"rate": temperature / 100,
			"temperature": temperature
		})
	}
})