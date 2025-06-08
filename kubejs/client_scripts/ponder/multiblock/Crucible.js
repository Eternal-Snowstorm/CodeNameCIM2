Ponder.registry((event) => {
	event.create([
		"immersiveindustry:crucible",
		"immersiveindustry:burning_chamber",
		"immersiveengineering:blastfurnace_preheater",
		"immersiveengineering:blastbrick",
		"cmi:crucible_base",
		"cmi:crucible_tuyere"
	]).scene("cmi:usage", "Crucible Usage", "cmi:multiblock/crucible_usage", (scene) => {
		scene.showBasePlate()
		scene.idle(20)

		scene.world.showSection([5, 1, 0], Direction.DOWN)
		scene.world.showSection([1, 1, 2, 3, 4, 4], Direction.DOWN)
		scene.idle(20)

		// 预热器安装在这里
		scene.text(40, "Install Preheater here", [2.5, 1, 1.5])
		scene.idle(20)

		scene.world.showSection([2, 1, 1, 2, 4, 1], Direction.SOUTH)
		scene.idle(20)

		// 同时必须提供能量
		scene.text(40, "Power must be provided here", [2.5, 4.5, 1.5])
		scene.idle(40)

		scene.addKeyframe()

		// 你可以使用GUI或使用自动输入
		scene.text(40, "You can either use GUI or automation input")
		scene.idle(40)

		scene.addKeyframe()

		scene.addKeyframe()

		// 配料可以从顶部输入进坩埚
		scene.text(40, "Ingredients can also insert into crucible on the top", [2.5, 5.5, 2.5])
		scene.world.showSection([2, 5, 2], Direction.DOWN)
		scene.idle(50)

		scene.addKeyframe()
		scene.rotateCameraY(90)
		scene.idle(20)
		scene.world.showSection([4, 1, 0, 5, 2, 5], Direction.WEST)

		// 焦炭煤可以输入燃烧室
		scene.text(40, "Coke coal can insert to the burners", [4.5, 1.5, 3.5])
		let coalCokeItem = scene.world.createItemEntity([4.5, 3, 3.5], Direction.DOWN, "immersiveengineering:coal_coke")
		scene.idle(9)
		scene.world.removeEntity(coalCokeItem)
		scene.idle(40)

		scene.addKeyframe()
		scene.world.showSection([5, 3, 4, 4, 4, 3], Direction.WEST)

		// 产物可以从坩埚侧面输出
		scene.text(40, "Products can be extracted from sides of the crucible part", [4.5, 4.5, 3.5])
		scene.idle(20)
		scene.world.createItemOnBelt([4, 3, 3], Direction.UP, "tconstruct:steel_ingot")
		scene.idle(40)
	})
})