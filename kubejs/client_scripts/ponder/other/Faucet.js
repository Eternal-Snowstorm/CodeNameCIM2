Ponder.registry((event) => {
	event.create("supplementaries:faucet")
		.scene("ue_addons:faucet", "Use of faucets", "ue_addons:other/faucet", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.8)

			scene.addKeyframe()
			scene.world.setBlocks([3, 1, 4], "supplementaries:faucet")
			scene.world.showSection([3, 1, 4], Direction.DOWN)
			// 水龙头是一种特殊的物流物品
			scene.text(40, "Faucet is a special kind of logistics item", [3, 2, 4])
			scene.idle(60)
			scene.world.setBlocks([3, 1, 4], "minecraft:air", true)
			scene.idle(40)

			scene.world.showSection([0, 1, 0, 9, 6, 9], Direction.DOWN)
			scene.idle(40)
			scene.addKeyframe()

			// 它可以将它所附着的方块的流体传输至它下方的方块
			scene.text(40, "It can transfer fluid from the block it is attached to to the block below it")
			scene.idle(60)
			// 它能传输容器中的流体
			scene.text(120, "It can transfer the fluid in the container", [5.5, 2.5, 1])
			scene.overlay.showOutline("green", { "glue": true }, [5, 2, 1, 5, 2, 1], 120)
			scene.idle(40)
			// 含水方块中的水
			scene.text(80, "The water within the water-containing block", [5.5, 2.5, 4])
			scene.overlay.showOutline("green", { "glue": true }, [5, 2, 4, 5, 2, 4], 80)
			scene.idle(40)
			// 甚至是世界上的流体!
			scene.text(40, "Even the fluid in the world!", [5.5, 4.5, 7])
			scene.overlay.showOutline("green", { "glue": true }, [5, 4, 7, 5, 4, 7], 40)
			scene.idle(30)
			scene.addKeyframe()
			scene.idle(30)
			// 你可以右键它来开启或关闭输出
			scene.text(60, "You can R-Click it to turn the output on or off")
			scene.showControls(20, [4.5, 3, 1], "down")
				.rightClick()
			scene.world.modifyBlock([4, 2, 1], (state) => state.with("enabled", "true"), false)

			scene.idle(10)
			scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
				nbt.InputTanks = [{
					Level: {
						Speed: 0.25,
						Target: 0.25,
						Value: 0.0
					},
					TankContent: {
						Amount: 250,
						FluidName: "minecraft:lava"
					}
				},
				{
					Level: {
						Speed: 0.25,
						Target: 0.0,
						Value: 0.0
					},
					TankContent: {
						Amount: 0,
						FluidName: "minecraft:empty"
					}
				}]
			})
			scene.idle(10)
			scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
				nbt.InputTanks = [{
					Level: {
						Speed: 0.25,
						Target: 0.5,
						Value: 0.25
					},
					TankContent: {
						Amount: 500,
						FluidName: "minecraft:lava"
					}
				},
				{
					Level: {
						Speed: 0.25,
						Target: 0.0,
						Value: 0.0
					},
					TankContent: {
						Amount: 0,
						FluidName: "minecraft:empty"
					}
				}]
			})

			scene.showControls(20, [4.5, 3, 4], "down")
				.rightClick()

			scene.world.modifyBlock([4, 2, 4], (state) => state.with("enabled", "true"), false)
			scene.idle(10)
			scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
				nbt.InputTanks = [{
					Level: {
						Speed: 0.25,
						Target: 0.75,
						Value: 0.5
					},
					TankContent: {
						Amount: 750,
						FluidName: "minecraft:lava"
					}
				},
				{
					Level: {
						Speed: 0.25,
						Target: 0.0,
						Value: 0.0
					},
					TankContent: {
						Amount: 0,
						FluidName: "minecraft:empty"
					}
				}]
			})
			scene.world.setBlock([4, 1, 4], "minecraft:water_cauldron", false)
			scene.world.modifyBlock([4, 1, 4], (state) => state.with("level", "3"), false)
			scene.idle(10)
			scene.world.modifyBlockEntityNBT([4, 1, 1], (nbt) => {
				nbt.InputTanks = [{
					Level: {
						Speed: 0.25,
						Target: 1.0,
						Value: 0.75
					},
					TankContent: {
						Amount: 1000,
						FluidName: "minecraft:lava"
					}
				}, {
					Level: {
						Speed: 0.25,
						Target: 0.0,
						Value: 0.0
					},
					TankContent: {
						Amount: 0,
						FluidName: "minecraft:empty"
					}
				}]
			})

			scene.showControls(20, [4.5, 5, 7], "down")
				.rightClick()
			scene.world.modifyBlock([4, 4, 7], (state) => state.with("enabled", "true"), false)
			scene.world.setBlock([5, 4, 7], "air", true)
			scene.world.modifyBlockEntityNBT([4, 3, 7], (nbt) => {
				nbt.Tanks = [{
					Level: {
						Speed: 0.25,
						Target: 1.0,
						Value: 1.0
					},
					TankContent: {
						Amount: 1000,
						FluidName: "createaddition:seed_oil"
					}
				}]
			})
			scene.idle(20)
			scene.addKeyframe()
			scene.idle(20)
			// 特别的, 你还可以用它来运输容器中的物品! 不过这种方式的运输效率并算特别高, 但是在一些特殊场合却非常好用!
			scene.text(120, "You can also use it to transport items in containers! However, the transportation efficiency of this method is not very high, but it is very useful in some special occasions!")
			scene.overlay.showOutline("green", { "glue": true }, [1, 1, 3, 1, 2, 5], 60)
		})
})
/**
 * By 史莱姆li
 */