ServerEvents.recipes((event) => {
	let { kubejs, thermal_extra } = event.recipes

	kubejs.shaped("mekanism:cardboard_box", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/dense_obsidian"
	}).id("mekanism:cardboard_box")

	// 钢制外壳
	kubejs.shaped("mekanism:steel_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:ingots/stainless_steel",
		B: "#forge:plates/polyolefin",
		C: "cmi:osmium_tile"
	}).id("mekanism:steel_casing")

	thermal_extra.component_assembly("mekanism:basic_control_circuit", [
		"#forge:dusts/emerald",
		"thermal_extra:polyolefin_plate"
	])
})