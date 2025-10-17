ServerEvents.highPriorityData((event) => {
	// 石油
	addJsonFile("oil", addUnification(
		"#forge:oil",
		"createdieselgenerators:crude_oil"
	))

	// 蒸汽
	addJsonFile("steam", addUnification(
		"#forge:steam",
		"mekanism:steam"
	))

	/**
	 * @example addJsonFile("oil", addUnification("#forge:oil", "createdieselgenerators:crude_oil"))
	 * @param {Internal.Fluid | Internal.FluidTags} match 
	 * @param {Internal.Fluid} tag 
	 * @returns 
	 */
	function addUnification(match, fluid) {
		return {
			matchFluid: [match],
			resultFluid: fluid
		}
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}
})