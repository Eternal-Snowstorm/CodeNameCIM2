ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 木质
	kubejs.shapeless("cmi:wooden_mechanism", [
		"#forge:stripped_logs",
		"#minecraft:planks",
		"minecraft:stick",
		"cmi:basic_mechanism_part",
		"#forge:hammer"
	])

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
		"cmi:crafting_incomplete_iron_mechanism",
		"#forge:hammer",
		"#forge:nuggets/iron",
		"#forge:nuggets/iron",
		"cmi:basic_mechanism_part"
	]).damageIngredient("#forge:hammer", 1)

	// 铜质
	kubejs.shapeless("cmi:copper_mechanism", [
		"cmi:crafting_incomplete_copper_mechanism",
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

	kubejs.shapeless("4x cmi:basic_mechanism_part", [
		"minecraft:flint",
		"minecraft:clay_ball"
	])
	kubejs.shapeless("4x cmi:mechanical_mechanism_part", [
		"create:cogwheel",
		"#forge:ingots/andesite_alloy"
	])
	kubejs.shapeless("4x cmi:engineering_mechanism_part", [
		"#forge:plates/copper",
		"immersiveengineering:component_iron"
	])
	kubejs.shapeless("4x cmi:flux_mechanism_part", [
		"thermal:rf_coil",
		"#forge:plates/invar"
	])
	kubejs.shapeless("4x cmi:mekanism_mechanism_part", [
		"#forge:ingots/steel",
		"mekanism:basic_control_circuit"
	])
	kubejs.shapeless("4x cmi:quantum_mechanism_part", [
		"ae2:quantum_entangled_singularity",
		"mekanism:pellet_polonium"
	])
	kubejs.shapeless("4x cmi:space_mechanism_part", [
		"ae2:sky_dust",
		"ae2:matter_ball"
	])
	// 创造
	kubejs.shapeless("2x cmi:creative_mechanism", [
		"cmi:creative_mechanism"
	])
})