MMEvents.createProcesses(event => {
	event.create("cmi:large_steam_boiler/steam")
		.structureId("cmi:large_steam_boiler_structure")
		.ticks(1200)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "minecraft:water",
				amount: global.BUCKET_CAPACITY * 2
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: "forge:coal_coke",
				count: 1
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "cmi:steam",
				amount: global.BUCKET_CAPACITY * 2
			}
		})
})