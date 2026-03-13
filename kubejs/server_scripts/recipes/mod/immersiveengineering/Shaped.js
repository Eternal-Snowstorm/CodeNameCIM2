ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	let BlueprintMolds = Object.freeze({
		MOLD: "molds",
		ELECTRODE: "electrode",
		BANNERPATTERN: "bannerpatterns",
		COMPONENTS: "components",
		SPECIAL_BULLET: "specialbullet",
		BULLET: "bullet",
		MECHANISM: "mechanism"
	})

	/**
	 * 
	 * @param {string} type 模具类型
	 * @returns 
	 */
	function getMold(type) {
		let item = Item.of("immersiveengineering:blueprint")
		item = item.withNBT({ blueprint: type })
		return item
	}

	/**
	 * 
	 * @param {OutputItem_} type 模具类型
	 * @param {string[]} pattern 配方模式
	 * @param {{[key in string]: InputItem_}} key 配方键
	 * @returns 
	 */
	function addBlueprintRecipe(type, pattern, key) {
		let recipe = kubejs.shaped(getMold(type), pattern, key)
		recipe.id(`immersiveengineering:crafting/blueprint_${type}`)
		return recipe
	}

	// 金属模具蓝图
	addBlueprintRecipe(BlueprintMolds.MOLD, [
		" A ",
		"BBB",
		"CCC"
	], {
		A: ["#forge:ingots/industrial_iron", "#forge:plates/industrial_iron"],
		B: "#forge:dyes/blue",
		C: "minecraft:paper"
	})
})