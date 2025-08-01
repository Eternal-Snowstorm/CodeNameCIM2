function addMMPonder(event, controllerName, displayName, scmaticsName, level, horizon) {
	event.create(controllerName)
		.scene(`${global.namespace}:${scmaticsName}`, `${displayName}`, `${global.namespace}:multiblock/${scmaticsName}`, (scene) => {
			scene.scaleSceneView(horizon)
			scene.showStructure(0)
			scene.idle(20)
			for (let displayLevel = 1; displayLevel < level + 1; displayLevel++) {
				scene.addKeyframe()
				scene.world.showSection([0, displayLevel, 0, 20, displayLevel, 20], Direction.DOWN)
				scene.idle(50)
			}
		})
}