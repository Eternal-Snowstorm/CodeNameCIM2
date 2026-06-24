// priority: 11
ServerEvents.tags("fluid", (event) => {
	function removeTagAllId(tag) {
		return event.get(tag)
			.removeAll()
	}

	// 柴油
	event.get("forge:diesel")
		.add("thermal_extra:diesel")

	// 电镀液
	event.get("cmi:plating_solution")
		.add("cmi:plating_solution")

	// 可用作火箭燃料
	event.get("ad_astra:fuel")
		.removeAll()
		.add("ad_astra:fuel")
		.add("ad_astra:cryo_fuel")

	// 机械动力无限流体
	event.get("create:bottomless/allow")
		.add("cmi:sea_water")

	// 安山合金材料
	event.get("cmi:andesite_alloy_material")
		.add("tconstruct:molten_zinc")
		.add("tconstruct:molten_iron")

	// 一桶就能上天的燃料
	// event.get("ad_astra:efficient_fuel")
	// 	.add("minecraft:lava")

	// ad原油
	// event.get("ad_astra:oil")
	// 	.add("minecraft:lava")

	// ad氧气
	// event.get("ad_astra:oxygen")
	// 	.add("minecraft:lava")

	event.get("deepdrilling:sludge")
		.add("deepdrilling:flowing_sludge")
		.add("deepdrilling:sludge")

	event.get("cmi:pig_iron_material")
		.add("#tconstruct:meat_soup")
		.add("cmi:blood")

	event.get("minecraft:water")
		.removeAll()
		.add("minecraft:water")
		.add("minecraft:flowing_water")

	event.get("cmi:delta_unstable_solution")
		.add("cmi:delta_unstable_solution")

	event.get("cmi:turbid_waste_liquid")
		.add("cmi:turbid_waste_liquid")

	event.get("cmi:platinum_solution")
		.add("cmi:platinum_solution")

	event.get("forge:oil")
		.add("#forge:crude_oil")

	event.get("cmi:bromine")
		.add("cmi:bromine")

	event.get("forge:brine")
		.add("cmi:nacl_solution")

	event.get("forge:steam")
		.add("steampowered:steam")
		.add("mekanism:steam")

	event.get("cmi:benzene")
		.add("cmi:benzene")

	event.get("cmi:nitric_acid")
		.add("cmi:nitric_acid")

	event.get("cmi:glycerin")
		.add("cmi:glycerin")

	event.get("cmi:fluid_nitroglycerine")
		.add("cmi:fluid_nitroglycerine")

	event.get("cmi:fatty_acid")
		.add("cmi:fatty_acid")

	event.get("cmi:sulfric_diesel")
		.add("cmi:sulfric_diesel")

	event.get("forge:diesel")
		.add("cmi:sulfric_diesel")

	event.get("cmi:photosyn_fluid")
		.add("cmi:photosyn_fluid")

	event.get("forge:kerosene")
		.add("cmi:kerosene")

	event.get("cmi:phenol")
		.add("cmi:phenol")

	event.get("cmi:light_olefin")
		.add("cmi:light_olefin")

	event.get("cmi:vinegar_acid")
		.add("cmi:vinegar_acid")

	event.get("cmi:light_silicone_ether")
		.add("cmi:light_silicone_ether")

	event.get("cmi:polysilicone_ether")
		.add("cmi:polysilicone_ether")

	event.get("cmi:light_aldehyde")
		.add("cmi:light_aldehyde")

	event.get("cmi:acetylene")
		.add("cmi:acetylene")

	event.get("cmi:vinyl_alcohol")
		.add("cmi:vinyl_alcohol")

	event.get("cmi:polyvinyl_alcohol")
		.add("cmi:polyvinyl_alcohol")

	event.get("cmi:light_aromatics")
		.add("cmi:light_aromatics")

	event.get("cmi:brine")
		.add("cmi:brine")

	event.get("cmi:waste_brine")
		.add("cmi:waste_brine")

	event.get("cmi:delta_unstable_solution")
		.add("cmi:delta_unstable_solution")

	event.get("cmi:sea_water")
		.add("cmi:sea_water")

	event.get("cmi:caustic_soda_solution")
		.add("cmi:caustic_soda_solution")

	event.get("cmi:sodium_aluminate_solution")
		.add("cmi:sodium_aluminate_solution")

	event.get("tconstruct:fuels")
		.add("ad_astra:cryo_fuel")
		.add("cmi:delta_unstable_solution")
		.add("ad_astra:fuel")
		.add("#forge:oil")
		.add("thermal:refined_fuel")
		.add("cmi:turbid_waste_liquid")
		.add("tconstruct:blazing_blood")
		.add("immersiveengineering:ethanol")
		.add("createdieselgenerators:plant_oil")
		.add("createdieselgenerators:biodiesel")
		.add("createdieselgenerators:diesel")
		.add("createdieselgenerators:gasoline")

	event.get("forge:sauce/tomato")
		.add("create_central_kitchen:tomato_sauce")

	let thermalMaterials = [
		"soul_infused",
		"shellite",
		"dragonsteel",
		"twinite",
		"abyssal"
	]
	thermalMaterials.forEach(material => {
		event.get(`tconstruct:molten_${material}`)
			.add(`thermalconstruct:molten_${material}`)
	})

	event.get("forge:molten_pig_iron")
		.add("#tconstruct:molten_pig_iron")

	// 月球车燃油
	event.get("ad_astra:tier_1_rover_fuel")
		.removeAll()
		.add([
			"ad_astra:fuel",
			"#forge:biodiesel",
			"#forge:diesel",
			"#forge:gasoline",
			"#tconstruct:blazing_blood"
		])
})