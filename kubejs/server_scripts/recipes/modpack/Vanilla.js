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

	// 坩埚底座
	kubejs.shaped("cmi:crucible_base", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/cast_iron"
	})

	// 坩埚风口
	kubejs.shaped("cmi:crucible_tuyere", [
		"ABA",
		"B B",
		"ABA"
	], {
		A: "#forge:ingots/cast_iron",
		B: "#forge:plates/cast_iron"
	})

	// 坩埚燃烧室
	kubejs.shaped("immersiveindustry:burning_chamber", [
		"AAA",
		"BCB",
		"AAA"
	], {
		A: "#forge:ingots/cast_iron",
		B: "#forge:plates/cast_iron",
		C: "minecraft:blast_furnace"
	}).id("immersiveindustry:crafting/burning_chamber")
})