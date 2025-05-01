ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("mekanism:cardboard_box", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/obsidian"
	}).id("mekanism:cardboard_box")

	// 钢制外壳
	kubejs.shaped("mekanism:steel_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:ingots/stainless_steel",
		B: "#forge:plates/polyolefin",
		C: "ue_addons:osmium_tile"
	}).id("mekanism:steel_casing")
})