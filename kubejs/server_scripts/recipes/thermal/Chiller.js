ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 聚烯烃板
	thermal.chiller("thermal_extra:polyolefin_plate", [
		Fluid.of("thermal_extra:polyolefin", 1000),
		"#tconstruct:casts/multi_use/plate"
	]).energy(8000).keepIngredient([
		"thermal_extra:chiller_plate_cast",
		"tconstruct:plate_cast"
	]).id("thermal_extra:machine/chiller/polyolefin")

	// 冰碎片
	thermal.chiller("ad_astra:ice_shard", [
		Fluid.of("minecraft:water", 1000),
		"#tconstruct:casts/multi_use/nugget"
	]).energy(1000).keepIngredient([
		"thermal_extra:chiller_nugget_cast",
		"tconstruct:nugget_cast"
	])

	// 超导汞锭
	thermal.chiller("cmi:superconducting_mercury_ingot", [
		Fluid.of("cmi:mercury", 90),
		"#forge:ingots/silver"
	]).energy(4000)

	// 超导汞板
	thermal.chiller("cmi:superconducting_mercury_plate", [
		Fluid.of("cmi:mercury", 90),
		"#forge:plates/silver"
	]).energy(4000)
})