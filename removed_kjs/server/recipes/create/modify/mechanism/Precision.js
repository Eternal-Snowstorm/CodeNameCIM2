ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const CASING = "create:brass_casing"
	const MECH = "create:precision_mechanism"
	const TUBE = "create:electron_tube"

	// 合成器
	kubejs.shaped("3x create:mechanical_crafter", [
		"A",
		"B",
		"C"
	], {
		A: MECH,
		B: CASING,
		C: "minecraft:crafting_table"
	}).id("create:crafting/kinetics/mechanical_crafter")

	// 大聪明溜槽
	kubejs.shaped("create:smart_chute", [
		"A",
		"B"
	], {
		A: MECH,
		B: "create:chute"
	}).id("create:crafting/kinetics/smart_chute")

	// 大聪明管道
	kubejs.shaped("create:smart_fluid_pipe", [
		"A",
		"B"
	], {
		A: MECH,
		B: "create:fluid_pipe"
	}).id("create:crafting/kinetics/smart_fluid_pipe")

	// // 大聪明侦测器
	// kubejs.shaped("create:content_observer", [
	// 	"A",
	// 	"B"
	// ], {
	// 	A: MECH,
	// 	B: "minecraft:observer"
	// }).id("create:crafting/kinetics/smart_observer")

	// 存量转信器
	kubejs.shaped("create:stockpile_switch", [
		"A",
		"C",
		"B"
	], {
		A: MECH,
		B: "minecraft:comparator",
		C: CASING
	}).id("create:crafting/logistics/stockpile_switch")

	// 电梯
	kubejs.shaped("create:elevator_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: CASING,
		B: "minecraft:dried_kelp_block",
		C: MECH,
		D: "#forge:plates/obsidian"
	}).id("create:crafting/kinetics/elevator_pulley")

	// 发条轴承
	kubejs.shaped("create:clockwork_bearing", [
		" C ",
		" B ",
		" A "
	], {
		A: MECH,
		B: CASING,
		C: "#minecraft:wooden_slabs"
	}).id("create:crafting/kinetics/clockwork_bearing")

	// 智能侦测器
	kubejs.shaped("create:content_observer", [
		" A ",
		" B ",
		" C "
	], {
		A: MECH,
		B: CASING,
		C: "minecraft:observer"
	}).id("create:crafting/logistics/content_observer")

	// 可编程齿轮箱
	kubejs.shaped("create:sequenced_gearshift", [
		"BA ",
		"C  "
	], {
		A: MECH,
		B: CASING,
		C: "create:cogwheel"
	}).id("create:crafting/kinetics/sequenced_gearshift")

	// 线圈
	kubejs.shaped("createaddition:tesla_coil", [
		" D ",
		"ABA",
		" C "
	], {
		C: MECH,
		B: CASING,
		A: "createaddition:capacitor",
		D: "immersiveengineering:coil_lv"
	}).id("createaddition:mechanical_crafting/tesla_coil")
})