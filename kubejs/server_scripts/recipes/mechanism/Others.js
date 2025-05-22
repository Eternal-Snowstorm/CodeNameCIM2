ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	create.mechanical_crafting("cmi:the_accelerator_of_mechanism_power", [
		"A B",
		"DCD",
		"EEE"
	], {
		A: "#forge:gears/iron",
		B: "#forge:gears/gold",
		C: "#forge:gears/copper",
		D: "cmi:andesite_mechanism",
		E: "#forge:stone"
	})

	create.filling("4x cmi:magical_mechanism_part", [
		Fluid.of("create_enchantment_industry:hyper_experience", 10),
		"cmi:basic_mechanism_part"
	])

	create.haunting("cmi:magical_mechanism_part", [
		"cmi:basic_mechanism_part"
	])

	vintageimprovements.laser_cutting("cmi:programmed_flash_drive", [
		"cmi:empty_flash_drive"
	]).energy(10000)
})