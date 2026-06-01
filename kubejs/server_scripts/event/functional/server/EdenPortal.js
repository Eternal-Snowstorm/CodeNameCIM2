let $EdenRing =
	Java.loadClass("raijin.edenring.EdenRing")
let $EdenPortal =
	Java.loadClass("raijin.edenring.world.EdenPortal")
let $Level =
	Java.loadClass("net.minecraft.world.level.Level")

BlockEvents.rightClicked((event) => {
	let { hand, block, level, player, item } = event
	let pos = block.getPos()
	let dimension = level.getDimensionKey()

	if (correctDimension() && isTrigger() && hand === InteractionHand.MAIN_HAND) {
		player.swing()
		if ($EdenPortal.checkNewPortal(level, pos.above())) {
			let center = pos.above()
			$EdenPortal.buildPortal(level, center)

			let lightning = EntityType.LIGHTNING_BOLT.create(level)
			if (lightning != null) {
				lightning.setPos(center.x + 0.5, center.y + 1, center.z + 0.5)
				level.addFreshEntity(lightning)
			}

			let ay = center.y
			let offsets = [
				[2, 2],
				[2, -2],
				[-2, 2],
				[-2, -2]
			]
			offsets.forEach(([dx, dz]) => {
				let bolt = EntityType.LIGHTNING_BOLT.create(level)
				if (bolt != null) {
					bolt.setPos(center.x + dx + 0.5, ay + 1, center.z + dz + 0.5)
					level.addFreshEntity(bolt)
				}
			})
		}
	}

	function correctDimension() {
		return dimension.equals($Level.OVERWORLD)
			|| dimension.equals($EdenRing.EDEN_RING_KEY)
			|| dimension.equals($Level.NETHER)
	}

	/**
	 * 
	 * @param {Internal.BlockRightClickedEventJS_} event 
	 */
	function isTrigger() {
		return item.getId() === "cmi:astral_core"
			&& block.getId() === "cmi:eden_crystal"
	}
})