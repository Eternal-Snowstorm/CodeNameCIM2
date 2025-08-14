// 石头转化
BlockEvents.rightClicked("cmi:the_accelerator_of_mechanism_power", (event) => {
	// 判定是否主手手持智能构件
	if (event.hand === "OFF_HAND") {
		return
	}
	let player = event.getPlayer()
	if (player === null) {
		return
	}
	if (event.getItem().is("cmi:smart_mechanism")) {
		let { x, y, z } = event.block.pos
		// 设定扫描所用变量
		let numx = x
		let numz = z
		let outx
		let outz
		let pos
		let rand
		let num = [-2, -1, 0, 1, 2]
		let count = 0
		// 判定周围的石头||深板岩是否足够
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
		// 若数量小于等于5则停止该程序
		if (count <= 5) {
			return
		}
		// 若数量大于5则开始抽随机数转化方块
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)
				let block = event.level.getBlock(pos).getId()

				if (block === "minecraft:stone") {
					rand = Math.random()
					if (rand <= 0.1) {
						event.level.getBlock(pos).set("minecraft:diamond_ore")
					} else if (rand <= 0.3) {
						event.level.getBlock(pos).set("minecraft:gold_ore")
					} else if (rand <= 0.5) {
						event.level.getBlock(pos).set("cmi:certus_quartz_ore")
					} else if (rand <= 0.51) {
						event.level.getBlock(pos).set("thermal:ruby_ore")
					} else if (rand <= 0.52) {
						event.level.getBlock(pos).set("thermal:sapphire_ore")
					} else if (rand <= 0.53) {
						event.level.getBlock(pos).set("minecraft:emerald_ore")
					}
				} else if (block === "minecraft:deepslate") {
					rand = Math.random()
					if (rand <= 0.15) {
						event.level.getBlock(pos).set("minecraft:deepslate_diamond_ore")
					} else if (rand <= 0.3) {
						event.level.getBlock(pos).set("minecraft:deepslate_gold_ore")
					} else if (rand <= 0.45) {
						event.level.getBlock(pos).set("cmi:deepslate_certus_quartz_ore")
					} else if (rand <= 0.47) {
						event.level.getBlock(pos).set("thermal:deepslate_ruby_ore")
					} else if (rand <= 0.49) {
						event.level.getBlock(pos).set("thermal:deepslate_sapphire_ore")
					} else if (rand <= 0.51) {
						event.level.getBlock(pos).set("minecraft:deepslate_emerald_ore")
					}
				}
			}
		}
		// 使玩家挥动手持物品
		event.getPlayer().swing()
		// 给进行操作的玩家播放提示音
		player.playNotifySound("create:crafter_craft", "voice", 2, 1)
		// 检测玩家是否创造模式
		if (!event.player.isCreative()) {
			// 若是生存模式则减少一个安山构件
			event.getItem().shrink(1)
		}
	}
})

// 粒子效果
BlockEvents.rightClicked((event) => {
	// 设置扫描所用变量
	let { x, y, z } = event.block.pos
	let numx = x
	let numz = z
	let outx
	let outz
	let pos
	let num = [-2, -1, 0, 1, 2]
	let count = 0
	// 扫描周围方块的石头/深板岩数量
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
	// 若数量小于等于5则停止该程序
	if (count <= 5) {
		return
	}
	// 若数量大于5则召唤效果粒子
	let { block, item, level } = event
	if (item.id !== "cmi:andesite_mechanism" || block.id !== "cmi:the_accelerator_of_mechanism_power") {
		return
	}
	let command = `particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
	level.server.runCommandSilent(command)
})