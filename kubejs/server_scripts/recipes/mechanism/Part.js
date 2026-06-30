ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements, tconstruct } = event.getRecipes()
	let Inc = {
		MEKA: "cmi:incomplete_mekanism_mechanism_part",
		ADA: "cmi:incomplete_space_mechanism_part",
		QUANT: "cmi:incomplete_quantum_mechanism_part"
	}
	// 基础
	kubejs.shapeless("4x cmi:basic_mechanism_part", [
		"#forge:plates/stone",
		"#forge:gems/dreamcore"
	])

	// 魔力
	kubejs.shapeless("cmi:magical_mechanism_part", [
		"#forge:dusts/lapis",
		"#forge:gems/amethyst",
		"#forge:gems/dreamcore"
	])

	// 机械
	kubejs.shapeless("4x cmi:mechanical_mechanism_part", [
		"#forge:gears/wooden",
		"#forge:plates/andesite_alloy",
		"#forge:gems/dreamcore"
	])

	// 工程
	kubejs.shapeless("4x cmi:engineering_mechanism_part", [
		"#forge:plates/constantan",
		"2x #forge:wires/redstone",
		"#immersiveengineering:circuits/logic",
		"#forge:gems/dreamcore"
	])

	// 通量
	kubejs.shapeless("4x cmi:flux_mechanism_part", [
		"#forge:plates/lead",
		"2x #forge:dusts/redstone",
		"#forge:gears/invar",
		"#forge:gems/dreamcore"
	])


})