ServerEvents.recipes((event) => {
	let { kubejs, minecraft } = event.recipes

	// 催生器
	kubejs.shaped("cmi:accelerator", [
		"ABC",
		"DEF",
		"GHI"
	], {
		A: "cmi:wooden_mechanism",
		B: "cmi:stone_mechanism",
		C: "cmi:iron_mechanism",
		D: "cmi:andesite_mechanism",
		F: "cmi:copper_mechanism",
		G: "cmi:photosensitive_mechanism",
		H: "cmi:gold_mechanism",
		I: "cmi:nature_mechanism",
		E: "cmi:stone_plate"
	})

	// 橡胶手
	kubejs.shaped("cmi:rubber_hand", [
		" A ",
		"BBB",
		" B "
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "thermal:cured_rubber"
	})

	// 木龙头
	kubejs.shaped("cmi:wooden_faucet", [
		" A ",
		"BBB",
		"  B"
	], {
		A: "#forge:rods/wooden",
		B: "#minecraft:planks"
	})

	// 锇砖瓦
	kubejs.shaped("cmi:osmium_tile", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/osmium",
		B: "#forge:ingots/vanadium"
	})

	// 水泵
	kubejs.shaped("cmi:water_pump", [
		"ACA",
		"ABA",
		"AAA"
	], {
		A: "#forge:treated_wood",
		B: "cmi:copper_mechanism",
		C: "#forge:plates/iron"
	})

	// 安山岩粉
	kubejs.shapeless("cmi:andesite_dust", [
		"#create:stone_types/andesite",
		"#forge:hammer"
	]).damageIngredient("#forge:hammer", 1)

	// 石板
	kubejs.shapeless("cmi:stone_plate", [
		"2x #forge:stone",
		"#forge:hammer"
	]).damageIngredient("#forge:hammer", 1)

	// 草绳
	kubejs.shapeless("cmi:grass_string", [
		"3x cmi:grass_fiber"
	])

	// 坩埚底座
	kubejs.shaped("3x cmi:crucible_base", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: [
			"#forge:plates/cast_iron",
			"#forge:plates/industrial_iron"
		]
	})

	// 坩埚风口
	kubejs.shaped("cmi:crucible_tuyere", [
		"ABA",
		"B B",
		"ABA"
	], {
		A: [
			"#forge:ingots/cast_iron",
			"#forge:ingots/industrial_iron"
		],
		B: [
			"#forge:plates/cast_iron",
			"#forge:plates/industrial_iron"
		]
	})

	// 坩埚燃烧室
	kubejs.shaped("immersiveindustry:burning_chamber", [
		"AAA",
		"BCB",
		"AAA"
	], {
		A: [
			"#forge:ingots/cast_iron",
			"#forge:ingots/industrial_iron"
		],
		B: [
			"#forge:plates/cast_iron",
			"#forge:plates/industrial_iron"
		],
		C: "minecraft:blast_furnace"
	}).id("immersiveindustry:crafting/burning_chamber")

	// 耐压外壳
	kubejs.shaped("8x cmi:pressure_resistance_casing", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/steel"
	})

	// 青铜外壳
	kubejs.shaped("4x cmi:bronze_casing", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/bronze"
	})

	// 泥炭块
	kubejs.shaped("cmi:peat_block", [
		"AA",
		"AA"
	], {
		A: "cmi:peat"
	})

	kubejs.shapeless("4x cmi:peat", [
		"cmi:peat_block"
	])

	kubejs.shaped("mekanism:metallurgic_infuser", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "minecraft:redstone",
		C: "cmi:basic_mekanism_mechanism",
		B: "minecraft:furnace",
		D: "mekanism:steel_casing"
	}).id("mekanism:metallurgic_infuser")

	kubejs.shaped("mekanism:enrichment_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "minecraft:redstone",
		B: "cmi:basic_mekanism_mechanism",
		C: "minecraft:netherite_ingot",
		D: "mekanism:steel_casing"
	}).id("mekanism:enrichment_chamber")

	// 安山岩
	addSmeltingRecipe(event, "2x minecraft:andesite", "cmi:andesite_aggregate")

	// IOBlock
	kubejs.shapeless("cmi:gui_block", [
		"minecraft:dirt"
	])

	// IOBlock
	Ingredient.of("#cmi:io_debug_block")
		.getItemIds()
		.forEach((id) => {
			minecraft.stonecutting(id, "cmi:gui_block")
			minecraft.stonecutting(id, "#cmi:io_debug_block")
		})

	// 公仔
	Ingredient.of("#cmi:dev_doll")
		.getItemIds()
		.forEach((id) => {
			minecraft.stonecutting(id, "#minecraft:wool")
			minecraft.stonecutting(id, "#cmi:dev_doll")
		})
})