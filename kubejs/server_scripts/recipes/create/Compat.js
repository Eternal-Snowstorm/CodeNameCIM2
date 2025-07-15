ServerEvents.recipes((event) => {
	let { create, kubejs, ratatouille } = event.recipes

	// 砖块
	create.mixing(Fluid.of("tconstruct:seared_stone", 250), [
		"tconstruct:grout"
	]).processingTime(150).heatLevel("grilled")

	create.mixing(Fluid.of("tconstruct:scorched_stone", 250), [
		"tconstruct:nether_grout"
	]).processingTime(150).heatLevel("grilled")

	// 液态灵魂
	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"#minecraft:soul_fire_base_blocks"
	]).processingTime(150).heatLevel("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"tconstruct:soul_glass"
	]).processingTime(150).heatLevel("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 250), [
		"tconstruct:soul_glass_pane"
	]).processingTime(150).heatLevel("grilled")

	create.mixing(Fluid.of("tconstruct:liquid_soul", 1000), [
		"4x minecraft:weeping_vines",
		"4x minecraft:twisting_vines",
		Fluid.of("minecraft:lava", 250)
	]).heated()

	// 传送带
	kubejs.shaped("4x create:belt_connector", [
		"AAA",
		"AAA"
	], {
		A: "thermal:cured_rubber"
	})

	// 杂酚油
	create.mixing("immersiveengineering:treated_wood_horizontal", [
		{ fluidTag: "forge:creosote", amount: 125 },
		"#minecraft:planks"
	])

	create.mixing("8x immersiveengineering:treated_wood_horizontal", [
		{ fluidTag: "forge:creosote", amount: 1000 },
		"8x #minecraft:planks"
	])

	create.filling("immersiveengineering:treated_wood_horizontal", [
		"#minecraft:planks",
		{ fluidTag: "forge:creosote", amount: 125 }
	]).id("createaddition:filling/treated_wood_planks")

	// 木屑
	create.compacting("2x createdieselgenerators:wood_chip", [
		"2x #minecraft:logs"
	])

	// 墨水一套
	create.filling("supplementaries:antique_ink", [
		"minecraft:glass_bottle",
		Fluid.of("create_enchantment_industry:ink", 250)
	])

	create.emptying([
		Fluid.of("create_enchantment_industry:ink", 250),
		"minecraft:glass_bottle"
	], "supplementaries:antique_ink")
})