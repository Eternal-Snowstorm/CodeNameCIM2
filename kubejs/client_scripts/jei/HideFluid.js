JEIEvents.hideFluids((event) => {
	hideFluidFromJEI("thermal_extra:raw_zinc")
	hideFluidFromJEI("thermal_extra:raw_uranium")
	hideFluidFromJEI("thermal_extra:raw_aluminum")
	hideFluidFromJEI("thermal_extra:raw_copper")
	hideFluidFromJEI("thermal_extra:raw_gold")
	hideFluidFromJEI("thermal_extra:raw_iron")
	hideFluidFromJEI("thermal_extra:raw_lead")
	hideFluidFromJEI("thermal_extra:raw_nickel")
	hideFluidFromJEI("thermal_extra:raw_osmium")
	hideFluidFromJEI("thermal_extra:raw_silver")
	hideFluidFromJEI("thermal_extra:raw_tin")

	function hideFluidFromJEI(fluid) {
		event.hide(fluid)
	}
})