EntityEvents.spawned("minecraft:lightning_bolt", (event) => {
	let lightning = event.entity
	let { level } = event

	addLightningCraft("minecraft:diamond", "minecraft:iron_ingot")

	/**
	 * 函数封装, 由于这只是一个很简单的小合成用于彩蛋, 因此并没有写到最后, 还有一点bug, 例如输出数量和输入数量不对等
	 * 丢了多个在地上但是只返回1个
	 * @param {Item} output 输出
	 * @param {Item} input 输入
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

			entity.kill()

			let itemEntity = level.createEntity("minecraft:item")
			itemEntity.item = output
			itemEntity.x = posX
			itemEntity.y = posY + 1
			itemEntity.z = posZ
			itemEntity.mergeNbt({ Invulnerable: 1 })
			itemEntity.spawn()
		})
	}
})