ServerEvents.recipes((event) => {
	let { create, createaddition, thermal } = event.recipes

	create.compacting([
		"cmi:blockstone_source_alpha",
		"cmi:blockstone_source_beta",
		"cmi:blockstone_source_gamma"
	], [
		"minecraft:blackstone"
	]).superheated()

	create.mixing([
		"cmi:enchanted_mechanism",
		"cmi:amethested_ruby"
	], [
		"cmi:blockstone_source_alpha",
		"cmi:enchanted_mechanism"
	]).superheated()

	create.sequenced_assembly("thermal:ruby", [
		"cmi:crystal_ruby",
	], [
		create.pressing("cmi:crystal_ruby", "cmi:crystal_ruby"),
		create.deploying("cmi:crystal_ruby", ["cmi:crystal_ruby", "minecraft:redstone"]),
	]).transitionalItem("cmi:crystal_ruby").loops(1)

	create.deploying("cmi:source_sapphire", [
		"cmi:blockstone_source_beta",
		"cmi:cobalt_mechanism"
	]).keepHeldItem()

	create.mixing(Fluid.of("cmi:molten_source_sapphire", 1000), [
		"cmi:source_sapphire"
	])
	thermal.chiller("thermal:sapphire", [
		Fluid.of("cmi:molten_source_sapphire", 1000)
	])
	createaddition.charging("cmi:bombed_source_emeraid", [
		"cmi:blockstone_source_gamma"
	]).energy(4000).maxChargeRate(1000)

	thermal.crucible(Fluid.of("cmi:eletriced_source_emeraid", 1000), [
		"cmi:bombed_source_emeraid"
	])
	thermal.crystallizer("minecraft:emerald", [
		"#forge:glass",
		Fluid.of("cmi:eletriced_source_emeraid", 1000)
	])
	thermal.crystallizer("ae2:certus_quartz_crystal", [
		"#forge:dusts/certus_quartz",
		Fluid.of("cmi:crystal_catalyt", 250)
	])
})