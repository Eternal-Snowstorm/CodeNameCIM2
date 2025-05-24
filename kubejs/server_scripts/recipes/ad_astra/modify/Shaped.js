ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("ad_astra:solar_panel", [
		"AAA",
		"BCB",
		"DDD"
	], {
		A: "mekanismgenerators:solar_panel",
		B: "#forge:plates/iron",
		C: "thermal:energy_cell",
		D: "#forge:ingots/osmium"
	}).id("ad_astra:solar_panel")
})