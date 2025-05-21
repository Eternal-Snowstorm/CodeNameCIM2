ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	// 黏血球
	tconstruct.casting_table(
		"ue_addons:blood_slime_ball",
		Fluid.of("ue_addons:blood", 250)
	).cooling_time(20)
})