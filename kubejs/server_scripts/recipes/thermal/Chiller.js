ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 聚烯烃板
	thermal.chiller("thermal_extra:polyolefin_plate", [
		Fluid.of("thermal_extra:polyolefin", 1000),
		"#tconstruct:casts/multi_use/plate"
	]).energy(8000).id("thermal_extra:machine/chiller/polyolefin")

	// 冰碎片
	thermal.chiller("ad_astra:ice_shard", [
		Fluid.of("minecraft:water", 1000),
		"#tconstruct:casts/multi_use/nugget"
	]).energy(1000)
})