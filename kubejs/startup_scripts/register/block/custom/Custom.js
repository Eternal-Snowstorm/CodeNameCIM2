let $BlockBehaviour$Properties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
let $CastingTankBlock = Java.loadClass("slimeknights.tconstruct.smeltery.block.CastingTankBlock")
let $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")
let $InteractionResult = Java.loadClass("net.minecraft.world.InteractionResult")

// let fluidTankProperty = $BlockBehaviour$Properties.of()
// 	.strength(5.0, 5.0)
// 	.sound(SoundType.METAL)
// 	.noOcclusion()

// StartupEvents.registry("block", (event) => {
// 	event.createCustom(`${global.namespace}:bronze_fluid_tank`, () => {
// 		return new JavaAdapter($CastingTankBlock, {
// 			getCapacity() {
// 				return 10000
// 			}
// 		}, fluidTankProperty)
// 	})
// })

// StartupEvents.registry("item", (event) => {
// 	event.createCustom(`${global.namespace}:bronze_fluid_tank`, () => {
// 		let getBlockId = Block.getBlock(`${global.namespace}:bronze_fluid_tank`)
// 		return new $BlockItem(getBlockId, new $Item$Properties())
// 	})
// })