ServerEvents.recipes((event) => {
	let { create, createdieselgenerators, minecraft } = event.recipes
	const ETHANOL = "immersiveengineering:ethanol"

	// 甘蔗糖浆
	create.compacting([
		Fluid.of("cmi:sugar_cane_syrup", 50),
		"cmi:sugarcane_fiber"
	], "minecraft:sugar_cane")

	create.compacting([
		Fluid.of("cmi:sugar_cane_syrup", 150),
		"cmi:sugarcane_fiber"
	], [
		"minecraft:sugar_cane",
		"minecraft:sugar"
	])

	// 纸
	create.emptying([
		Fluid.of("cmi:sugar_cane_syrup", 10),
		"6x minecraft:paper"
	], "cmi:sugarcane_fiber")

	addSmokingRecipe(event, "3x minecraft:paper", "cmi:sugarcane_fiber")

	// 糖
	create.mixing("minecraft:sugar", [
		Fluid.of("cmi:sugar_cane_syrup", 10)
	]).heatRequirement(global.HeatLevel["grilled"])

	// 乙醇发酵
	function addEthanolRecipes(input, amount) {
		let recipe =
			createdieselgenerators.basin_fermenting(Fluid.of(ETHANOL, amount), [
				Fluid.of("cmi:sugar_cane_syrup", amount),
				input
			]).processingTime(20 * 5)
		return recipe
	}

	addEthanolRecipes("#forge:vegetables/potato", 80)
	addEthanolRecipes("minecraft:melon_slice", 20)
	addEthanolRecipes("#forge:vegetables/tomato", 80)
	addEthanolRecipes("minecraft:sweet_berries", 50)
	addEthanolRecipes("minecraft:apple", 80)
	addEthanolRecipes("minecraft:glow_berries", 100)
	addEthanolRecipes("#forge:vegetables/beetroot", 40)
})