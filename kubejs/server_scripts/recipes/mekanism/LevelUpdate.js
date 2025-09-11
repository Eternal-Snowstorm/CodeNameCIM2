ServerEvents.recipes(event => {
	let { kubejs } = event.recipes

	// 举例, name就是"mekanism:basic_smelting_factory"中的"smelting_factory"(工厂级起步)
	// 而lowestid填最低级的机器id(如"mekanism:energized_smelter", /kjs hand之后直接原封不动扔里面就行)

	function addMekUpdate(name, lowestid) {
		event.remove({ output: `mekanism:basic_${name}` })
		event.remove({ output: `mekanism:advanced_${name}` })
		event.remove({ output: `mekanism:elite_${name}` })
		event.remove({ output: `mekanism:ultimate_${name}` })
	}

	addMekUpdate("smelting_factory", "mekanism:energized_smelter")
	addMekUpdate("enriching_factory", "mekanism:enrichment_chamber")
	addMekUpdate("crushing_factory", "mekanism:crusher")
	addMekUpdate("compressing_factory", "mekanism:osmium_compressor")
	addMekUpdate("combining_factory", "mekanism:combiner")
	addMekUpdate("purifying_factory", "mekanism:purification_chamber")
	addMekUpdate("injecting_factory", "mekanism:chemical_injection_chamber")
	addMekUpdate("infusing_factory", "mekanism:metallurgic_infuser")
	addMekUpdate("sawing_factory", "mekanism:precision_sawmill")
	addMekUpdate("energy_cube", "immersiveengineering:capacitor_mv")
	addMekUpdate("fluid_tank", "create:fluid_tank")
	addMekUpdate("chemical_tank", "cmi:osmium_tile")

	kubejs.shapeless("mekanism:basic_tier_installer", [
		"#minecraft:planks",
		"cmi:basic_mekanism_mechanism"
	])

	kubejs.shapeless("mekanism:advanced_tier_installer", [
		"#minecraft:planks",
		"cmi:advanced_mekanism_mechanism"
	])

	kubejs.shapeless("mekanism:elite_tier_installer", [
		"#minecraft:planks",
		"cmi:elite_mekanism_mechanism"
	])

	kubejs.shapeless("mekanism:ultimate_tier_installer", [
		"#minecraft:planks",
		"cmi:ultimate_mekanism_mechanism"
	])
})