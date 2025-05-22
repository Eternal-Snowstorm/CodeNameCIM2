BlockEvents.rightClicked("cmi:the_accelerator_of_mechanism_power", (event) => {
	if (event.hand == "OFF_HAND") {
		return
	}
	let player = event.getPlayer()
	if (player == null) {
		return
	}
	if (event.getItem().is("cmi:wooden_mechanism")) {
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

				if (block === "minecraft:stone") {
					count = 1 + count
				} else if (block === "minecraft:deepslate") {
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

				if (block === "minecraft:stone") {
					rand = Math.random()
					if (rand <= 0.2) {
						event.level.getBlock(pos).set("minecraft:coal_ore")
					}
				} else if (block === "minecraft:deepslate") {
					rand = Math.random()
					if (rand <= 0.15) {
						event.level.getBlock(pos).set("minecraft:deepslate_coal_ore")
					} else if (rand <= 0.16) {
						event.level.getBlock(pos).set("minecraft:deepslate_diamond_ore")
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

			if (block === "minecraft:stone") {
				count = 1 + count
			} else if (block === "minecraft:deepslate") {
				count = 1 + count
			}
		}
	}
	if (count <= 5) {
		return
	}
	let { block, item, level } = event
	if (item.id !== "cmi:wooden_mechanism" || block.id !== "cmi:the_accelerator_of_mechanism_power") {
		return
	}
	let command = `particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
	level.server.runCommandSilent(command)
})