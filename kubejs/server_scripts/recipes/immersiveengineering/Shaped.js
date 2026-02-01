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

	// 复合窑壁
	kubejs.shaped("4x immersiveindustry:rotary_kiln_cylinder", [
		"AAA",
		"BBB",
		"CCC"
	], {
		A: "immersiveindustry:refractory_kiln_brick",
		B: "tconstruct:scorched_brick",
		C: "#forge:plates/steel"
	}).id("immersiveindustry:crafting/rotary_kiln_cylinder")

	// 加热窑壁
	kubejs.shaped("2x immersiveindustry:car_kiln_brick", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: "immersiveindustry:refractory_kiln_brick",
		B: "cmi:coil_mechanism",
		C: "#forge:plates/steel"
	}).id("immersiveindustry:crafting/car_kiln_brick")

	// 铁机械零件
	kubejs.shaped("8x immersiveengineering:component_iron", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/iron",
		B: "#forge:gears/copper"
	}).id("immersiveengineering:crafting/component_iron")

	// 钢机械零件
	kubejs.shaped("8x immersiveengineering:component_steel", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/steel",
		B: "#forge:gears/brass"
	}).id("immersiveengineering:crafting/component_steel")

	// 红石线圈
	kubejs.shaped("4x immersiveengineering:wirecoil_redstone", [
		" A ",
		"ABA",
		" A "
	], {
		A: "cmi:redstone_wire",
		B: "#forge:rods/wooden"
	}).id("immersiveengineering:crafting/wirecoil_redstone")
})