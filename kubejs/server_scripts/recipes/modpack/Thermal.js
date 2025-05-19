ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.centrifuge([
		"3x ue_addons:platinum_crystal_nucleus",
		Item.of("ue_addons:platinum_shard").withChance(0.5),
		Item.of("2x ue_addons:platinum_shard").withChance(0.1),
		Item.of("immersiveengineering:slag", 2).withChance(0.3),
		Fluid.of("ue_addons:turbid_waste_liquid", 50)
	], [
		"4x ue_addons:raw_platinum_particles"
	]).energy(12000)
})