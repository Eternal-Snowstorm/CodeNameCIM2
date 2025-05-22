let $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")

// 自然构件右键运行骨粉逻辑
BlockEvents.rightClicked((event) => {
	let { level, item, player, facing, block, hand } = event

	// 取消无效右键事件
	if (level.clientSide) {
		return
	}

	// 判断玩家手持物品为自然构件
	if (item === "cmi:nature_mechanism") {

		// 获取所点击的方块位置并调用MC原版骨粉逻辑
		let blockHitResult = new $BlockHitResult(player.pos, facing, block.pos, false)
		let useOnContext = new $UseOnContext(level, player, hand, "minecraft:bone_meal", blockHitResult)
		let boneMeal = Items.BONE_MEAL

		// 在指定方块上运行骨粉的逻辑
		boneMeal.useOn(useOnContext)

		// 玩家挥动手持的自然构件
		player.swing()
	}
})