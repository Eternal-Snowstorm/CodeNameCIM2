ServerEvents.recipes((event) => {
	let { create, createaddition, thermal } = event.recipes

	create.compacting([
		"ue_addons:blockstone_source_alpha",
		"ue_addons:blockstone_source_beta",
		"ue_addons:blockstone_source_gamma"
	], "minecraft:blackstone")
		.superheated()

	create.mixing([
		"ue_addons:enchanted_mechanism",
		"ue_addons:amethested_ruby"
	], [
		"ue_addons:blockstone_source_alpha",
		"ue_addons:enchanted_mechanism"
	]).superheated()

	create.sequenced_assembly("thermal:ruby", [
		"ue_addons:crystal_ruby",
	], [
		create.pressing("ue_addons:crystal_ruby", "ue_addons:crystal_ruby"),
		create.deploying("ue_addons:crystal_ruby", ["ue_addons:crystal_ruby", "minecraft:redstone"]),
	]).transitionalItem("ue_addons:crystal_ruby").loops(1)

	create.deploying("ue_addons:source_sapphire", [
		"ue_addons:blockstone_source_beta",
		"ue_addons:cobalt_mechanism"
	]).keepHeldItem()

	create.mixing(Fluid.of("ue_addons:molten_source_sapphire", 1000), [
		"ue_addons:source_sapphire"
	])
	thermal.chiller("thermal:sapphire", [
		Fluid.of("ue_addons:molten_source_sapphire", 1000)
	])
	createaddition.charging("ue_addons:bombed_source_emeraid", [
		"ue_addons:blockstone_source_gamma"
	]).energy(4000).maxChargeRate(1000)

	thermal.crucible(Fluid.of("ue_addons:eletriced_source_emeraid", 1000), [
		"ue_addons:bombed_source_emeraid"
	])
	thermal.crystallizer("minecraft:emerald", [
		"#forge:glass",
		Fluid.of("ue_addons:eletriced_source_emeraid", 1000)
	])
})