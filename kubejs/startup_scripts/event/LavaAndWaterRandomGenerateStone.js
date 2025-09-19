let $BlockEvent$FluidPlaceBlockEvent =
	Java.loadClass("net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent")
let $PipeCollisionEvent$Spill =
	Java.loadClass("com.simibubi.create.api.event.PipeCollisionEvent$Spill")

const RANDOM_BLOCKS = ["minecraft:cobblestone", "minecraft:cobbled_deepslate"]
const CHANCE = 0.5

let replaceBlock = [
	// Example
	[["minecraft:sand", "minecraft:red_sand"], "minecraft:sandstone"],
	["minecraft:magma_block", "minecraft:tuff"],
	[["minecraft:soul_sand", "minecraft:soul_soil"], "minecraft:basalt"],
	["create:andesite_alloy_block", "minecraft:andesite"],
	["minecraft:quartz_block", "minecraft:diorite"],
	["thermal:raw_silver_block", "thermal:silver_ore"]
]

function isMatch(belowBlockId, condition) {
	if (Array.isArray(condition)) {
		return condition.includes(belowBlockId)
	}
	return belowBlockId === condition
}

RegisterNativeEvents.onEvent($BlockEvent$FluidPlaceBlockEvent, (event) => {
	let getBlock = event.getNewState().getBlock()
	let pos = event.getPos()
	let level = event.level
	let belowBlock = level.getBlockState(pos.below()).getBlock()

	replaceBlock.forEach(([condition, generate]) => {
		if ((getBlock.id === "minecraft:cobblestone" || getBlock.id === "minecraft:stone") && isMatch(belowBlock.id, condition)) {
			let newBlockId = Math.random() < CHANCE
				? generate
				: RANDOM_BLOCKS[Math.floor(Math.random() * RANDOM_BLOCKS.length)]

			event.setNewState(Block.getBlock(newBlockId).defaultBlockState())
		}
	})
})

RegisterNativeEvents.onEvent($PipeCollisionEvent$Spill, (event) => {
	let getBlock = event.getState().block
	let pos = event.getPos()
	let level = event.level
	let belowBlock = level.getBlockState(pos.below()).getBlock()

	replaceBlock.forEach(([condition, generate]) => {
		if ((getBlock.id === "minecraft:cobblestone" || getBlock.id === "minecraft:stone") && isMatch(belowBlock.id, condition)) {
			let newBlockId = Math.random() < CHANCE
				? generate
				: RANDOM_BLOCKS[Math.floor(Math.random() * RANDOM_BLOCKS.length)]

			event.setState(Block.getBlock(newBlockId).defaultBlockState())
		}
	})
})