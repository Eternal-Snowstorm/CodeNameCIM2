ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	// 黏血球
	tconstruct.casting_table("cmi:blood_slime_ball")
		.fluid(Fluid.of("cmi:blood", 250))
		.cooling_time(20)
})