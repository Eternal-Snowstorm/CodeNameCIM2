ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 框架
	kubejs.shaped("3x portality:frame", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/enderium",
		B: "#forge:plates/platinum",
		C: "mekanism:steel_casing"
	})

	kubejs.shaped("3x portality:frame", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/platinum",
		B: "#forge:plates/enderium",
		C: "mekanism:steel_casing"
	})

	// 控制器
	kubejs.shapeless("portality:controller", [
		"portality:frame",
		"cmi:computing_mechanism"
	])

	// 物品
	kubejs.shapeless("portality:module_items", [
		"portality:controller",
		"cmi:wooden_mechanism"
	]).keepIngredient("portality:controller")

	// 流体
	kubejs.shapeless("portality:module_fluids", [
		"portality:controller",
		"cmi:copper_mechanism"
	]).keepIngredient("portality:controller")

	// 能量
	kubejs.shapeless("portality:module_energy", [
		"portality:controller",
		"cmi:coil_mechanism"
	]).keepIngredient("portality:controller")

	// 维度
	kubejs.shapeless("portality:module_interdimensional", [
		"portality:controller",
		"cmi:ender_mechanism"
	]).keepIngredient("portality:controller")
})