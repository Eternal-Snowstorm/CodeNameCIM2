/**
 * 
 * @param {Internal.PonderRegistryEventJS} event 
 * @param {Ingredient_} controller 
 * @param {String} name 
 * @param {String} scmatics 
 * @param {Number} level 
 * @param {Number} horizon 
 * @returns 
 */
function addMMPonder(event, controller, name, scmatics, level, horizon) {
	return event.create(controller)
		.scene(`${global.namespace}:${scmatics}`, `${name}`, `${global.namespace}:multiblock/${scmatics}`, (scene) => {
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