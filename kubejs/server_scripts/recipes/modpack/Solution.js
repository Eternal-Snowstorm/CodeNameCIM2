/*
 * TODO: 该脚本加载比Tags加载的快
 * 导致每次进入游戏load会导致流体无法get
 * 目前解决方案是进游戏时自动reload(服务端reload!)
 * 但是可能会导致小部分呢奇奇怪怪的问题(不能确保是什么)
 */
ServerEvents.recipes((event) => {
	let { create, tconstruct } = event.recipes

	let solutionGroup = [
		"fecl2",
		"feso4",
		"cucl2",
		"cuso4",
		"zncl2",
		"znso4",
		"alcl3",
		"al2so43",
		"pbcl2",
		"pbso4",
		"crcl3",
		"cr2so43",
		"sncl2",
		"snso4",
		"vocl2",
		"voso4",
		"uo2cl2",
		"uo2so4",
		"nicl2",
		"niso4",
		"cocl2",
		"coso4",
		"oscl3",
		"os2so43",
		"na2so4",
		"nacl",
		"caso4",
		"cacl2",
		"k2so4",
		"kcl"
	]
	solutionGroup.forEach((name) => {
		create.mixing(Fluid.of(`cmi:${name}_solution`, 250), [
			`${global.namespace}:${name}`,
			Fluid.of("minecraft:water", 250)
		])

		tconstruct.casting_table(`${global.namespace}:${name}`)
			.cast("#tconstruct:casts/multi_use/gem")
			.cast_consumed(false)
			.fluid(Fluid.of(`cmi:${name}_solution`, 250))
			.cooling_time(20)

		tconstruct.casting_table(`${global.namespace}:${name}`)
			.cast("#tconstruct:casts/single_use/gem")
			.cast_consumed(true)
			.fluid(Fluid.of(`cmi:${name}_solution`, 250))
			.cooling_time(20)
	})

	let metalActiveOrder = [
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
		"osmium",
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
					"outputs": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${solution}`
							},
							"count": 1
						}
					],
					"input_fluids": [
						{
							"tag": `forge:solutions/${solution}/chloride`,
							"amount": 250
						}
					],
					"result_fluids": [
						{
							"fluid": IngredUtils.getFirstFluidId(`forge:solutions/${metal}/chloride`),
							"amount": 250
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
					"outputs": [
						{
							"base_ingredient": {
								"tag": `forge:dusts/${solution}`
							},
							"count": 1
						}
					],
					"input_fluids": [
						{
							"tag": `forge:solutions/${solution}/sulfate`,
							"amount": 250
						}
					],
					"result_fluids": [
						{
							"fluid": IngredUtils.getFirstFluidId(`forge:solutions/${metal}/sulfate`),
							"amount": 250
						}
					],
					"time": 300
				})
			})
	})
})