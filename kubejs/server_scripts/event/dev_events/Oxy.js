// // 注册氧化关系
// ServerEvents.generateData('oxidation', event => {
//     // 定义一个氧化映射表
//     const oxidizableBlocks = [
//         // [ 普通阶段, 氧化后的下一阶段 ]
//         [Block.getBlock('cmi:chiseled_copper'), Block.getBlock('cmi:exposed_chiseled_copper')],
//         [Block.getBlock('cmi:exposed_chiseled_copper'), Block.getBlock('cmi:weathered_chiseled_copper')],
//         [Block.getBlock('cmi:weathered_chiseled_copper'), Block.getBlock('cmi:oxidized_chiseled_copper')]
//     ];

//     // 遍历并注册每个阶段的氧化关系
//     oxidizableBlocks.forEach(blockPair => {
//         let fromBlock = blockPair[0];
//         let toBlock = blockPair[1];
//         if (fromBlock && toBlock) {
//             event.setOxidizable(fromBlock, toBlock);
//             console.log(`Registered oxidation: ${fromBlock} -> ${toBlock}`);
//         } else {
//             console.warn(`Failed to register oxidation: ${blockPair}`);
//         }
//     });
// });
// // Xia JB Bian by deepseek