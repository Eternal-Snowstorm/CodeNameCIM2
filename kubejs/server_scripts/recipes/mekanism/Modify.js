ServerEvents.recipes((event) => {
	let { kubejs, thermal_extra, mekanism } = event.recipes

	kubejs.shaped("mekanism:cardboard_box", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/dense_obsidian"
	}).id("mekanism:cardboard_box")

	// 钢制外壳
	kubejs.shaped("8x mekanism:steel_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:ingots/stainless_steel",
		B: "#forge:plates/polyolefin",
		C: "cmi:osmium_tile"
	}).id("mekanism:steel_casing")

	// 基础控制电路
	thermal_extra.component_assembly("mekanism:basic_control_circuit", [
		"#forge:dusts/emerald",
		"thermal_extra:polyolefin_plate"
	])

	// 太阳能替换
	event.replaceInput({
		input: "mekanismgenerators:solar_panel",
		output: "mekanismgenerators:solar_generator"
	}, "mekanismgenerators:solar_panel", "ad_astra:photovoltaic_etrium_cell")

	event.replaceInput({
		input: "#forge:plates/hdpe",
		output: "mekanism:solar_neutron_activator"
	}, "#forge:plates/hdpe", "ad_astra:photovoltaic_etrium_cell")

	event.custom(
		{
			"type": "mekanism:metallurgic_infusing",
			"chemicalInput": {
				"amount": 20, "tag": "mekanism:redstone"
			},
			"itemInput": {
				"ingredient": { "tag": "forge:plates/polyolefin" }
			},
			"output": {
				"item": "mekanism:basic_control_circuit"
			}
		}
	)

	mekanism.crystallizing("gas","mekanism:pellet_antimatter",
		{ gas: "mekanism:antimatter", amount: 10 })
	mekanism.oxidizing("mekanism:pellet_antimatter",
		{ gas: "mekanism:antimatter", amount: 10 })

	mekanism.combining("create:shadow_steel",
		"create:chromatic_compound","64x #forge:dusts/obsidian")
	mekanism.combining("create:refined_radiance",
		"create:chromatic_compound","64x #forge:dusts/glowstone")
})