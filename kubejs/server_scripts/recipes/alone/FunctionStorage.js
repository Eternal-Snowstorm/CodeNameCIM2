ServerEvents.recipes((event) => {
	let { kubejs, tconstruct } = event.recipes
	const DRAWER = "#functionalstorage:drawer"
	const UPGRADE = "#functionalstorage:upgrades"

	// 紫水晶青铜
	kubejs.shaped("functionalstorage:copper_upgrade", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:ingots/amethyst_bronze",
		B: DRAWER
	}).id("functionalstorage:copper_upgrade")

	// 生铁
	kubejs.shapeless("functionalstorage:iron_downgrade", [
		"2x #forge:ingots/pig_iron",
		DRAWER
	]).id("functionalstorage:iron_downgrade")

	kubejs.shapeless("functionalstorage:iron_downgrade", [
		"2x #forge:ingots/pig_iron",
		UPGRADE
	])

	tconstruct.casting_basin("functionalstorage:iron_downgrade")
		.cast(DRAWER)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_pig_iron", 180))
		.cooling_time(20 * 3)

	tconstruct.casting_table("functionalstorage:iron_downgrade")
		.cast(UPGRADE)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_pig_iron", 180))
		.cooling_time(20 * 3)

	// 玫瑰金
	kubejs.shaped("functionalstorage:gold_upgrade", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:ingots/rose_gold",
		B: DRAWER
	}).id("functionalstorage:gold_upgrade")

	// 钢
	kubejs.shaped("functionalstorage:diamond_upgrade", [
		"ABA",
		"ACA",
		"ABA"
	], {
		A: "#forge:gems/diamond",
		B: "#forge:plates/steel",
		C: DRAWER
	}).id("functionalstorage:diamond_upgrade")

	// 虚空升级
	tconstruct.casting_basin("functionalstorage:void_upgrade")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 4000))
		.cast("#functionalstorage:drawer")
		.cast_consumed(true)
		.cooling_time(40)

	tconstruct.casting_table("functionalstorage:void_upgrade")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 4000))
		.cast("#functionalstorage:upgrades")
		.cast_consumed(true)
		.cooling_time(40)

	// 流体抽屉1
	kubejs.shaped("functionalstorage:fluid_1", [
		"ABA",
		"BCB",
		"BAB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_1")

	// 流体抽屉2
	kubejs.shaped("functionalstorage:fluid_2", [
		"ACA",
		"BAB",
		"BCB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_2")

	// 流体抽屉4
	kubejs.shaped("functionalstorage:fluid_4", [
		"ACA",
		"CAC",
		"BCB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_4")
})