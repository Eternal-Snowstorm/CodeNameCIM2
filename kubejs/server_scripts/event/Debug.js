ItemEvents.rightClicked("cmi:geological_hammer", (event) => {
	let { player } = event
	if (event.hand === "OFF_HAND") {
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

	for (let i = 0; i < global.debugUserName.length; i++) {
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

		// 重载JEI
		let reloadJeiCommands = [
			"kjs reload client_scripts",
			"reload"
		]
		if (message.trim().equalsIgnoreCase("-rej") && player.username === global.debugUserName[i]) {
			reloadJeiCommands.forEach((command) => {
				player.runCommandSilent(command)
			})
			// Reloaded All Scripts!
			player.tell(Component.translatable(`message.${global.namespace}.jei.reloaded`).green())
			event.cancel()
		}

		// 重载(这个重载不能用于配方和Tags等数据包脚本)
		let commandList = [
			"client_scripts",
			"config",
			"lang",
			"server_scripts",
			"startup_scripts",
			"textures",
		]
		if (message.trim().equalsIgnoreCase("-re") && player.username === global.debugUserName[i]) {
			commandList.forEach((command) => {
				player.runCommandSilent(`kjs reload ${command}`)
			})
			// Reloaded All Scripts!
			player.tell(Component.translatable(`message.${global.namespace}.reloaded`).green())
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

	let state = event.getBlock().getBlockState()
	let pos = event.getBlock().getPos()
	function getBlockHardness() {
		return state.getDestroySpeed(event.getLevel(), pos)
	}

	for (let i = 0; i < global.debugUserName.length; i++) {
		if (event.hand === "OFF_HAND") {
			return
		}
		if (player.mainHandItem === getItem &&
			player.crouching &&
			player.username === global.debugUserName[i]) {
			event.getPlayer().swing()
			let key = `message.${global.namespace}.debug.getHardness`
			player.tell(Component.translatable(key, getBlockHardness()))
			event.cancel()
		}
	}
})