ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let casing = "create:andesite_casing"
	let mech = "ue_addons:andesite_mechanism"
	let tube = "create:electron_tube"

	// 动态结构控制器(你知道我在0.5没有你的日子是怎么过的吗!(揪着衣领))
	kubejs.shaped("create:contraption_controls", [
		"A",
		"B",
		"C"
	], {
		A: "#minecraft:buttons",
		B: casing,
		C: mech
	}).id("create:crafting/kinetics/contraption_controls")

	// 动力压路机(砸! 瓦鲁多----)
	kubejs.shaped("create:mechanical_roller", [
		" A ",
		"BCB",
		" D "
	], {
		A: tube,
		B: casing,
		C: mech,
		D: "create:crushing_wheel"
	}).id("create:crafting/kinetics/mechanical_roller")

	// 物品接口(你们为什么要Kiss👊😭👊)
	kubejs.shapeless("create:portable_storage_interface", [
		"create:chute",
		casing,
		mech
	]).id("create:crafting/kinetics/portable_storage_interface")

	// 机械手(你妈逼我是不是给你脸给多了)
	kubejs.shaped("create:deployer", [
		"A",
		"B",
		"C"
	], {
		A: mech,
		B: casing,
		C: "create:brass_hand"
	}).id("create:crafting/kinetics/deployer")

	// 动力锯(有这个为什么还要连锁?)
	kubejs.shaped("create:mechanical_saw", [
		"A",
		"B",
		"C"
	], {
		A: "thermal:saw_blade",
		B: mech,
		C: casing
	}).id("create:crafting/kinetics/mechanical_saw")

	// 动力钻头(滋--------!)
	kubejs.shaped("create:mechanical_drill", [
		"A",
		"B",
		"C"
	], {
		A: "thermal:drill_head",
		B: mech,
		C: casing
	}).id("create:crafting/kinetics/mechanical_drill")

	// 绳索滑轮(我想不到了)
	kubejs.shaped("create:rope_pulley", [
		" A ",
		"BCB",
		" D "
	], {
		A: casing,
		B: "#forge:leather",
		C: mech,
		D: "#forge:plates/iron"
	}).id("create:crafting/kinetics/rope_pulley")

	// 石磨
	kubejs.shaped("create:millstone", [
		"A A",
		"BCB",
		"DDD"
	], {
		A: casing,
		B: "create:cogwheel",
		C: mech,
		D: "#forge:stone"
	}).id("create:crafting/kinetics/millstone")
	//动力辊压机
	kubejs.shaped("create:mechanical_press", [
		" B ",
		"CAC",
		" D "
	], {
		A: casing,
		B: mech,
		C: "create:shaft",
		D: "iron_block"
	}).id("create:crafting/kinetics/mechanical_press")
	//动力搅拌机
	kubejs.shaped("create:mechanical_mixer", [
		" B ",
		"CAC",
		" D "
	], {
		A: casing,
		B: mech,
		C: "create:cogwheel",
		D: "create:whisk"
	}).id("create:crafting/kinetics/mechanical_mixer")
	//鼓风机
	kubejs.shaped("create:encased_fan", [
		"EAE",
		"CBD",
		"EAE"
	], {
		A: casing,
		B: mech,
		C: "create:shaft",
		D: "create:propeller",
		E: "#minecraft:planks"
	}).id("create:crafting/kinetics/encased_fan")
	//砂带磨床
	kubejs.shaped("vintageimprovements:belt_grinder", [
		" C ",
		" B ",
		"DAD"
	], {
		A: casing,
		B: mech,
		C: "vintageimprovements:grinder_belt",
		D: "create:shaft",
	}).id("vintageimprovements:craft/belt_grinder")
	//轧机
	kubejs.shaped("createaddition:rolling_mill", [
		"EDE",
		"CDC",
		"ABA"
	], {
		A: casing,
		B: mech,
		C: "create:andesite_alloy",
		D: "create:shaft",
		E: "#forge:plates/iron"
	}).id("createaddition:crafting/rolling_mill")
	//卷簧机
	kubejs.shaped("vintageimprovements:spring_coiling_machine", [
		"EA",
		"CBD",
		"EA"
	], {
		A: casing,
		B: mech,
		C: "vintageimprovements:spring_coiling_machine_wheel",
		D: "create:shaft",
		E: "iron_ingot"
	}).id("vintageimprovements:craft/spring_coiling_machine")
	//振动台
	kubejs.shaped("vintageimprovements:vibrating_table", [
		"EBE",
		"DCD",
		"DAD"
	], {
		A: mech,
		B: "#minecraft:wooden_slabs",
		C: "create:mechanical_piston",
		D: "vintageimprovements:iron_spring",
		E: "create:andesite_alloy"
	}).id("vintageimprovements:craft/vibrating_table")
	//冲压机
	kubejs.shaped("vintageimprovements:curving_press", [
		" A ",
		"CBC",
		"   "
	], {
		A: mech,
		B: casing,
		C: "vintageimprovements:iron_spring"
	}).id("vintageimprovements:craft/curving_press")
	//离心机
	kubejs.shaped("vintageimprovements:centrifuge", [
		"DAD",
		"ECE",
		"DBD"
	], {
		A: mech,
		B: casing,
		C: "#minecraft:logs",
		D: "vintageimprovements:iron_spring",
		E: "create:shaft"
	}).id("vintageimprovements:craft/centrifuge")
})

