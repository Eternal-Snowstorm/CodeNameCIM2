ServerEvents.recipes((event) => {
	let { create } = event.recipes

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
})