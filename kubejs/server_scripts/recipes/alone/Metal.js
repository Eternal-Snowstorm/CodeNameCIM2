ServerEvents.recipes((event) => {
	let { kubejs, create, thermal } = event.recipes

	let tags = {
		ingots: "#forge:ingots/metal",
		blocks: "#forge:storage_blocks/metal",
		nuggets: "#forge:nuggets/metal",
		plates: "#forge:plates/metal"
	}

	Object.keys(tags).forEach((key) => {
		let itemIds = Ingredient.of(tags[key]).getItemIds()

		if (!itemIds || itemIds.length === 0) {
			console.error(`No items found for tag: ${tags[key]}`)
			return 0
		}

		itemIds.forEach((itemId) => {
			if (key === "blocks") {
				// 块 => 9 锭
				let ingotId = itemId.replace("block", "ingot")
				if (Item.exists(ingotId)) {
					kubejs.shapeless(Item.of(ingotId, 9), itemId)
				} else {
					console.warn(`Skipping: No ingot found for block: ${itemId}`)
				}
			} else if (key === "ingots") {
				// 锭 => 9 粒
				let nuggetId = itemId.replace("ingot", "nugget")
				if (Item.exists(nuggetId)) {
					kubejs.shapeless(Item.of(nuggetId, 9), itemId)
					// 9 粒 => 锭
					kubejs.shapeless(Item.of(itemId, 1), Array(9).fill(nuggetId))
				} else {
					console.warn(`Skipping: No nugget found for ingot: ${itemId}`)
				}

				// 9 锭 => 块
				let blockId = itemId.replace("ingot", "block")
				if (Item.exists(blockId)) {
					kubejs.shapeless(Item.of(blockId, 1), Array(9).fill(itemId))
				} else {
					console.warn(`Skipping: No block found for ingot: ${itemId}`)
				}

				// 锭 => 板
				let plateId = itemId.replace("ingot", "plate")
				if (Item.exists(plateId)) {
					create.pressing(Item.of(plateId, 1), Array(1).fill(itemId))
				} else {
					console.warn(`Skipping: No plate found for ingot: ${itemId}`)
				}
				if (Item.exists(plateId)) {
					thermal.press(Item.of(plateId, 1), Array(1).fill(itemId))
				} else {
					console.warn(`Skipping: No plate found for ingot: ${itemId}`)
				}
			}
		})
	})
})