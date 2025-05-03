JEIEvents.hideItems((event) => {
	function hideItemFromJEI(item) {
		event.hide(item)
	}

	let blockIO = [
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
		"ue_addons:ponder_thermal_slot_energy",
		"ue_addons:ponder_thermal_energy",
		"ue_addons:ponder_thermal_energy_empty",
		"ue_addons:ponder_thermal_gui",
		"ue_addons:ponder_thermal_gui_blue",
		"ue_addons:ponder_thermal_gui_blue_icon",
		"ue_addons:ponder_thermal_gui_green",
		"ue_addons:ponder_thermal_gui_green_icon",
		"ue_addons:ponder_thermal_gui_red",
		"ue_addons:ponder_thermal_gui_red_icon",
		"ue_addons:ponder_thermal_gui_gray",
		"ue_addons:ponder_thermal_gui_gray_icon",
		"ue_addons:ponder_thermal_gui_lightblue",
		"ue_addons:ponder_thermal_gui_lightblue_icon",
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
		"ue_addons:ponder_thermal_arrow",
		"ue_addons:ponder_thermal_arrow_active",
		"ue_addons:ponder_thermal_fire",
		"ue_addons:ponder_thermal_fire_active",
		"ue_addons:ponder_thermal_sand",
		"ue_addons:ponder_thermal_glass"
	]
	blockIO.forEach((item) => {
		hideItemFromJEI(item)
	})
})