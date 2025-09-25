ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const MECH = "cmi:stone_mechanism"

	// 焦炉砖
	event.replaceInput({
		input: "#forge:sandstone",
		output: "immersiveengineering:cokebrick"
	}, "#forge:sandstone", MECH)

	// 焦黑排液孔
	kubejs.shaped("tconstruct:seared_drain", [
		"B B",
		"CAC",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:seared_brick",
		C: "minecraft:copper_ingot"
	}).id("tconstruct:smeltery/seared/drain")

	// 焦黑滑槽
	kubejs.shaped("tconstruct:seared_chute", [
		"BCB",
		" A ",
		"BCB"
	], {
		A: MECH,
		B: "tconstruct:seared_brick",
		C: "minecraft:copper_ingot"
	}).id("tconstruct:smeltery/seared/chute")

	// 焦黑输导孔
	kubejs.shaped("tconstruct:seared_duct", [
		"B B",
		"CAC",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:seared_brick",
		C: "minecraft:gold_ingot"
	}).id("tconstruct:smeltery/seared/duct")

	// 焦黑铸件台
	kubejs.shaped("tconstruct:seared_table", [
		"BAB",
		"B B",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:seared_brick"
	}).id("tconstruct:smeltery/seared/table")

	// 焦黑浇筑盆
	kubejs.shaped("tconstruct:seared_basin", [
		"B B",
		"B B",
		"BAB"
	], {
		A: MECH,
		B: "tconstruct:seared_brick"
	}).id("tconstruct:smeltery/seared/basin")

	// 焦黑加热器
	kubejs.shaped("tconstruct:seared_heater", [
		"BBB",
		"B B",
		"BAB"
	], {
		A: MECH,
		B: "tconstruct:seared_brick"
	}).id("tconstruct:smeltery/seared/heater")

	// 焦黑熔化炉
	kubejs.shaped("tconstruct:seared_melter", [
		"BCB",
		"BAB",
	], {
		A: MECH,
		B: "tconstruct:seared_brick",
		C: "#tconstruct:gauge"
	}).id("tconstruct:smeltery/seared/melter")

	// 焦褐排液孔
	kubejs.shaped("tconstruct:scorched_drain", [
		"B B",
		"CAC",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:scorched_brick",
		C: "tconstruct:obsidian_pane"
	}).id("tconstruct:smeltery/scorched/drain")

	// 焦褐滑槽
	kubejs.shaped("tconstruct:scorched_chute", [
		"BCB",
		" A ",
		"BCB"
	], {
		A: MECH,
		B: "tconstruct:scorched_brick",
		C: "tconstruct:obsidian_pane"
	}).id("tconstruct:smeltery/scorched/chute")

	// 焦褐疏导孔
	kubejs.shaped("tconstruct:scorched_duct", [
		"B B",
		"CAC",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:scorched_brick",
		C: "#forge:ingots/gold"
	}).id("tconstruct:smeltery/scorched/duct_retextured")

	// 焦褐铸件台
	kubejs.shaped("tconstruct:scorched_table", [
		"BAB",
		"B B",
		"B B"
	], {
		A: MECH,
		B: "tconstruct:scorched_brick"
	}).id("tconstruct:smeltery/scorched/table")

	// 焦褐浇筑盆
	kubejs.shaped("tconstruct:scorched_basin", [
		"B B",
		"B B",
		"BAB"
	], {
		A: MECH,
		B: "tconstruct:scorched_brick"
	}).id("tconstruct:smeltery/scorched/basin")

	// 焦褐合金炉
	kubejs.shaped("tconstruct:scorched_alloyer", [
		"BCB",
		"BAB",
	], {
		A: MECH,
		B: "tconstruct:scorched_brick",
		C: "#tconstruct:scorched_tanks"
	}).id("tconstruct:smeltery/scorched/alloyer")

	// 铸模箱
	kubejs.shaped("tconstruct:cast_chest", [
		" C ",
		"DBD",
		"DAD"
	], {
		A: MECH,
		B: "#forge:chests/wooden",
		C: "#tconstruct:casts/gold",
		D: "tconstruct:seared_brick"
	}).id("tconstruct:tables/cast_chest")

	// 炉灶
	kubejs.shaped("farmersdelight:stove", [
		"BBB",
		"DAD",
		"DCD"
	], {
		A: MECH,
		B: "minecraft:iron_ingot",
		C: "minecraft:campfire",
		D: "minecraft:bricks"
	}).id("farmersdelight:stove")
})