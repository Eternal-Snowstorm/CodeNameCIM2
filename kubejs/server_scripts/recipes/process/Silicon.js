ServerEvents.recipes((event) => {
	let { create, vintageimprovements, thermal } = event.getRecipes()

	// 石英粉
	create.crushing("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])
	create.milling("thermal:quartz_dust", [
		"#forge:gems/quartz"
	])

	// 纯净沙
	create.emptying([
		Fluid.of("cmi:pure_sand", 100),
		"thermal:niter_dust"
	], [
		"#minecraft:sand"
	])

	// 纯净石英粉
	vintageimprovements.pressurizing([
		"cmi:pure_quartz_dust",
		"thermal:slag"
	], [
		"#forge:dusts/quartz",
		"cmi:furnaced_lime"
	]).heated()

	vintageimprovements.pressurizing([
		"cmi:pure_quartz_dust",
		"thermal:slag"
	], [
		Fluid.of("cmi:pure_sand", 100),
		"cmi:furnaced_lime"
	]).heated()

	// 玻璃
	create.mixing(
		Fluid.of("tconstruct:molten_glass", 250), [
		Fluid.of("cmi:pure_sand", 200),
		"#forge:dusts/lime"
	]).superheated()

	create.mixing(
		Fluid.of("tconstruct:molten_glass", 250), [
		Fluid.of("cmi:pure_sand", 200),
		"cmi:plant_ash"
	]).superheated()

	// 硅混合物
	create.mixing("cmi:silicon_mixure", [
		"#forge:dusts/coal_coke",
		"#forge:dusts/pure_quartz"
	]).superheated()

	// 硅
	create.mixing([
		"ae2:silicon",
		Item.of("ae2:silicon", 2).withChance(0.1),
		Item.of("create:scorchia").withChance(0.5)
	], [
		"cmi:silicon_mixure",
		Fluid.of("tconstruct:seared_stone", 250)
	]).superheated()

	create.mixing([
		"ae2:silicon",
		Item.of("ae2:silicon", 2).withChance(0.1),
		Item.of("create:scoria").withChance(0.5)
	], [
		"cmi:silicon_mixure",
		Fluid.of("tconstruct:scorched_stone", 250)
	]).superheated()

	// 硅板
	vintageimprovements.curving("ae2:printed_silicon", [
		"#forge:silicon"
	]).itemAsHead("cmi:plate_mold")

	// 轻硅醚
	event.custom({
		"type": "immersiveengineering:mixer",
		"energy": 1600,
		"fluid": {
			"amount": 50,
			"tag": "cmi:light_olefin"
		},
		"inputs": [
			{
				"tag": "forge:silicon"
			}
		],
		"result": {
			"amount": 200,
			"fluid": "cmi:light_silicone_ether"
		}
	})

	// 聚硅醚
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
		],
		"input_fluids": [
			{
				"tag": "cmi:light_silicone_ether",
				"amount": 2000
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:polysilicone_ether",
				"amount": 2000
			}
		],
		"outputs": [
		],
		"time": 200
	})
	// 液态硅橡胶
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
		],
		"input_fluids": [
			{
				"tag": "cmi:polysilicone_ether",
				"amount": 2000
			},
			{
				"tag": "cmi:vinegar_acid",
				"amount": 100
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:silicon_rubber",
				"amount": 4000
			}
		],
		"outputs": [
		],
		"time": 200
	})

	// 硅橡胶
	thermal.chiller("cmi:silicon_rubber", [
		Fluid.of("cmi:silicon_rubber", 200)
	])
	thermal.chiller("cmi:silicon_rubber_plate", [
		Fluid.of("cmi:silicon_rubber", 200),
		"#tconstruct:casts/multi_use/plate"
	])

})