Ponder.registry((event) => {
	event.create([
		"tconstruct:smeltery_controller",
		"tconstruct:seared_fuel_tank",
		"tconstruct:seared_drain",
		"tconstruct:seared_bricks"
	]).scene("ue_addons:smeltery", "Smeltery", "ue_addons:tconstruct/smeltery", (scene) => {
		scene.showBasePlate()
		scene.idle(20)
		scene.scaleSceneView(0.7)

		scene.world.showSection([5, 1, 3, 3, 1, 5], Direction.DOWN)
		scene.idle(20)
		scene.text(60, "The bottom consists of a maximum of 11x11\nRectangular Seared Bricks composition", [3, 3, 3])
		scene.overlay.showOutline("green", {}, [5, 1, 3, 3, 1, 5], 60)
		scene.idle(60)

		scene.world.showSection([5, 2, 2, 3, 2, 2], Direction.SOUTH)
		scene.text(35, "Put the second layer in any direction\nFuel Tank\nSmeltery Controller\nSeared Drain")
			.attachKeyFrame()
		scene.idle(30)
		scene.overlay.showOutline("blue", {}, [5, 2, 2], 30)
		scene.text(20, "Fuel Tank", [5.5, 2.5, 2])
			.placeNearTarget()
		scene.idle(30)
		scene.overlay.showOutline("blue", {}, [4, 2, 2], 30)
		scene.text(20, "Smeltery Controller", [4.5, 2.5, 2])
			.placeNearTarget()
		scene.idle(30)
		scene.overlay.showOutline("blue", {}, [3, 2, 2], 30)
		scene.text(20, "Seared Drain", [3.5, 2.5, 2])
			.placeNearTarget()
		scene.idle(40)

		scene.text(30, "The rest of the surface we fill with bricks\nAt the same time, put faucet in front of drain.")
			.attachKeyFrame()

		let bricks = [
			[2, 2, 3], [2, 2, 4], [2, 2, 5],
			[3, 2, 6], [4, 2, 6], [5, 2, 6],
			[6, 2, 5], [6, 2, 4], [6, 2, 3]
		]
		for (let block of bricks) {
			scene.world.showSection(block, Direction.DOWN)
			scene.idle(2)
		}
		scene.idle(20)

		scene.world.showSection([2, 2, 2], Direction.EAST)
		scene.world.showSection([3, 2, 1], Direction.SOUTH)
		scene.idle(10)
		scene.world.showSection([2, 1, 2], Direction.DOWN)
		scene.world.showSection([3, 1, 1], Direction.DOWN)
		scene.idle(40)

		scene.text(30, "In addition, we can also use bricks to continue to build high.")
			.attachKeyFrame()

		let brick_1 = [
			[2, 3, 3], [2, 3, 4], [2, 3, 5],
			[3, 3, 6], [4, 3, 6], [5, 3, 6],
			[6, 3, 5], [6, 3, 4], [6, 3, 3],
			[5, 3, 2], [4, 3, 2], [3, 3, 2],

			[2, 4, 3], [2, 4, 4], [2, 4, 5],
			[3, 4, 6], [4, 4, 6], [5, 4, 6],
			[6, 4, 5], [6, 4, 4], [6, 4, 3],
			[5, 4, 2], [4, 4, 2], [3, 4, 2],

			[2, 5, 3], [2, 5, 4], [2, 5, 5],
			[3, 5, 6], [4, 5, 6], [5, 5, 6],
			[6, 5, 5], [6, 5, 4], [6, 5, 3],
			[5, 5, 2], [4, 5, 2], [3, 5, 2],

			[2, 6, 3], [2, 6, 4], [2, 6, 5],
			[3, 6, 6], [4, 6, 6], [5, 6, 6],
			[6, 6, 5], [6, 6, 4], [6, 6, 3],
			[5, 6, 2], [4, 6, 2], [3, 6, 2],

			[2, 7, 3], [2, 7, 4], [2, 7, 5],
			[3, 7, 6], [4, 7, 6], [5, 7, 6],
			[6, 7, 5], [6, 7, 4], [6, 7, 3],
			[5, 7, 2], [4, 7, 2], [3, 7, 2],

			[2, 8, 3], [2, 8, 4], [2, 8, 5],
			[3, 8, 6], [4, 8, 6], [5, 8, 6],
			[6, 8, 5], [6, 8, 4], [6, 8, 3],
			[5, 8, 2], [4, 8, 2], [3, 8, 2],

			[2, 9, 3], [2, 9, 4], [2, 9, 5],
			[3, 9, 6], [4, 9, 6], [5, 9, 6],
			[6, 9, 5], [6, 9, 4], [6, 9, 3],
			[5, 9, 2], [4, 9, 2], [3, 9, 2]
		]
		for (let block of brick_1) {
			scene.world.showSection(block, Direction.DOWN)
			scene.idle(1)
		}
		scene.idle(20)

		scene.addKeyframe()
		scene.overlay.showOutline("red", {}, [5, 2, 2], 60)
		scene.text(40, "Finally, remember to import fuel to Fuel Tank", [4, 4.5, 0])
			.placeNearTarget()
		scene.idle(60)
	})
})