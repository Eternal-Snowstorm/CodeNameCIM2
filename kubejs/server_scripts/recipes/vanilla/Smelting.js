ServerEvents.recipes((event) => {
	SmeltingRecipe.all(event, "cmi:combustion_medium_block", [
		[
			"#forge:storage_blocks/coal",
			"#forge:storage_blocks/charcoal"
		]
	])
})