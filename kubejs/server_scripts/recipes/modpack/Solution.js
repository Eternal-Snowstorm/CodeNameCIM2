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
		"aucl3",
		"au2so43",
		"agcl",
		"ag2so4",
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
		"ptcl4",
		"ptso42",
		"na2so4",
		"nacl",
		"caso4",
		"cacl2",
		"k2so4",
		"kcl"
	]
	solutionGroup.forEach((name) => {
		create.mixing(Fluid.of(`cmi:${name}_solution`, 500), [
			`${global.namespace}:${name}`,
			Fluid.of("minecraft:water", 500)
		])

		tconstruct.casting_table(`${global.namespace}:${name}`)
			.cast("#tconstruct:casts/multi_use/gem")
			.cast_consumed(false)
			.fluid(Fluid.of(`cmi:${name}_solution`, 500))
			.cooling_time(20)

		tconstruct.casting_table(`${global.namespace}:${name}`)
			.cast("#tconstruct:casts/single_use/gem")
			.cast_consumed(true)
			.fluid(Fluid.of(`cmi:${name}_solution`, 500))
			.cooling_time(20)
	})
	
	// let MetalActiveOrder = [
	// 	"potassium",
	// 	"calcium",
	// 	"sodium",
	// 	"magnesium",
	// 	"uranium",
	// 	"aluminum",
	// 	"vanadium",
	// 	"zinc",
	// 	"chromium",
	// 	"iron",
	// 	"cobalt",
	// 	"nickel",
	// 	"tin",
	// 	"lead",
	// 	"copper",
	// 	"silver",
	// 	"platinum",
	// 	"osmium",
	// 	"gold"
	// ]
	// MetalActiveOrder.forEach((metal) => {
	// 	MetalActiveOrder.slice(MetalActiveOrder.indexOf(metal) + 1).forEach((solution) => {
	// 		event.custom({
	// 			"type": "immersiveindustry:chemical",
	// 			"inputs": [
	// 				{
	// 					"base_ingredient": {
	// 						"tag": `forge:dusts/${metal}`
	// 					},
	// 					"count": 1
	// 				}
	// 			],
	// 			"results": [
	// 				{
	// 					"base_ingredient": {
	// 						"tag": `forge:dusts/${solution}`
	// 					},
	// 					"count": 1
	// 				}
	// 			],
	// 			"input_fluids": [
	// 				{
	// 					"tag": `forge:solutions/${solution}/chloride`,
	// 					"amount": 1000
	// 				}
	// 			],
	// 			"result_fluids": [
	// 				{
	// 					"tag": `forge:solutions/${metal}/chloride`,
	// 					"amount": 1000
	// 				}
	// 			],
	// 			"time": 300
	// 		})

	// 		event.custom({
	// 			"type": "immersiveindustry:chemical",
	// 			"inputs": [
	// 				{
	// 					"base_ingredient": {
	// 						"tag": `forge:dusts/${metal}`
	// 					},
	// 					"count": 1
	// 				}
	// 			],
	// 			"results": [
	// 				{
	// 					"base_ingredient": {
	// 						"tag": `forge:dusts/${solution}`
	// 					},
	// 					"count": 1
	// 				}
	// 			],
	// 			"input_fluids": [
	// 				{
	// 					"tag": `forge:solutions/${solution}/sulfate`,
	// 					"amount": 1000
	// 				}
	// 			],
	// 			"result_fluids": [
	// 				{
	// 					"tag": `forge:solutions/${metal}/sulfate`,
	// 					"amount": 1000
	// 				}
	// 			],
	// 			"time": 300
	// 		})
	// 	})
	// })
})