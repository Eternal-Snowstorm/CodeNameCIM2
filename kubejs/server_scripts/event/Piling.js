BlockEvents.rightClicked((event) => {
	let { player, level, block } = event
	let pos = block.pos

	let hasWrench = player.getMainHandItem().hasTag("forge:tools/wrench")

	if (block.id === "cmi:impact_pile" && hasWrench) {
		let below = level.getBlock(pos.below())
		if (below.id !== "create:mechanical_drill" || below.properties.facing !== "down") {
			return

		}
		// ↑↑↑ 判断结束

		let centerX = pos.x
		let centerZ = pos.z
		let currentY = pos.y

		level.server.scheduleInTicks(1, function tick() {
			if (currentY > -64) {

				let p1 = new BlockPos(centerX, currentY, centerZ)
				level.destroyBlock(p1, false)

				currentY--
				level.server.scheduleInTicks(1, tick)

			} else {
				let p2 = new BlockPos(centerX, -64, centerZ)
				let voidSpring = Block.getBlock("cmi:void_spring").defaultBlockState()
				level.setBlock(p2, voidSpring, 3)
			}
		})
	}
})