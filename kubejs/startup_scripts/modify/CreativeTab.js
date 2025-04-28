StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("ue_addons:creative_mechanism")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))

	event.add([
		"create:precision_mechanism",
		"vintageimprovements:redstone_module"
	])
	event.remove([
		"ue_addons:ponder_thermal_input",
		"ue_addons:ponder_thermal_output",
		"ue_addons:ponder_thermal_output_on",
		"ue_addons:ponder_thermal_input_on",
		"ue_addons:ponder_thermal_fluid",
		"ue_addons:ponder_thermal_fluid_blue",
		"ue_addons:ponder_thermal_fluid_orange",
		"ue_addons:ponder_thermal_slot",
		"ue_addons:ponder_thermal_slot_blue",
		"ue_addons:ponder_thermal_slot_orange",
		"ue_addons:ponder_thermal_energy",
		"ue_addons:ponder_thermal_gui",
		"ue_addons:ponder_thermal_gui_blue",
		"ue_addons:ponder_thermal_gui_green",
		"ue_addons:ponder_thermal_gui_red",
		"ue_addons:ponder_thermal_machine_front",
		"ue_addons:ponder_thermal_machine_side",
		"ue_addons:ponder_thermal_machine_side_blue",
		"ue_addons:ponder_thermal_machine_side_orange",
		"ue_addons:ponder_thermal_machine_side_mix",
		"ue_addons:ponder_thermal_machine_side_disabled",
		"ue_addons:ponder_thermal_machine_top",
		"ue_addons:ponder_thermal_machine_bottom",
		"ue_addons:ponder_thermal_rs1_off",
		"ue_addons:ponder_thermal_rs2_off",
		"ue_addons:ponder_thermal_rs3_off",
		"ue_addons:ponder_thermal_rs1_on",
		"ue_addons:ponder_thermal_rs2_on",
		"ue_addons:ponder_thermal_rs3_on",
		"ue_addons:ponder_thermal_lava",
		"ue_addons:ponder_thermal_water",
		"ue_addons:ponder_thermal_arrow"
    
	])
})

StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})