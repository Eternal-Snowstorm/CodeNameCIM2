ServerEvents.recipes((event) => {
	let { create, createaddition, kubejs, tconstruct } = event.recipes
	let inc = "immersiveengineering:plate_aluminum"

	create.deploying("minecraft:sculk_sensor", [
		"minecraft:sculk",
		"minecraft:redstone_block"
	])

	create.deploying("minecraft:sculk_shrieker", [
		"minecraft:sculk",
		"minecraft:ender_pearl"
	])

	create.deploying("minecraft:sculk_catalyst", [
		"minecraft:sculk",
		"create:experience_block"
	])

	create.deploying("minecraft:sculk", [
		"create:experience_nugget",
		"minecraft:sculk_catalyst"
	]).keepHeldItem()

	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"minecraft:ender_pearl"
	])

	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"#forge:dusts/ender_pearl"
	])

	kubejs.shaped("3x createaddition:straw", [
		"A A",
		"B B",
		"A A"
	], {
		A: [
			"#forge:ingots/copper",
			"#forge:plates/copper",
			"#forge:rods/copper",

			"#forge:ingots/tin",
			"#forge:plates/tin",
			"#forge:rods/tin",

			"#forge:ingots/bronze",
			"#forge:plates/bronze",
			"#forge:rods/bronze",

			"#forge:ingots/iron",
			"#forge:plates/iron",
			"#forge:rods/iron",

			"#forge:ingots/brass",
			"#forge:plates/brass",
			"#forge:rods/brass"
		],
		B: [
			"minecraft:dried_kelp",
			"minecraft:sugar_cane",
			"minecraft:bamboo",
			"#forge:bones"
		]
	})

	kubejs.shaped("3x createaddition:straw", [
		"ABA",
		"   ",
		"ABA"
	], {
		A: [
			"#forge:ingots/copper",
			"#forge:plates/copper",
			"#forge:rods/copper",

			"#forge:ingots/tin",
			"#forge:plates/tin",
			"#forge:rods/tin",

			"#forge:ingots/bronze",
			"#forge:plates/bronze",
			"#forge:rods/bronze",

			"#forge:ingots/iron",
			"#forge:plates/iron",
			"#forge:rods/iron",

			"#forge:ingots/brass",
			"#forge:plates/brass",
			"#forge:rods/brass"
		],
		B: [
			"minecraft:dried_kelp",
			"minecraft:sugar_cane",
			"minecraft:bamboo",
			"#forge:bones"
		]
	})

	createaddition.rolling("3x createaddition:straw", [
		"minecraft:bamboo"
	]).id("createaddition:rolling/straw")

	create.mechanical_crafting("81x minecraft:rotten_flesh", [
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA"
	], {
		A: "minecraft:rotten_flesh"
	}).id(`${global.namespace}:what_the_fuck_is_this`)

	// 水龙头
	kubejs.shaped("supplementaries:faucet", [
		" A ",
		"BBB",
		"  B"
	], {
		A: "cmi:iron_mechanism",
		B: "#forge:plates/iron"
	}).id("supplementaries:faucet")

	kubejs.shaped("cmi:bronze_nugget_cast", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/bronze",
		B: "#forge:nuggets/iron"
	})

	kubejs.shaped("2x minecraft:torch", [
		"A",
		"B"
	], {
		A: "cmi:peat",
		B: "#forge:rods/wooden"
	}).id("cmi:peat_torch")

	// pipez item|fluid|energy|gas|all
	kubejs.shaped("16x pipez:item_pipe", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/invar",
		B: "cmi:wooden_mechanism"
	}).id("pipez:item_pipe")

	kubejs.shaped("16x pipez:fluid_pipe", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/invar",
		B: "cmi:copper_mechanism"
	}).id("pipez:fluid_pipe")

	kubejs.shaped("16x pipez:energy_pipe", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/invar",
		B: "vintageimprovements:redstone_module"
	}).id("pipez:energy_pipe")

	kubejs.shaped("16x pipez:gas_pipe", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/invar",
		B: "cmi:osmium_mechanism"
	}).id("pipez:gas_pipe")

	kubejs.shapeless("4x pipez:universal_pipe", [
		"pipez:item_pipe",
		"pipez:fluid_pipe",
		"pipez:energy_pipe",
		"pipez:gas_pipe",
	]).id("pipez:universal_pipe")

	kubejs.shapeless("cmi:mechanism", [
		"cmi:dont_kill_belalus",
		"#create:mechanisms",
	])

	create.cutting("minecraft:echo_shard", [
		"cmi:sculk_mechanism"
	])

	kubejs.shapeless("pipez:basic_upgrade", [
		"cmi:cobalt_mechanism",
		"#forge:plates/iron",
	]).id("pipez:basic_upgrade")

	kubejs.shapeless("pipez:improved_upgrade", [
		"cmi:cobalt_mechanism",
		"pipez:basic_upgrade",
		"#forge:plates/gold",
	]).id("pipez:improved_upgrade")

	kubejs.shapeless("pipez:advanced_upgrade", [
		"cmi:cobalt_mechanism",
		"pipez:improved_upgrade",
		"minecraft:diamond",
	]).id("pipez:advanced_upgrade")

	kubejs.shapeless("pipez:ultimate_upgrade", [
		"cmi:cobalt_mechanism",
		"pipez:advanced_upgrade",
		"#forge:plates/netherite",
	]).id("pipez:ultimate_upgrade")
})