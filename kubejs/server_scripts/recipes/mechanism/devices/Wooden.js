ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const MECH = Mechanism.WOODEN.COM

	// 漏斗
	kubejs.shaped("minecraft:hopper", [
		"X X",
		"XMX",
		" X "
	], {
		M: MECH,
		X: ["#forge:plates/tin", "#forge:plates/iron"],
	}).id("minecraft:hopper")

	// 溜槽
	kubejs.shaped("2x create:chute", [
		"X",
		"Y"
	], {
		X: "#forge:ingots/industrial_iron",
		Y: "#forge:plates/industrial_iron",
	}).id("create:crafting/kinetics/chute")

	// 背包
	kubejs.shaped("sophisticatedbackpacks:backpack", [
		"XYX",
		"XMX",
		"YYY"
	], {
		M: MECH,
		X: "#forge:string",
		Y: ["#forge:leather", "tconstruct:silky_cloth"]
	}).id("sophisticatedbackpacks:backpack")

	// 空白升级
	kubejs.shaped("sophisticatedbackpacks:upgrade_base", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: MECH,
		X: "#forge:rods/andesite",
		Y: ["#forge:leather", "tconstruct:silky_cloth"]
	}).id("sophisticatedbackpacks:upgrade_base")

	// 移动式存储接口
	kubejs.shapeless("create:portable_storage_interface", [
		"create:andesite_casing",
		MECH,
		"#forge:plates/industrial_iron"
	]).id("create:crafting/kinetics/portable_storage_interface")

	// ME物品原件外壳
	kubejs.shaped("2x ae2:item_cell_housing", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: MECH,
		X: "#forge:plates/silver",
		Y: "ae2:quartz_glass",
	}).id("ae2:network/cells/item_cell_housing")
})