Ponder.registry((event) => {
    event.create("ae2:controller")
        .tag("ue_addons:ae2")
        .scene("ae2:controller", "ME Controller", "ue_addons:ae2/controller", (scene) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.world.modifyBlock([3, 1, 3], (state) => state.with("state", "offline"), false)
            scene.world.showSection([3, 1, 3], Direction.DOWN)

            // 这是一个ME控制器
            scene.text(40, "This is an ME controller", [3.5, 1.5, 3.5])
            scene.idle(60)

            // 它可以储存AE能量与提供频道
            scene.text(40, "It provides energy source and info transmission of the ME system", [3.5, 1.5, 3.5])
            scene.idle(60)

            // 并以此为AE系统供能与传输数据
            scene.text(40, "By storing AE energy and providing channels", [3.5, 1.5, 3.5])
            scene.idle(60)
            scene.addKeyframe()

            // 控制器需要充能才能使用
            scene.text(40, "The controller should be powered to work", [3.5, 1.5, 3.5])
            scene.idle(40)
            scene.world.showSection([2, 1, 3], Direction.EAST)
            scene.idle(30)
            scene.world.modifyBlock([3, 1, 3], (state) => state.with("state", "online"), false)
            scene.idle(20)
            scene.addKeyframe()

            // 单个ME控制器的每一个面最多提供32个频道
            scene.text(40, "Every side of a single ME controller block provides at most 32 channels", [3.5, 1.5, 3.5])
            scene.idle(60)

            // 可以连接多个ME控制器来提供更多频道
            scene.text(40, "ME controllers could be connected to provide more channels", [3.5, 1.5, 3.5])
            scene.idle(60)
            scene.world.hideSection([3, 1, 3], Direction.UP)
            scene.idle(40)
            scene.world.showSection([3, 1, 3, 5, 3, 5], Direction.DOWN)
            scene.idle(20)
            scene.world.showSection([3, 1, 2, 3, 3, 2], Direction.SOUTH)
            scene.idle(30)
            scene.addKeyframe()

            // AE设备可以紧邻ME控制器摆放或使用线缆连接到控制器
            scene.text(40, "AE devices can be placed besides the controller or connected with cables", [3.5, 1.5, 3.5])
            scene.idle(60)
            scene.world.setBlocks([2, 1, 2], "ae2:drive")
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            scene.idle(10)
            scene.world.setBlocks([5, 1, 2], "ae2:inscriber")
            scene.world.showSection([5, 1, 2], Direction.DOWN)
            scene.idle(40)

            // 致密线缆可以传输32个频道
            scene.text(40, "Thick cables could transmit 32 channels", [3.5, 1.5, 2.5])
            scene.idle(60)

            // 而普通线缆只能传输8个频道
            scene.text(40, "While thin cables transmit only 8 channels", [3.5, 3.5, 2.5])
            scene.idle(60)

        })
})