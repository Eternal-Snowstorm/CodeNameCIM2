ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 木质
	kubejs.shapeless("cmi:wooden_mechanism", [
		"#minecraft:logs",
		"#minecraft:planks",
		"minecraft:stick",
		"cmi:basic_mechanism_part",
		"#forge:hammer"
	]).damageIngredient("#forge:hammer", 1)

	// 石质
	kubejs.shapeless("cmi:stone_mechanism", [
		"cmi:wooden_mechanism",
		"#forge:stone",
		"minecraft:flint",
		"#forge:hammer",
		"tconstruct:seared_brick",
	]).damageIngredient("#forge:hammer", 1)

	// 铁质
	kubejs.shapeless("cmi:iron_mechanism", [
		"cmi:iron_mechanism_basement",
		"#forge:hammer",
		"#forge:nuggets/iron",
		"#forge:nuggets/iron",
		"cmi:basic_mechanism_part"
	]).damageIngredient("#forge:hammer", 1)

	// 铜质
	kubejs.shapeless("cmi:copper_mechanism", [
		"cmi:copper_mechanism_basement",
		"#forge:hammer",
		"#forge:nuggets/copper",
		"create:fluid_pipe",
		"thermal:cured_rubber",
		"cmi:mechanical_mechanism_part",
		"minecraft:water_bucket"
	]).damageIngredient("#forge:hammer", 1)

	// 安山
	kubejs.shapeless("cmi:andesite_mechanism", [
		"2x #forge:ingots/andesite_alloy",
		"#forge:hammer",
		"create:cogwheel",
		"create:cogwheel",
		"cmi:mechanical_mechanism_part"
	]).damageIngredient("#forge:hammer", 1)

	// 红石
	kubejs.shapeless("vintageimprovements:redstone_module", [
		"2x #forge:dusts/redstone",
		"#forge:stone",
		"minecraft:redstone_torch",
		"#forge:hammer",
		"cmi:basic_mechanism_part"
	]).damageIngredient("#forge:hammer", 1)

	// 创造
	kubejs.shapeless("2x cmi:creative_mechanism", [
		"cmi:creative_mechanism"
	])
})