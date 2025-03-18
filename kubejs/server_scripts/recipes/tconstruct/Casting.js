// TODO

ServerEvents.recipes((event) => {

	let castingMechanicalMaterials = [
		["tconstruct:molten_iron","ue_addons:incomplete_iron_mechanism"],
		["tconstruct:molten_gold","ue_addons:incomplete_gold_mechanism"],
		["tconstruct:molten_copper",ue_addons:incomplete_copper_mechanism"]
	]
	castingMechanicalMaterials.forEach((io) => {
		event.custom({

			"type": "tconstruct:casting_table",
			"cast": {

				"tag": "tconstruct:casts/multi_use/mechanism"

			},


			"cooling_time": 50,

			"fluid": {

				"amount": 180,

				"fluid": io[1]
			},

			"result": io[2]
		})


		event.custom({

			"type": "tconstruct:casting_table",
			"cast": {

				"tag": "tconstruct:casts/single_use/mechanism"

			},


			"cast_consumed": true,
			"cooling_time": 50,

			"fluid": {

				"amount": 180,

				"fluid": io[1]
			},

			"result": io[2]
		})


	})
	
event.custom({

		"type": "tconstruct:casting_table",

		"cast": {

			"tag": "create:mechanisms"

		},

		"cast_consumed": true,

		"cooling_time": 57,

		"fluid": {

			"amount": 90,

			"fluid": "tconstruct:molten_gold"

		},

		"result": "ue_addons:mechanism_cast",

		"switch_slots": true

	})

})