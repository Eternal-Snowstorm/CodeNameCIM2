ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 基础
	kubejs.shapeless("4x cmi:basic_mechanism_part", [
		"minecraft:flint",
		"minecraft:clay_ball"
	])

	// 机械
	kubejs.shapeless("4x cmi:mechanical_mechanism_part", [
		"create:cogwheel",
		"#forge:ingots/andesite_alloy"
	])

	// 工程
	kubejs.shapeless("4x cmi:engineering_mechanism_part", [
		"#forge:plates/copper",
		"immersiveengineering:component_iron"
	])

	// 通量
	kubejs.shapeless("4x cmi:flux_mechanism_part", [
		"thermal:rf_coil",
		"#forge:plates/invar"
	])

	// 通用
	kubejs.shapeless("4x cmi:mekanism_mechanism_part", [
		"#forge:ingots/steel",
		"mekanism:basic_control_circuit"
	])

	// 量子
	kubejs.shapeless("4x cmi:quantum_mechanism_part", [
		"ae2:quantum_entangled_singularity",
		"mekanism:pellet_polonium"
	])

	// 太空
	kubejs.shapeless("4x cmi:space_mechanism_part", [
		"#forge:nuggets/shadow_steel",
		"ad_astra:etrionic_capacitor"
	])
})