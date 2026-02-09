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

	// 蜘蛛网
	kubejs.shaped("minecraft:cobweb", [
		"A A",
		" A ",
		"A A"
	], {
		A: "#forge:string"
	})

	// 锤子
	kubejs.shaped("cmi:flint_hammer", [
		"AAA",
		"ABA",
		" B "
	], {
		A: "minecraft:flint",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("cmi:iron_hammer", [
		"AAA",
		"ABA",
		" B "
	], {
		A: "#forge:ingots/iron",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("cmi:diamond_hammer", [
		"AAA",
		"ABA",
		" B "
	], {
		A: "#forge:gems/diamond",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("tiab:time_in_a_bottle", [
		"DCE",
		"ABA",
		"ECD"
	], {
		A: "minecraft:diamond",
		B: "minecraft:glass_bottle",
		C: "minecraft:clock",
		D: "cmi:cobalt_mechanism",
		E: "cmi:ender_mechanism"
	})
})