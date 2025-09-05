ServerEvents.recipes((event) => {
	addFuel("ad_astra:cryo_fuel", 4000)
	addFuel("cmi:delta_unstable_solution", 1200)
	addFuel("ad_astra:fuel", 1400)
	addFuel("#forge:oil", 1200)
	addFuel("thermal:refined_fuel", 2000)
	addFuel("cmi:turbid_waste_liquid", 1200)
	addFuel("tconstruct:blazing_blood", 2500, true)

	function addFuel(name, temperature, replace) {
		let isTag = name.charAt(0) === "#"
		let realName = isTag ? name.substring(1) : name

		let recipe = event.custom({
			"type": "tconstruct:melting_fuel",
			"duration": 150,
			"fluid": {
				"amount": 50,
				[isTag ? "tag" : "fluid"]: realName
			},
			"rate": temperature / 100,
			"temperature": temperature
		})

		if (replace) {
			let idPath = realName.replace(":", "/")
			recipe.id(`tconstruct:smeltery/melting/fuel/${idPath}`)
		}

		return recipe
	}
})