ServerEvents.recipes((event) => {
	let { thermal, thermal_extra } = event.recipes

	thermal.centrifuge([
		"6x cmi:platinum_shard",
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

	// 熔渣
	thermal.rock_gen("create:scoria")
		.adjacent("create:chocolate")

	// 石灰岩
	thermal.rock_gen("create:limestone")
		.adjacent("create:honey")


	// 爆裂
	thermal_extra.nitratic_igniter([
		"cmi:blackstone_sourse_alpha",
		"cmi:blackstone_sourse_beta",
		"cmi:blackstone_sourse_gamma"
	], "#forge:blackstone")
		.energy(2000)

})