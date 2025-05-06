Ponder.registry((event) => {
    event.create('#ae2:p2p_attunements/me_p2p_tunnel')
        .scene("ae2:channel", "频道", "ue_addons:ae2/standard_floor", (scene) => {
        // 显示底盘, 同时等待 20 Tick
        scene.showBasePlate()
        scene.idle(20)
        scene.text(40, "ae中频道是一个很重要的东西", [2, 1, 1])
        scene.idle(60)
        scene.text(40, "如果频道达到上限了，那么接下来放置的设备将无法接入me网络，无法实现自动化处理", [2, 1, 1])
        scene.idle(60)
        scene.text(40, "如果频道达到上限了，那么接下来放置的设备将无法接入me网络，无法实现自动化处理", [2, 1, 1])
        scene.idle(60)
        scene.text(40, "那么该如何避免这种情况呢？", [2, 1, 1])
        scene.idle(60)
        scene.text(40, "粗线缆有32个频道数，细线缆只有8个频道数", [2, 1, 1])
        scene.idle(60)
        
    })
})