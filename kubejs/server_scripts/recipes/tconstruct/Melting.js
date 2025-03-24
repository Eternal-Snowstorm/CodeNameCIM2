ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.melting(
		Fluid.of("tconstruct:molten_obsidian", 1000),
		"#forge:obsidian"
	).time(660).temperature(800).id("tconstruct:smeltery/melting/obsidian/block")

})