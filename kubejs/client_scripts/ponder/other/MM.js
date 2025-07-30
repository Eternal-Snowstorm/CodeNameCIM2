//精湛的机械（划掉）Masterful Machinery思索
Ponder.registry((event) => {
    addMMPonder('mm:cracker', '裂解机', 'cracker', 5, 0.75)









    function addMMPonder(controllerName, displayName, scmaticsName, level, horizon) {
        event.create(controllerName)
            .scene(`cmi:${scmaticsName}`, `${displayName}`, `cmi:multiblock/${scmaticsName}`, (scene, utils) => {
                scene.scaleSceneView(horizon)
                scene.showStructure(0)
                scene.idle(25)
                for (let display_level = 1; display_level < level + 1; display_level++) {
                    scene.addKeyframe()
                    scene.world.showSection([0, display_level, 0, 20, display_level, 20], Direction.DOWN)
                    scene.idle(50)
                }
            }
            )
    }
});