ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()
	const BRICK = "tconstruct:seared_brick"
	const PRISM = "#forge:glass/prism"
	const GLASS = "#forge:glass"

	// 焦黑融化器
	kubejs.shaped("tconstruct:seared_melter", [
		"BXB",
		"BMB"
	], {
		M: Mechanism.STONE.COM,
		B: BRICK,
		X: "#tconstruct:gauge"
	}).id("tconstruct:smeltery/seared/melter")

	// 焦黑加热器
	kubejs.shaped("tconstruct:seared_heater", [
		"BBB",
		"BMB",
		"BBB"
	], {
		M: Mechanism.STONE.COM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/heater")

	// 焦黑燃料储罐
	kubejs.shaped("tconstruct:seared_fuel_tank", [
		"BBB",
		"BPB",
		"BBB"
	], {
		P: PRISM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/fuel_tank")

	// 焦黑材料储罐
	kubejs.shaped("tconstruct:seared_ingot_tank", [
		"BPB",
		"BPB",
		"BPB"
	], {
		P: PRISM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/ingot_tank")

	// 焦黑燃料量器
	kubejs.shaped("tconstruct:seared_fuel_gauge", [
		"BPB",
		"PPP",
		"BPB"
	], {
		P: PRISM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/fuel_gauge")

	// 焦黑材料量器
	kubejs.shaped("tconstruct:seared_ingot_gauge", [
		"PBP",
		"BPB",
		"PBP"
	], {
		P: PRISM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/ingot_gauge")

	// 焦黑玻璃
	kubejs.shaped("tconstruct:seared_glass", [
		"PBP",
		"BPB",
		"PBP"
	], {
		P: PRISM,
		B: BRICK
	}).id("tconstruct:smeltery/seared/seared_glass")

	// 铸模箱
	kubejs.shaped("tconstruct:cast_chest", [
		"BXB",
		"BYB",
		"BMB"
	], {
		M: Mechanism.STONE.COM,
		B: BRICK,
		X: "#tconstruct:patterns/reusable",
		Y: "#forge:chests"
	}).id("tconstruct:tables/cast_chest")

	// 空烈焰人燃烧室
	kubejs.shaped("create:empty_blaze_burner", [
		"ABA",
		"A A",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: Mechanism.IRON.COM,
		C: "minecraft:nether_bricks"
	}).id("create:crafting/kinetics/empty_blaze_burner")

	// 烈焰人燃烧室
	kubejs.shaped("create:blaze_burner", [
		"ABA",
		"ADA",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: Mechanism.IRON.COM,
		C: "minecraft:nether_bricks",
		D: Mechanism.NETHER.COM
	}).id("create:crafting/kinetics/blaze_burner")

})