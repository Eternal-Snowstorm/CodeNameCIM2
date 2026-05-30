ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.getRecipes()

	// 巧克力
	createdieselgenerators.casting("create:bar_of_chocolate", [
		Fluid.of("create:chocolate", 250)
	]).mold("cmi:plate").id("createdieselgenerators:casting/chocolate_bar")
})