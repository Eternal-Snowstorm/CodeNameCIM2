Ponder.registry((event) => {
    event.create("ae2:condenser")
        .tag("ue_addons:ae2")
        .scene("ae2:condenser", "Condenser", "ue_addons:ae2/condenser", (scene) => {
            scene.showBasePlate()
            scene.idle(20)
            scene.world.showSection([1, 1, 2], Direction.DOWN)
            scene.idle(20)

            // 物质聚合器是一种用于销毁多余物品或流体与制造新物品的设备
            scene.text(60, "Condenser is a device to consume extra stuffs/fluids and create new items", [1.5, 1.5, 2.5])
            scene.idle(80)
            scene.world.showSection([2, 1, 2, 3, 2, 3], Direction.DOWN)
            scene.idle(20)

            // 在大多数情况下，建议向聚合器内泵水
            scene.text(60, "In most cases, it is suggested to pump water into the condenser", [2.5, 1.5, 2.5])
            scene.idle(80)


            // 因为它大多用于制造物质球与奇点
            scene.text(60, "As it is mostly used to create matter balls and singularities", [1.5, 1.5, 2.5])
            scene.idle(80)

            // 聚合器内需要放入一个存储组件才能工作
            scene.text(60, "A condenser needs a cell component to function", [1.5, 1.5, 2.5])
            scene.showControls(60, [1.5, 2, 2.5], "down")
                .withItem("ae2:cell_component_256k")
            scene.idle(80)

            // 将聚合器调整到对应模式来产出物质球或奇点
            scene.text(60, "Switch the condenser to related mode to create matter balls and singularities", [1.5, 1.5, 2.5])
            scene.idle(20)
            scene.showControls(20, [1.5, 2, 2.5], "down")
                .withItem("ae2:matter_ball")
            scene.idle(30)
            scene.showControls(20, [1.5, 2, 2.5], "down")
                .withItem("ae2:singularity")
            scene.idle(30)
        })
})