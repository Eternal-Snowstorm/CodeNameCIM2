ServerEvents.highPriorityData((event) => {
	// 石油
	addUnification("crude_oil", [
		"ad_astra:oil",
		"thermal:crude_oil"
	], "createdieselgenerators:crude_oil")

	// 植物油
	addUnification("plant_oil", [
		"immersiveengineering:plantoil",
		"createaddition:seed_oil"
	], "createdieselgenerators:plant_oil")

	// 蒸汽
	addUnification("steam", [
		"steampowered:steam",
		"create_steam_ages:steam"
	], "mekanism:steam")

	// 杂酚油
	addUnification("creosote", [
		"thermal:creosote"
	], "immersiveengineering:creosote")

	// 汽油
	addUnification("gasoline", [
		"thermal_extra:gasoline"
	], "createdieselgenerators:gasoline")

	// 生物柴油
	addUnification("biodiesel", [
		"createaddition:bioethanol",
		"immersiveengineering:biodiesel",
		"mekanismgenerators:bioethanol"
	], "createdieselgenerators:biodiesel")

	// 凛冰
	addUnification("cryo", [
		"ad_astra:cryo_fuel"
	], "neoecoae:cryotheum_solution")

	// 细雪
	addUnification("power_snow", [
		"fluidlogistics:powder_snow",
		"tconstruct:powdered_snow"
	], "tconstruct:powdered_snow")

	/**
	 * @example addUnification("oil", "#forge:oil", "createdieselgenerators:crude_oil")
	 * @example addUnification("oil", ["ad_astra:oil", "thermal:crude_oil"], "createdieselgenerators:crude_oil")
	 * @param {string} name
	 * @param {Internal.Fluid | Internal.FluidTags | (Internal.Fluid | Internal.FluidTags)[]} match
	 * @param {Internal.Fluid} result
	 */
	function addUnification(name, match, result) {
		if (!Array.isArray(match)) {
			match = [match]
		}

		event.addJson(`oef:replacements/${name}.json`, match.map((fluid) => ({
			matchFluid: fluid,
			resultFluid: result
		})))
	}
})