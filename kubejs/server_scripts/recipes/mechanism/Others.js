ServerEvents.recipes((event) => {
	let { create } = event.recipes;
	create.mechanical_crafting(
		"ue_addons:the_accelerator_of_mechanism_power", [
			"1 2",
			"M3M",
			"SSS"
		], {
			1:"thermal:iron_gear",
			2:"thermal:gold_gear",
			3:"thermal:copper_gear",
			M:"ue_addons:andesite_mechanism",
			S:"minecraft:stone"
	})
	create.haunting([
		"ue_addons:magical_mechanism_part"],[
		"ue_addons:basic_mechanism_part"
	])
})