EntityEvents.hurt((event) => {
	let source = event.source.getActual()

	if (!(source && source.isPlayer())) {
		return
	}

	/**
	 * @type {Player}
	 */
	let player = source

	const HAS_MODIFIER = SimpleTCon.hasModifier(
		player.getMainHandItem(),
		"cmi:frenzy"
	)

	if (!player.hasEffect("minecraft:speed") || !HAS_MODIFIER) {
		return
	}

	// 获取速度等级
	let speedLevel = player.getEffect("minecraft:speed").getAmplifier() + 1

	// 指数型回血百分比(可以调整 exponent 来控制增长速率)
	// 指数因子, >1表示高等级回血更夸张
	let exponent = 1.5
	let baseMin = 0.05
	let baseMax = 0.10

	// 根据等级指数放大
	let minPercent = baseMin * Math.pow(speedLevel, exponent)
	let maxPercent = baseMax * Math.pow(speedLevel, exponent)

	// 随机计算回血
	let replyValue = event.getDamage() * (minPercent + Math.random() * (maxPercent - minPercent))
	// 保留两位小数
	replyValue = Math.round(replyValue * 100) / 100

	// 实际回血
	player.setHealth(player.getHealth() + replyValue)
	console.log(`速度等级${speedLevel}, 成功回复${replyValue}点血`)
})