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
	}).id(`${global.namespace}:what_is_this`)

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
		A: "iron_mechanism",
		B: "#forge:plates/iron"
	}).id("supplementaries:faucet")
})