ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.mixing(Fluid.of("immersiveengineering:redstone_acid", 250), [
		"#forge:dusts/redstone",
		Fluid.of("minecraft:water", 250)
	])

	// 聚烯烃
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": {
			"tag": "forge:plates/aluminum"
		},
		"energy": 120,
		"input0": {
			"amount": 8,
			"tag": "forge:ethene"
		},
		"result": {
			"amount": 8,
			"fluid": "thermal_extra:polyolefin"
		}
	})

	// 三硝基甲苯
	event.custom({
		"type": "immersiveindustry:chemical",
		"input_fluids": [
			{
				"tag": "cmi:nitric_acid",
				"amount": 144
			},
			{
				"tag": "cmi:benzene",
				"amount": 48
			},
			{
				"tag": "forge:ethene",
				"amount": 24
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:trinitrotoluene_solution",
				"amount": 48
			}
		],
		"time": 120
	})

	// 硝化甘油
	event.custom({
		"type": "immersiveindustry:chemical",
		"input_fluids": [
			{
				"tag": "cmi:nitric_acid",
				"amount": 48
			},
			{
				"tag": "cmi:glycerin",
				"amount": 16
			}
		],
		"result_fluids": [
			{
				"fluid": "cmi:fluid_nitroglycerine",
				"amount": 16
			}
		],
		"time": 60
	})

	// 硝化纤维
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
			{
				"base_ingredient": {
					"tag": "forge:fiber_hemp"
				},
				"count": 4
			}
		],
		"input_fluids": [
			{
				"tag": "cmi:nitric_acid",
				"amount": 200
			}
		],
		"outputs": [
			{
				"item": "cmi:nitrocellulose",
				"count": 1
			}
		],
		"time": 100
	})

	// 生产硝酸
	event.custom({
		"type": "immersiveindustry:rotary_kiln",
		"input": {
			"tag": "forge:dusts/niter",
			"count": 4
		},
		"result": {
			"item": "thermal:slag",
			"count": 1
		},
		"result_fluid": {
			"fluid": "cmi:nitric_acid",
			"amount": 200
		},
		"time": 200
	})
})