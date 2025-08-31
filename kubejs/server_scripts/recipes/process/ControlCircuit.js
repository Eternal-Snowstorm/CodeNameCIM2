ServerEvents.recipes((event) => {
	let { create ,vintageimprovements} = event.recipes

	// 高级
	create.sequenced_assembly("mekanism:advanced_control_circuit", [
		"mekanism:alloy_infused"
	], [
		create.deploying("cmi:incomplete_advanced_control_circuit", [
			"cmi:incomplete_advanced_control_circuit",
			"#forge:plates/platinum"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_advanced_control_circuit",[
			"cmi:incomplete_advanced_control_circuit"
		]).energy(10),
		create.pressing("cmi:incomplete_advanced_control_circuit", [
			"cmi:incomplete_advanced_control_circuit"
		])
	]).loops(1).transitionalItem("cmi:incomplete_advanced_control_circuit")

	// 精英
	create.sequenced_assembly("mekanism:elite_control_circuit", [
		"mekanism:alloy_reinforced"
	], [
		create.deploying("cmi:incomplete_elite_control_circuit", [
			"cmi:incomplete_elite_control_circuit",
			"#forge:plates/ostrum"
		]),
		create.pressing("cmi:incomplete_elite_control_circuit", [
			"cmi:incomplete_elite_control_circuit"
		])
	]).loops(1).transitionalItem("cmi:incomplete_elite_control_circuit")

	// 终极
	create.sequenced_assembly("mekanism:ultimate_control_circuit", [
		"mekanism:alloy_atomic"
	], [
		create.deploying("cmi:incomplete_ultimate_control_circuit", [
			"cmi:incomplete_ultimate_control_circuit",
			"mekanism:elite_control_circuit"
		]),
		create.deploying("cmi:incomplete_ultimate_control_circuit", [
			"cmi:incomplete_ultimate_control_circuit",
			"#forge:plates/calorite"
		]),
		create.pressing("cmi:incomplete_ultimate_control_circuit", [
			"cmi:incomplete_ultimate_control_circuit"
		])
	]).loops(1).transitionalItem("cmi:incomplete_ultimate_control_circuit")
})