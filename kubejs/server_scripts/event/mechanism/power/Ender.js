BlockEvents.rightClicked("cmi:the_accelerator_of_mechanism_power", (event) => {
	if (event.hand === "OFF_HAND") {
		return
	}
	let player = event.getPlayer()
	if (player === null) {
		return
	}
	// 确认玩家手持带有NBT的末影构件右键催生器
	if (event.getItem().is("cmi:ender_mechanism") && event.getItem().hasNBT()) {
		// 获取构件中的NBT数据
		let nbt = event.getItem().getNbt()
		// 将目标点重置为目标方块中心位置
		let x = nbt.x + 0.5
		let y = nbt.y
		let z = nbt.z + 0.5
		// 传送玩家到目标位置
		player.teleportTo(x, y, z)

		// 生成传送音效和粒子
		let soundCommand = `playsound minecraft:entity.enderman.teleport master @a ${x} ${y} ${z}`
		player.level.server.runCommandSilent(soundCommand)
		let particleCommand = `particle minecraft:dragon_breath ${x} ${y} ${z} 0.5 0.5 0.5 0.1 50`
		player.level.server.runCommandSilent(particleCommand)
		// 清除物品NBT
		event.getItem().setNbt({})
		// 添加冷却时间(5s)
		player.cooldowns.addCooldown("cmi:ender_mechanism", 100)
	}
})