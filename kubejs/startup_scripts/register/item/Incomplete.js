StartupEvents.registry("item", (event) => {

    //mek未完成电路板
	event.create(`${global.namespace}:incomplete_advanced_control_circuit`)
		.texture(`${global.namespace}:item/advanced_control_circuit`)

	event.create(`${global.namespace}:incomplete_elite_control_circuit`)
		.texture(`${global.namespace}:item/elite_control_circuit`)

	event.create(`${global.namespace}:incomplete_ultimate_control_circuit`)
		.texture(`${global.namespace}:item/ultimate_control_circuit`)
})