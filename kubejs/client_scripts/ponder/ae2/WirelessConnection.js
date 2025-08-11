Ponder.registry((event) => {
    event.create("ae2:wireless_access_point")
        .scene("ae2:wireless_connection", "Wireless Connection", "cmi:ae2/standard_floor", (scene) => {
            scene.showBasePlate()
            scene.idle(20)

            scene.world.setBlocks([4, 1, 4], "ae2:drive")
            scene.world.showSection([4, 1, 4], Direction.DOWN)
            scene.world.setBlocks([5, 1, 4], "ae2:controller")
            scene.world.modifyBlock([5, 1, 4], (state) => state.with("state", "online"), false)
            scene.world.showSection([5, 1, 4], Direction.DOWN)
            scene.world.setBlocks([5, 2, 4], "ae2:wireless_access_point")
            scene.world.modifyBlock([5, 2, 4], (state) => state.with("facing", "up"), false)
            scene.world.showSection([5, 2, 4], Direction.DOWN)
            scene.idle(20)

            // 这是一个无线访问节点
            scene.text(40, "This is a Wireless Access Point", [5.5, 2.5, 4.5])
            scene.idle(50)

            // 它允许使用者远程访问ME网络存储
            scene.text(60, "It allows users to get access to the ME network remotely", [5.5, 2.5, 4.5])
            scene.idle(80)

            // 当然, 它需要一个ME无线终端配合使用
            scene.text(60, "Well, with an ME Wireless Terminal in hand", [5.5, 2.5, 4.5])
            scene.showControls(40, [5.5, 3, 4.5], "down")
                .withItem(" ae2:wireless_terminal")
            scene.idle(80)
            scene.addKeyframe()

            // 无线访问节点默认提供16格的远程访问范围
            scene.text(60, "By default, the Wireless Access Point provides access from 16 blocks away", [5.5, 2.5, 4.5])
            scene.idle(80)

            // 向其中插入无线信号增幅器来增加访问距离
            scene.text(60, "Plug in Wireless Boosters to increase access distance", [5.5, 2.5, 4.5])
            scene.showControls(40, [5.5, 3, 4.5], "down")
                .withItem(" ae2:wireless_booster")
            scene.idle(80)

            // 最多插入一组增幅器, 提供528格的访问距离
            scene.text(60, "By maximum it provides 528 blocks of distant access with a set of Wireless Booster", [5.5, 2.5, 4.5])
            scene.idle(80)
            scene.addKeyframe()

            // 如果已经建造了一个量子环
            scene.text(40, "If a Quantum Ring has already been built", [5.5, 2.5, 4.5])
            scene.idle(20)
            scene.world.setBlocks([6, 1, 3], "ae2:quantum_ring")
            scene.world.setBlocks([6, 1, 4], "ae2:quantum_ring")
            scene.world.setBlocks([6, 1, 5], "ae2:quantum_ring")
            scene.world.setBlocks([6, 2, 3], "ae2:quantum_ring")
            scene.world.setBlocks([6, 2, 4], "ae2:quantum_link")
            scene.world.setBlocks([6, 2, 5], "ae2:quantum_ring")
            scene.world.setBlocks([6, 3, 3], "ae2:quantum_ring")
            scene.world.setBlocks([6, 3, 4], "ae2:quantum_ring")
            scene.world.setBlocks([6, 3, 5], "ae2:quantum_ring")
            scene.world.showSection([6, 1, 3, 6, 3, 5], Direction.DOWN)
            scene.idle(40)

            // 可以将量子桥卡与配对缠绕态奇点插入一个无线通用终端
            scene.text(80, "Plug a Quantum Bridge Card and a Quantum Entangled Singularity into a Wireless Universal Terminal")
            scene.showControls(40, [6.5, 3, 4.5], "down")
                .withItem("ae2:quantum_entangled_singularity")
            scene.idle(100)

            // 以获取无限距离与跨维度的网络访问
            scene.text(60, "To gain access of infinity distance and inter-dimentions")
            scene.idle(80)
        })
})