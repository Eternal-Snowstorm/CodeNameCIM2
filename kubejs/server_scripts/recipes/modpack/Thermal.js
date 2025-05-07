ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.centrifuge([
		"ue_addons:aluminum_crystal_nucleus",
		Item.of("immersiveengineering:slag", 2).withChance(0.3)
	], [
		"4x ue_addons:raw_aluminum_particles"
	]).energy(12000)
})