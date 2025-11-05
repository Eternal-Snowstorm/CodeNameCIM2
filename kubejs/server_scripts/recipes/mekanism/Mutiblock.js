ServerEvents.recipes((event) => {
	let { kubejs, tconstruct } = event.recipes
	const CASING = "mekanism:steel_casing"
	let mekTiers = [
		"basic",
		"advanced",
		"elite",
		"ultimate"
	]
	let Mech = {
		T1: "cmi:basic_mekanism_mechanism",
		T2: "cmi:advanced_mekanism_mechanism",
		T3: "cmi:elite_mekanism_mechanism",
		T4: "cmi:ultimate_mekanism_mechanism",
		COPPER: "cmi:copper_mechanism",
		AIR: "cmi:air_tight_mechanism",
		BRONZE: "cmi:bronze_mechanism",
		COIL: "cmi:coil_mechanism",
		PRECISION: "create:precision_mechanism",
		COMPUTING: "cmi:computing_mechanism"
	}

	// 动态储罐
	kubejs.shaped("8x mekanism:dynamic_tank", [
		" A ",
		"ABA",
		" A "
	], {
		A: ["#forge:plates/cast_iron", "#forge:plates/industrial_iron"],
		B: Mech.COPPER
	}).id("mekanism:dynamic_tank")

	kubejs.shaped("mekanism:dynamic_valve", [
		"ABA"
	], {
		A: "2x mekanism:dynamic_tank",
		B: Mech.COPPER
	}).id("mekanism:dynamic_valve")

	// 蒸馏
	kubejs.shaped("8x mekanism:thermal_evaporation_block", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/constantan",
		B: CASING
	}).id("mekanism:thermal_evaporation/block")

	kubejs.shaped("mekanism:thermal_evaporation_controller", [
		" B ",
		" A ",
		" C "
	], {
		A: "mekanism:thermal_evaporation_block",
		B: Mech.T1,
		C: Mech.BRONZE
	}).id("mekanism:thermal_evaporation/controller")

	kubejs.shaped("2x mekanism:thermal_evaporation_valve", [
		"ABA"
	], {
		A: "mekanism:thermal_evaporation_block",
		B: Mech.COPPER
	}).id("mekanism:thermal_evaporation/valve")

	// 锅炉
	kubejs.shaped("8x mekanism:boiler_casing", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/stainless_steel",
		B: Mech.BRONZE
	}).id("mekanism:boiler_casing")

	kubejs.shaped("mekanism:pressure_disperser", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:wires/steel",
		B: "ad_astra:vent"
	}).id("mekanism:pressure_disperser")

	kubejs.shaped("mekanism:boiler_valve", [
		"ABA",
		"C C",
		"ABA"
	], {
		A: "mekanism:boiler_casing",
		B: Mech.AIR,
		C: Mech.COPPER
	}).id("mekanism:boiler_valve")

	// 感应矩阵
	kubejs.shaped("4x mekanism:induction_casing", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/platinum",
		B: Mech.COIL
	}).id("mekanism:induction/casing")

	mekTiers.forEach((tier) => {
		kubejs.shaped(`mekanism:${tier}_induction_cell`, [
			"ABA",
			"CDC",
			"ABA"
		], {
			A: "#forge:plates/osmium",
			B: `cmi:${tier}_mekanism_mechanism`,
			C: "cmi:coil_mechanism",
			D: `mekanism:${tier}_energy_cube`
		}).id(`mekanism:induction/cell/${tier}`)

		kubejs.shaped(`mekanism:${tier}_induction_provider`, [
			"ABA",
			"CDC",
			"ABA"
		], {
			A: "#forge:plates/osmium",
			B: `cmi:${tier}_mekanism_mechanism`,
			C: "cmi:cobalt_mechanism",
			D: `mekanism:${tier}_energy_cube`
		}).id(`mekanism:induction/provider/${tier}`)
	})

	// 裂变
	kubejs.shaped("4x mekanismgenerators:fission_reactor_casing", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/lead",
		B: CASING
	}).id("mekanismgenerators:fission_reactor/casing")

	kubejs.shaped("4x mekanismgenerators:fission_reactor_port", [
		"ABA",
		"C C",
		"ABA"
	], {
		A: "mekanismgenerators:fission_reactor_casing",
		B: Mech.AIR,
		C: Mech.COPPER
	}).id("mekanismgenerators:fission_reactor/port")

	kubejs.shaped("mekanismgenerators:control_rod_assembly", [
		"ABA",
		"CDC",
		"CDC"
	], {
		A: "#forge:plates/stainless_steel",
		B: Mech.T2,
		C: "#forge:rods/silver",
		D: "cmi:nuke_cooler"
	}).id("mekanismgenerators:fission_reactor/control_rod_assembly")

	kubejs.shaped("2x mekanismgenerators:fission_fuel_assembly", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "alexscaves:fissile_core",
		C: "#forge:plates/lead",
		D: Mech.AIR
	}).id("mekanismgenerators:fission_reactor/fuel_assembly")

	kubejs.shaped("4x mekanismgenerators:fission_reactor_logic_adapter", [
		" A ",
		"ABA",
		" A "
	], {
		A: "mekanismgenerators:fission_reactor_casing",
		B: Mech.COMPUTING
	}).id("mekanismgenerators:fission_reactor/logic_adapter")

	// 涡轮
	kubejs.shaped("8x mekanismgenerators:turbine_casing", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/stainless_steel",
		B: Mech.BRONZE,
	}).id("mekanismgenerators:turbine/casing")

	kubejs.shaped("mekanismgenerators:rotational_complex", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: "#forge:plates/stainless_steel",
		B: Mech.COIL,
		C: Mech.T2,
		D: CASING,
		E: Mech.PRECISION
	}).id("mekanismgenerators:rotational_complex")

	kubejs.shaped("4x mekanismgenerators:turbine_valve", [
		"ABA",
		"C C",
		"ABA"
	], {
		A: "mekanismgenerators:turbine_casing",
		B: Mech.AIR,
		C: Mech.COPPER
	}).id("mekanismgenerators:turbine/valve")

	kubejs.shaped("2x mekanismgenerators:turbine_vent", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/stainless_steel",
		B: "ad_astra:vent"
	}).id("mekanismgenerators:turbine/vent")

	kubejs.shaped("4x mekanismgenerators:saturating_condenser", [
		"AAA",
		"BCB",
		"AAA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "#forge:plates/constantan",
		C: Mech.COPPER
	}).id("mekanismgenerators:saturating_condenser")

	kubejs.shaped("mekanismgenerators:turbine_rotor", [
		" A ",
		" B ",
		" A "
	], {
		A: ["#forge:plates/cast_iron", "#forge:plates/industrial_iron"],
		B: "#create:shaft"
	}).id("mekanismgenerators:turbine/rotor")

	kubejs.shaped("mekanismgenerators:turbine_blade", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/aluminum",
		B: "#forge:ingots/stainless_steel"
	}).id("mekanismgenerators:turbine/blade")

	// 玻璃
	kubejs.shaped("8x mekanism:structural_glass", [
		" A ",
		"AMA",
		" A "
	], {
		A: "#forge:glass",
		M: Mech.AIR,
	}).id("mekanism:structural_glass")

	tconstruct.casting_basin("mekanismgenerators:reactor_glass",
		Fluid.of("tconstruct:molten_lead", 180),
		"mekanism:structural_glass"
	)
		.cooling_time(50)
		.id("mekanismgenerators:reactor/glass")
})