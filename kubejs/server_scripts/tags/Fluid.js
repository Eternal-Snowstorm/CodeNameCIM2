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
})