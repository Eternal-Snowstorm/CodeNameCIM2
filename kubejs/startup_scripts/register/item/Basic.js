StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:empty_exe`)
	event.create(`${global.namespace}:single_crystal_silicon`)
	event.create(`${global.namespace}:computer_component`)

	event.create(`${global.namespace}:blockstone_source_alpha`)
	event.create(`${global.namespace}:blockstone_source_beta`)
	event.create(`${global.namespace}:blockstone_source_gamma`)
	event.create(`${global.namespace}:crystal_ruby`)
	event.create(`${global.namespace}:source_sapphire`)
	event.create(`${global.namespace}:bombed_source_emeraid`)

	event.create(`${global.namespace}:blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

	event.create(`${global.namespace}:dense_sturdy_sheet`)
		.texture(`${global.namespace}:item/material/dense_sturdy_sheet`)
		.tag("forge:plates")
		.tag("forge:plates/refined_obsidian")
})