// 写在前面
// 机械动力的序列组装，千万不可以好几个配方共用一个中转物品
// 会串! ! ! ! ! ! ! ! ! ! ! ! ! ! 
// 怎么写都会串，无论什么顺序! ! ! ! ! 
// 一定要写不一样的东西! ! ! ! ! 
// 这一片我改了整整半小时! ! ! 
ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let incRailc = "create:railway_casing"
	let incStus = "cmi:dense_sturdy_sheet"
	let incStation = "create:display_board"
	let incSign = "create:chute"
	let incObs = "minecraft:observer"
	let incCtrl = "minecraft:lever"

	create.sequenced_assembly("2x railways:track_coupler", [
		incRailc
	], [
		create.cutting(incRailc, incRailc),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "create:belt_connector"]),
		create.deploying(incRailc, [incRailc, "minecraft:redstone_torch"]),
		create.deploying(incRailc, [incRailc, "minecraft:heavy_weighted_pressure_plate"]),
	]).transitionalItem(incRailc).loops(1).id("railways:crafting/track_coupler")

	create.sequenced_assembly("8x create:schedule", [
		incStus
	], [
		create.cutting(incStus, incStus),
		create.deploying(incStus, [incStus, "cmi:railway_mechanism"]),
		create.deploying(incStus, [incStus, "minecraft:book"]),
	]).transitionalItem(incStus).loops(1).id("create:crafting/kinetics/schedule")

	create.sequenced_assembly("8x create:track_station", [
		incStation
	], [
		create.deploying(incStation, [incStation, "minecraft:stone_pressure_plate"]),
		create.cutting(incStation, incStation),
		create.deploying(incStation, [incStation, "cmi:railway_mechanism"]),
		create.deploying(incStation, [incStation, "minecraft:redstone"]),
		create.deploying(incStation, [incStation, "cmi:dense_sturdy_sheet"]),
	]).transitionalItem(incStation).loops(1).id("create:crafting/kinetics/track_station")

	create.sequenced_assembly("4x create:track_signal", [
		incSign
	], [
		create.pressing(incSign, incSign),
		create.deploying(incSign, [incSign, "cmi:railway_mechanism"]),
		create.deploying(incSign, [incSign, "create:copper_sheet"]),
		create.deploying(incSign, [incSign, "create:electron_tube"]),
		create.deploying(incSign, [incSign, "create:electron_tube"]),
	]).transitionalItem(incSign).loops(1).id("create:crafting/kinetics/track_signal")

	create.sequenced_assembly("4x create:track_observer", [
		incObs
	], [
		create.deploying(incObs, [incObs, "minecraft:observer"]),
		create.cutting(incObs, incObs),
		create.deploying(incObs, [incObs, "cmi:railway_mechanism"]),
		create.deploying(incObs, [incObs, "minecraft:redstone"]),
	]).transitionalItem(incObs).loops(1).id("create:crafting/kinetics/track_observer")

	create.sequenced_assembly("4x create:controls", [
		incCtrl
	], [
		create.deploying(incCtrl, [incCtrl, "create:cogwheel"]),
		create.deploying(incCtrl, [incCtrl, "create:cogwheel"]),
		create.deploying(incCtrl, [incCtrl, "cmi:railway_mechanism"]),
		create.deploying(incCtrl, [incCtrl, "minecraft:lever"]),
		create.deploying(incCtrl, [incCtrl, "minecraft:lever"]),
		create.deploying(incCtrl, [incCtrl, "create:electron_tube"]),
	]).transitionalItem(incCtrl).loops(1).id("create:crafting/kinetics/controls")
})