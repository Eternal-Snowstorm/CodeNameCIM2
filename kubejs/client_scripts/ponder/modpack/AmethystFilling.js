Ponder.registry((event) => {
	event.create("minecraft:amethyst_shard")
		.scene(`${global.namespace}:amethyst_filling`, "Amethyst Filling", "cmi:modpack/amethyst_filling", (scene) => {
			let amethyst0 = "minecraft:medium_amethyst_bud"
			scene.showBasePlate()

			scene.idle(2)
			scene.world.showSection([4, 1, 0, 4, 2, 0], Direction.DOWN)
			scene.idle(2)

			scene.world.showSection([3, 1, 1, 3, 3, 1], Direction.SOUTH)
			scene.idle(2)
			scene.world.showSection([3, 1, 2, 3, 1, 3], Direction.SOUTH)
			scene.idle(2)
			scene.world.showSection([2, 3, 1, 1, 3, 1], Direction.SOUTH)
			scene.idle(2)

			scene.world.showSection([4, 1, 2, 4, 3, 2], Direction.DOWN)
			scene.world.showSection([2, 1, 2, 2, 3, 2], Direction.DOWN)
			scene.idle(2)
			scene.world.showSection([2, 1, 4, 2, 3, 4], Direction.DOWN)
			scene.world.showSection([4, 1, 4, 4, 3, 4], Direction.DOWN)
			scene.idle(2)

			scene.world.showSection([3, 3, 2], Direction.DOWN)
			scene.world.showSection([2, 3, 3], Direction.DOWN)
			scene.idle(2)
			scene.world.showSection([3, 3, 4], Direction.DOWN)
			scene.idle(2)
			scene.world.showSection([4, 3, 3], Direction.DOWN)
			scene.idle(20)

			//
			scene.addKeyframe()
			scene.world.setBlocks([1, 1, 1], amethyst0)
			scene.world.showSection([1, 1, 1], Direction.DOWN)
		})
})