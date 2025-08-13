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
	let { player, message } = event
	message = message.trim()

	// 只允许调试用户使用
	if (!global.debugUserName.includes(player.username)) {
		return
	}

	// 命令映射表
	let commands = {
		"-kf": () => {
			player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:strength infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true")
		},
		"-efc": () => {
			player.runCommandSilent("effect clear")
		},
		"-re": () => {
			let commandList = [
				"client_scripts",
				"config",
				"lang",
				"server_scripts",
				"startup_scripts",
				"textures"
			]
			commandList.forEach((command) => {
				player.runCommandSilent(`kjs reload ${command}`)
			})
			player.tell(Component.translate(`message.${global.namespace}.reload`).green())
		}
	}

	// 执行对应命令
	if (commands[message?.toLowerCase()]) {
		commands[message.toLowerCase()]()
		event.cancel()
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
			Ingredient.of("#cmi:ore_nodes")
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