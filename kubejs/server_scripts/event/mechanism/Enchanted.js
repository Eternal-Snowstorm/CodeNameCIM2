// 附魔构件右键方块效果
BlockEvents.rightClicked((event) => {
	// 判定是否附魔构件
	if (event.getItem().is("cmi:enchanted_mechanism")) {
		// 设定生成的经验球实体
		let spawnx = event.getLevel().createEntity("minecraft:experience_orb")
		spawnx.setNbt({ Value: 5 })
		//设定生成的经验球位置
		spawnx.pos = event.block.pos
		// 使玩家挥舞构件
		event.getPlayer().swing()
		// 生成经验球
		spawnx.spawn()
	}
})