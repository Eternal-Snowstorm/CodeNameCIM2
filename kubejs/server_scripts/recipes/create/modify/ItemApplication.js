ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 铜机壳
	create.item_application("create:copper_casing", [
		"#forge:treated_wood",
		"#forge:plates/copper"
	]).id("create:item_application/copper_casing_from_log")
})