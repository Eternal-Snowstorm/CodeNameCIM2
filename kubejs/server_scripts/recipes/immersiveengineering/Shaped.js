ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

	// 炼油
	kubejs.shaped("createdieselgenerators:pumpjack_head", [
		"A A",
		"BCB",
		"A A"
	], {
		A: "#forge:plates/steel",
		B: "cmi:light_engineering_mechanism",
		C: "minecraft:dried_kelp"
	}).id("createdieselgenerators:crafting/pumpjack_head")

	// 构件底座蓝图
	kubejs.shaped(Item.of("immersiveengineering:blueprint").withNBT({
		blueprint: "mechanism_basements"
	}), [
		" A ",
		"BBB",
		"CCC"
	], {
		A: "#cmi:mechanism_basement",
		B: "#forge:dyes/blue",
		C: "minecraft:paper"
	}).id("immersiveengineering:crafting/blueprint_mechanism_basements")

	// 构件组件蓝图
	kubejs.shaped(Item.of("immersiveengineering:blueprint").withNBT({
		blueprint: "mechanism_augments"
	}), [
		" A ",
		"BBB",
		"CCC"
	], {
		A: "create:electron_tube",
		B: "#forge:dyes/blue",
		C: "minecraft:paper"
	}).id("immersiveengineering:crafting/blueprint_mechanism_augments")

	kubejs.shaped("createdieselgenerators:pumpjack_bearing", [
		"A",
		"B",
		"C"
	], {
		A: "create:turntable",
		B: "#forge:storage_blocks/steel",
		C: "cmi:light_engineering_mechanism"
	}).id("createdieselgenerators:crafting/pumpjack_bearing")

	create.mechanical_crafting("createdieselgenerators:pumpjack_crank", [
		"A A",
		"B B",
		"AMA",
		"BCB",
		"AMA"
	], {
		A: "#forge:plates/steel",
		C: "#forge:storage_blocks/steel",
		M: "cmi:light_engineering_mechanism",
		B: "create:shaft"
	}).id("createdieselgenerators:mechanical_crafting/pumpjack_crank")

	// 红石线圈
	kubejs.shaped("immersiveengineering:wirecoil_redstone", [
		" A ",
		"BCB",
		" A "
	], {
		A: "#forge:wires/lead",
		B: "minecraft:redstone",
		C: "#forge:rods/wooden"
	}).id("immersiveengineering:crafting/wirecoil_redstone")
})