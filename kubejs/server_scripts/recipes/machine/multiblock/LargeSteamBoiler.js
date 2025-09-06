MMEvents.createProcesses((event) => {
	event.create("cmi:large_steam_boiler/steam")
		.structureId("cmi:large_steam_boiler_structure")
		.ticks(200)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "minecraft:water",
				amount: global.BUCKET_CAPACITY * 0.5
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: "cmi:large_boiler_fuel",
				count: 1
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "mekanism:steam",
				amount: global.BUCKET_CAPACITY * 1
			}
		})
})