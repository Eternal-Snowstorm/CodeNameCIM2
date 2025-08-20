ServerEvents.recipes((event) => {
	let { create, tconstruct } = event.recipes

	let solutionGroup = [
		"iron",
		"copper",
		"zinc",
		"aluminum",
		"gold",
		"silver",
		"lead",
		"chromium",
		"tin",
		"vanadium",
		"uranium",
		"nickel",
		"cobalt",
		"osmium",
		"platinum",
		"magnesium",
		"sodium",
		"calcium",
		"potassium"
	]
	solutionGroup.forEach((metal) => {
		create.mixing(Fluid.of(`cmi:${metal}_chloride_solution`, 500), [
			`${global.namespace}:${metal}_chloride`,
			Fluid.of("minecraft:water", 500)
		])

		create.mixing(Fluid.of(`cmi:${metal}_sulfate_solution`, 500), [
			`${global.namespace}:${metal}_sulfate`,
			Fluid.of("minecraft:water", 500)
		])


		tconstruct.casting_table(`${global.namespace}:${metal}_chloride`)
			.cast("#tconstruct:casts/multi_use/gem")
			.cast_consumed(false)
			.fluid(Fluid.of(`cmi:${metal}_chloride_solution`, 500))
			.cooling_time(20)

		tconstruct.casting_table(`${global.namespace}:${metal}_chloride`)
			.cast("#tconstruct:casts/single_use/gem")
			.cast_consumed(true)
			.fluid(Fluid.of(`cmi:${metal}_chloride_solution`, 500))
			.cooling_time(20)

		tconstruct.casting_table(`${global.namespace}:${metal}_sulfate`)
			.cast("#tconstruct:casts/multi_use/gem")
			.cast_consumed(false)
			.fluid(Fluid.of(`cmi:${metal}_sulfate_solution`, 500))
			.cooling_time(20)

		tconstruct.casting_table(`${global.namespace}:${metal}_sulfate`)
			.cast("#tconstruct:casts/single_use/gem")
			.cast_consumed(true)
			.fluid(Fluid.of(`cmi:${metal}_sulfate_solution`, 500))
			.cooling_time(20)
	})

	let metalActiveOrder = [
		"potassium",
		"calcium",
		"sodium",
		"magnesium",
		"uranium",
		"aluminum",
		"vanadium",
		"zinc",
		"chromium",
		"iron",
		"cobalt",
		"nickel",
		"tin",
		"lead",
		"copper",
		"silver",
		"platinum",
		"osmium",
		"gold"
	]
	metalActiveOrder.forEach((metal) => {
		metalActiveOrder.slice(metalActiveOrder.indexOf(metal) + 1)
			.forEach((solution) => {
				event.custom({
					"type": "immersiveindustry:chemical",
					"inputs": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${metal}`
							},
							"count": 1
						}
					],
					"results": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${solution}`
							},
							"count": 1
						}
					],
					"input_fluids": [
						{
							"fluid": `cmi:${solution}_chloride_solution`,
							"amount": 1000
						}
					],
					"result_fluids": [
						{
							"fluid": `cmi:${metal}_chlorite_solution`,
							"amount": 1000
						}
					],
					"time": 300
				})

				event.custom({
					"type": "immersiveindustry:chemical",
					"inputs": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${metal}`
							},
							"count": 1
						}
					],
					"results": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${solution}`
							},
							"count": 1
						}
					],
					"input_fluids": [
						{
							"fluid": `cmi:${solution}_sulfate_solution`,
							"amount": 1000
						}
					],
					"result_fluids": [
						{
							"fluid": `cmi:${metal}_sulfate_solution`,
							"amount": 1000
						}
					],
					"time": 300
				})
			})
	})
})