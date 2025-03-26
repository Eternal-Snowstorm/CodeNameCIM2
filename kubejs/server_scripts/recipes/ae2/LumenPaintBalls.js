ServerEvents.recipes((event) => {
	let { create } = event.recipes

	event.custom({
		"type": "ae2:charger",
		"ingredient": { "item": "ae2:matter_ball" },
		"result": { "item": "ae2:black_lumen_paint_ball" }
	})

	create.crushing([
		Item.of("ae2:white_lumen_paint_ball").withChance(0.25),
		Item.of("ae2:red_lumen_paint_ball").withChance(0.25),
		Item.of("ae2:blue_lumen_paint_ball").withChance(0.25),
		Item.of("ae2:green_lumen_paint_ball").withChance(0.25)
	], [
		"ae2:black_lumen_paint_ball"
	]).processingTime(40)
})
//这段不需要暂时——UE