BlockEvents.rightClicked((event) => {
	let { block, player } = event

	// 获取维度
	let getDimension = block.level.getDimension()

	// 方块列表
	let blockList = [
		"minecraft:soul_sand",
		"minecraft:soul_soil",
		"mynethersdelight:resurgent_soil",
		"mynethersdelight:resurgent_soil_farmland"
	]
	blockList.forEach((id) => {
		if (block.id === id) {
			player.tell("aaa")
		}
	})

	// if (player.mainHandItem.hasTag("cmi:nether_crops") && getDimension !== "minecraft:the_nether" && block.hasTag(`${global.namespace}:nether_farmland`)) {
	// 	event.cancel()
	// }
})