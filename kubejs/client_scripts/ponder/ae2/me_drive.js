// 定义存储驱动器场景
onEvent('ponder.registry', event => {
    event.create('ponder:me_drive_scene', '存储驱动器基础设置', '展示存储驱动器的基础设置步骤')
      .forBlocks('appliedenergistics2:drive') // 将场景绑定到存储驱动器方块
       .scene(scene => {
            // 定义场景中的一些位置
            const controllerPos = [2, 1, 2];
            const cablePos = [2, 1, 3];
            const drivePos = [2, 1, 4];

            // 显示场景区域
            scene.showSection([
                [0, 1, 0],
                [4, 1, 4]
            ], 'up');

            // 获取世界对象
            const world = scene.getWorld();

            // 设置方块
            world.setBlock(controllerPos, 'appliedenergistics2:controller');
            world.setBlock(cablePos, 'appliedenergistics2:cable');
            world.setBlock(drivePos, 'appliedenergistics2:drive');

            // 获取存储驱动器的方块实体
            const driveBE = world.getBlockEntity(drivePos);

            // 添加动画指令
            scene.addAnimationInstruction(100, {
                slot: 0
            });

            // 插入 1K 存储单元
            driveBE.setCell(0, 'appliedenergistics2:item_cell_1k');

            // 添加文本指令
            scene.addTextInstruction(200, '这是存储驱动器的基础设置');
        });
});    