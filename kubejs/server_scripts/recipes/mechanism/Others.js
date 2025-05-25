ServerEvents.recipes((event) => {
	let { create, vintageimprovements, kubejs } = event.recipes

	kubejs.shaped("cmi:the_accelerator_of_mechanism_power", [
		"ABC",
		"DEF",
		"GHI"
	], {
		A: "cmi:wooden_mechanism",
		B: "cmi:stone_mechanism",
		C: "cmi:iron_mechanism",
		D: "cmi:andesite_mechanism",
		F: "cmi:copper_mechanism",
		G: "cmi:photosensitive_mechanism",
		H: "cmi:gold_mechanism",
		I: "cmi:nature_mechanism",
		E: "cmi:stone_plate"
	})

	kubejs.shapeless("cmi:stone_plate", [
		"minecraft:chiseled_stone_bricks",
		"create:polished_cut_deepslate",
		"immersiveengineering:hammer"
	])

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