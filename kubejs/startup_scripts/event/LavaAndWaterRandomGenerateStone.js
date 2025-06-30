let $BlockEvent$FluidPlaceBlockEvent =
	Java.loadClass("net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent")
let $PipeCollisionEvent$Spill =
	Java.loadClass("com.simibubi.create.api.event.PipeCollisionEvent$Spill")

// 定义可替换的方块列表
let replaceBlocks = [
	"minecraft:calcite",
	"minecraft:tuff",
	"minecraft:dripstone_block",
	"minecraft:granite",
	"minecraft:diorite",
	"minecraft:andesite",
	"minecraft:stone",
	"minecraft:deepslate"
]
RegisterNativeEvents($BlockEvent$FluidPlaceBlockEvent, (event) => {
	let block = event.getNewState().getBlock()

	if (block.id === "minecraft:cobblestone") {
		// 50%概率生成安山岩
		if (Math.random() < 0.5) {
			event.setNewState(Block.getBlock("minecraft:andesite").defaultBlockState())
		} else {
			// 剩余50%概率随机选择列表中的方块
			let randomIndex = Math.floor(Math.random() * replaceBlocks.length)
			let randomBlock = replaceBlocks[randomIndex]
			event.setNewState(Block.getBlock(randomBlock).defaultBlockState())
		}
	}
})

RegisterNativeEvents($PipeCollisionEvent$Spill, (event) => {
	let block = event.getState().block

	if (block.id === "minecraft:stone") {
		// 50%概率生成安山岩
		if (Math.random() < 0.5) {
			event.setState(Block.getBlock("minecraft:andesite").defaultBlockState())
		} else {
			// 剩余50%概率随机选择列表中的方块
			let randomIndex = Math.floor(Math.random() * replaceBlocks.length)
			let randomBlock = replaceBlocks[randomIndex]
			event.setState(Block.getBlock(randomBlock).defaultBlockState())
		}
	}
})