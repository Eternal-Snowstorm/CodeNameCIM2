ServerEvents.highPriorityData((event) => {
	// 植物油
	new DieselEngineFuelType("#forge:plantoil", 1)
		.normal(32, 16384, 3)
		.modular(32, 32768, 5)
		.huge(48, 65536, 9)

	// 乙醇
	new DieselEngineFuelType("#forge:ethanol", 1)
		.normal(48, 16384, 4)
		.modular(48, 32768, 5)
		.huge(64, 65536, 6)

	// 生物柴油
	new DieselEngineFuelType("#forge:biodiesel", 1)
		.normal(64, 18432, 3)
		.modular(64, 36864, 5)
		.huge(96, 73728, 9)

	// 煤油
	new DieselEngineFuelType("cmi:kerosene", 1)
		.normal(32, 18432, 6)
		.modular(32, 36864, 8)
		.huge(64, 73728, 12)

	// 汽油
	new DieselEngineFuelType("#forge:gasoline", 1)
		.normal(96, 18432, 3)
		.modular(96, 36864, 5)
		.huge(128, 73728, 8)

	// 柴油
	new DieselEngineFuelType("#forge:diesel", 1)
		.normal(128, 20480, 6)
		.modular(128, 40960, 8)
		.huge(128, 81920, 12)

	// 精炼油
	new DieselEngineFuelType("thermal:refined_fuel", 1)
		.normal(128, 20480, 4)
		.modular(128, 40960, 6)
		.huge(128, 81920, 8)

	/**
	 * 
	 * @param {String} name 流体ID(Tag)
	 * @param {Number} speed 每秒消耗的流体量(mB)
	 * @returns 
	 */
	function DieselEngineFuelType(name, speed) {
		this.name = name
		this.speed = speed
		this.getFluidName = IngrUtils.getPath(name)

		this.engineFuelData = {
			fluid: name,
			sound_speed: speed,
			normal: {},
			modular: {},
			huge: {}
		}
	}

	DieselEngineFuelType.prototype.build = function () {
		event.addJson(
			`createdieselgenerators:diesel_engine_fuel_types/${this.getFluidName}.json`,
			this.engineFuelData
		)
	}

	/**
	 * 
	 * @param {Number} speed 转速
	 * @param {Number} strength 转速
	 * @param {Number} burnRate 燃料消耗速率
	 * @returns 
	 */
	DieselEngineFuelType.prototype.normal = function (speed, strength, burnRate) {
		this.engineFuelData.normal = {
			speed: speed,
			strength: strength,
			burn_rate: burnRate
		}
		return this
	}

	/**
	 * 
	 * @param {Number} speed 转速
	 * @param {Number} strength 转速
	 * @param {Number} burnRate 燃料消耗速率
	 * @returns 
	 */
	DieselEngineFuelType.prototype.modular = function (speed, strength, burnRate) {
		this.engineFuelData.modular = {
			speed: speed,
			strength: strength,
			burn_rate: burnRate
		}
		return this
	}

	/**
	 * 
	 * @param {Number} speed 转速
	 * @param {Number} strength 转速
	 * @param {Number} burnRate 燃料消耗速率
	 * @returns 
	 */
	DieselEngineFuelType.prototype.huge = function (speed, strength, burnRate) {
		this.engineFuelData.huge = {
			speed: speed,
			strength: strength,
			burn_rate: burnRate
		}
		this.build()
		return this
	}

	/**
	 * 
	 * @param {Number} seconds 燃烧时长
	 * @returns 
	 */
	DieselEngineFuelType.prototype.train = function (seconds) {
		let trainFuelData = {
			fluids: [
				this.name
			],
			fuel_ticks: seconds * 20
		}
		event.addJson(`cmi:railways_liquid_fuel/${this.getFluidName}.json`, trainFuelData)
		return this
	}
})