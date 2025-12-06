ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const KIT = Item.of("cmi:initial_item_kit")

	let itemList = [
		"create:wrench",
		"create:goggles",
		"create:super_glue",
		"tiab:time_in_a_bottle",
		"create:stressometer"
	]
	if (player.mainHandItem === KIT && player.offHandItem !== KIT && player.isCrouching()) {
		let key = `message.${global.namespace}.initial_item_kit`
		player.tell(Component.translatable(key))

		itemList.forEach((items) => {
			player.give(Item.of(items))
		})
		item.shrink(1)
	}
})