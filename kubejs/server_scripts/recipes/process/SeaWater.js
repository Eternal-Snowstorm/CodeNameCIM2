ServerEvents.recipes((event) => {
	let { createdieselgenerators, create } = event.recipes

	// 蒸馏
	createdieselgenerators.distillation([
		Fluid.of("cmi:concentrated_sea_water", 500),
		Fluid.of("minecraft:water", 1500)
	], Fluid.of("cmi:sea_water", 2000))
		.heatRequirement("heated")

	// 碱性浓缩海水
	create.mixing([
		Fluid.of("cmi:alkaline_concentrated_sea_water", 1000),
		"cmi:magnesium_hydroxide"
	], [
		Fluid.of("cmi:concentrated_sea_water", 1000),
		"4x cmi:lime"
	])

	// 氯化钠+硫酸钠+氯化钙+硫酸钙
	create.mixing([
		Fluid.of("cmi:nacl_solution", 250),
		Fluid.of("cmi:na2so4_solution", 250),
		Fluid.of("cmi:cacl2_solution", 250),
		Fluid.of("cmi:caso4_solution", 250)
	], [
		Fluid.of("cmi:alkaline_concentrated_sea_water", 500),
		Fluid.of("vintageimprovements:sulfuric_acid", 500),
	]).heated()

	create.mixing([
		Fluid.of("cmi:nacl_solution", 250),
		Fluid.of("cmi:na2so4_solution", 250),
		Fluid.of("cmi:cacl2_solution", 250),
		Fluid.of("cmi:caso4_solution", 250)
	], [
		Fluid.of("cmi:alkaline_concentrated_sea_water", 500),
		Fluid.of("mekanism:hydrogen_chloride", 500),
	]).heated()

	// 酸性浓缩海水
	create.mixing(Fluid.of("cmi:acidic_concentrated_sea_water", 2000), [
		Fluid.of("cmi:concentrated_sea_water", 1000),
		Fluid.of("vintageimprovements:sulfuric_acid", 1000)
	])

	create.mixing(Fluid.of("cmi:acidic_concentrated_sea_water", 2000), [
		Fluid.of("cmi:concentrated_sea_water", 1000),
		Fluid.of("cmi:hydrochloric_acid", 1000)
	])

	// 液态溴+废液
	create.mixing([
		Fluid.of("cmi:bromine", 750),
		Fluid.of("cmi:turbid_waste_liquid", 250)
	], [
		Fluid.of("cmi:acidic_concentrated_sea_water", 500),
		Fluid.of("mekanism:chlorine", 500)
	]).heated()

	// 氯化镁溶液
	create.mixing(Fluid.of("cmi:mgcl2_solution", 1000), [
		Fluid.of("cmi:hydrochloric_acid", 500),
		"4x cmi:magnesium_hydroxide"
	])

	// 镁粉+氯气
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "forge:chem_salts/magnesium/chloride"
		},
		"result_fluid": {
			"fluid": "mekanism:chlorine",
			"amount": 50
		},
		"result": {
			"item": "cmi:magnesium_dust",
			"count": 1
		},
		"large_only": true,
		"time": 20
	})

	// 重水+氯化钠+硫酸钠
	createdieselgenerators.distillation([
		Fluid.of("mekanism:heavy_water", 10),
		Fluid.of("cmi:nacl_solution", 25),
		Fluid.of("cmi:na2so4_solution", 15)
	], Fluid.of("cmi:concentrated_sea_water", 1000))
		.heatRequirement("heated")

	// 钠+氯气
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "forge:chem_salts/sodium/chloride"
		},
		"result_fluid": {
			"fluid": "mekanism:chlorine",
			"amount": 50
		},
		"result": {
			"item": "cmi:sodium_dust",
			"count": 1
		},
		"large_only": true,
		"time": 20
	})

	// 氢氧化钠+氢气
	create.mixing([
		Fluid.of("cmi:sodium_hydroxide", 500),
		Fluid.of("mekanism:hydrogen", 500)
	], [
		Fluid.of("minecraft:water", 1000),
		"2x #forge:dusts/sodium"
	])
})