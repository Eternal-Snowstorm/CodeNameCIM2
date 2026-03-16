let stru1 = new MultiblockStructureBuilder([
	[
		"   ",
		"   ",
		" 0 "
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
	spawnEntityByMultiblock(event, stru1, "alexscaves:submarine")
})

/**
 * @param {Internal.BlockRightClickedEventJS} event 
 * @param {vazkii.patchouli.api.IMultiblock} structure 
 * @param {Internal.EntityType_<any>} entityId 
 * @returns 
 */
function spawnEntityByMultiblock(event, structure, entityId) {
	let { player, block, level } = event

	if (event.hand !== InteractionHand.MAIN_HAND) {
		return
	}

	if (structure.validate(level, block.pos) === null) {
		return
	}

	let multiblock = MultiblockHandler
		.builder(level, block.pos, () => structure)
		.renderOffset(0, -1, 0)
		.cacheTicks(20)
		.build()

	let direction = multiblock.getDirection()

	player.swing()

	if (!player.isCreative()) {
		multiblock.destroyAll(false)
	}

	let entity = level.createEntity(entityId)
	entity.setPos(block.x + 0.5, block.y, block.z + 0.5)
	entity.spawn()

	if (direction) {
		let rot = directionToYRot(direction)

		entity.setYRot(rot)
		entity.setYHeadRot(rot)
		entity.setYBodyRot(rot)
	}
}

/**
 * 
 * @param {Internal.Direction} direction 
 * @returns 
 */
function directionToYRot(direction) {
	switch (direction.name()) {
		case "NORTH": return 180
		case "SOUTH": return 0
		case "WEST": return 90
		case "EAST": return -90
		default: return 0
	}
}