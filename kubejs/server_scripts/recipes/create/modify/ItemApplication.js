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

	// 哭泣黑曜石
	create.item_application("minecraft:crying_obsidian", [
		"minecraft:obsidian",
		"#forge:vegetables/onion"
	])

	// 雷达
	for (let i = 1; i <= 4; i++) {
		create.item_application(`cmi:radar_${i.toString()}`, [
			`cmi:broken_radar_${i.toString()}`,
			"cmi:radar_repair_kit"
		]).id(`cmi:radar_${i.toString()}_fix`)
	}

	create.item_application("cmi:power_supply", [
		"cmi:broken_power_supply",
		"cmi:power_supply_repair_kit"
	]).id("cmi:power_fix")

	create.item_application("cmi:transformer", [
		"cmi:broken_transformer",
		"cmi:transformer_repair_kit"
	]).id("cmi:trans_fix")

	create.item_application("cmi:tracking_array", [
		"cmi:broken_tracking_array",
		"cmi:tracker_repair_kit"
	]).id("cmi:tracker_fix")

	let dimensions = [
		"overworld",
		"moon",
		"mars",
		"mercury"
	]

	dimensions.forEach((dim) => {
		create.item_application("cmi:modem", [
			`cmi:broken_modem_${dim}`,
			`cmi:modem_repair_kit_${dim}`
		]).id(`cmi:modem_${dim}_fix`)
	})
})