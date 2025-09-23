ItemEvents.rightClicked((event) => {
	let { player, server, item } = event
	let { x, y, z } = player

	let randomMechanisms = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"space",
		"random"
	]
	randomMechanisms.forEach((material) => {
		let lootTable = `cmi:gameplay/random_mechanisms/${material}`

		if (player.mainHandItem === `cmi:${material}_random_mechanism`) {
			if (player === null) {
				return
			}

			server.runCommandSilent(`loot spawn ${x} ${y} ${z} loot ${lootTable}`)
			player.swing()

			player.playNotifySound("create:crafter_craft", "voice", 2, 1)

			let r = Math.random()
			let g = Math.random()
			let b = Math.random()

			let command = `particle minecraft:dust ${r} ${g} ${b} 1 ${x} ${y + 1.5} ${z} 0.5 0.5 0.5 0.1 30`
			server.runCommandSilent(command)

			if (!player.isCreative()) {
				item.shrink(1)
			}
		}
	})
})