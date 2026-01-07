ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.compacting("minecraft:ice", [
		"64x minecraft:snow_block"
	])
})