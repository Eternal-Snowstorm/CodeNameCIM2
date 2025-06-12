Ponder.registry((event) => {
	// 频道
	event.create("ae2:fluix_glass_cable")
		.scene("ae2:cable", "Cables", "cmi:ae2/cables", (scene) => {
			scene.showBasePlate()
			scene.idle(20)

			scene.world.showSection([1, 1, 3, 7, 1, 3], Direction.DOWN)
			scene.world.showSection([2, 1, 5, 7, 1, 5], Direction.DOWN)
			scene.world.showSection([4, 1, 4], Direction.DOWN)
			scene.idle(20)

			// 除了粗线缆和细线缆以外
			scene.text(40, "Except the thick and thin cables", [4.5, 1.5, 4.5])
			scene.idle(60)

			// AE2还有三种特殊的线缆
			scene.text(40, "There are 3 more types of cable bus in AE2", [4.5, 1.5, 4.5])
			scene.idle(60)
			scene.addKeyframe()

			// 石英纤维可以在ME网络之间传输能量，不会干扰网络频道
			scene.showControls(80, [4.5, 2, 4.5], "down")
				.withItem("ae2:quartz_fiber")
			scene.overlay.showOutline("red", {}, [4, 1, 4], 60)
			scene.text(80, "Quartz fiber can transmit energy between ME networks without impacting channels", [4.5, 1.5, 4.5])
			scene.idle(100)
			scene.addKeyframe()

			// 触发总线和反向触发总线可以调节设备在线状态
			scene.showControls(80, [6.5, 2, 3.5], "down")
				.withItem("ae2:toggle_bus")
			scene.overlay.showOutline("red", {}, [6, 1, 3], 60)
			scene.showControls(80, [6.5, 2, 5.5], "down")
				.withItem("ae2:inverted_toggle_bus")
			scene.overlay.showOutline("green", {}, [6, 1, 5], 60)
			scene.text(80, "Toggle Bus and Inverted Toggle Bus can switch connection of devices to ME system", [4.5, 1.5, 4.5])
			scene.idle(100)

			// 现在上面的设备在线而下面的设备离线
			scene.text(40, "Now the device above is online while the device below is offline", [6.5, 2, 4.5])
			scene.showControls(40, [7.5, 2, 5.5], "down")
				.withItem("minecraft:redstone_torch")
			scene.showControls(40, [7.5, 2, 3.5], "down")
				.withItem("minecraft:barrier")
			scene.idle(60)

			// 如果在这里放一个红石信号……
			scene.text(40, "If a redstone signal comes here...", [6.5, 2, 4.5])
			scene.idle(60)
			scene.world.setBlocks([6, 1, 4], "minecraft:redstone_block")
			scene.world.showSection([6, 1, 4], Direction.DOWN)
			scene.idle(40)

			// 那么上面的设备就下线了，而下面的设备就上线了
			scene.text(40, "Now the device below is online while the device above is offline", [6.5, 2, 4.5])
			scene.showControls(40, [7.5, 2, 3.5], "down")
				.withItem("minecraft:redstone_torch")
			scene.showControls(40, [7.5, 2, 5.5], "down")
				.withItem("minecraft:barrier")
			scene.idle(60)
		})

	// AE2特殊线缆
	event.create("ae2:fluix_glass_cable")
		.scene("ae2:channel", "Channels", "cmi:ae2/channels", (scene) => {
			scene.showBasePlate()
			scene.idle(20)

			scene.world.showSection([1, 1, 2, 7, 1, 5], Direction.DOWN)

			// 频道对于ME网络非常重要
			scene.text(40, "Channels are essential to ME Networks")
			scene.idle(60)
			scene.addKeyframe()

			// 致密线缆可以传输32个频道
			scene.text(40, "Thick cables could transmit 32 channels", [4.5, 1.5, 3.5])
			scene.idle(60)

			// 而普通线缆只能传输8个频道
			scene.text(40, "While thin cables transmit only 8 channels", [3.5, 1.5, 3.5])
			scene.idle(60)
			scene.addKeyframe()
			scene.world.setBlocks([7, 2, 3], "ae2:drive")
			scene.world.showSection([7, 2, 3], Direction.DOWN)

			// 如果一段线缆频道数达到上限
			scene.text(40, "If a cable is overloaded", [3.5, 1.5, 3.5])
			scene.idle(60)

			// 这段线缆就不能传输更多的频道了
			scene.text(40, "No more channels can go through this cable", [3.5, 1.5, 3.5])
			scene.idle(60)

			// 这很可能会使AE设备掉线
			scene.text(40, "This may cause some devices go offline", [7.5, 2.5, 3.5])
			scene.showControls(40, [7.5, 3, 3.5], "down")
				.withItem("minecraft:barrier")
			scene.idle(60)

		})
})