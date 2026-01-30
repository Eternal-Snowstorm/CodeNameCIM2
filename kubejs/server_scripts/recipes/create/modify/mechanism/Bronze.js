ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 液压机
	kubejs.shaped("cmi:steam_hammer", [
		"A",
		"B",
		"C"
	], {
		A: "cmi:bronze_mechanism",
		B: "create:mechanical_press",
		C: "#forge:storage_blocks/bronze"
	})
})