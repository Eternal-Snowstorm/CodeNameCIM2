ServerEvents.highPriorityData((event) => {
	// 植物油
	addDieselEngineFuelType("#forge:plantoil", 1)
		.normal(32, 16384, 5)
		.modular(32, 32768, 5)
		.huge(48, 65536, 5)

	// 乙醇
	addDieselEngineFuelType("#forge:ethanol", 1)
		.normal(48, 16384, 5)
		.modular(48, 32768, 5)
		.huge(64, 65536, 5)

	// 生物柴油
	addDieselEngineFuelType("#forge:biodiesel", 1)
		.normal(64, 18432, 5)
		.modular(64, 36864, 5)
		.huge(96, 73728, 5)

	// 煤油
	addDieselEngineFuelType("#forge:kerosene", 1)
		.normal(32, 18432, 8)
		.modular(32, 36864, 8)
		.huge(64, 73728, 8)

	// 汽油
	addDieselEngineFuelType("#forge:gasoline", 1)
		.normal(96, 18432, 5)
		.modular(96, 36864, 5)
		.huge(128, 73728, 5)

	// 柴油
	addDieselEngineFuelType("#forge:diesel", 1)
		.normal(128, 20480, 5)
		.modular(128, 40960, 5)
		.huge(128, 81920, 5)

	// 精炼油
	addDieselEngineFuelType("thermal:refined_fuel", 1)
		.normal(128, 20480, 6)
		.modular(128, 40960, 6)
		.huge(128, 81920, 6)

	function addDieselEngineFuelType(name, speed) {
		let getFluidName = name.indexOf(":") !== -1 ? name.split(":")[1] : name

		let data = {
			fluid: name,
			sound_speed: speed,
			normal: {},
			modular: {},
			huge: {}
		}

		function save() {
			event.addJson(`createdieselgenerators:diesel_engine_fuel_types/${getFluidName}.json`, data)
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