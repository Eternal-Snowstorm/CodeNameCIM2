ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 木质
	kubejs.shapeless("cmi:wooden_mechanism", [
		"#minecraft:logs",
		"#minecraft:planks",
		"minecraft:stick",
		"cmi:basic_mechanism_part",
		"#forge:hammers"
	]).damageIngredient("#forge:hammers", 1)

	// 石质
	kubejs.shapeless("cmi:stone_mechanism", [
		"cmi:wooden_mechanism",
		"#forge:stone",
		"minecraft:flint",
		"#forge:hammers",
		"tconstruct:seared_brick",
	]).damageIngredient("#forge:hammers", 1)

	// 铁质
	kubejs.shapeless("cmi:iron_mechanism", [
		"cmi:iron_mechanism_basement",
		"#forge:hammers",
		"#forge:nuggets/iron",
		"#forge:nuggets/iron",
		"cmi:basic_mechanism_part"
	]).damageIngredient("#forge:hammers", 1)

	// 铜质
	kubejs.shapeless("cmi:copper_mechanism", [
		"cmi:copper_mechanism_basement",
		"minecraft:water_bucket",
		"thermal:cured_rubber",
		"create:fluid_pipe",
		"cmi:mechanical_mechanism_part",
		"#forge:hammers"
	]).damageIngredient("#forge:hammers", 1)

	// 安山
	kubejs.shapeless("cmi:andesite_mechanism", [
		"cmi:andesite_mechanism_basement",
		"2x create:cogwheel",
		"create:large_cogwheel",
		"cmi:mechanical_mechanism_part",
		"#forge:hammers"
	]).damageIngredient("#forge:hammers", 1)

	// 红石
	kubejs.shapeless("vintageimprovements:redstone_module", [
		"2x #forge:dusts/redstone",
		"#forge:stone",
		"minecraft:repeater",
		"#forge:hammers",
		"cmi:basic_mechanism_part"
	]).damageIngredient("#forge:hammers", 1)

	// 创造
	kubejs.shapeless("2x cmi:creative_mechanism", [
		"cmi:creative_mechanism"
	])
})