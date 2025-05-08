ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.centrifuge([
		"ue_addons:aluminum_crystal_nucleus",
		Item.of("ue_addons:aluminum_shard").withChance(0.5),
		Item.of("2x ue_addons:aluminum_shard").withChance(0.1),
		Item.of("immersiveengineering:slag", 2).withChance(0.3),
		Fluid.of("ue_addons:turbid_waste_liquid", 50)
	], [
		"4x ue_addons:raw_aluminum_particles"
	]).energy(12000)
})