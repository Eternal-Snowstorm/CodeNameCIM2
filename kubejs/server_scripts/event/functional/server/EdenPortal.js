let $EdenRing =
	Java.loadClass("raijin.edenring.EdenRing")
let $EdenPortal =
	Java.loadClass("raijin.edenring.world.EdenPortal")
let $Level =
	Java.loadClass("net.minecraft.world.level.Level")

BlockEvents.rightClicked((event) => {
	let { hand, block, level, player } = event
	let pos = block.getPos()

	if (correctDimension(level.getDimensionKey()) && isTrigger(event) && hand === InteractionHand.MAIN_HAND) {
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

	/**
	 * 
	 * @param {Internal.ResourceKey<Internal.Level_>} dimension 
	 */
	function correctDimension(dimension) {
		return dimension.equals($Level.OVERWORLD)
			|| dimension.equals($EdenRing.EDEN_RING_KEY)
			|| dimension.equals($Level.NETHER)
	}

	/**
	 * 
	 * @param {Internal.BlockRightClickedEventJS_} event 
	 */
	function isTrigger(event) {
		let { item, block } = event

		return item.getId() === "cmi:astral_core"
			&& block.getId() === "cmi:eden_crystal"
	}
})