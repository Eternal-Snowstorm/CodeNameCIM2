ServerEvents.recipes((event) => {
	let { minecraft } = event.recipes

	let machineBlockGroup = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"computing",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"potion",
		"bronze",
		"pigiron"
	]
	machineBlockGroup.forEach((type) => {
		minecraft.stonecutting(`cmi:${type}_machine`, `cmi:${type}_mechanism`)
	})
	minecraft.stonecutting("cmi:precision_machine", "create:precision_mechanism")
	minecraft.stonecutting("cmi:redstone_machine", "vintageimprovements:redstone_module")
})