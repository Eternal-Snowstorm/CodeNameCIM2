ServerEvents.highPriorityData((event) => {

	// 植物油
	addDieselEngineFuelType("#forge:plantoil", 1)
		.normal(32, 16384, 1)
		.modular(32, 32768, 1)
		.huge(48, 65536, 1)

	// 酒精
	addDieselEngineFuelType("#forge:ethanol", 1)
		.normal(48, 16384, 1)
		.modular(48, 32768, 1)
		.huge(64, 65536, 1)

	// 生物柴油
	addDieselEngineFuelType("#forge:biodiesel", 1)
		.normal(64, 18432, 1)
		.modular(64, 36864, 1)
		.huge(96, 73728, 1)

	// 汽油
	addDieselEngineFuelType("#forge:gasoline", 1)
		.normal(96, 18432, 1)
		.modular(96, 36864, 1)
		.huge(128, 73728, 1)

	// 柴油
	addDieselEngineFuelType("#forge:diesel", 1)
		.normal(128, 24576, 1)
		.modular(128, 49152, 1)
		.huge(256, 98304, 1)

	function addDieselEngineFuelType(name, speed) {
		let getFluidName = name.indexOf(":") !== -1 ? name.split(":")[1] : name

		let data = {
			fluid: name,
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