PlayerEvents.loggedIn((event) => {
	let { player } = event
	const UNBREAKABLE_TAG = "cmi:unbreakable"
	const UNBREAKABLE_NBT_NAME = "Unbreakable"

	for (let i = 0; i < player.inventory.getContainerSize(); i++) {
		let item = player.inventory.getStackInSlot(i)

		if (item.hasTag(UNBREAKABLE_TAG)) {
			if (!item.nbt || !item.nbt.getBoolean(UNBREAKABLE_NBT_NAME)) {
				let nbt = item.nbt || {}
				nbt.Unbreakable = true
				item.nbt = nbt
			}
		}
	}
})