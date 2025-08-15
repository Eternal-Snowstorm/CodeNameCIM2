ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let casing = "create:brass_casing"
	let mech = "create:precision_mechanism"
	let tube = "create:electron_tube"

	// 合成器
	kubejs.shaped("3x create:mechanical_crafter", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: casing,
		C: "minecraft:crafting_table"
	}).id("create:crafting/kinetics/mechanical_crafter")

	// 大聪明溜槽
	kubejs.shaped("create:smart_chute", [
		"A",
		"B"
	], {
		A: mech,
		B: "create:chute"
	}).id("create:crafting/kinetics/smart_chute")

	// 大聪明管道
	kubejs.shaped("create:smart_fluid_pipe", [
		"A",
		"B"
	], {
		A: mech,
		B: "create:fluid_pipe"
	}).id("create:crafting/kinetics/smart_fluid_pipe")

	// 大聪明侦测器
	kubejs.shaped("create:content_observer", [
		"A",
		"B"
	], {
		A: mech,
		B: "minecraft:observer"
	}).id("create:crafting/kinetics/smart_observer")

	// 存量转信器
	kubejs.shaped("create:stockpile_switch", [
		"A",
		"C",
		"B"
	], {
		A: mech,
		B: "minecraft:comparator",
		C: casing
	}).id("create:crafting/logistics/stockpile_switch")

	// steam引擎
	kubejs.shaped("create:steam_engine", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: "#forge:ingots/andesite_alloy",
		C: "#forge:storage_blocks/copper"
	}).id("create:crafting/kinetics/steam_engine")

	// 电梯
	kubejs.shaped("create:elevator_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: casing,
		B: "minecraft:dried_kelp_block",
		C: mech,
		D: "#forge:plates/obsidian"
	}).id("create:crafting/kinetics/elevator_pulley")

	// 发条轴承
	kubejs.shaped("create:clockwork_bearing", [
		" C ",
		" B ",
		" A "
	], {
		A: mech,
		B: casing,
		C: "#minecraft:wooden_slabs"
	}).id("create:crafting/kinetics/clockwork_bearing")

	// 智能侦测器
	kubejs.shaped("create:content_observer", [
		" A ",
		" B ",
		" C "
	], {
		A: mech,
		B: casing,
		C: "minecraft:observer"
	}).id("create:crafting/logistics/content_observer")

	// 可编程齿轮箱
	kubejs.shaped("create:sequenced_gearshift", [
		"BA ",
		"C  "
	], {
		A: mech,
		B: casing,
		C: "create:cogwheel"
	}).id("create:crafting/kinetics/sequenced_gearshift")
})