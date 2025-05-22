ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const KIT = "cmi:initial_item_kit"

	if (player.mainHandItem === KIT && player.offHandItem !== KIT && player.crouching) {
		let key = `message.${global.namespace}.initial_item_kit`
		player.tell(Component.translate(key))

		player.give("create:wrench")
		player.give("create:goggles")
		player.give("create:super_glue")

		item.shrink(1)
	}
})