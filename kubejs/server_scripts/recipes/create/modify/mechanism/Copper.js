ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let mech = "cmi:copper_mechanism"
	let casing = "create:copper_casing"

	//祛魔池
	kubejs.shaped("create_enchantment_industry:disenchanter", [
		"C",
		"B",
		"A"
	], {
		A: mech,
		B: casing,
		C: "#create:sandpaper"
	}).id("create_enchantment_industry:crafting/disenchanter")

	// 分液池(传送带青春再青春版)
	kubejs.shaped("create:item_drain", [
		"A",
		"B",
		"C"
	], {
		A: "minecraft:iron_bars",
		B: casing,
		C: mech
	}).id("create:crafting/kinetics/item_drain")

	// 流体接口
	kubejs.shapeless("create:portable_fluid_interface", [
		"create:chute",
		casing,
		mech
	]).id("create:crafting/kinetics/portable_fluid_interface")

	// 软管滑轮
	kubejs.shaped("create:hose_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: casing,
		B: "minecraft:dried_kelp_block",
		C: mech,
		D: "#forge:plates/copper"
	}).id("create:crafting/kinetics/hose_pulley")

	// 压缩机
	kubejs.shaped("vintageimprovements:vacuum_chamber", [
		" A ",
		"BCB",
		"DED"
	], {
		A: mech,
		B: "#vintageimprovements:springs/iron",
		C: "create:andesite_casing",
		D: "#forge:ingots/andesite_alloy",
		E: "create:mechanical_pump"
	}).id("vintageimprovements:craft/vacuum_chamber")

	// 注液器
	kubejs.shaped("create:spout", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: casing,
		C: "minecraft:dried_kelp"
	}).id("create:crafting/kinetics/spout")
})