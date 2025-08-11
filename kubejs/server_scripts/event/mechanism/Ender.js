//末影构件随机传送
ItemEvents.rightClicked("cmi:ender_mechanism", (event) => {
	let { player, item } = event

	// 检测玩家潜行或物品具有NBT
	if (event.getPlayer().crouching) {
		return
	}
	if (event.getItem().hasNBT()) {
		event.cancel()
	}

	// 定义传送范围（5x5 区域）
	let range = 2 // 5x5 区域的范围半径
	let centerX = player.x
	let centerZ = player.z
	let yLevel = player.y

	// 生成随机偏移量
	let randomX = centerX + Math.floor(Math.random() * (range * 2 + 1)) - range
	let randomZ = centerZ + Math.floor(Math.random() * (range * 2 + 1)) - range

	// 获取目标位置（确保 Y 坐标在地面上）
	let targetPos = { x: randomX, y: yLevel, z: randomZ }

	// 传送玩家到目标位置
	player.teleportTo(targetPos.x, targetPos.y, targetPos.z)

	// 生成传送音效和粒子
	let soundCommand = `playsound minecraft:entity.enderman.teleport master @a ${targetPos.x} ${targetPos.y} ${targetPos.z}`
	player.level.server.runCommandSilent(soundCommand)
	let particleCommand = `particle minecraft:dragon_breath ${targetPos.x} ${targetPos.y} ${targetPos.z} 0.5 0.5 0.5 0.1 50`
	player.level.server.runCommandSilent(particleCommand)

	// 添加冷却时间（1秒）
	player.cooldowns.addCooldown("cmi:ender_mechanism", 20)
})

// 存储坐标
ItemEvents.rightClicked("cmi:ender_mechanism", (event) => {
	if (!event.getPlayer().crouching || event.getPlayer().mainHandItem.hasNBT()) {
		return
	}
	// 若是手中的构件存有NBT则停止右键事件
	let player = event.getPlayer()
	// 获取X、Y、Z坐标并向下取整
	let locationX = Math.floor(player.getX())
	let locationY = Math.floor(player.getY())
	let locationZ = Math.floor(player.getZ())
	// 以X、Y、Z形式存入3个NBT
	event.getPlayer().mainHandItem.setNbt({ x: locationX, y: locationY, z: locationZ })
	// 提示玩家已存储坐标
	player.tell(Text.translatable("promp.cmi.ender_mechanism.location_stored"))
})