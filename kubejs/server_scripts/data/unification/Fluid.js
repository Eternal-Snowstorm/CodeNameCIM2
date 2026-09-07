ServerEvents.highPriorityData((event) => {
	// 石油
	addJsonFile("crude_oil", addUnification([
		"ad_astra:oil",
		"thermal:crude_oil"
	],
		"createdieselgenerators:crude_oil"
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