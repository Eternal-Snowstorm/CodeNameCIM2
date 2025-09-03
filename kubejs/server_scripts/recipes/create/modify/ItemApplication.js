ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 安山机壳
	create.item_application("create:andesite_casing", [
		"#minecraft:logs",
		["#forge:ingots/andesite_alloy", "#forge:plates/andesite_alloy"]
	]).id("create:item_application/andesite_casing_from_log")

	// 铜机壳
	create.item_application("create:copper_casing", [
		"#forge:treated_wood",
		["#forge:ingots/copper", "#forge:plates/copper"]
	]).id("create:item_application/copper_casing_from_log")

	// 黄铜机壳
	create.item_application("create:brass_casing", [
		"#minecraft:logs",
		["#forge:ingots/brass", "#forge:plates/brass"]
	]).id("create:item_application/brass_casing_from_log")

	// 哭泣和黑曜石
	create.item_application("minecraft:crying_obsidian", [
		"minecraft:obsidian",
		"#forge:vegetables/onion"
	])
})