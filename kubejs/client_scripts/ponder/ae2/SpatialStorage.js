Ponder.registry((event) => {
    event.create([
        "ae2:spatial_io_port",
        "ae2:spatial_pylon"
    ]).scene("ae2:spatial_storage", "Spatial Storage", "ue_addons:ae2/spatial_storage", (scene) => {
        scene.showBasePlate()
        scene.scaleSceneView(0.7)
        scene.idle(20)

        // 空间塔与空间IO端口是用于存储与搬运空间的设备
        scene.text(60, "Spatial Pylons and Spatial IO Port are devices on spatial storage and transportation")
        scene.world().showSection([1, 1, 7, 7, 7, 7], Direction.DOWN)
        scene.world().showSection([4, 1, 1, 7, 1, 6], Direction.DOWN)
        scene.world().showSection([5, 2, 1], Direction.DOWN)
        scene.idle(80)

        // 空间塔必须成列相连，不同的空间塔多方块结构之间用线缆连接
        scene.text(60, "Spatial Pylons must be placed in rows and columns, connect each row or column with Cables", [7.5, 2.5, 7.5])
        scene.idle(80)
        scene.addKeyframe()

        // 用空间塔搭建出一个矩形空间以选取世界中的一个区域
        scene.text(60, "Build a rectangle with Spatial Pylons to select a zone in world")
        scene.overlay.showOutline("green", {}, [1, 1, 1, 7, 7, 7], 220)
        scene.idle(80)

        // 并在这个ME网络中接入一个空间IO端口
        scene.text(40, "And connect a Spatial IO Port to the ME network", [4.5, 1.5, 1.5])
        scene.idle(60)

        // 需要保证所有空间塔都在绿框以内，紫框以外才能选取紫框内的所有空间
        scene.text(80, "Ensure all Spatial Pylons are inside the green rectangle while outside the purple")
        let smoothStoneSection = scene.world().showIndependentSection([2, 2, 2, 6, 6, 6], Direction.DOWN)
        scene.overlay.showOutline("fast", {}, [2, 2, 2, 6, 6, 6], 80)
        scene.idle(100)
        scene.addKeyframe()

        // 空间存储元件名称标注了其可以存储的最大空间
        scene.text(60, "Name of the Spatial Storage Cell marks its maximum storage space", [4.5, 1.5, 1.5])
        scene.idle(80)

        // 将空间存储元件放入IO端口
        scene.text(60, "Put a Spatial Storage Cell into the Spatial IO Port", [4.5, 1.5, 1.5])
        scene.showControls(60, [4.5, 2, 1.5], "down")
            .withItem("ae2:spatial_storage_cell_16")
        scene.idle(80)

        // 输入一个红石信号！
        scene.text(40, "Input a redstone signal!", [4.5, 1.5, 1.5])
        scene.showControls(40, [5.5, 2.5, 1.5], "down")
            .rightClick()
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "true"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        scene.world().hideIndependentSectionImmediately(smoothStoneSection)
        scene.idle(30)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "false"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        scene.idle(30)

        // 存储了空间的存储元件放入空间IO端口激活则会释放其中的空间
        scene.text(80, "Inputing Spatial Storage Cells with stored space will release the space", [4.5, 1.5, 1.5])
        scene.showControls(20, [4.5, 2, 1.5], "down")
            .withItem("ae2:spatial_storage_cell_16")
        scene.idle(20)
        scene.showControls(40, [5.5, 2.5, 1.5], "down")
            .rightClick()
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "true"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        let secondSmoothStoneSection = scene.world().showIndependentSectionImmediately([2, 2, 2, 6, 6, 6])
        scene.idle(30)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "false"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        scene.idle(30)
        scene.addKeyframe()

        // 空间存储非常强大，你甚至可以使用它搬运末地门！
        scene.text(80, "Spatial Storage is extremely powerful, you can even transport End Portal with it!")
        scene.world().hideIndependentSectionImmediately(secondSmoothStoneSection)
        let endPortalSection = scene.world().showIndependentSection([2, 8, 2, 6, 8, 6], Direction.DOWN)
        scene.world().moveSection(endPortalSection, [0, -4, 0], 0)
        scene.idle(40)
        scene.showControls(40, [5.5, 2.5, 1.5], "down")
            .rightClick()
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "true"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        scene.world().hideIndependentSectionImmediately(endPortalSection)
        scene.idle(30)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("powered", "false"), false)
        scene.world().modifyBlock([5, 2, 1], (state) => state.with("face", "floor"), false)
        scene.idle(50)
    })
})