ServerEvents.highPriorityData((event) => {
	// 石油
	addJsonFile("crude_oil", addUnification([
		"ad_astra:oil",
		"thermal:crude_oil"
	],
		"createdieselgenerators:crude_oil"
	))

	// 植物油
	addJsonFile("plant_oil", addUnification([
		"immersiveengineering:plantoil",
		"createaddition:seed_oil"
	],
		"createdieselgenerators:plant_oil"
	))

	// 蒸汽
	addJsonFile("steam", addUnification([
		"steampowered:steam",
		"create_steam_ages:steam"
	],
		"mekanism:steam"
	))

	// 杂酚油
	addJsonFile("creosote", addUnification([
		"thermal:creosote"
	],
		"immersiveengineering:creosote"
	))

	// 汽油
	addJsonFile("gasoline", addUnification([
		"thermal_extra:gasoline"
	],
		"createdieselgenerators:gasoline"
	))

	// 生物柴油
	addJsonFile("biodiesel", addUnification([
		"createaddition:bioethanol",
		"immersiveengineering:biodiesel",
		"mekanismgenerators:bioethanol"
	],
		"createdieselgenerators:biodiesel"
	))

	// 凛冰
	addJsonFile("cryo", addUnification([
		"ad_astra:cryo_fuel"
	],
		"neoecoae:cryotheum_solution"
	))

	/**
	 * @example addJsonFile("oil", addUnification("#forge:oil", "createdieselgenerators:crude_oil"))
	 * @param {Internal.Fluid | Internal.FluidTags} match 
	 * @param {Internal.Fluid} fluid 
	 * @returns 
	 */
	function addUnification(match, fluid) {
		return [{
			matchFluid: match,
			resultFluid: fluid
		}]
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oef:replacements/${name}.json`, unification)
	}
})