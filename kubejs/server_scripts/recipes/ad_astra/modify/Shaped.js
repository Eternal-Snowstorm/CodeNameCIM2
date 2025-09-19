ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

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

	// 埃忒恩系列
	kubejs.shaped("64x ad_astra:etrium_factory_block", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:plates/etrium",
		B: "#forge:ingots/etrium"
	})

	kubejs.shaped("64x ad_astra:encased_etrium_block", [
		"AAA",
		"BBB",
		"AAA"
	], {
		A: "#forge:ingots/steel",
		B: "#forge:plates/etrium"
	})

	kubejs.shaped("64x ad_astra:etrium_plateblock", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:plates/etrium",
		B: "#forge:rods/etrium"
	})

	kubejs.shaped("64x ad_astra:etrium_panel", [
		"ABA",
		"BBB",
		"ABA"
	], {
		A: "#forge:ingots/etrium",
		B: "#forge:plates/etrium"
	})
})