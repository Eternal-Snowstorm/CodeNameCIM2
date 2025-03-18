ServerEvents.recipes((event) => {
	let { create } = event.recipes;
	create.mechanical_crafting("ue_addons:the_accelerator_of_mechanism_power", [
		"A B",
		"DCD",
		"EEE"
	], {
		A: "thermal:iron_gear",
		B: "thermal:gold_gear",
		C: "thermal:copper_gear",
		D: "ue_addons:andesite_mechanism",
		E: "minecraft:stone"
	})
	create.haunting("ue_addons:magical_mechanism_part", [
		"ue_addons:basic_mechanism_part"
	])
})