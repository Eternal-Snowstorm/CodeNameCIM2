ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes
	const STEEL_INGOT = IngrUtils.getFirstItemId("#forge:ingots/steel")

	// ???
	immersiveengineering.blast_furnace(Item.of(STEEL_INGOT, 6))
		.input("farmersdelight:cooking_pot")
		.time(20 * 10)
		.id("cmi:immersiveengineering/blast_furnace/steel_ingot/cooking_pot")

	immersiveengineering.blast_furnace(Item.of(STEEL_INGOT, 5))
		.input("farmersdelight:skillet")
		.time(20 * 10)
		.id("cmi:immersiveengineering/blast_furnace/steel_ingot/skillet")

	immersiveengineering.blast_furnace(Item.of(STEEL_INGOT, 8))
		.input("kaleidoscope_cookery:pot")
		.time(20 * 10)
		.id("cmi:immersiveengineering/blast_furnace/steel_ingot/pot")

	immersiveengineering.blast_furnace(Item.of(STEEL_INGOT, 6))
		.input("kaleidoscope_cookery:stockpot")
		.time(20 * 10)
		.id("cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot")

	immersiveengineering.blast_furnace(Item.of(STEEL_INGOT, 4))
		.input("kaleidoscope_cookery:stockpot_lid")
		.time(20 * 10)
		.id("cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot_lid")
})