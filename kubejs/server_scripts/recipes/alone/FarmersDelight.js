ServerEvents.recipes((event) => {
	let { farmersdelight } = event.recipes

	farmersdelight.cutting("4x tconstruct:seared_brick", [
		"tconstruct:seared_bricks"
	], "#minecraft:pickaxes")

	farmersdelight.cutting("4x tconstruct:scorched_brick", [
		"tconstruct:scorched_bricks"
	], "#minecraft:pickaxes")
})