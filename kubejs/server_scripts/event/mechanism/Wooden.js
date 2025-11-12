let $BlockHitResult =
	Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext =
	Java.loadClass("net.minecraft.world.item.context.UseOnContext")
let $AllItems =
	Java.loadClass("com.simibubi.create.AllItems")

BlockEvents.rightClicked((event) => {
	let { level, item, player, block } = event
	const MECH = Item.of("cmi:wooden_mechanism")

	// if (item === MECH && !player.cooldowns.isOnCooldown(MECH)) {
	if (item === MECH) {
		let result = new $BlockHitResult(player.pos, event.facing, block.pos, false)
		let context = new $UseOnContext(level, player, event.hand, "create:tree_fertilizer", result)

		// 调用use方法
		$AllItems.TREE_FERTILIZER.get().useOn(context)
		// 调用动画
		player.swing()
	}
})