ServerEvents.recipes((event) => {
	let { create, createaddition, kubejs, tconstruct } = event.recipes

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

	// 虚空升级
	tconstruct.casting_basin("functionalstorage:void_upgrade")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 4000))
		.cast("#functionalstorage:drawer")
		.cast_consumed(true)
		.cooling_time(40)

	tconstruct.casting_basin("functionalstorage:void_upgrade")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 4000))
		.cast("#functionalstorage:upgrades")
		.cast_consumed(true)
		.cooling_time(40)

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

	// 
	/*kubejs.shaped("megatimestop:time_clock2", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "create:precision_mechanism",
		B: "minecraft:clock"
	}).id("megatimestop:time_clock2")

	// 
	kubejs.shaped("megatimestop:time_clock", [
		"123",
		"4B5",
		"678"
	], {
		1: "cmi:nature_mechanism",
		2: "cmi:enchanted_mechanism",
		3: "cmi:sculk_mechanism",
		4: "cmi:nether_mechanism",
		5: "cmi:ender_mechanism",
		6: "cmi:photosensitive_mechanism",
		7: "create:precision_mechanism",
		8: "cmi:cobalt_mechanism",
		B: "minecraft:clock"
	}).id("megatimestop:time_clock")

	// 
	kubejs.shaped("4x megatimestop:knife", [
		"1",
		"2"
	], {
		1: "#forge:plates/iron",
		2: "#forge:rods/wooden"
	}).id("megatimestop:knife")
*/

	kubejs.shaped("2x minecraft:torch", [
		"A",
		"B"
	], {
		A: "cmi:peat",
		B: "#forge:rods/wooden"
	}).id("cmi:peat_torch")

	// pipez item/fluid/nergy/gas/all
	kubejs.shaped("16x pipez:item_pipe", [
		"ABA"
	], {
		A: "#forge:plates/invar",
		B: "#forge:chests"
	}).id("pipez:item_pipe")

	kubejs.shaped("16x pipez:fluid_pipe", [
		"ABA"
	], {
		A: "#forge:plates/invar",
		B: "minecraft:bucket"
	}).id("pipez:fluid_pipe")

	kubejs.shaped("16x pipez:energy_pipe", [
		"ABA"
	], {
		A: "#forge:plates/invar",
		B: "minecraft:redstone"
	}).id("pipez:energy_pipe")

	kubejs.shaped("16x pipez:gas_pipe", [
		"ABA"
	], {
		A: "#forge:plates/invar",
		B: 'mekanism:alloy_infused'
	}).id("pipez:gas_pipe")

	kubejs.shapeless("4x pipez:universal_pipe", [
		"pipez:item_pipe",
		"pipez:fluid_pipe",
		"pipez:energy_pipe",
		"pipez:gas_pipe",
	]).id("pipez:universal_pipe")
})