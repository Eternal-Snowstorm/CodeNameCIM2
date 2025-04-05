BlockEvents.rightClicked("ue_addons:the_accelerator_of_mechanism_power", r => {
	if (r.hand == "OFF_HAND") return
	let player = r.getPlayer()
	if (player == null) return
	if (r.getItem().is('ue_addons:wooden_mechanism')) {
		let { x, y, z } = r.block.pos
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

				let block = r.level.getBlock(pos).getId()

				if (block === 'minecraft:stone') {
					count = 1 + count
				}
				else if (block === 'minecraft:deepslate') {
					count = 1 + count
				}
			}
		}
		if (count <= 5) return
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)
				let block = r.level.getBlock(pos).getId()

				if (block === 'minecraft:stone') {
					rand = Math.random()
					if (rand <= 0.2) {
						r.level.getBlock(pos).set('minecraft:coal_ore')
					}
				}
				else if (block === 'minecraft:deepslate') {
					rand = Math.random();
					if (rand <= 0.15) {
						r.level.getBlock(pos).set('minecraft:deepslate_coal_ore')
					}else if (rand <= 0.16) {
						r.level.getBlock(pos).set('minecraft:deepslate_diamond_ore')
					}

				}

			}

		}
		r.getPlayer().swing()
		player.playNotifySound('create:crafter_craft', 'voice', 2, 1)
		if (r.player.isCreative()) { }
		else {
			r.getItem().shrink(1)
		}
	}
})
BlockEvents.rightClicked(r => {
	let { x, y, z } = r.block.pos
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

			let block = r.level.getBlock(pos).getId()

			if (block === 'minecraft:stone') {
				count = 1 + count
			}
			else if (block === 'minecraft:deepslate') {
				count = 1 + count
			}
		}
	}
	if (count <= 5) return
	let { block, item, player, level } = r;
	if (item.id !== 'ue_addons:wooden_mechanism' || block.id !== 'ue_addons:the_accelerator_of_mechanism_power') return;
	level.server.runCommandSilent(
		`particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
	);
});