BlockEvents.rightClicked((event) => {
	let { level, item, player, facing, block, hand } = event

	// 取消无效右键事件
	if (level.clientSide) {
		return
	}

	// 判断玩家手持物品为自然构件
	if (item === "cmi:nature_mechanism") {
		let result = new $BlockHitResult(player.pos, facing, block.pos, false)
		let context = new $UseOnContext(level, player, hand, "alexscaves:fertilizer", result)

		$ACItemRegistry.FERTILIZER.get().useOn(context)

		// 玩家挥动手持的自然构件
		player.swing()
	}
})