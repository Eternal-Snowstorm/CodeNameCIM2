ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

	// 处理设备
	// 动力辊压机
	kubejs.shaped("create:mechanical_press", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: ["#forge:storage_blocks/iron", "#forge:storage_blocks/zinc"]
	}).id("create:crafting/kinetics/mechanical_press")

	// 动力搅拌器
	kubejs.shaped("create:mechanical_mixer", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:whisk",
	}).id("create:crafting/kinetics/mechanical_mixer")

	// 鼓风机
	kubejs.shaped("create:encased_fan", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:propeller",
	}).id("create:crafting/kinetics/encased_fan")

	// 烤箱用鼓风机
	kubejs.shapeless("ratatouille:oven_fan", [
		"create:encased_fan"
	]).id("ratatouille:oven_fan")

	// 鼓风机 ←- 烤箱用鼓风机
	kubejs.shapeless("create:encased_fan", [
		"ratatouille:oven_fan"
	])

	// 工作盆盖板
	kubejs.shaped("createdieselgenerators:basin_lid", [
		"ABA",
		"C C"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "#forge:ingots/andesite_alloy",
		C: "thermal:rubberwood_planks"
	})

	// 动力轴承
	kubejs.shaped("create:mechanical_bearing", [
		"X",
		"C",
		"M"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#minecraft:planks",
	}).id("create:crafting/kinetics/mechanical_bearing")

	// 动力活塞
	kubejs.shaped("create:mechanical_piston", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:piston_extension_pole",
	}).id("create:crafting/kinetics/mechanical_piston")

	// 起重机轴承
	kubejs.shaped("create:gantry_carriage", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#create:cogwheel",
	}).id("create:crafting/kinetics/gantry_carriage")

	// 弹射置物台
	kubejs.shapeless("create:weighted_ejector",
		["create:depot",
			Mechanism.ANDESITE.COM
		]).id("create:crafting/kinetics/weighted_ejector")

	// 石磨
	kubejs.shaped("create:millstone", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:stone",
	}).id("create:crafting/kinetics/millstone")

	// 动力收割机
	kubejs.shaped("create:mechanical_harvester", [
		"XXX",
		" C ",
		" M "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:rods/andesite",
	}).id("create:crafting/kinetics/mechanical_harvester")

	// 动力犁
	kubejs.shaped("create:mechanical_plough", [
		"XXX",
		" C ",
		" M "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
	}).id("create:crafting/kinetics/mechanical_plough")

	// 脱粒机
	kubejs.shaped("ratatouille:thresher", [
		" Y ",
		"XMX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
		Y: "#forge:plates/andesite_alloy",
	}).id("ratatouille:thresher")

	// 动力压路机
	kubejs.shaped("2x create:mechanical_roller", [
		"CX ",
		"XMX",
		" X "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
	}).id("create:crafting/kinetics/mechanical_roller")

	// 动力脱模机
	kubejs.shaped("ratatouille:mechanical_demolder", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:slimeballs",
	}).id("ratatouille:mechanical_demolder")

	// 振动台
	kubejs.shaped("vintageimprovements:vibrating_table", [
		" Y ",
		"XMX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#vintageimprovements:springs/andesite",
		Y: "#minecraft:planks",
	}).id("vintageimprovements:craft/vibrating_table")

	// 轧机
	kubejs.shaped("createaddition:rolling_mill", [
		" M ",
		"XYX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
		Y: "#create:shaft",
	}).id("createaddition:crafting/rolling_mill")

	// 卷簧机
	kubejs.shaped("vintageimprovements:spring_coiling_machine", [
		"X",
		"C",
		"M"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "vintageimprovements:spring_coiling_machine_wheel",
	}).id("vintageimprovements:craft/spring_coiling_machine")

	// 空白模块
	kubejs.shapeless("deepdrilling:blank_module", [
		"create:andesite_casing",
		Mechanism.ANDESITE.COM,
		"#forge:plates/iron"
	]).id("deepdrilling:blank_module")

	// 冲压机
	kubejs.shaped("vintageimprovements:curving_press", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: ["#forge:plates/iron", "#forge:plates/andesite_alloy"]
	}).id("vintageimprovements:craft/curving_press")

})