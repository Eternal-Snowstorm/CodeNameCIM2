let $BlockPattern =
	Java.loadClass("net.minecraft.world.level.block.state.pattern.BlockPattern")
let $BlockPatternBuilder =
	Java.loadClass("net.minecraft.world.level.block.state.pattern.BlockPatternBuilder")
let $BlockInWorld =
	Java.loadClass("net.minecraft.world.level.block.state.pattern.BlockInWorld")
let $BlockStatePredicate =
	Java.loadClass("net.minecraft.world.level.block.state.predicate.BlockStatePredicate")

BlockEvents.rightClicked((event) => {
	let { block, level, player } = event
	let stone = "minecraft:stone"
	let dirt = "minecraft:dirt"
	let stonePattern = null

	if (stonePattern === null) {
		stonePattern = $BlockPatternBuilder.start()
			.aisle([
				"AAA",
				"ABA",
				"AAA"
			])
			.where("A", $BlockInWorld.hasState($BlockStatePredicate.forBlock(stone)))
			.where("B", $BlockInWorld.hasState($BlockStatePredicate.forBlock(dirt)))
			// .where("B", $BlockInWorld.hasState($BlockStatePredicate.ANY))
			.build()
	}

	if (block.id === dirt) {
		const START_POS = block.pos.offset(-1, 0, -1)

		// 检查模式是否匹配
		const MATCH = stonePattern.find(level, START_POS)

		if (MATCH !== null) {
			player.tell(Component.literal("哇袄!!!"))
		} else {
			player.tell(Component.literal("!!!袄哇"))
		}
	}
})