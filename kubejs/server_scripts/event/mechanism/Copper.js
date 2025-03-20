// 石头转化
BlockEvents.rightClicked("ue_addons:the_accelerator_of_mechanism_power", r => {
	// 判定是否主手手持铜质构件
	if (r.hand == "OFF_HAND") return
	let player = r.getPlayer()
	if (player == null) return
	if (r.getItem().is('ue_addons:copper_mechanism')) {
		let { x, y, z } = r.block.pos
		// 设定扫描所用变量
		let numx = x
		let numz = z
		let outx
		let outz
		let pos
		let rand
		let num = [-2, -1, 0, 1, 2]
		let count = 0
		// 判定周围的石头/深板岩是否足够
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
		// 若数量小于等于5则停止该程序
		if (count <= 5) return
		// 若数量大于5则开始抽随机数转化方块
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)
				let block = r.level.getBlock(pos).getId()

				if (block === 'minecraft:stone') {
					rand = Math.random()
					if (rand <= 0.2) {
						r.level.getBlock(pos).set('minecraft:copper_ore')
					} else if (rand <= 0.25) {
						r.level.getBlock(pos).set('minecraft:gold_ore')
					} else if (rand <= 0.3) {
						r.level.getBlock(pos).set('minecraft:clay')
					}
				}
				else if (block === 'minecraft:deepslate') {
					rand = Math.random();
					if (rand <= 0.15) {
						r.level.getBlock(pos).set('minecraft:deepslate_copper_ore')
					} else if (rand <= 0.25) {
						r.level.getBlock(pos).set('minecraft:deepslate_gold_ore')
					} else if (rand <= 0.35) {
						r.level.getBlock(pos).set('minecraft:clay')
					}

				}

			}

		}
		// 给进行操作的玩家播放提示音
		player.playNotifySound('create:crafter_craft', 'voice', 2, 1)
		// 检测玩家是否创造模式
		if (r.player.isCreative()) { }
		// 若是生存模式则减少一个铜质构件
		else {
			r.getItem().shrink(1)
		}
	}
})

// 粒子效果
BlockEvents.rightClicked(r => {
	// 设置扫描所用变量
	let { x, y, z } = r.block.pos
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

			let block = r.level.getBlock(pos).getId()

			if (block === 'minecraft:stone') {
				count = 1 + count
			}
			else if (block === 'minecraft:deepslate') {
				count = 1 + count
			}
		}
	}
	//若数量小于等于5则停止该程序
	if (count <= 5) return
	//若数量大于5则召唤效果粒子
	let { block, item, player, level } = r;
	if (item.id !== 'ue_addons:copper_mechanism' || block.id !== 'ue_addons:the_accelerator_of_mechanism_power') return;
	level.server.runCommandSilent(
		`particle minecraft:dust 1 0.5 0 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
	);
});

// 铜构件的普通右键
ItemEvents.rightClicked('ue_addons:copper_mechanism', r => {
	// 与构件催生器互动时不执行后续逻辑
	if (r.player.rayTrace(5, false).block != null && r.player.rayTrace(5, false).block.id === "ue_addons:the_accelerator_of_mechanism_power") {
		r.player.swing()
		return;
	}
	else {
		// 设定生成的实体类型为药水
		let spawnbottle = r.getLevel().createEntity("minecraft:potion")
		// 将实体生成位置设定为玩家眼部位置
		spawnbottle.pos = r.getPlayer().getEyePosition()
		// 获取玩家视角
		let view = r.getPlayer().getViewVector(1.0)
		// 将视角正交分解为x,y,z
		let length = Math.sqrt(view.x() * view.x() + view.y() * view.y() + view.z() * view.z());
		let vector = {
			x: view.x() / length,
			y: view.y() / length,
			z: view.z() / length
		};
		// 设定生成的实体运动方向与速度
		spawnbottle.setMotion(vector.x, vector.y, vector.z);
		// 设定生成的实体NBT（这里为设定对应的物品为喷践型水瓶）
		spawnbottle.item = Item.of('minecraft:splash_potion', '{Potion:"minecraft:water"}')
		// 给玩家播放投掷水瓶的声音
		r.getPlayer().playNotifySound('minecraft:entity.arrow.shoot', 'voice', 0.5, 0.3)
		// 生成水瓶
		spawnbottle.spawn()
		// 玩家挥动构件
		r.getPlayer().swing()
	}
})