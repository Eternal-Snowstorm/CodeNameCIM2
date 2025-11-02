// 铜构件的普通右键
ItemEvents.rightClicked("cmi:copper_mechanism", (event) => {
	let { player, level } = event

	// 与构件催生器互动时不执行后续逻辑
	if (
		player.rayTrace(5, false).block !== null &&
		player.rayTrace(5, false).block.id === "cmi:accelerator"
	) {
		player.swing()
		return
	} else {
		// 设定生成的实体类型为药水
		let spawnBottle = level.createEntity("minecraft:potion")
		// 将实体生成位置设定为玩家眼部位置
		spawnBottle.pos = player.getEyePosition()
		// 获取玩家视角
		let view = player.getViewVector(1.0)
		// 将视角正交分解为x,y,z
		let length = Math.sqrt(view.x() * view.x() + view.y() * view.y() + view.z() * view.z())
		// 定义向量
		let vector = {
			x: view.x() / length,
			y: view.y() / length,
			z: view.z() / length
		}
		// 设定生成的实体运动方向与速度
		spawnBottle.setMotion(vector.x, vector.y, vector.z)
		// 设定生成的实体NBT（这里为设定对应的物品为喷践型水瓶）
		spawnBottle.item = Item.of("minecraft:splash_potion", "{Potion:'minecraft:water'}")
		// 给玩家播放投掷水瓶的声音
		player.playNotifySound("minecraft:entity.arrow.shoot", "voice", 0.5, 0.3)
		// 生成水瓶
		spawnBottle.spawn()
		// 玩家挥动构件
		player.swing()
	}
})