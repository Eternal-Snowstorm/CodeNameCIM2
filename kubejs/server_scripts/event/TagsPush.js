/*
BlockEvents.rightClicked((event) => {
	let { player, item, block } = event

	global.debugUserName.forEach((name) => {
		if (player.username === name && item.id === "minecraft:diamond" && block.id === "minecraft:stone") {
			global.coalDusts = []
			Ingredient.of("#forge:stone")
				.getItemIds()
				.forEach((items) => {
					global.coalDusts.push(items)
				})
		}
	})
})
*/