ServerEvents.recipes((event) => {
	let { create, kubejs, tconstruct } = event.recipes

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

	kubejs.shaped("createaddition:straw", [
		" AA",
		"A A",
		" A "
	], {
		A: "#forge:rods/wooden"
	})

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
})