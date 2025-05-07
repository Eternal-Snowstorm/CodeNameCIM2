Ponder.registry((event) => {
    event.create("ae2:fluix_glass_cable")
        .tag("ue_addons:ae2")
        .scene("ae2:channel", "Channels", "ue_addons:ae2/channels", (scene) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.world.showSection([1, 1, 2, 7, 1, 5], Direction.DOWN)

            // 频道对于ME网络非常重要
            scene.text(40, "Channels are essential to ME Networks")
            scene.idle(60)
            scene.addKeyframe()

            // 致密线缆可以传输32个频道
            scene.text(40, "Thick cables could transmit 32 channels", [4.5, 1.5, 3.5])
            scene.idle(60)

            // 而普通线缆只能传输8个频道
            scene.text(40, "While thin cables transmit only 8 channels", [3.5, 1.5, 3.5])
            scene.idle(60)
            scene.addKeyframe()
            scene.world.setBlocks([7, 2, 3], "ae2:drive")
            scene.world.showSection([7, 2, 3], Direction.DOWN)

            // 如果一段线缆频道数达到上限
            scene.text(40, "If a cable is overloaded", [3.5, 1.5, 3.5])
            scene.idle(60)

            // 这段线缆就不能传输更多的频道了
            scene.text(40, "No more channels can go through this cable", [3.5, 1.5, 3.5])
            scene.idle(60)

            // 这很可能会使AE设备掉线
            scene.text(40, "This may cause some devices go offline", [7.5, 2.5, 3.5])
            scene.showControls(40, [7.5, 3, 3.5], "down")
                .withItem("minecraft:barrier")
            scene.idle(60)

        })
})