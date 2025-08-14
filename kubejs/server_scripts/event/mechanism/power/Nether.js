BlockEvents.rightClicked("cmi:the_accelerator_of_mechanism_power", (event) => {
	if (event.hand === "OFF_HAND") {
		return
	}
	let player = event.getPlayer()
	if (player === null) {
		return
	}
	if (event.getItem().is("cmi:nether_mechanism")) {
		let { x, y, z } = event.block.pos
		let numx = x
		let numz = z
		let outx
		let outz
		let pos
		let rand
		let num = [-2, -1, 0, 1, 2]
		let count = 0
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)

				let block = event.level.getBlock(pos).getId()

				if (block === "minecraft:netherrack") {
					count = 1 + count
				}
			}
		}
		if (count <= 5) {
			return
		}
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)
				let block = event.level.getBlock(pos).getId()

				if (block === "minecraft:netherrack") {
					rand = Math.random()
					if (rand <= 0.1) {
						event.level.getBlock(pos).set("minecraft:blackstone")
					} else if (rand <= 0.13) {
						event.level.getBlock(pos).set("minecraft:magma_block")
					} else if (rand <= 0.16) {
						event.level.getBlock(pos).set("minecraft:soul_sand")
					} else if (rand <= 0.19) {
						event.level.getBlock(pos).set("minecraft:soul_soil")
					} else if (rand <= 0.22) {
						event.level.getBlock(pos).set("minecraft:gilded_blackstone")
					} else if (rand <= 0.25) {
						event.level.getBlock(pos).set("minecraft:nether_gold_ore")
					} else if (rand <= 0.28) {
						event.level.getBlock(pos).set("minecraft:ancient_debris")
					} else if (rand <= 0.31) {
						event.level.getBlock(pos).set("minecraft:nether_quartz_ore")
					} else if (rand <= 0.34) {
						event.level.getBlock(pos).set("minecraft:glowstone")
					} else if (rand <= 0.37) {
						event.level.getBlock(pos).set("cmi:nether_uranium_ore")
					}
				}
			}
		}
		event.getPlayer().swing()
		player.playNotifySound("create:crafter_craft", "voice", 2, 1)
		if (!event.player.isCreative()) {
			event.getItem().shrink(1)
		}
	}
})

BlockEvents.rightClicked((event) => {
	let { x, y, z } = event.block.pos
	let numx = x
	let numz = z
	let outx
	let outz
	let pos
	let num = [-2, -1, 0, 1, 2]
	let count = 0
	for (let m = 0; m <= 4; m++) {
		outx = numx + num[m]
		for (let n = 0; n <= 4; n++) {
			outz = numz + num[n]
			pos = new BlockPos(outx, y, outz)

			let block = event.level.getBlock(pos).getId()

			if (block === "minecraft:netherrack") {
				count = 1 + count
			}
		}
	}
	if (count <= 5) {
		return
	}
	let { block, item, player, level } = event
	if (item.id !== "cmi:nether_mechanism" || block.id !== "cmi:the_accelerator_of_mechanism_power") {
		return
	}
	let command = `particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
	level.server.runCommandSilent(command)
})