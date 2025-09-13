ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 太阳能发电机
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

	// 电缆
	kubejs.shaped("4x ad_astra:steel_cable", [
		"AAA",
		"BBB",
		"AAA"
	], {
		A: "thermal:cured_rubber",
		B: "#forge:ingots/silver"
	}).id("ad_astra:steel_cable")

	kubejs.shaped("4x ad_astra:desh_cable", [
		"AAA",
		"BBB",
		"AAA"
	], {
		A: "#forge:ingots/desh",
		B: "#forge:ingots/silver"
	}).id("ad_astra:desh_cable")

	// 奶酪块
	kubejs.shapeless("ad_astra:cheese_block", [
		"9x #forge:cheese",
	]).id("ad_astra:cheese_block")

	// 燃煤发电机
	kubejs.shaped("ad_astra:coal_generator", [
		"ABA",
		"ACA",
		"ADA"
	], {
		A: [
			"#forge:ingots/iron",
			"#forge:plates/iron"
		],
		B: "cmi:simple_battery",
		C: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		D: "#forge:coal"
	}).id("ad_astra:coal_generator")

	// 车轱辘
	kubejs.shaped("ad_astra:wheel", [
		" A ",
		"ABA",
		" A "
	], {
		A: "thermal:cured_rubber",
		B: "#forge:plates/steel"
	}).id("ad_astra:wheel")
})