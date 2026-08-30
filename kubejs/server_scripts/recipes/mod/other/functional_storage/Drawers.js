ServerEvents.recipes((event) => {
	let { kubejs, create, tconstruct } = event.getRecipes()

	// 物品抽屉
	let drawerWoodTypes = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"crimson",
		"warped",
		"cherry",
		"rubberwood"
	]
	drawerWoodTypes.forEach((type) => {
		// 物品抽屉1
		kubejs.shaped(getWoodenDrawerItem(type, 1), [
			"AAA",
			"ABA",
			"AAA"
		], {
			A: `#minecraft:planks/${type}`,
			B: Mechanisms.WOODEN.COM
		}).id(getWoodenDrawerId(type, 1))

		// 物品抽屉2
		kubejs.shaped(getWoodenDrawerItem(type, 2), [
			"ABA",
			"AAA",
			"ABA"
		], {
			A: `#minecraft:planks/${type}`,
			B: Mechanisms.WOODEN.COM
		}).id(getWoodenDrawerId(type, 2))

		// 物品抽屉4
		kubejs.shaped(getWoodenDrawerItem(type, 4), [
			"ABA",
			"BAB",
			"ABA"
		], {
			A: `#minecraft:planks/${type}`,
			B: Mechanisms.WOODEN.COM
		}).id(getWoodenDrawerId(type, 4))
	})

	// 流体抽屉1
	kubejs.shaped("functionalstorage:fluid_1", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:plates/iron",
		B: Mechanisms.COPPER.COM
	}).id("functionalstorage:fluid_1")

	// 流体抽屉2
	kubejs.shaped("functionalstorage:fluid_2", [
		"ABA",
		"AAA",
		"ABA"
	], {
		A: "#forge:plates/iron",
		B: Mechanisms.COPPER.COM
	}).id("functionalstorage:fluid_2")

	// 流体抽屉4
	kubejs.shaped("functionalstorage:fluid_4", [
		"ABA",
		"BAB",
		"ABA"
	], {
		A: "#forge:plates/iron",
		B: Mechanisms.COPPER.COM
	}).id("functionalstorage:fluid_4")

	// 镶框抽屉1
	kubejs.shaped("functionalstorage:framed_1", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:nuggets/iron",
		B: "#functionalstorage:item_drawer"
	}).id("functionalstorage:framed_1")

	// 镶框抽屉1
	kubejs.shaped("2x functionalstorage:framed_2", [
		"ABA",
		"AAA",
		"ABA"
	], {
		A: "#forge:nuggets/iron",
		B: "#functionalstorage:item_drawer"
	}).id("functionalstorage:framed_2")

	// 镶框抽屉4
	kubejs.shaped("4x functionalstorage:framed_4", [
		"ABA",
		"BAB",
		"ABA"
	], {
		A: "#forge:nuggets/iron",
		B: "#functionalstorage:item_drawer"
	}).id("functionalstorage:framed_4")

	/**
	 * 
	 * @param {string} woodType 
	 * @param {1 | 2 | 4} drawerType
	 * @returns {ResourceLocation}
	 */
	function getWoodenDrawerId(woodType, drawerType) {
		return Ingredient.of(`#functionalstorage:drawers/${woodType}/${drawerType}`).getItemIds()[0]
	}

	/**
	 * 
	 * @param {string} woodType 
	 * @param {1 | 2 | 4} drawerType
	 * @returns {Internal.ItemStack_}
	 */
	function getWoodenDrawerItem(woodType, drawerType) {
		return Item.of(getWoodenDrawerId(woodType, drawerType), drawerType)
	}

})