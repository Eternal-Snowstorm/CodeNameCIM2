let $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")

BlockEvents.rightClicked((event) => {
	let { block, player, level } = event

	if (!level.isClientSide()) {
		if (player.mainHandItem.id ===
			"cmi:coil_mechanism" &&
			block.id === "cmi:accelerator"
		) {
			const LIGHTNING = $EntityType.LIGHTNING_BOLT.create(level)

			LIGHTNING.setPos(block.x + 0.5, block.y, block.z + 0.5)
			level.addFreshEntity(LIGHTNING)
		}
	}
})