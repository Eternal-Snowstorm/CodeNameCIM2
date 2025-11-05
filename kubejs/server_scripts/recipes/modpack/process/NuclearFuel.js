ServerEvents.recipes((event) => {
	let { thermal_extra, mekanism } = event.recipes

	// 毒化烂泥
	thermal_extra.endothermic_dehydrator([
		"alexscaves:toxic_paste",
		Item.of("alexscaves:toxic_paste").withChance(0.1)
	], [
		Fluid.of("alexscaves:acid", 100)
	]).energy(4000)

	// 精炼核废料
	// mekanism.oxidizing(
	// 	"4x alexscaves:toxic_paste",

	// )
})