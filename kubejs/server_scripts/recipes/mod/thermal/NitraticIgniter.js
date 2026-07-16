ServerEvents.recipes((event) => {
	let { thermal_extra } = event.getRecipes()

	// 催化剂配方
	event.custom({
		"type": "thermal_extra:nitratic_igniter_catalyst",
		"energy_mod": 1.0,
		"ingredient": {
			"item": "cmi:trinitrotoluene"
		},
		"primary_mod": 1.0,
		"secondary_mod": 1.0
	})

	event.custom({
		"type": "thermal_extra:nitratic_igniter_catalyst",
		"energy_mod": 1.25,
		"ingredient": {
			"item": "cmi:nitrocellulose"
		},
		"primary_mod": 1.0,
		"secondary_mod": 1.0
	})

	// 爆裂
	thermal_extra.nitratic_igniter([
		"cmi:blackstone_sourse_alpha",
		"cmi:blackstone_sourse_beta",
		"cmi:blackstone_sourse_gamma"
	], "#forge:blackstone")
		.energy(2000)

	// 锇
	thermal_extra.nitratic_igniter([
		"2x mekanism:shard_osmium",
		Item.of("mekanism:clump_osmium", 1).withChance(0.5),
		Item.of("mekanism:clump_osmium", 1).withChance(0.25)
	], "#forge:raw_materials/osmium")
		.energy(4000)

	// 粗钨粉
	thermal_extra.nitratic_igniter("cmi:raw_tungsten_dust", [
		"cmi:raw_tungsten"
	])
})