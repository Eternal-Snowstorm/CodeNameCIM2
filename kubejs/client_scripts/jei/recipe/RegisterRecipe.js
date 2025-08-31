JEIAddedEvents.registerRecipes((event) => {

	let acceleratorType = addRecipeTypeId("cmi:accelerator")

	let addRecipesToJEI = {
		accelerator: function (output, input) {
			return acceleratorType.add({
				input: input,
				output: output
			})
		}
	}

	addRecipesToJEI.accelerator([
		Item.of("minecraft:bucket"),
		Item.of("minecraft:apple")
	], "minecraft:iron_ingot")

	function addRecipeTypeId(name) {
		let registerType = ResourceLocation.parse(name)
		return event.custom(registerType)
	}
})