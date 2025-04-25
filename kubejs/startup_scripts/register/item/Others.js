StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:empty_exe`)
	event.create(`${global.namespace}:single_crystal_silicon`)
	event.create(`${global.namespace}:computer_component`)

	event.create(`${global.namespace}:blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")
})