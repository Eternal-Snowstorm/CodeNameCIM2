ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 基础流体储罐
	kubejs.shaped("mekanism:basic_fluid_tank", [
		"ABA",
		"C C",
		"ADA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:copper_mechanism",
		C: "#forge:glass_panes",
		D: "cmi:basic_mekanism_mechanism"
	})

	// 高级流体储罐
	kubejs.shaped("mekanism:advanced_fluid_tank", [
		"ABA",
		"C C",
		"ADA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:copper_mechanism",
		C: "#forge:glass_panes",
		D: "cmi:advanced_mekanism_mechanism"
	})

	// 精英流体储罐
	kubejs.shaped("mekanism:elite_fluid_tank", [
		"ABA",
		"C C",
		"ADA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:copper_mechanism",
		C: "#forge:glass_panes",
		D: "cmi:elite_mekanism_mechanism"
	})

	// 终极流体储罐
	kubejs.shaped("mekanism:ultimate_fluid_tank", [
		"ABA",
		"C C",
		"ADA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:copper_mechanism",
		C: "#forge:glass_panes",
		D: "cmi:ultimate_mekanism_mechanism"
	})

	// 基础化学品储罐
	kubejs.shaped("mekanism:basic_chemical_tank", [
		"ABA",
		"A A",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:air_tight_mechanism",
		C: "cmi:basic_mekanism_mechanism"
	})

	// 高级化学品储罐
	kubejs.shaped("mekanism:advanced_chemical_tank", [
		"ABA",
		"A A",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:air_tight_mechanism",
		C: "cmi:advanced_mekanism_mechanism"
	})

	// 精英化学品储罐
	kubejs.shaped("mekanism:elite_chemical_tank", [
		"ABA",
		"A A",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:air_tight_mechanism",
		C: "cmi:elite_mekanism_mechanism"
	})

	// 终极化学品储罐
	kubejs.shaped("mekanism:ultimate_chemical_tank", [
		"ABA",
		"A A",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:air_tight_mechanism",
		C: "cmi:ultimate_mekanism_mechanism"
	})

	// 基础能量立方
	kubejs.shaped("mekanism:basic_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "cmi:basic_mekanism_mechanism",
		E: "mekanism:energy_tablet",
		I: "cmi:coil_mechanism",
		P: "mekanism:steel_casing"
	})

	// 高级能量立方
	kubejs.shaped("mekanism:advanced_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "cmi:advanced_mekanism_mechanism",
		E: "mekanism:energy_tablet",
		I: "cmi:coil_mechanism",
		P: "mekanism:steel_casing"
	})

	// 精英能量立方
	kubejs.shaped("mekanism:elite_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "cmi:elite_mekanism_mechanism",
		E: "mekanism:energy_tablet",
		I: "cmi:coil_mechanism",
		P: "mekanism:steel_casing"
	})

	// 终极能量立方
	kubejs.shaped("mekanism:ultimate_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "cmi:ultimate_mekanism_mechanism",
		E: "mekanism:energy_tablet",
		I: "cmi:coil_mechanism",
		P: "mekanism:steel_casing"
	})
})