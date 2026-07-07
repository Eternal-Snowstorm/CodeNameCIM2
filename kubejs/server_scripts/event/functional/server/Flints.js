let $BlockHitResult =
	Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext =
	Java.loadClass("net.minecraft.world.item.context.UseOnContext")

BlockEvents.rightClicked((event) => {
	let { item, block, player, facing, level, hand } = event

	let offHand = player.getOffHandItem()
	let mainHand = player.getMainHandItem()

	if (checkItem()) {
		let result = new $BlockHitResult(
			player.pos,
			facing,
			block.getPos(),
			false
		)

		let context = new $UseOnContext(
			level,
			player,
			hand,
			"minecraft:flint_and_steel",
			result
		)

		player.swing()
		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"minecraft:item.flintandsteel.use",
			"blocks",
			1.0,
			1.0
		)

		if (!player.isCreative()) {
			if (Math.random() < 0.7) {
				item.shrink(1)
			}
		}

		item.useOn(context)
	}

	function checkItem() {
		let flint = "forge:flints"

		return mainHand.hasTag(flint)
			&& offHand.hasTag(flint)
	}
})