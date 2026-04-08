ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 背包
	kubejs.shaped("sophisticatedbackpacks:backpack", [
		"XYX",
		"XMX",
		"YYY"
	], {
		M: Mechanism.WOODEN.COM,
		X: "#forge:string",
		Y: ["#forge:leather", "tconstruct:silky_cloth"]
	}).id("sophisticatedbackpacks:backpack")

	// 空白升级
	kubejs.shaped("sophisticatedbackpacks:upgrade_base", [
		"XYX",
		"YMY",
		"XYX"
	], {
		M: Mechanism.WOODEN.COM,
		X: "#forge:rods/andesite",
		Y: ["#forge:leather", "tconstruct:silky_cloth"]
	}).id("sophisticatedbackpacks:upgrade_base")

	// 烤箱
	kubejs.shaped("2x ratatouille:oven", [
		"A",
		"B",
		"A"
	], {
		A: [
			"#forge:ingots/industrial_iron",
			"#forge:plates/industrial_iron"
		],
		B: Mechanism.WOODEN.COM
	}).id("ratatouille:oven")

	// 物品保险库
	kubejs.shaped("create:item_vault", [
		"A",
		"M",
		"A"
	], {
		A: "#forge:plates/industrial_iron",
		M: Mechanism.WOODEN.COM
	}).id('create:crafting/kinetics/item_vault')

	kubejs.shaped("create_connected:item_silo", [
		"AMA"
	], {
		A: "#forge:plates/industrial_iron",
		M: Mechanism.WOODEN.COM
	}).id("create_connected:crafting/kinetics/item_silo")

	// 移动式存储接口
	kubejs.shapeless("2x create:portable_storage_interface", [
		Casing.ANDESITE,
		Mechanism.WOODEN.COM,
		"#forge:plates/industrial_iron"
	]).id("create:crafting/kinetics/portable_storage_interface")

	// 移动式流体接口
	kubejs.shapeless("2x create:portable_fluid_interface", [
		Casing.COPPER,
		Mechanism.COPPER.COM,
		"#forge:plates/industrial_iron"
	]).id("create:crafting/kinetics/portable_fluid_interface")

	// 移动式能量接口
	kubejs.shapeless("2x createaddition:portable_energy_interface", [
		Casing.BRASS,
		Mechanism.COIL.COM,
		"#forge:plates/industrial_iron"
	]).id("createaddition:crafting/portable_energy_interface")

	// 安山漏斗
	kubejs.shaped("4x create:andesite_funnel", [
		"A",
		"B"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "thermal:cured_rubber"
	}).id("create:crafting/logistics/andesite_funnel")

	// 安山隧道
	kubejs.shaped("4x create:andesite_tunnel", [
		"AA",
		"BB"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "thermal:cured_rubber"
	}).id("create:crafting/logistics/andesite_tunnel")

	// 黄铜漏斗
	kubejs.shapeless("create:brass_funnel", [
		"create:andesite_funnel",
		Mechanism.ANDESITE.COM,
		"#forge:plates/brass"
	]).id("create:crafting/logistics/brass_funnel")

	// 黄铜隧道
	kubejs.shapeless("create:brass_tunnel", [
		"create:andesite_tunnel",
		Mechanism.ANDESITE.COM,
		"#forge:plates/brass"
	]).id("create:crafting/logistics/brass_tunnel")

	// 智能溜槽
	kubejs.shapeless("create:smart_chute", [
		"create:chute",
		Mechanism.ANDESITE.COM,
		"#forge:plates/brass"
	]).id('create:crafting/kinetics/smart_chute')
})