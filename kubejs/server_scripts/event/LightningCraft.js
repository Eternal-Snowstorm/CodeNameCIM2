EntityEvents.spawned("minecraft:lightning_bolt", (event) => {
	let lightning = event.entity
	let level = event.level

	addLightningCraft("ue_addons:bucket", "minecraft:bucket")

	/**
	 * 函数封装
	 * @param {Internal.Item_} output 输出
	 * @param {Internal.Item_} input 输入
	 */
	function addLightningCraft(output, input) {
		let targets = level.getEntitiesWithin(AABB.of(
			lightning.x - 3, lightning.y - 3, lightning.z - 3,
			lightning.x + 3, lightning.y + 3, lightning.z + 3
		)).filter((entity) => {
			return entity.type === "minecraft:item" && entity.item?.id === input
		})

		targets.forEach((entity) => {
			let posX = entity.x
			let posY = entity.y
			let posZ = entity.z

			let count = entity.item.count || 1

			entity.kill()

			for (let i = 0; i < count; i++) {
				let itemEntity = level.createEntity("minecraft:item")
				itemEntity.item = Item.of(output)

				itemEntity.x = posX + (Math.random() * 0.4 - 0.2)
				itemEntity.y = posY + (Math.random() * 0.4 - 0.2)
				itemEntity.z = posZ + (Math.random() * 0.4 - 0.2)
				itemEntity.mergeNbt({ Invulnerable: 1 })
				itemEntity.spawn()
			}
		})
	}
})