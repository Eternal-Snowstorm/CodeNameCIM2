Ponder.registry((event) => {
	event.create("mekanism:cardboard_box")
		.scene("cmi:cardboard_box", "Container", (scene) => {
			let cardboardBox = "mekanism:cardboard_box"

			scene.showStructure(0)
			scene.idle(25)

			scene.addKeyframe()

			// 集装箱可以用于方块的转移
			scene.world.setBlocks([2, 1, 2], cardboardBox)
			let hide = scene.world.showIndependentSection([2, 1, 2], Direction.DOWN)
			scene.text(40, "Containers can be used for the transfer of block", [2, 1.5, 2])
			scene.idle(50)

			// 接下来我们演示一个例子
			scene.text(40, "Next we will demonstrate an example", [2, 1.5, 2])
			scene.idle(50)
			scene.world.hideIndependentSection(hide, Direction.UP)
			scene.idle(30)

			scene.addKeyframe()
			scene.world.setBlocks([2, 1, 2], "minecraft:spawner", false)
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.idle(20)

			// 这是一个刷怪笼
			scene.text(40, "This is a spawner", [2, 1.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 1, 2, 2, 1, 2], 40)
			scene.idle(50)

			scene.addKeyframe()
			// 拿集装箱右键一下...
			scene.text(40, "Use the container R-Click...")
			scene.idle(50)
			scene.showControls(20, [2, 2.5, 2], "down")
				.rightClick()
				.withItem(cardboardBox)
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], cardboardBox, false)
			scene.world.modifyBlock([2, 1, 2], (state) => state.with("storage", "true"), false)
			scene.idle(20)
			// 它就被集装箱包住了
			scene.text(40, "It's wrapped in a container", [2, 1.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 1, 2, 2, 1, 2], 40)
			scene.idle(50)
			// 此时你可以挖掉集装箱, 把它带到任何地方
			scene.text(40, "Next you can dig up the container and take it anywhere")
			scene.idle(60)
			scene.showControls(30, [2, 2.5, 2], "DOWN")
				.leftClick()
				.withItem("minecraft:netherite_pickaxe")
			scene.world.setBlocks([2, 1, 2], "minecraft:air")
			let containerItem = scene.world.createItemEntity([2.5, 1.5, 2.5], Direction.DOWN, cardboardBox)
			scene.idle(40)
			scene.world.removeEntity(containerItem)
			scene.idle(20)

			scene.addKeyframe()
			// 潜行+右键取掉集装箱
			scene.text(40, "Sneaking + R-Click to remove the container", [2, 1.5, 2])
			scene.world.setBlocks([2, 1, 2], cardboardBox)
			scene.world.modifyBlock([2, 1, 2], (state) => state.with("storage", "true"), false)
			scene.overlay.showOutline("blue", {}, [2, 1, 2, 2, 1, 2], 40)
			scene.idle(50)
			scene.showControls(20, [2, 2.5, 2], "DOWN")
				.rightClick()
				.whileSneaking()
			scene.idle(20)

			scene.world.setBlocks([2, 1, 2], "minecraft:air", false)
			let containerItem2 = scene.world.createItemEntity([2.5, 1.5, 2.5], Direction.DOWN, cardboardBox)
			scene.idle(20)
			scene.world.removeEntity(containerItem2)
			scene.idle(20)

			scene.addKeyframe()
			// 但是...
			scene.text(40, "But...")
			scene.world.setBlocks([2, 1, 2], "cmi:moon_platinum_ore_node")
			scene.world.setBlocks([1, 1, 2], "cmi:moon_platinum_ore")
			scene.world.setBlocks([3, 1, 1], "cmi:moon_platinum_ore")
			scene.world.setBlocks([2, 1, 3], "cmi:raw_platinum_block")
			scene.world.showIndependentSectionImmediately([3, 1, 1, 1, 1, 3])
			scene.idle(50)
			scene.text(60, "There is also a part of Block(s) that cannot be wrapped in containers")
			scene.idle(70)
			scene.showControls(20, [2, 2.5, 2], "DOWN")
				.rightClick()
				.withItem("minecraft:barrier")
			scene.idle(20)
		})
})