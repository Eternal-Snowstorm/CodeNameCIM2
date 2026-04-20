ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.getRecipes()

	createdieselgenerators.hammering([
		Item.of("cmi:stone_plate").withChance(0.1),
		Item.of("minecraft:gravel").withChance(0.9)
	], "#forge:cobblestone")

	createdieselgenerators.hammering([
		Item.of("cmi:andesite_dust").withChance(0.25),
		Item.of("minecraft:gravel").withChance(0.75)
	], "#create:stone_types/andesite")

	// 热力三粉末
	createdieselgenerators.compression_molding("thermal:blitz_rod", [
		"thermal:blitz_powder",
		"thermal:blitz_powder",
		"thermal:blitz_powder",
		"thermal:blitz_powder"
	], "createdieselgenerators:lines"
	).heated()

	createdieselgenerators.compression_molding("thermal:blizz_rod", [
		"thermal:blizz_powder",
		"thermal:blizz_powder",
		"thermal:blizz_powder",
		"thermal:blizz_powder"
	], "createdieselgenerators:lines"
	).heated()

	createdieselgenerators.compression_molding("thermal:basalz_rod", [
		"thermal:basalz_powder",
		"thermal:basalz_powder",
		"thermal:basalz_powder",
		"thermal:basalz_powder"
	], "createdieselgenerators:lines"
	).heated()
})