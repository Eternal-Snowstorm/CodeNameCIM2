EntityEvents.spawned("minecraft:lightning_bolt", (event) => {
	let lightning = event.entity
	let level = event.level

	addLightningCraft("cmi:bucket", "minecraft:bucket")

	/**
	 * 函数封装
	 * @param {Internal.ItemStack_} output 输出
	 * @param {Internal.ItemStack_} input 输入
	 */
	function addLightningCraft(output, input) {
		let targets = level.getEntitiesWithin(AABB.of(
			lightning.x - 3, lightning.y - 3, lightning.z - 3,
			lightning.x + 3, lightning.y + 3, lightning.z + 3
		)).filter((entity) => {
			return entity.type === "minecraft:item" && entity.item?.id === input
		})

		targets.forEach((entity) => {
			let { x, y, z } = entity

			let count = entity.item.count || 1

			entity.kill()

			for (let i = 0; i < count; i++) {
				let itemEntity = level.createEntity("minecraft:item")
				itemEntity.item = Item.of(output)
				let random = Math.random() * 0.4 - 0.2

				itemEntity.x = x + (random)
				itemEntity.y = y + (random)
				itemEntity.z = z + (random)
				itemEntity.mergeNbt({ Invulnerable: 1 })
				itemEntity.spawn()
			}
		})
	}
})