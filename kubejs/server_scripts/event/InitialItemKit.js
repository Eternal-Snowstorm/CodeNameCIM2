ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const KIT = "cmi:initial_item_kit"

	let itemList = [
		"create:wrench",
		"create:goggles",
		"create:super_glue"
	]

	if (player.mainHandItem === KIT && player.offHandItem !== KIT && player.crouching) {
		let key = `message.${global.namespace}.initial_item_kit`
		player.tell(Component.translatable(key))
		itemList.forEach((items) => {
			player.give(items)
		})
		item.shrink(1)
	}
})