ServerEvents.recipes((event) => {
	let { mekanism, kubejs} = event.recipes

	// 铂碎片处理
	mekanism.purifying(
		"cmi:platinum_crystal_nucleus",
		"4x cmi:platinum_shard",
		{ gas: "mekanism:hydrogen", amount: 500 }
	)

	// Si
	mekanism.reaction(
		"#forge:glass",
		{ gas: "mekanism:hydrogen", amount: 250 },
		Fluid.of("cmi:tetrachlorosilane", 500),
		"cmi:single_crystal_silicon",
		{ gas: "mekanism:hydrogen_chloride", amount: 500 }
	).duration(400).energyRequired(200)

	// HDPE
	mekanism.reaction(
		"thermal_extra:polyolefin_plate",
		{ gas: "mekanism:oxygen", amount: 10 },
		Fluid.of("mekanism:ethene", 50),
		"mekanism:hdpe_pellet",
	).duration(400).energyRequired(200)


	
	kubejs.shaped("mekanism:metallurgic_infuser", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "minecraft:redstone",
		C: "cmi:basic_mekanism_mechanism",
		B: "minecraft:furnace",
		D: "mekanism:steel_casing"
	}).id("mekanism:metallurgic_infuser")


	
	kubejs.shaped("mekanism:enrichment_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "minecraft:redstone",
		B: "cmi:basic_mekanism_mechanism",
		C: "minecraft:netherite_ingot",
		D: "mekanism:steel_casing"
	}).id("mekanism:enrichment_chamber")
})