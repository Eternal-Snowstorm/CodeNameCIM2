ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 高级焦炉
	kubejs.shaped("cmi:reinforced_coke_oven", [
		"AAA",
		"BMB",
		"CCC"
	], {
		A: "tconstruct:seared_bricks",
		B: "tconstruct:scorched_brick",
		C: "tconstruct:scorched_bricks",
		M: Mechanisms.NETHER.COM
	})

	// 橡胶提取器
	kubejs.shaped("cmi:improved_rubber_extractor", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: ["#forge:ingots/industrial_iron", "#forge:plates/industrial_iron"],
		B: "thermal:device_tree_extractor"
	})
})