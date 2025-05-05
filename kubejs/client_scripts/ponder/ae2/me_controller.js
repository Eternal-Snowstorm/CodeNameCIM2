// 注册 Ponder 场景
onEvent('ponder.registry', event => {
    // 创建一个新的 Ponder 场景
    event.create('ponder:me_controller_setup', 'ME 控制器设置', '展示如何设置和使用 ME 控制器')
       .forBlocks('appliedenergistics2:controller') // 将场景绑定到 ME 控制器方块
       .scene(scene => {
            // 定义场景中的关键位置
            const controllerPos = [2, 1, 2];
            const cablePos = [2, 1, 3];
            const drivePos = [2, 1, 4];

            // 显示场景的区域
            scene.showSection([
                [0, 1, 0],
                [5, 1, 5]
            ], 'up');

            // 步骤 1: 放置 ME 控制器
            scene.text(20, '首先，放置一个 ME 控制器', controllerPos);
            scene.world.setBlock(controllerPos, 'appliedenergistics2:controller');
            scene.idle(40);

            // 步骤 2: 连接线缆
            scene.text(20, '然后，用线缆连接 ME 控制器', cablePos);
            scene.world.setBlock(cablePos, 'appliedenergistics2:cable');
            scene.idle(40);

            // 步骤 3: 放置存储驱动器
            scene.text(20, '接着，放置一个存储驱动器', drivePos);
            scene.world.setBlock(drivePos, 'appliedenergistics2:drive');
            scene.idle(40);

            // 步骤 4: 展示控制器运行
            scene.text(20, '现在，ME 控制器开始运行并管理存储系统', controllerPos);
            scene.addAnimation(controllerPos, {
                type: 'rotation',
                axis: 'y',
                angle: 360,
                duration: 100
            });
            scene.idle(100);

            // 步骤 5: 总结
            scene.text(20, '这样，你就成功设置了一个基本的 ME 存储系统', [2, 2, 2]);
        });
});    