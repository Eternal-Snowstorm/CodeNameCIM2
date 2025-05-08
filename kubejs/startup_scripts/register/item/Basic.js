StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:empty_exe`)
	event.create(`${global.namespace}:single_crystal_silicon`)
	event.create(`${global.namespace}:computer_component`)

	event.create(`${global.namespace}:blockstone_source_alpha`)
		.texture(`${global.namespace}:item/material/blockstone_source_alpha`)
	event.create(`${global.namespace}:blockstone_source_beta`)
		.texture(`${global.namespace}:item/material/blockstone_source_beta`)
	event.create(`${global.namespace}:blockstone_source_gamma`)
		.texture(`${global.namespace}:item/material/blockstone_source_gamma`)

	event.create(`${global.namespace}:crystal_ruby`)
		.texture(`${global.namespace}:item/material/crystal_ruby`)
	event.create(`${global.namespace}:source_sapphire`)
		.texture(`${global.namespace}:item/material/source_sapphire`)
	event.create(`${global.namespace}:bombed_source_emeraid`)
		.texture(`${global.namespace}:item/material/bombed_source_emeraid`)

	event.create(`${global.namespace}:blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

	event.create(`${global.namespace}:dense_sturdy_sheet`)
		.texture(`${global.namespace}:item/material/dense_sturdy_sheet`)
		.tag("forge:plates")
		.tag("forge:plates/dense_obsidian")

	event.create(`${global.namespace}:plasma_ingot`)
		.texture(`${global.namespace}:item/material/ingot/plasma_ingot`)
		.rarity("epic")
		.tag("forge:ingots")
		.tag("forge:ingots/plasma")

	event.create(`${global.namespace}:charged_amethyst`)
		.texture(`${global.namespace}:item/material/charged_amethyst`)
		.rarity("epic")
		.tag("forge:gems")
		.tag("forge:gems/charged_amethyst")

	// 铂系列
	event.create(`${global.namespace}:raw_aluminum_particles`)
		.texture(`${global.namespace}:item/material/aluminum/raw_particles`)

	event.create(`${global.namespace}:aluminum_crystal_nucleus`)
		.texture(`${global.namespace}:item/material/aluminum/crystal_nucleus`)

	event.create(`${global.namespace}:aluminum_shard`)
		.texture(`${global.namespace}:item/material/aluminum/shard`)
})