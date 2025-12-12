ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

	// 流体管道
	kubejs.shaped("8x ad_astra:desh_fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/desh"
	}).id("ad_astra:desh_fluid_pipe")

	kubejs.shaped("8x ad_astra:ostrum_fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/ostrum"
	}).id("ad_astra:ostrum_fluid_pipe")

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
		D: "cmi:wooden_mechanism"
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

	// 氧气装载机
	kubejs.shaped("ad_astra:oxygen_loader", [
		"AAA",
		"CED",
		"BFB"
	], {
		A: ["#forge:ingots/steel", "#forge:plates/steel"],
		B: "#forge:sheetmetals/steel",
		C: "cmi:copper_mechanism",
		D: "cmi:air_tight_mechanism",
		E: "cmi:tier_1_aviation_mechanism",
		F: "#cmi:batteries"
	}).id("ad_astra:oxygen_loader")

	// 航天服T1
	create.mechanical_crafting("ad_astra:space_helmet", [
		"AAA",
		"BCB"
	], {
		A: "#forge:plates/hdpe",
		B: "#forge:plates/tungsten_steel",
		C: "#forge:panes/glass"
	}).id("ad_astra:space_helmet")

	create.mechanical_crafting("ad_astra:space_suit", [
		" A A ",
		"CABAC",
		" BAB "
	], {
		A: "#forge:plates/tungsten_steel",
		B: "#forge:plates/hdpe",
		C: "ad_astra:gas_tank"
	}).id("ad_astra:space_suit")

	create.mechanical_crafting("ad_astra:space_pants", [
		"ABA",
		"B B",
		"A A"
	], {
		A: "#forge:plates/tungsten_steel",
		B: "#forge:plates/hdpe"
	}).id("ad_astra:space_pants")

	create.mechanical_crafting("ad_astra:space_boots", [
		"A A",
		"B B",
	], {
		A: "#forge:plates/tungsten_steel",
		B: "#forge:plates/hdpe"
	}).id("ad_astra:space_boots")

	// 电力高炉
	kubejs.shaped("ad_astra:etrionic_blast_furnace", [
		"A A",
		"CMC",
		"DBD"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:coil_mechanism",
		C: "cmi:tier_1_aviation_mechanism",
		D: "#forge:ingots/stainless_steel",
		M: "minecraft:blast_furnace"
	}).id("ad_astra:etrionic_blast_furnace")

	// NASA
	kubejs.shaped("ad_astra:nasa_workbench", [
		"ABA",
		"CDC",
		"BEB"
	], {
		A: "#forge:rods/steel",
		B: "cmi:tier_1_aviation_mechanism",
		C: "vintageimprovements:laser",
		D: "cmi:computer_component",
		E: "#forge:storage_blocks/steel"
	}).id("ad_astra:nasa_workbench")

	// 氧气分配机
	kubejs.shaped("ad_astra:oxygen_distributor", [
		"ABA",
		"ACA",
		"DED"
	], {
		A: "ad_astra:fan",
		B: "cmi:tier_2_aviation_mechanism",
		C: "ad_astra:oxygen_loader",
		D: "mekanism:steel_casing",
		E: "ad_astra:oxygen_gear"
	}).id("ad_astra:oxygen_distributor")

	// 重力规正器
	kubejs.shaped("ad_astra:gravity_normalizer", [
		"ABA",
		"CCC"
	], {
		A: "ad_astra:etrionic_capacitor",
		B: "#forge:storage_blocks/etrium",
		C: "mekanism:steel_casing"
	}).id("ad_astra:gravity_normalizer")

	let metalTier = [
		"tungsten_steel",
		"desh",
		"ostrum",
		"calorite"
	]

	for (let i = 0; i <= 3; i++) {
		let j = i + 1
		// 火箭鼻锥
		kubejs.shaped(`cmi:tier_${j.toString()}_rocket_nose_cone`,
			[
				" A ",
				"ABA",
				" A "
			], {
			A: `#forge:plates/${metalTier[i]}`,
			B: `#create:mechanisms/tier_${j.toString()}_aviation`
		})

		// 火箭尾翼
		kubejs.shaped(`cmi:tier_${j.toString()}_rocket_fin`,
			[
				" A ",
				"BAB",
				"A A"
			], {
			A: `#forge:plates/${metalTier[i]}`,
			B: `#forge:rods/${metalTier[i]}`
		})
	}
})