ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 冶炼炉控制器
	kubejs.shaped("tconstruct:smeltery_controller", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "tconstruct:seared_bricks",
		B: "tconstruct:seared_brick",
		C: Mechanism.COPPER.COM,
		D: "thermal:cured_rubber",
		E: Mechanism.IRON.COM
	}).id("tconstruct:smeltery/casting/seared/smeltery_controller")
})