ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.getRecipes()

	// 石板
	createdieselgenerators.hammering("cmi:stone_plate", [
		"minecraft:flint"
	])

	createdieselgenerators.hammering("cmi:dreamcore_crystal", [
		"cmi:dreamcore_ore"
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

	event.remove({
		id: "createdieselgenerators:bulk_fermenting/fermentable"
	})
	/**
	 * 乙醇发酵配方
	 * 
	 * @param {(Internal.InputFluid_|InputItem_)[]} input 输入物品
	 * @param {number} amount 输出流体量
	 * @returns 
	 */
	function addEthanolRecipes(input, amount) {
		const ETHANOL = "immersiveengineering:ethanol"
		let recipe =
			createdieselgenerators.bulk_fermenting(Fluid.of(ETHANOL, amount), [
				Fluid.of("thermal:syrup", amount),
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