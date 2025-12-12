let $ParticleTypes =
	Java.loadClass("net.minecraft.core.particles.ParticleTypes")

ItemEvents.rightClicked((event) => {
	let { item, player, level, server } = event

	// 只能主手触发
	if (item === "cmi:parchment" && event.hand === "MAIN_HAND") {
		// 定位玩家眼睛坐标(Pos)
		let startingPosition = player.getEyePosition()

		// 获取坐标具体数据
		let PlayerPos = {
			x: startingPosition.x(),
			y: startingPosition.y(),
			z: startingPosition.z()
		}

		// 给予玩家幸运buff(10分钟, 2级)
		player.potionEffects.add("minecraft:luck", 20 * 600, 1)

		// 播放音效
		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"minecraft:entity.experience_orb.pickup",
			"players",
			1.0,
			1.0
		)

		// 释放粒子效果
		for (let i = 0; i < 30; i++) {
			let offsetX = (Math.random() - 0.5) * 3
			let offsetY = (Math.random() - 0.5) * 2
			let offsetZ = (Math.random() - 0.5) * 3

			server.getLevel().sendParticles(
				$ParticleTypes.HEART,
				PlayerPos.x + offsetX,
				PlayerPos.y + offsetY,
				PlayerPos.z + offsetZ,
				1,
				0,
				0,
				0,
				0
			)
		}
		// 调用动画
		CMICore.useTotemAnimation(Item.of("cmi:parchment"))
		// 挥手
		player.swing()
		// 消耗物品
		item.shrink(1)
	}
})