ServerEvents.recipes((event) => {
	let { create } = event.recipes
	create.mechanical_crafting("ue_addons:the_accelerator_of_mechanism_power", [
		"A B",
		"DCD",
		"EEE"
	], {
		A: "#forge:gears/iron",
		B: "#forge:gears/gold",
		C: "#forge:gears/copper",
		D: "ue_addons:andesite_mechanism",
		E: "#forge:stone"
	})
	create.haunting("ue_addons:magical_mechanism_part", [
		"ue_addons:basic_mechanism_part"
	])
})