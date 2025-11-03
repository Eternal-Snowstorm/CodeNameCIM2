ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 聚烯烃板
	thermal.chiller("thermal_extra:polyolefin_plate", [
		Fluid.of("thermal_extra:polyolefin", 1000),
		"#tconstruct:casts/multi_use/plate"
	])
		.keepIngredient([
			"thermal_extra:chiller_plate_cast",
			"tconstruct:plate_cast"
		])
		.energy(8000)
		.id("thermal_extra:machine/chiller/polyolefin")

	// 冰碎片
	thermal.chiller("ad_astra:ice_shard", [
		Fluid.of("minecraft:water", 1000),
		"#tconstruct:casts/multi_use/nugget"
	])
		.keepIngredient([
			"thermal_extra:chiller_nugget_cast",
			"tconstruct:nugget_cast"
		])
		.energy(1000)
})