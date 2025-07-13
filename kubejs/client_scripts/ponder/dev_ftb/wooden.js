Ponder.registry((event) => {
	event.create([
		"cmi:wooden_mechanism",
	]).scene("1", "1", "cmi:dev_ftb/ftb_wooden", (scene) => {
		scene.showStructure()
		scene.scaleSceneView(0.2)
	})
})