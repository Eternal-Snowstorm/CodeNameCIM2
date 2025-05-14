Ponder.registry((event) => {
	event.create("ae2:drive")
		.scene("ae2:drive", "ME Drive", "ue_addons:ae2/standard_floor", (scene) => {
			scene.showBasePlate()
			scene.idle(20)

			scene.world().setBlocks([4, 1, 4], "ae2:drive")
			scene.world().showSection([4, 1, 4], Direction.DOWN)
			scene.idle(20)

			// 这是一个ME驱动器
			scene.text(30, "This is an ME Drive", [4.5, 1.5, 4.5])
			scene.idle(50)

			// 它为ME网络提供储存空间
			scene.text(40, "It provides storage space for the ME system", [4.5, 1.5, 4.5])
			scene.idle(60)
			scene.addKeyframe()

			// 放入存储元件以提供存储空间
			scene.text(100, "Place Storage Cells into the drive to provide storage space", [4.5, 1.5, 4.5])
			scene.showControls(20, [4.5, 2, 4.5], "down")
				.rightClick()
			scene.idle(30)
			scene.showControls(20, [4.5, 2, 4.5], "down")
				.withItem("ae2:item_storage_cell_1k")
			scene.idle(30)
			scene.showControls(20, [4.5, 2, 4.5], "down")
				.withItem("ae2:fluid_storage_cell_1k")
			scene.idle(30)
			scene.showControls(20, [4.5, 2, 4.5], "down")
				.withItem("ae2:spatial_storage_cell_2")
			scene.idle(20)
			scene.addKeyframe()

			// ME驱动器需要接入ME网络才能工作
			scene.text(40, "ME Drives should be connected to ME network to function", [4.5, 1.5, 4.5])
			scene.idle(60)
			scene.world().hideSection([4, 1, 4], Direction.UP)
			scene.idle(20)
			scene.world().setBlocks([4, 1, 4], "ae2:controller", false)
			scene.world().setBlocks([4, 2, 4], "ae2:drive", false)
			scene.world().setBlocks([3, 1, 4], "ae2:creative_energy_cell", false)
			scene.world().showSection([3, 1, 4, 4, 2, 4], Direction.DOWN)
			scene.idle(40)
			scene.world().modifyBlock([4, 1, 4], (state) => state.with("state", "online"), false)
		})
})