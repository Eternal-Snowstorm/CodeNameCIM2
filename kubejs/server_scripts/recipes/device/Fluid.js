ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

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

	// 多流体储罐
	kubejs.shaped("fluidlogistics:multi_fluid_tank", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/brass",
		B: "#forge:glass"
	}).id("fluidlogistics:multi_fluid_tank")

	kubejs.shaped("fluidlogistics:horizontal_multi_fluid_tank", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/brass",
		B: "#forge:glass"
	}).id("fluidlogistics:horizontal_multi_fluid_tank")

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

	// 智能管道
	kubejs.shaped("2x create:smart_fluid_pipe", [
		"B",
		"P",
		"M"
	], {
		B: "#forge:plates/brass",
		P: "create:fluid_pipe",
		M: Mechanism.COPPER.COM
	}).id("create:crafting/kinetics/smart_fluid_pipe")

	// 阀门
	kubejs.shaped("2x create:fluid_valve", [
		"I",
		"P",
		"M"
	], {
		I: "#forge:plates/iron",
		P: "create:fluid_pipe",
		M: Mechanism.COPPER.COM
	}).id("create:crafting/kinetics/fluid_valve")

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

	// 智能龙头
	kubejs.shaped("fluidlogistics:smart_faucet", [
		"A",
		"B",
		"C"
	], {
		A: "#forge:plates/brass",
		B: Mechanism.COPPER.COM,
		C: "#forge:plates/copper"
	}).id("fluidlogistics:smart_faucet")

	// 流体泵
	kubejs.shapeless("fluidlogistics:fluid_pump", [
		"create:fluid_pipe",
		"#create:shaft"
	]).id("fluidlogistics:fluid_pump")

	// 流体漏斗
	kubejs.shaped("fluidlogistics:smart_hopper", [
		"A A",
		"BMB",
		" A "
	], {
		A: "#forge:plates/copper",
		B: "#forge:plates/brass",
		M: Mechanism.COPPER.COM
	}).id("fluidlogistics:smart_hopper")

	// 流体溜槽
	kubejs.shaped("fluidlogistics:fluid_transporter", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/copper",
		B: Mechanism.COPPER.COM
	}).id("fluidlogistics:fluid_transporter")

	// 流体接口
	kubejs.shaped("fluidlogistics:multi_fluid_access_port", [
		" A ",
		"AMI",
		" A "
	], {
		A: "#forge:plates/brass",
		I: "#forge:plates/industrial_iron",
		M: Mechanism.COPPER.COM
	}).id("fluidlogistics:multi_fluid_access_port")
})