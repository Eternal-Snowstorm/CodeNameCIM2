MMEvents.createProcesses((event) => {
	event.create("cmi:improved_rubber_extractor/latex")
		.structureId("cmi:improved_rubber_extractor_structure")
		.ticks(20 * 30)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:energy",
				amount: 10000
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "thermal:latex",
				amount: global.BUCKET_CAPACITY * 10
			}
		})
})