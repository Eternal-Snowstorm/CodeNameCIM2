// 铜构件的普通右键
ItemEvents.rightClicked("cmi:copper_mechanism", event => {
	// 与构件催生器互动时不执行后续逻辑
	if (event.player.rayTrace(5, false).block != null && event.player.rayTrace(5, false).block.id === "cmi:the_accelerator_of_mechanism_power") {
		event.player.swing()
		return
	} else {
		// 设定生成的实体类型为药水
		let spawnbottle = event.getLevel().createEntity("minecraft:potion")
		// 将实体生成位置设定为玩家眼部位置
		spawnbottle.pos = event.getPlayer().getEyePosition()
		// 获取玩家视角
		let view = event.getPlayer().getViewVector(1.0)
		// 将视角正交分解为x,y,z
		let length = Math.sqrt(view.x() * view.x() + view.y() * view.y() + view.z() * view.z())
		let vector = {
			x: view.x() / length,
			y: view.y() / length,
			z: view.z() / length
		}
		// 设定生成的实体运动方向与速度
		spawnbottle.setMotion(vector.x, vector.y, vector.z)
		// 设定生成的实体NBT（这里为设定对应的物品为喷践型水瓶）
		spawnbottle.item = Item.of("minecraft:splash_potion", "{Potion:'minecraft:water'}")
		// 给玩家播放投掷水瓶的声音
		event.getPlayer().playNotifySound("minecraft:entity.arrow.shoot", "voice", 0.5, 0.3)
		// 生成水瓶
		spawnbottle.spawn()
		// 玩家挥动构件
		event.getPlayer().swing()
	}
})