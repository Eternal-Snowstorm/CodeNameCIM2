ServerEvents.recipes((event) => {
	let { kubejs, mekanism } = event.recipes

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

	event.replaceInput({
		input: "#forge:plates/hdpe",
		output: "mekanism:solar_neutron_activator"
	}, "#forge:plates/hdpe", "ad_astra:photovoltaic_etrium_cell")

	mekanism.crystallizing(
		"gas",
		"mekanism:pellet_antimatter",
		MekanismType.Gas.of("mekanism:antimatter", 10)
	)
	mekanism.oxidizing(
		"mekanism:pellet_antimatter",
		MekanismType.Gas.of("mekanism:antimatter", 10)
	)

	mekanism.combining(
		"create:shadow_steel",
		"create:chromatic_compound",
		"64x #forge:dusts/obsidian"
	)
	mekanism.combining(
		"create:refined_radiance",
		"create:chromatic_compound",
		"64x #forge:dusts/glowstone"
	)
})