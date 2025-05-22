ItemEvents.rightClicked("cmi:geological_hammer", (event) => {
	let { player } = event
	if (event.hand == "OFF_HAND") {
		for (let i = 0; i < global.debugUserName.length; i++) {
			// 副手持地质锤右键获取物品ID
			if (player.mainHandItem !== "minecraft:air" &&
				player.crouching &&
				player.username === global.debugUserName[i]) {
				player.runCommandSilent("kjs hand")
			}
		}
	}
})

PlayerEvents.chat((event) => {
	let { player, message, server } = event

	for (let i = 0; i < global.debugUserName.length; i++) {
		// 输入-ki删除所有掉落物
		if (message.trim().equalsIgnoreCase("-ki") && player.username === global.debugUserName[i]) {
			server.runCommandSilent("kill @e[type=item]")
			server.runCommandSilent(`tellraw @a "掉落物已清除"`)
			event.cancel()
		}

		// 输入-kf获得[夜视 力量 抗性]buff
		if (message.trim().equalsIgnoreCase("-kf") && player.username === global.debugUserName[i]) {
			player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:strength infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true")
			event.cancel()
		}

		// 输入-efc清除自身所有buff
		if (message.trim().equalsIgnoreCase("-efc") && player.username === global.debugUserName[i]) {
			player.runCommandSilent("effect clear")
			event.cancel()
		}

		// 输入-kla清除玩家之外的所有实体
		if (message.trim().equalsIgnoreCase("-kla") && player.username === global.debugUserName[i]) {
			server.runCommandSilent("kill @e[type=!player]")
			event.cancel()
		}
	}
})

PlayerEvents.loggedIn((event) => {
	let { player } = event

	/* 
	* 获取Tag下的所有id, 会在
	* "logs/kubejs/server.log"
	* 打印出来, 更换Tag在Ingredient.of()内更换
	*/

	for (let i = 0; i < global.debugUserName.length; i++) {
		if (player.username === global.debugUserName[i]) {
			// 遍历Tag
			Ingredient.of("#thermal:machines")
				.getItemIds()
				.forEach((print) => {
					console.log(print)
				})
		}
	}
})

// 查看方块硬度(地质锤潜行右键方块)
BlockEvents.rightClicked((event) => {
	let { player } = event
	let getItem = "cmi:geological_hammer"

	let blockState = event.getBlock().getBlockState()
	let pos = event.getBlock().getPos()
	let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)

	for (let i = 0; i < global.debugUserName.length; i++) {
		if (event.hand == "OFF_HAND") {
			return
		}
		if (player.mainHandItem === getItem &&
			player.crouching &&
			player.username === global.debugUserName[i]) {
			event.getPlayer().swing()
			let key = Component.translate(`message.${global.namespace}.debug.getHardness`, [blockHardness])
			player.tell(key)
			event.cancel()
		}
	}
})