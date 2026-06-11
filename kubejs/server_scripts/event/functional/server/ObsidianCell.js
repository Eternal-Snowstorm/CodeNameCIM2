ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const CELL = Item.of("cmi:obsidian_cell")

	let itemList = [
		"ae2:item_cell_housing",
		"minecraft:obsidian",
		"ae2:cell_component_16k"
	]
	if (player.mainHandItem === CELL && player.offHandItem !== CELL) {
		let key = `message.${global.namespace}.initial_item_kit`

		itemList.forEach((items) => {
			player.give(Item.of(items))
		})
		item.shrink(1)
	}
})