BlockEvents.rightClicked((event) => {
	let { item, level, player, block } = event

	// 判定是否附魔构件
	if (item.is("cmi:enchanted_mechanism")) {
		// 设定生成的经验球实体
		let spawnx = level.createEntity("minecraft:experience_orb")
		spawnx.setNbt({ Value: 5 })
		//设定生成的经验球位置
		spawnx.pos = block.pos
		// 使玩家挥舞构件
		player.swing()
		// 生成经验球
		spawnx.spawn()
	}
})