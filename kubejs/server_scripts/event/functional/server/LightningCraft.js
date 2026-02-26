EntityEvents.spawned("minecraft:lightning_bolt", (event) => {
	let lightning = event.entity
	let level = event.level

	addLightningCraft("cmi:bucket", "minecraft:bucket")
	addConditionalLightningCraft("torcherino:torcherino", "minecraft:torch", 1, 2)

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

	/**
	 * 函数封装
	 * @param {Internal.ItemStack_} output 输出
	 * @param {Internal.ItemStack_} input 输入
	 * @param {Number} arg1 
	 * @param {Number} arg2 
	 */
	function addConditionalLightningCraft(output, input, arg1, arg2) {
		if (Math.floor(lightning.x) !== ClientSeedHandler.getValue(arg1) ||
			Math.floor(lightning.z) !== ClientSeedHandler.getValue(arg2)
		) {
			return
		}

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

	// Citron
	let recipes = [
		["#cmi:torch", "torcherino:torcherino", 1, 2],
		["#cmi:torch", "torcherino:compressed_torcherino", 3, 4],
		["#cmi:torch", "torcherino:double_compressed_torcherino", 5, 6],
		["#cmi:lantern", "torcherino:lantern", 1, 2],
		["#cmi:lantern", "torcherino:compressed_lantern", 3, 4],
		["#cmi:lantern", "torcherino:double_compressed_lantern", 5, 6],
		["#cmi:pumpkin", "torcherino:lanterino", 1, 2],
		["#cmi:pumpkin", "torcherino:compressed_lanterino", 3, 4],
		["#cmi:pumpkin", "torcherino:double_compressed_lanterino", 5, 6]
	]
	recipes.forEach((value) => {
		if (Math.floor(lightning.x) === ClientSeedHandler.getValue(value[2]).toString() && Math.floor(lightning.z) === ClientSeedHandler.getValue(value[3]).toString()) {
			let targets = level.getEntitiesWithin(AABB.of(
				lightning.x - 3, lightning.y - 3, lightning.z - 3,
				lightning.x + 3, lightning.y + 3, lightning.z + 3
			)).filter((entity) => {
				return entity.type === "minecraft:item" && entity.item?.hasTag(value[0])
			})

			targets.forEach((entity) => {
				let { x, y, z } = entity

				let count = entity.item.count || 1

				entity.kill()

				for (let i = 0; i < count; i++) {
					let itemEntity = level.createEntity("minecraft:item")
					itemEntity.item = Item.of(value[1])
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
})