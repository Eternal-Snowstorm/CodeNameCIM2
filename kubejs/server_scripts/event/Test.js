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
		}
	}
})
let $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI")
let $Character = Java.loadClass("java.lang.Character")
// // 结构所需的方块
// let needBlocks = {
// 	A: Block.getBlock("create:andesite_alloy_block"),
// 	B: Block.getBlock("minecraft:sculk_shrieker"),
// 	C: Block.getBlock("minecraft:obsidian")
// }

// // 定义结构(0代表中心方块, 所以是必须的)
// function TestMultiblock() {
// 	return $PatchouliAPI.get().makeMultiblock([
// 		["   ", "   ", "   "],
// 		["   ", " 0 ", "   "],
// 		["AAA", "ACA", "AAA"]
// 	], [
// 		new $Character("A"), needBlocks.A,
// 		new $Character("0"), needBlocks.B,
// 		new $Character("C"), needBlocks.C
// 	])
// }

BlockEvents.rightClicked("minecraft:sculk_shrieker", (event) => {
	let { block, level, player } = event

	let defineStructure = defineMultiBlockStructure([
		["   ", " 0 ", "   "],
		["AAA", "ACA", "AAA"]
	])
		.where("A", "create:andesite_alloy_block")
		.where("0", "minecraft:sculk_shrieker")
		.where("C", "minecraft:obsidian")
		.build()

	let structure = defineStructure.validate(level, block.pos)
	if (structure === null) {
		return
	}

	player.tell(Component.literal("哇袄!!!"))
})