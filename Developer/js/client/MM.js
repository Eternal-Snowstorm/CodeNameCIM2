Ponder.registry((event) => {
	addMMPonder(
		"cracker",
		"Cracker",
		"cracker",
		5,
		0.75
	)
	addMMPonder(
		"steam_ore_processor",
		"Steam Ore Processor",
		"steam_ore",
		5,
		0.75
	)
	addMMPonder(
		"particle_collision_machine",
		"Particle Collision Machine",
		"particle_collision_machine",
		3,
		0.75
	)
	addMMPonder(
		"improved_rubber_extractor",
		"Improved Rubber Extractor",
		"improved_rubber_extractor",
		9,
		1
	)

	/**
	 * 
	 * @param {string} controller 
	 * @param {string} name 
	 * @param {string} scmatics 
	 * @param {number} layer 
	 * @param {number} horizon 
	 * @returns 
	 */
	function addMMPonder(controller, name, scmatics, layer, horizon) {
		return event.create(`mm:${controller}`)
			.scene(
				`${global.namespace}:${scmatics}`,
				`${name}`,
				`${global.namespace}:multiblock/${scmatics}`,
				(scene) => {
					scene.scaleSceneView(horizon)
					scene.showStructure(0)
					scene.idle(20)
					for (let displayLevel = 1; displayLevel < layer + 1; displayLevel++) {
						scene.addKeyframe()
						scene.world.showSection([0, displayLevel, 0, 20, displayLevel, 20], Direction.DOWN)
						scene.idle(50)
					}
				})
	}
})