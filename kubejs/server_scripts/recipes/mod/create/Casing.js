ServerEvents.recipes((event) => {
	let { kubejs, create } = event.getRecipes()

	// 机壳增产
	create.deploying(`create:andesite_casing`, [
		"#minecraft:planks",
		"cmi:andesite_casing_framework"
	])

	create.deploying(`create:brass_casing`, [
		"#minecraft:planks",
		"cmi:brass_casing_framework"
	])

	create.deploying(`create:copper_casing`, [
		"#forge:treated_wood",
		"cmi:copper_casing_framework"
	])

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

	// 青铜机壳
	create.item_application("cmi:bronze_casing", [
		"createdeco:industrial_iron_sheet_metal",
		["#forge:ingots/bronze", "#forge:plates/bronze"]
	]).id("cmi:item_application/bronze_casing")
})