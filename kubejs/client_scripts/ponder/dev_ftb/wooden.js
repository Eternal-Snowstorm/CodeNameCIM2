Ponder.registry((event) => {
	event.create("cmi:green_screen")
		.scene("1", "1", "cmi:dev_ftb/ftb_wooden", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.2)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_stone", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.5)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_iron", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.3)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_andesite", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.3)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_copper", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.2)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_gold", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.4)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_nether", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.2)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_photosensitive", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.3)
		})
		.scene("1", "1", "cmi:dev_ftb/ftb_railway", (scene) => {
			scene.showStructure()
			scene.scaleSceneView(0.3)
		})
})