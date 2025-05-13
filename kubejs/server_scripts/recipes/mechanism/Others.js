ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

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

	create.filling("4x ue_addons:magical_mechanism_part", [
		Fluid.of("create_enchantment_industry:hyper_experience", 10),
		"ue_addons:basic_mechanism_part"
	])

	create.haunting("ue_addons:magical_mechanism_part", [
		"ue_addons:basic_mechanism_part"
	])

	vintageimprovements.laser_cutting("ue_addons:programmed_flash_drive", [
		"ue_addons:empty_flash_drive"
	]).energy(10000)
})