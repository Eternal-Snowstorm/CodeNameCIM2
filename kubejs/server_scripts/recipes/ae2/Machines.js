ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("ae2:controller", [
		"SCS",
		"CMC",
		"SCS"
	], {
		S: "ae2:smooth_sky_stone_block",
		C: "ae2:fluix_crystal",
		M: "cmi:smart_mechanism"
	}).id("ae2:network/blocks/controller")

	kubejs.shaped("ae2:inscriber", [
		"IPI",
		"C M",
		"IPI"
	], {
		I: "#forge:ingots/iron",
		P: "create:mechanical_press",
		C: "ae2:fluix_crystal",
		M: "create:precision_mechanism"
	}).id("ae2:network/blocks/inscribers")

	kubejs.shaped("4x cmi:sky_stone_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/silver",
		B: '#ae2:all_certus_quartz',
		C: "ae2:smooth_sky_stone_block"
	})

	kubejs.shaped("4x cmi:computing_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/platinum",
		B: 'cmi:single_crystal_silicon',
		C: "cmi:osmium_tile"
	})
})