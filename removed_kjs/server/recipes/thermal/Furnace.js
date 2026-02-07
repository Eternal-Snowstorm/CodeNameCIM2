ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

    thermal.furnace("minecraft:command_block","minecraft:stone")
})