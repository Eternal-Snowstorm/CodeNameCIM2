ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("4x minecraft:chest", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#minecraft:logs"
	})

	kubejs.shaped("create:crushing_wheel", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "create:andesite_alloy_block",
		B: "thermal:iron_gear",
		C: "cmi:andesite_mechanism"
	})

	// 高炉
	kubejs.shaped("minecraft:blast_furnace", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "minecraft:furnace",
		C: "minecraft:smooth_stone"
	}).id("minecraft:blast_furnace")

	// 工业平台
	kubejs.shaped("industrial_platform:industrial_platform", [
		"ACB",
		"EDE",
		"EEE"
	], {
		A: "#forge:dyes/yellow",
		B: "#forge:dyes/black",
		C: "#forge:deepslate",
		D: "cmi:stone_mechanism",
		E: "#forge:stone"
	}).id("industrial_platform:platform")

	kubejs.shaped("industrial_platform:industrial_platform", [
		"BCA",
		"EDE",
		"EEE"
	], {
		A: "#forge:dyes/yellow",
		B: "#forge:dyes/black",
		C: "#forge:deepslate",
		D: "cmi:stone_mechanism",
		E: "#forge:stone"
	}).id("industrial_platform:platform_2")

	// 流体池
	kubejs.shaped("industrial_platform:fluid_pool", [
		"A B",
		"CDC",
		"CEC"
	], {
		A: "#forge:dyes/yellow",
		B: "#forge:dyes/black",
		C: "#forge:stone",
		D: "#forge:deepslate",
		E: "cmi:stone_mechanism",
	}).id("industrial_platform:pool")

		kubejs.shaped("industrial_platform:fluid_pool", [
		"B A",
		"CDC",
		"CEC"
	], {
		A: "#forge:dyes/yellow",
		B: "#forge:dyes/black",
		C: "#forge:stone",
		D: "#forge:deepslate",
		E: "cmi:stone_mechanism",
	}).id("industrial_platform:pool_2")
})