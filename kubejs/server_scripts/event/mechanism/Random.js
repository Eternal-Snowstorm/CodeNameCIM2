ItemEvents.rightClicked((event) => {
	let { player, server, item } = event

	let randomMechanisms = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism"
	]
	randomMechanisms.forEach((material) => {
		if (player.mainHandItem === `ue_addons:${material}_random_mechanism`) {
			if (player === null) {
				return
			}
			let lootTable = `ue_addons:gameplay/random_mechanisms/${material}`
			let { x, y, z } = player.pos
			server.runCommandSilent("loot give " + player.username + " loot " + lootTable)
			player.swing()
			player.playNotifySound("create:crafter_craft", "voice", 2, 1)
			let R = Math.random()
			let G = Math.random()
			let B = Math.random()
			server.runCommandSilent(`particle minecraft:dust ${R} ${G} ${B} 1 ${x} ${y + 1.5} ${z} 0.5 0.5 0.5 0.1 30`)
			if (!player.isCreative()) {
				item.shrink(1)
			}
		}
	})
})