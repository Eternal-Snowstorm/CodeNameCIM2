ServerEvents.recipes((event) => {
	let { minecraft } = event.getRecipes()


	global.mechanismGroup.forEach((type) => {
		minecraft.stonecutting(`cmi:${type}_machine`, `cmi:${type}_mechanism`)
	})
	minecraft.stonecutting("cmi:precision_machine", "create:precision_mechanism")
	minecraft.stonecutting("cmi:redstone_machine", "vintageimprovements:redstone_module")
})