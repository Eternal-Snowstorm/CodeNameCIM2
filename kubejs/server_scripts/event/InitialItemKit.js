ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const KIT = "cmi:initial_item_kit"

	const ITEM_LIST = [
		"create:wrench",
		"create:goggles",
		"create:super_glue"
	]

	if (player.mainHandItem === KIT && player.offHandItem !== KIT && player.crouching) {
		let key = `message.${global.namespace}.initial_item_kit`
		player.tell(Component.translate(key))
		ITEM_LIST.forEach((item) => {
			player.give(item)
		})
		item.shrink(1)
	}
})