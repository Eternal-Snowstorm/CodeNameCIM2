ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.getRecipes()

	// 石板
	createdieselgenerators.hammering("cmi:stone_plate", [
		"minecraft:flint"
	])

	// 热力三粉末
	createdieselgenerators.compression_molding("thermal:blitz_rod", [
		"thermal:blitz_powder",
		"thermal:blitz_powder",
		"thermal:blitz_powder",
		"thermal:blitz_powder"
	], "createdieselgenerators:lines").heated()

	createdieselgenerators.compression_molding("thermal:blizz_rod", [
		"thermal:blizz_powder",
		"thermal:blizz_powder",
		"thermal:blizz_powder",
		"thermal:blizz_powder"
	], "createdieselgenerators:lines").heated()

	createdieselgenerators.compression_molding("thermal:basalz_rod", [
		"thermal:basalz_powder",
		"thermal:basalz_powder",
		"thermal:basalz_powder",
		"thermal:basalz_powder"
	], "createdieselgenerators:lines").heated()

	createdieselgenerators.bulk_fermenting(
		Fluid.of("immersiveengineering:redstone_acid", 200), [
		Fluid.of("tconstruct:molten_lead", 90),
		"minecraft:redstone"
	]).id("createdieselgenerators:compat/immersiveengineering/redstone_acid")

	createdieselgenerators.bulk_fermenting(
		Fluid.of("immersiveengineering:redstone_acid", 200), [
		Fluid.of("thermal:redstone", 100),
		"#forge:dusts/lead"
	])
})