ServerEvents.recipes((event) => {
	let { farmersdelight } = event.getRecipes()

	// 焦黑砖
	farmersdelight.cutting("4x tconstruct:seared_brick", [
		"tconstruct:seared_bricks"
	], "#minecraft:pickaxes")

	// 焦褐砖
	farmersdelight.cutting("4x tconstruct:scorched_brick", [
		"tconstruct:scorched_bricks"
	], "#minecraft:pickaxes")
})