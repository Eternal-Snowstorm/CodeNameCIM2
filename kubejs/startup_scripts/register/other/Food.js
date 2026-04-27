StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${Cmi.MODID}:${name}`)
	}

	// stage0
	addItem("andesite_alloy_noodle_stage0")
		.texture(Cmi.loadResource(`item/food/andesite_alloy_noodle/stage0`))
	// stage1
	addItem("andesite_alloy_noodle_stage1")
		.texture(Cmi.loadResource(`item/food/andesite_alloy_noodle/stage1`))
	// stage2
	addItem("andesite_alloy_noodle_stage2")
		.texture(Cmi.loadResource(`item/food/andesite_alloy_noodle/stage2`))
	// Done
	addItem("andesite_alloy_noodle")
		.texture(Cmi.loadResource(`item/food/andesite_alloy_noodle/stage3`))
		.food((food) => {
			food.hunger(20)
				.saturation(1)
				.eaten((event) => {
					let { player, level } = event
					let key = `message.${Cmi.MODID}.food.andesite_alloy_noodle`

					if (event.hand !== "MAIN_HAND" && !level.isClientSide()) {
						player.displayClientMessage(Component.translatable(key).blue(), true)
					}
				})
		})
})