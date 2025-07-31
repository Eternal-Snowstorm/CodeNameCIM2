MMEvents.createProcesses((event) => {
	event.create("cmi:cracker/gasoline")
		.structureId("cmi:cracker_structure")
		.ticks(600)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "cmi:steam",
				amount: global.BUCKET_CAPACITY
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "thermal:heavy_oil",
				amount: global.BUCKET_CAPACITY
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:energy",
				amount: 50000
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "createdieselgenerators:gasoline",
				amount: global.BUCKET_CAPACITY * 2
			}
		})
})