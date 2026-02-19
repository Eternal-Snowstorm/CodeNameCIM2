ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const MECH = Mechanism.WOODEN.COM
	const CASING = "create:copper_casing"

	// 流体元件外壳
	kubejs.shaped("ae2:fluid_cell_housing", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: MECH,
		X: "#forge:plates/copper",
		Y: "ae2:quartz_glass"
	}).id("ae2:network/cells/fluid_cell_housing")

	// 移动式流体接口
	kubejs.shapeless("create:portable_fluid_interface", [
		CASING,
		MECH,
		"#forge:plates/industrial_iron"
	]).id("create:crafting/kinetics/portable_fluid_interface")

	// 分液池
	kubejs.shaped("create:item_drain", [
		"X",
		"M",
		"C"
	], {
		M: MECH,
		X: "minecraft:iron_bars",
		C: CASING
	}).id("create:crafting/kinetics/item_drain")

	// 注液器
	kubejs.shaped("create:spout", [
		"M",
		"C",
		"X"
	], {
		M: MECH,
		X: "thermal:cured_rubber",
		C: CASING
	}).id("create:crafting/kinetics/spout")

	// 软管滑轮
	kubejs.shaped("create:hose_pulley", [
		"C",
		"X",
		"M"
	], {
		M: MECH,
		X: "thermal:cured_rubber_block",
		C: CASING
	}).id("create:crafting/kinetics/hose_pulley")

	// // 灌溉塔
	// kubejs.shaped("create:hose_puyylley", [
	//     "AMA",
	//     "BCB"
	// ], {
	//     M: MECH,
	//     A: "#forge:plates/copper",
	//     B: "#forge:rods/copper",
	//     C: "create:fluid_pipe"
	// }).id("create:crafting/kinetics/ley")
})