ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 锇砖瓦
	kubejs.shaped("cmi:osmium_tile", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/osmium",
		B: "#forge:ingots/vanadium"
	})

	// 水泵
	kubejs.shaped("cmi:water_pump", [
		"ACA",
		"ABA",
		"AAA"
	], {
		A: "#forge:treated_wood",
		B: "cmi:copper_mechanism",
		C: "#forge:plates/iron"
	})

	// 石板
	kubejs.shapeless("cmi:stone_plate", [
		"2x #forge:stone",
		"immersiveengineering:hammer"
	]).damageIngredient("immersiveengineering:hammer")
})