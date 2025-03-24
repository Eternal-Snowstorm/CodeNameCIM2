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
})