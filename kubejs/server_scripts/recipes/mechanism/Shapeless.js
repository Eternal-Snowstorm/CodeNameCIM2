ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 木质
	kubejs.shapeless("ue_addons:wooden_mechanism", [
		"#forge:stripped_logs",
		"#minecraft:planks",
		"minecraft:stick",
		"ue_addons:basic_mechanism_part",
		"immersiveengineering:hammer"
	])

	// 石质
	kubejs.shapeless("ue_addons:stone_mechanism", [
		"ue_addons:wooden_mechanism",
		"#forge:stone",
		"minecraft:flint",
		"immersiveengineering:hammer",
		"tconstruct:seared_brick",
	]).damageIngredient("immersiveengineering:hammer", 1)

	// 铁质
	kubejs.shapeless("ue_addons:iron_mechanism", [
		"ue_addons:incomplete_iron_mechanism",
		"immersiveengineering:hammer",
		"#forge:nuggets/iron",
		"#forge:nuggets/iron",
		"ue_addons:basic_mechanism_part"
	]).damageIngredient("immersiveengineering:hammer", 1)

	// 铜质
	kubejs.shapeless("ue_addons:copper_mechanism", [
		"ue_addons:incomplete_copper_mechanism",
		"immersiveengineering:hammer",
		"#forge:nuggets/copper",
		"create:fluid_pipe",
		"thermal:cured_rubber",
		"ue_addons:mechanical_mechanism_part",
		"minecraft:water_bucket"
	]).damageIngredient("immersiveengineering:hammer", 1)

	// 安山
	kubejs.shapeless("ue_addons:andesite_mechanism", [
		"2x #forge:ingots/andesite_alloy",
		"immersiveengineering:hammer",
		"create:cogwheel",
		"create:cogwheel",
		"ue_addons:mechanical_mechanism_part"
	]).damageIngredient("immersiveengineering:hammer", 1)

	kubejs.shapeless("tconstruct:blank_red_sand_cast", [
		"ue_addons:mechanism_red_sand_cast"
	])

	kubejs.shapeless("tconstruct:blank_sand_cast", [
		"ue_addons:mechanism_sand_cast"
	])

	kubejs.shapeless("4x ue_addons:basic_mechanism_part", [
		"minecraft:flint",
		"minecraft:clay_ball"
	])
	kubejs.shapeless("4x ue_addons:mechanical_mechanism_part", [
		"create:cogwheel",
		"#forge:ingots/andesite_alloy"
	])
	kubejs.shapeless("4x ue_addons:engineering_mechanism_part", [
		"#forge:plates/copper",
		"immersiveengineering:component_iron"
	])
	kubejs.shapeless("4x ue_addons:flux_mechanism_part", [
		"thermal:rf_coil",
		"#forge:plates/invar"
	])
	kubejs.shapeless("4x ue_addons:mekanism_mechanism_part", [
		"#forge:ingots/steel",
		"mekanism:basic_control_circuit"
	])
	kubejs.shapeless("4x ue_addons:quantum_mechanism_part", [
		"ae2:quantum_entangled_singularity",
		"mekanism:pellet_polonium"
	])
})