ServerEvents.tags("fluid", (event) => {
	// 可用作火箭燃料
	event.get("ad_astra:fuel")
		.add("minecraft:lava")

	// 一桶就能上天的燃料
	event.get("ad_astra:efficient_fuel")
		.add("minecraft:lava")

	// ad原油
	event.get("ad_astra:oil")
		.add("minecraft:lava")

	// ad氧气
	event.get("ad_astra:oxygen")
		.add("minecraft:lava")

	event.get("minecraft:water")
		.removeAll()
		.add("minecraft:water")

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

	event.get("tconstruct:fuels")
		.add([
			"ad_astra:cryo_fuel",
			"cmi:delta_unstable_solution",
			"ad_astra:fuel",
			"#forge:oil",
			"thermal:refined_fuel",
			"cmi:turbid_waste_liquid",
			"tconstruct:blazing_blood",
			"immersiveengineering:ethanol",
			"createdieselgenerators:plant_oil",
			"createdieselgenerators:biodiesel",
			"createdieselgenerators:diesel",
			"createdieselgenerators:gasoline"
		])

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
})