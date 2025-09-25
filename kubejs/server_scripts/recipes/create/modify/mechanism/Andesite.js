ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const CASING = "create:andesite_casing"
	const MECH = "cmi:andesite_mechanism"
	const TUBE = "create:electron_tube"

	// 动态结构控制器
	kubejs.shaped("create:contraption_controls", [
		"A",
		"B",
		"C"
	], {
		A: "#minecraft:buttons",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/contraption_controls")

	// 动力压路机
	kubejs.shaped("create:mechanical_roller", [
		" A ",
		"BCB",
		" D "
	], {
		A: TUBE,
		B: CASING,
		C: MECH,
		D: "create:crushing_wheel"
	}).id("create:crafting/kinetics/mechanical_roller")

	// 物品接口
	kubejs.shaped("2x create:portable_storage_interface", [
		"AB",
		"C "
	], {
		A: "create:chute",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/portable_storage_interface")

	// 机械手
	kubejs.shaped("create:deployer", [
		"A",
		"B",
		"C"
	], {
		A: MECH,
		B: CASING,
		C: ["create:brass_hand", "cmi:rubber_hand"]
	}).id("create:crafting/kinetics/deployer")

	// 动力锯
	kubejs.shaped("create:mechanical_saw", [
		"A",
		"B",
		"C"
	], {
		A: "thermal:saw_blade",
		B: MECH,
		C: CASING
	}).id("create:crafting/kinetics/mechanical_saw")

	// 动力钻头
	kubejs.shaped("create:mechanical_drill", [
		"A",
		"B",
		"C"
	], {
		A: "thermal:drill_head",
		B: MECH,
		C: CASING
	}).id("create:crafting/kinetics/mechanical_drill")

	// 绳索滑轮
	kubejs.shaped("create:rope_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: CASING,
		B: "#minecraft:wool",
		C: MECH,
		D: "#forge:plates/iron"
	}).id("create:crafting/kinetics/rope_pulley")

	// 石磨
	kubejs.shaped("create:millstone", [
		"B",
		"C",
		"A"
	], {
		A: CASING,
		B: MECH,
		C: "#forge:stone"
	}).id("create:crafting/kinetics/millstone")

	// 动力辊压机
	kubejs.shaped("create:mechanical_press", [
		" B ",
		" A ",
		" C "
	], {
		A: CASING,
		B: MECH,
		C: "#forge:storage_blocks/iron"
	}).id("create:crafting/kinetics/mechanical_press")

	// 动力搅拌机
	kubejs.shaped("create:mechanical_mixer", [
		"B",
		"A",
		"C"
	], {
		A: CASING,
		B: MECH,
		C: "create:whisk"
	}).id("create:crafting/kinetics/mechanical_mixer")

	// 鼓风机
	kubejs.shaped("create:encased_fan", [
		" B ",
		" A ",
		" C "
	], {
		A: CASING,
		B: MECH,
		C: "create:propeller"
	}).id("create:crafting/kinetics/encased_fan")

	// 砂带磨床
	kubejs.shaped("vintageimprovements:belt_grinder", [
		"C",
		"B",
		"A"
	], {
		A: CASING,
		B: MECH,
		C: "vintageimprovements:grinder_belt",
	}).id("vintageimprovements:craft/belt_grinder")

	// 轧机
	kubejs.shaped("createaddition:rolling_mill", [
		"EDE",
		"CDC",
		"ABA"
	], {
		A: CASING,
		B: MECH,
		C: "create:andesite_alloy",
		D: "create:shaft",
		E: "#forge:plates/iron"
	}).id("createaddition:crafting/rolling_mill")

	// 卷簧机
	kubejs.shaped("vintageimprovements:spring_coiling_machine", [
		"EA ",
		"CBD",
		"EA "
	], {
		A: CASING,
		B: MECH,
		C: "vintageimprovements:spring_coiling_machine_wheel",
		D: "create:shaft",
		E: "iron_ingot"
	}).id("vintageimprovements:craft/spring_coiling_machine")

	// 振动台
	kubejs.shaped("vintageimprovements:vibrating_table", [
		"EBE",
		"DCD",
		"DAD"
	], {
		A: MECH,
		B: "#minecraft:wooden_slabs",
		C: "create:mechanical_piston",
		D: "vintageimprovements:iron_spring",
		E: "create:andesite_alloy"
	}).id("vintageimprovements:craft/vibrating_table")

	// 冲压机
	kubejs.shaped("vintageimprovements:curving_press", [
		" A ",
		"CBC",
	], {
		A: MECH,
		B: CASING,
		C: "vintageimprovements:iron_spring"
	}).id("vintageimprovements:craft/curving_press")

	// 离心机
	kubejs.shaped("vintageimprovements:centrifuge", [
		"DAD",
		"ECE",
		"DBD"
	], {
		A: MECH,
		B: CASING,
		C: "#minecraft:logs",
		D: "vintageimprovements:iron_spring",
		E: "create:shaft"
	}).id("vintageimprovements:craft/centrifuge")

	// 切割机
	kubejs.shaped("sliceanddice:slicer", [
		" A ",
		" B ",
		" C "
	], {
		A: MECH,
		B: CASING,
		C: "#forge:plates/andesite"
	}).id("sliceanddice:slicer")

	// 烤箱用鼓风机
	kubejs.shaped("ratatouille:oven_fan", [
		" B ",
		" A ",
		" C "
	], {
		A: MECH,
		B: CASING,
		C: "create:propeller"
	}).id("ratatouille:oven_fan")

	// 动力脱模机
	kubejs.shaped("ratatouille:mechanical_demolder", [
		" A ",
		" B ",
		" C "
	], {
		A: MECH,
		B: CASING,
		C: "#forge:slimeballs"
	}).id("ratatouille:mechanical_demolder")

	// 脱粒机
	kubejs.shaped("ratatouille:thresher", [
		" A ",
		" C ",
		" B "
	], {
		A: MECH,
		B: CASING,
		C: "create:mechanical_harvester"
	}).id("ratatouille:thresher")

	// 风车轴承
	kubejs.shaped("create:windmill_bearing", [
		" A ",
		" B ",
		" C "
	], {
		A: "create:turntable",
		B: "#forge:stone",
		C: MECH
	}).id("create:crafting/kinetics/windmill_bearing")

	// 动力轴承
	kubejs.shaped("create:mechanical_bearing", [
		" A ",
		" B ",
		" C "
	], {
		A: "create:turntable",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/mechanical_bearing")

	// 动力活塞
	kubejs.shaped("create:mechanical_piston", [
		" B ",
		" A ",
		" C "
	], {
		A: "create:piston_extension_pole",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/mechanical_piston")

	// 起重机取物器
	kubejs.shaped("create:gantry_carriage", [
		" A ",
		" B ",
		"DCD"
	], {
		A: "create:turntable",
		B: CASING,
		C: MECH,
		D: "create:cogwheel"
	}).id("create:crafting/kinetics/gantry_carriage")

	// 矿车装配站
	kubejs.shaped("create:cart_assembler", [
		"BDB",
		"CAC"
	], {
		A: MECH,
		B: "minecraft:redstone",
		C: "#minecraft:logs",
		D: "#forge:slimeballs"
	}).id("create:crafting/kinetics/cart_assembler")

	// 催熟机
	kubejs.shaped("ratatouille:spreader", [
		" A ",
		"CBC",
		" D "
	], {
		A: MECH,
		B: CASING,
		C: "cmi:nature_mechanism",
		D: "create:propeller"
	}).id("ratatouille:spreader")

	// 翻牌显示器
	kubejs.shaped("4x create:display_board", [
		"BAB"
	], {
		A: MECH,
		B: "#forge:plates/andesite"
	}).id("create:crafting/kinetics/display_board")
})