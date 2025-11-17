let $BlockEvent$FluidPlaceBlockEvent =
	Java.loadClass("net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent")
let $PipeCollisionEvent$Spill =
	Java.loadClass("com.simibubi.create.api.event.PipeCollisionEvent$Spill")

// Random fallback blocks when generation doesn't match main rule
const RANDOM_BLOCKS = ["minecraft:cobblestone", "minecraft:cobbled_deepslate"]
// 50% chance to use the "generate" block
const CHANCE = 0.5

// Rules: [conditionBelowBlock(s), resulting block]
let replaceBlock = [
	["minecraft:magma_block", "minecraft:tuff"],
	[["minecraft:soul_sand", "minecraft:soul_soil"], "minecraft:basalt"],
	["create:andesite_alloy_block", "minecraft:andesite"],
	["minecraft:quartz_block", "minecraft:diorite"]
]

// Check if the block below matches condition (single or array)
function isMatch(belowBlockId, condition) {
	if (Array.isArray(condition)) {
		return condition.includes(belowBlockId)
	}
	return belowBlockId === condition
}

// Handle liquid placing a block (vanilla-like cobble gen)
RegisterForgeEvents.onEvent($BlockEvent$FluidPlaceBlockEvent, (event) => {
	let getBlock = event.getNewState().getBlock()
	let pos = event.getPos()
	let level = event.level
	let belowBlock = level.getBlockState(pos.below()).getBlock()

	replaceBlock.forEach(([condition, generate]) => {
		// Only replace when the generated block is cobble/stone
		if ((getBlock.id === "minecraft:cobblestone" || getBlock.id === "minecraft:stone") &&
			isMatch(belowBlock.id, condition)) {

			// Decide final block (main generate block or random fallback)
			let newBlockId = Math.random() < CHANCE
				? generate
				: RANDOM_BLOCKS[Math.floor(Math.random() * RANDOM_BLOCKS.length)]

			event.setNewState(Block.getBlock(newBlockId).defaultBlockState())
		}
	})
})

// Handle Create mod's fluid spill block generation
RegisterForgeEvents.onEvent($PipeCollisionEvent$Spill, (event) => {
	let getBlock = event.getState().block
	let pos = event.getPos()
	let level = event.level
	let belowBlock = level.getBlockState(pos.below()).getBlock()

	replaceBlock.forEach(([condition, generate]) => {
		// Same logic: only override default cobble/stone generation
		if ((getBlock.id === "minecraft:cobblestone" || getBlock.id === "minecraft:stone") &&
			isMatch(belowBlock.id, condition)) {

			let newBlockId = Math.random() < CHANCE
				? generate
				: RANDOM_BLOCKS[Math.floor(Math.random() * RANDOM_BLOCKS.length)]

			event.setState(Block.getBlock(newBlockId).defaultBlockState())
		}
	})
})