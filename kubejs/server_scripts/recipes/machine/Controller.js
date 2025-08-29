ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 粒子碰装机
	kubejs.shaped("mm:particle_collision_machine", [
		"AEA",
		"BCD",
		"AAA"
	], {
		A: "mekanism:sps_casing",
		B: "#forge:ingots/shadow_steel",
		C: "cmi:ultimate_mekanism_mechanism",
		D: "#forge:ingots/refined_radiance",
		E: "cmi:computer_component"
	}).id("mm:particle_collision_machine")

	// 裂解机
	kubejs.shaped("mm:cracker", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "cmi:pressure_resistance_casing",
		B: "immersiveengineering:coil_lv",
		C: "immersiveengineering:fluid_pipe",
		D: "cmi:light_engineering_mechanism"
	}).id("mm:cracker")

	// 蒸汽矿石处理机
	kubejs.shaped("mm:steam_ore_processor", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "cmi:bronze_casing",
		B: "create:fluid_pipe",
		C: "cmi:bronze_mechanism",
		D: "#forge:glass"
	}).id("mm:steam_ore_processor")

	// 闪存盘写入器
	kubejs.shaped("cmi:flash_disk_writer", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: "cmi:stone_plate",
		B: "cmi:computer_component",
		C: "cmi:plasma_ingot",
		D: "cmi:antimatter_mechanism",
		E: "mekanism:ultimate_energy_cube"
	}).id("cmi:flash_disk_writer")

	// 已编程闪存盘
	kubejs.shaped("cmi:programmed_flash_drive", [
		"A",
		"B",
		"C"
	], {
		A: "#mekanismadditions:plastic_blocks",
		C: "#forge:ingots/plasma",
		B: "cmi:antimatter_mechanism",
	}).id("cmi:programmed_flash_drive")
})