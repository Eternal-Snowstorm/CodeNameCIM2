MMEvents.createProcesses((event) => {
	event.create("cmi:particle_collision_machine/overcharged_alloy_ingot")
		.structureId("cmi:particle_collision_machine_structure")
		.ticks(300)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: "forge:ingots/shadow_steel",
				count: 1
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: "forge:ingots/refined_radiance",
				count: 1
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:energy",
				amount: 100000
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:item",
				item: "cmi:overcharged_alloy_ingot",
				count: 2
			}
		})

	event.create("cmi:particle_collision_machine/singularity")
		.structureId("cmi:particle_collision_machine_structure")
		.ticks(300)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				item: "ae2:matter_ball",
				count: 1
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				item: "ae2:matter_ball",
				count: 1
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:energy",
				amount: 100000
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:item",
				item: "ae2:singularity",
				count: 1
			}
		})
})