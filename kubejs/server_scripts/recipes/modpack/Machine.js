ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 丐版离心机
	kubejs.shaped("cmi:simple_centrifuge", [
		"ABA",
		"CDC",
		"EFE"
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "cmi:andesite_mechanism",
		C: "#create:shaft",
		D: "create:andesite_casing",
		E: "#vintageimprovements:springs/andesite",
		F: "minecraft:bucket"
	})

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