ServerEvents.highPriorityData((event) => {
	// Example
	addDieselEngineFuelType("minecraft:water", 1)
		.normal(96, 2048, 1)
		.modular(96, 2048, 1)
		.huge(128, 8192, 1)

	function addDieselEngineFuelType(name, speed) {
		let getFluidName = name.indexOf(":") !== -1 ? name.split(":")[1] : name

		let data = {
			fluid: getFluidName,
			sound_speed: speed || 1,
			normal: {},
			modular: {},
			huge: {}
		}

		function save() {
			event.addJson(`${global.namespace}:diesel_engine_fuel_types/${getFluidName}.json`, data)
		}

		return {
			normal: function (speed, strength, burnRate) {
				data.normal = {
					speed: speed,
					strength: strength,
					burn_rate: burnRate
				}
				return this
			},
			modular: function (speed, strength, burnRate) {
				data.modular = {
					speed: speed,
					strength: strength,
					burn_rate: burnRate
				}
				return this
			},
			huge: function (speed, strength, burnRate) {
				data.huge = {
					speed: speed,
					strength: strength,
					burn_rate: burnRate
				}
				save()
				return this
			}
		}
	}
})