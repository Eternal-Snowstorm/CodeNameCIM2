ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 流体管道
	kubejs.shaped("8x create:fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/copper"
	}).id("create:crafting/kinetics/fluid_pipe")

	kubejs.shaped("8x copycats:copycat_fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/zinc"
	}).id("copycats:crafting/copycat_fluid_pipe")

	// 黄铜管道
	kubejs.shaped("8x ad_astra:desh_fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/brass"
	}).id("ad_astra:desh_fluid_pipe")

	// 铸铁管道
	kubejs.shaped("8x ad_astra:ostrum_fluid_pipe", [
		"AAA",
		"   ",
		"AAA"
	], {
		A: "#forge:plates/cast_iron"
	}).id("ad_astra:ostrum_fluid_pipe")

	// 流体储罐
	kubejs.shaped("create:fluid_tank", [
		"A",
		"B",
		"A"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass/prism"
	}).id("create:crafting/kinetics/fluid_tank")

	kubejs.shaped("2x create:fluid_tank", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	}).id("create:crafting/kinetics/fluid_tank2")

	kubejs.shaped("create_connected:fluid_vessel", [
		"ABA"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass/prism"
	}).id("create_connected:crafting/kinetics/fluid_vessel")

	kubejs.shaped("2x create_connected:fluid_vessel", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	})

	// 分液池
	kubejs.shaped("create:item_drain", [
		"X",
		"M",
		"C"
	], {
		M: Mechanism.COPPER.COM,
		X: "minecraft:iron_bars",
		C: Casing.COPPER
	}).id("create:crafting/kinetics/item_drain")

	// 注液器
	kubejs.shaped("create:spout", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.COPPER.COM,
		X: "thermal:cured_rubber",
		C: Casing.COPPER
	}).id("create:crafting/kinetics/spout")

	// 高级注液器
	kubejs.shaped("cmi:advanced_spout", [
		"ABA",
		"CDC",
		" E "
	], {
		A: ["#forge:ingots/cast_iron", "#forge:plates/cast_iron"],
		B: "vintageimprovements:redstone_module",
		C: Mechanism.COPPER.COM,
		D: "create:spout",
		E: "thermal:cured_rubber"
	})

	// 软管滑轮
	kubejs.shaped("create:hose_pulley", [
		"C",
		"X",
		"M"
	], {
		M: Mechanism.COPPER.COM,
		X: "thermal:cured_rubber_block",
		C: Casing.COPPER
	}).id("create:crafting/kinetics/hose_pulley")

	// 灌溉塔
	kubejs.shaped("ratatouille:irrigation_tower", [
		"AMA",
		"BCB"
	], {
		M: Mechanism.COPPER.COM,
		A: "#forge:plates/copper",
		B: "#forge:rods/copper",
		C: "create:fluid_pipe"
	}).id("ratatouille:irrigation_tower")

	// 挤压盆
	kubejs.shaped("ratatouille:squeeze_basin", [
		" X ",
		"YMY",
		"YYY"
	], {
		M: Mechanism.COPPER.COM,
		X: "#forge:plates/copper",
		Y: "#forge:ingots/copper",
	}).id("ratatouille:squeeze_basin")

	// 抽油机油泵
	kubejs.shaped("createdieselgenerators:pumpjack_hole", [
		" M ",
		"BCB",
		" A "
	], {
		M: Mechanism.COPPER.COM,
		C: Casing.COPPER,
		B: "minecraft:chain",
		A: "create:fluid_pipe"
	}).id("createdieselgenerators:crafting/pumpjack_hole")

	// 淤泥泵
	kubejs.shaped("deepdrilling:sludge_pump", [
		" X ",
		"YMY"
	], {
		M: Mechanism.COPPER.COM,
		X: "deepdrilling:blank_module",
		Y: "#forge:plates/copper"
	}).id("deepdrilling:sludge_pump")
})