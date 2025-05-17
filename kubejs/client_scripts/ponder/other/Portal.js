Ponder.registry((event) => {
	event.create([
		"portality:controller",
		"portality:frame",
		"portality:module_items",
		"portality:module_fluids",
		"portality:module_energy",
		"portality:module_interdimensional"
	]).scene("ue_addons:portal_controller", "Setting Up a Portal", "ue_addons:other/portal", (scene) => {
		scene.showBasePlate()
		scene.idle(20)

		// 这是一个传送门控制器
		let controllerSection = scene.world.showIndependentSection([4, 1, 7], Direction.DOWN)
		scene.world.moveSection(controllerSection, [0, 0, -4], 0)
		scene.idle(20)
		scene.text(40, "This is a Portal Controller", [4.5, 1.5, 3.5])
		scene.idle(60)

		// 传送门都是以控制器为核心建立的
		scene.text(40, "Portals are all set up based on a Controller", [4.5, 1.5, 3.5])
		scene.idle(60)
		scene.addKeyframe()

		// 控制器必须在传送门底部的中心
		scene.text(40, "The Controller must be at the centre of the bottom side", [4.5, 1.5, 3.5])
		scene.idle(60)
		scene.world.hideIndependentSection(controllerSection, Direction.UP)
		scene.idle(20)
		let frameworkSection = scene.world.showIndependentSection([2, 1, 7, 6, 5, 7], Direction.DOWN)
		scene.world.moveSection(frameworkSection, [0, 0, -4], 0)
		scene.idle(40)

		// 传送门大小最小为3x3
		scene.text(40, "The inner space of the Portal must be at least 3x3", [4.5, 1.5, 3.5])
		scene.idle(60)

		// 深度最低为3格
		scene.text(40, "With at least 3 blocks' depth", [4.5, 1.5, 3.5])
		scene.idle(60)
		scene.world.hideIndependentSection(frameworkSection, Direction.UP)
		scene.idle(20)
		scene.world.showSection([2, 1, 3, 6, 5, 5], Direction.DOWN)
		scene.idle(20)

		// 向传送门输入FE电力，并在GUI中拨号另一个传送门以相连
		scene.text(40, "Provide FE energy to the Controller and link another Portal in GUI", [4.5, 1.5, 3.5])
		scene.world.showSection([4, 1, 1, 4, 1, 2], Direction.DOWN)
		scene.idle(60)
		scene.addKeyframe()

		// 传送门支持物品、流体与能量的远程传输
		scene.text(80, "Portals support item, fluid and energy transmission", [4.5, 1.5, 3.5])
		scene.world.setBlocks([3, 1, 3], "portality:module_items")
		scene.world.setBlocks([2, 2, 3], "portality:module_fluids")
		scene.world.setBlocks([5, 1, 3], "portality:module_energy")
		scene.idle(100)

		// 目标传送门的对应传输模块需在GUI右下角设定为输出模式
		scene.text(80, "Modules that recieves transmission should be set to Output Mode in GUI", [4.5, 1.5, 3.5])
		scene.world.modifyBlock([3, 1, 3], (state) => state.with("input", "false"), false)
		scene.world.modifyBlock([2, 2, 3], (state) => state.with("input", "false"), false)
		scene.world.modifyBlock([5, 1, 3], (state) => state.with("input", "false"), false)
		scene.idle(100)

		// 要激活传送门的跨维度传输，需要在传送门内加入一个多维度交互模块
		scene.text(80, "Activate interDimentional transmission of a Portal with an Interdimentional Modual", [6.5, 2.5, 3.5])
		scene.world.setBlocks([6, 2, 3], "portality:module_interdimensional")
		scene.idle(100)
	})
})