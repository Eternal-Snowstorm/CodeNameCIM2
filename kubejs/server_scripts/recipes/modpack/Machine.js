ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 大型蒸汽锅炉
	kubejs.shaped("mm:large_steam_boiler", [
		"AAA",
		"BCB",
		"DDD"
	], {
		A: [
			"#forge:ingots/bronze",
			"#forge:plates/bronze"
		],
		B: "cmi:bronze_mechanism",
		C: "mekanism:steam_boiler",
		D: "#forge:storage_blocks/bronze"
	})
})