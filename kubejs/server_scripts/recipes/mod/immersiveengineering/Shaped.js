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

	// 铁机械零件
	kubejs.shaped("2x immersiveengineering:component_iron", [
		"P P",
		" G ",
		"P P"
	], {
		P: "#forge:plates/iron",
		G: "#forge:gears/copper"
	}).id("immersiveengineering:crafting/component_iron")

	// 钢机械零件
	kubejs.shaped("2x immersiveengineering:component_steel", [
		"P P",
		" G ",
		"P P"
	], {
		P: "#forge:plates/steel",
		G: "#forge:gears/electrum"
	}).id("immersiveengineering:crafting/component_steel")

	// 风帆
	kubejs.shaped("immersive_aircraft:sail", [
		"AA ",
		" AA",
		"AA "
	], {
		A: "#forge:fabric_hemp"
	}).id("immersive_aircraft:sail")

	// 滑翔翼
	kubejs.shaped("immersiveengineering:glider", [
		" A ",
		"BCB",
		"DAD"
	], {
		A: "#forge:rods/iron",
		B: "immersive_aircraft:sail",
		C: "#forge:leather",
		D: "farmersdelight:rope"
	}).id("immersiveengineering:crafting/glider")

	kubejs.shapeless("2x cmi:refractory_brick_bloom", [
		"#forge:clay",
		"#forge:clay",
		"#forge:dusts/aluminum",
		"#forge:dusts/hop_graphite",
		"create:cinder_flour"
	]).id("immersiveindustry:crafting/refractory_kiln_brick")
})