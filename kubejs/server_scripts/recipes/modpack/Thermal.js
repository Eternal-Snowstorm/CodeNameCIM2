ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.centrifuge([
		"3x cmi:platinum_crystal_nucleus",
		Item.of("cmi:platinum_shard").withChance(0.5),
		Item.of("2x cmi:platinum_shard").withChance(0.1),
		Item.of("immersiveengineering:slag", 2).withChance(0.3),
		Fluid.of("cmi:turbid_waste_liquid", 50)
	], [
		"4x cmi:raw_platinum_particles"
	]).energy(12000)

	// 安山岩
	thermal.rock_gen("minecraft:andesite")
		.below("create:andesite_alloy_block")
		.adjacent("minecraft:water")
})