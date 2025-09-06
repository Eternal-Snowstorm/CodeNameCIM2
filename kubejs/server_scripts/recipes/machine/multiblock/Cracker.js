MMEvents.createProcesses((event) => {
	event.create("cmi:cracker/gasoline")
		.structureId("cmi:cracker_structure")
		.ticks(600)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "mekanism:steam",
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

	event.create("cmi:cracker/ethene")
		.structureId("cmi:cracker_structure")
		.ticks(600)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "immersiveengineering:acetaldehyde",
				amount: global.BUCKET_CAPACITY
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "cmi:naphtha",
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
				fluid: "mekanism:ethene",
				amount: global.BUCKET_CAPACITY * 5
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "cmi:benzene",
				amount: global.BUCKET_CAPACITY * 3
			}
		})

	event.create("cmi:cracker/glycerin")
		.structureId("cmi:cracker_structure")
		.ticks(600)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: IngredientUtils.getFirstFluidId("forge:plantoil"),
				amount: global.BUCKET_CAPACITY * 4
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "vintageimprovements:sulfuric_acid",
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
				fluid: "cmi:fatty_acid",
				amount: global.BUCKET_CAPACITY * 3
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: "cmi:glycerin",
				amount: global.BUCKET_CAPACITY * 1
			}
		})
})