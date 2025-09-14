Ponder.registry((event) => {
	event.create([
		"cmi:water_pump",
		"minecraft:water_bucket"
	]).scene("cmi:water_pump", "Water Pump", "cmi:multiblock/water_pump", (scene) => {
		scene.showBasePlate()
		scene.idle(20)
		scene.scaleSceneView(0.8)

		scene.addKeyframe()
		let move0 = scene.world.showIndependentSection([4, 1, 2], Direction.WEST)
		scene.world.moveSection(move0, [-2, 0, 0], 0)
		scene.idle(20)
		scene.overlay.showOutline("blue", {}, [2, 1, 2], 90)
		// 如果想要使用水井
		scene.text(40, "If you want to use the water pump", [2, 1.5, 2])
		scene.idle(45)
		// 你需要先搭建一个完整的结构
		scene.text(40, "You need to build a complete structure first", [2, 1.5, 2])
		scene.idle(50)
		scene.world.hideIndependentSection(move0, Direction.UP)
		scene.idle(20)

		scene.addKeyframe()
		let block1 = [
			[3, 1, 3], [2, 1, 3], [1, 1, 3],
			[3, 1, 2], [1, 1, 2],
			[3, 1, 1], [2, 1, 1], [1, 1, 1]
		]
		block1.forEach((pos) => {
			scene.world.showSection(pos, Direction.DOWN)
			scene.idle(2)
		})
		scene.idle(20)

		scene.addKeyframe()
		let block2 = [
			[3, 2, 3], [1, 2, 3],
			[3, 2, 1], [1, 2, 1],

			[3, 3, 3], [1, 3, 3],
			[3, 3, 1], [1, 3, 1]
		]
		block2.forEach((pos) => {
			scene.world.showSection(pos, Direction.DOWN)
			scene.idle(2)
		})
		scene.idle(20)

		scene.addKeyframe()
		let block3 = [
			[3, 4, 3], [2, 4, 3], [1, 4, 3],
			[3, 4, 2], [1, 4, 2],
			[3, 4, 1], [2, 4, 1], [1, 4, 1]
		]
		block3.forEach((pos) => {
			scene.world.showSection(pos, Direction.DOWN)
			scene.idle(2)
		})
		scene.idle(20)
		// 4个朝内的楼梯
		scene.text(40, "4 inward facing stairs")
		let positions = [
			[2, 4, 1],
			[3, 4, 2],
			[2, 4, 3],
			[1, 4, 2]
		]
		positions.forEach((pos) => {
			scene.overlay.showOutline("blue", {}, pos, 50)
		})
		scene.idle(50)
		// 最后放上机器本体
		scene.text(40, "Finally, put on the machine body")
		scene.world.showSection([2, 1, 2], Direction.DOWN)
		scene.idle(40)

		scene.addKeyframe()
		// 在结构搭建好后便可以用管道抽水了
		scene.text(40, "After the structure is built, the pipeline can be used to pump water")
		scene.idle(45)

		let move1 = [
			[3, 4, 3], [2, 4, 3], [1, 4, 3],
			[3, 4, 2], [1, 4, 2],
			[3, 4, 1], [2, 4, 1], [1, 4, 1]
		]
		move1.forEach((pos) => {
			scene.world.hideSection(pos, Direction.UP)
		})
		scene.idle(20)

		let block4 = [
			[1, 2, 2],
			[0, 2, 1],
			[2, 2, 2],
			[2, 3, 2],
			[2, 4, 2],
			[3, 5, 1, 1, 8, 3]
		]
		block4.forEach((pos) => {
			scene.world.showSection(pos, Direction.DOWN)
			scene.idle(5)
		})
		scene.world.showSection([3, 4, 1, 1, 4, 3], Direction.UP)
		scene.idle(20)
	})

	// 海水
	event.create([
		"cmi:water_pump",
		"cmi:sea_water_bucket"
	]).scene("cmi:sea_water", "抽取海水", "cmi:multiblock/sea_water", (scene) => {
		scene.scaleSceneView(0.5)
		scene.idle(20)

		let inde1 =
			scene.world.showIndependentSection([1, 3, 3, 3, 3, 1], Direction.DOWN)
		let inde2 =
			scene.world.showIndependentSection([1, 6, 3, 3, 6, 1], Direction.DOWN)
		let inde3 =
			scene.world.showIndependentSection([1, 3, 3, 1, 6, 1], Direction.DOWN)
		let inde4 =
			scene.world.showIndependentSection([1, 3, 1, 3, 6, 1], Direction.DOWN)

		scene.idle(20)

		scene.addKeyframe()
		scene.overlay.showOutline("blue", {}, [1, 3, 3, 3, 6, 1], 40)
		scene.text(40, "如你所见, 这是一台水井")
		scene.idle(55)
		scene.world.hideIndependentSection(inde1, Direction.UP)
		scene.world.hideIndependentSection(inde2, Direction.UP)
		scene.world.hideIndependentSection(inde3, Direction.UP)
		scene.world.hideIndependentSection(inde4, Direction.UP)
		scene.idle(20)
		scene.world.showSection([0, 0, 0, 6, 6, 6], Direction.DOWN)
		scene.idle(20)

		scene.addKeyframe()
		scene.overlay.showOutline("blue", {}, [1, 3, 3, 3, 6, 1], 50)
		scene.text(50, "当其处在海洋群系的海平面上时...(Y=62)", [2, 4.5, 2])
		scene.idle(65)
		scene.addKeyframe()
		scene.overlay.showOutline("blue", {}, [4, 4, 4, 6, 6, 6], 50)
		scene.text(50, "抽出来的水就是海水了", [5, 5, 5])
		scene.idle(65)
	})
})