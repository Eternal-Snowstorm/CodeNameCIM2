let structure = new MultiblockStructureBuilder([
	[
		"   ",
		" 0 ",
		"   "
	],
	[
		"AAA",
		"AAA",
		"AAA"
	]
])
	.define("A", (builder) => {
		builder.block("minecraft:stone")
	})
	.define("0", (builder) => {
		builder.block("minecraft:obsidian")
	})
	.define(" ", (builder) => {
		builder.any()
	})
	.build()

BlockEvents.rightClicked((event) => {
	let { player, block, level } = event

	if (event.getHand() !== InteractionHand.MAIN_HAND) {
		return
	}
	if (!structure.validate(level, block.pos)) {
		return
	}

	let size = structure.getSize()

	let ox = Math.floor(size.getX() / 2)
	let oy = size.getY() - 1
	let oz = Math.floor(size.getZ() / 2)

	for (let y = 0; y < size.getY(); y++) {
		for (let x = 0; x < size.getX(); x++) {
			for (let z = 0; z < size.getZ(); z++) {
				let pos = block.pos.offset(x - ox, y - oy, z - oz)
				if (!player.isCreative()) {
					level.destroyBlock(pos, false)
				}
			}
		}
	}

	let entity = level.createEntity("alexscaves:submarine")
	entity.setPos(block.x + 0.5, block.y, block.z + 0.5)
	entity.spawn()
})