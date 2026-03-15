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

	if (event.hand !== InteractionHand.MAIN_HAND) {
		return
	}

	if (!structure.validate(level, block.pos)) {
		return
	}

	let multiblock = MultiblockHandler
		.builder(level, block.pos, () => structure)
		.renderOffset(0, -1, 0)
		.cacheTicks(20)
		.build()

	if (!player.isCreative()) {
		multiblock.destroyAll(false)
	}
	let entity = level.createEntity("immersive_machinery:copperfin")
	entity.setPos(block.x + 0.5, block.y, block.z + 0.5)
	entity.spawn()
})