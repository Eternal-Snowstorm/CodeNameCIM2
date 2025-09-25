// 写在前面
// 机械动力的序列组装，千万不可以好几个配方共用一个中转物品
// 会串! ! ! ! ! ! ! ! ! ! ! ! ! ! 
// 怎么写都会串，无论什么顺序! ! ! ! ! 
// 一定要写不一样的东西! ! ! ! ! 
// 这一片我改了整整半小时! ! ! 
ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes
	let CASING = "create:railway_casing"
	let MECH = "cmi:railway_mechanism"

	// 时刻表
	kubejs.shaped("4x create:schedule", [
		"A",
		"B"
	], {
		A: "create:clipboard",
		B: MECH
	}).id("create:crafting/kinetics/schedule")

	// 列车连挂器
	kubejs.shaped("2x railways:track_coupler", [
		" A ",
		"BCB"
	], {
		A: MECH,
		B: "create:minecart_coupling",
		C: CASING
	}).id("railways:crafting/track_coupler")

	// 车站
	kubejs.shaped("2x create:track_station", [
		"A",
		"B",
		"C"
	], {
		A: "#minecraft:banners",
		B: MECH,
		C: CASING
	}).id("create:crafting/kinetics/track_station")

	// 列车信号机
	kubejs.shaped("2x create:track_signal", [
		"A",
		"B",
		"C"
	], {
		A: "create:electron_tube",
		B: CASING,
		C: MECH
	}).id("create:crafting/kinetics/track_signal")

	// 列车侦测器
	kubejs.shaped("2x create:track_observer", [
		"A",
		"B",
		"C"
	], {
		A: MECH,
		B: CASING,
		C: "minecraft:observer"
	}).id("create:crafting/kinetics/track_observer")

	// 列车驾驶台
	kubejs.shaped("create:controls", [
		"A A",
		"BCB"
	], {
		A: "minecraft:lever",
		B: "create:sturdy_sheet",
		C: MECH
	}).id("create:crafting/kinetics/controls")

	// 传感机械眼
	kubejs.shaped("railways:remote_lens", [
		"AB",
		"C "
	], {
		A: MECH,
		B: "cmi:ender_mechanism",
		C: "create:redstone_link"
	}).id("railways:crafting/remote_lens")

	// 列车帽
	global.dyeColorGroup.forEach((colour) => {
		let icc = Item.of('railways:white_incomplete_conductor_cap', `{id:"railways:sequenced_assembly/${colour}_conductor_cap"}`)
		create.sequenced_assembly(`railways:${colour}_conductor_cap`,
			`minecraft:${colour}_wool`, [
			create.cutting(icc, icc),
			create.deploying(icc, [icc, MECH]),
			create.deploying(icc, [icc, "#forge:string"])
		]).transitionalItem(icc).loops(1).id(`railways:sequenced_assembly/${colour}_conductor_cap`)
	})
})