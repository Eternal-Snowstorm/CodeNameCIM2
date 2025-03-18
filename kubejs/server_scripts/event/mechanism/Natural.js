//nature
BlockEvents.rightClicked(event => {
	let { player, item, hand } = event;

	// 1. 判断是否为目标物品且为主手持有
	if (item.id !== 'ue_addons:nature_mechanism' || hand !== 'main_hand') return;

	// 2. 保存原物品信息（包括NBT和数量）
	let originalStack = item.copy();
	let originalCount = originalStack.count;

	// 3. 临时替换为骨粉（数量设为1，模拟单次使用）
	player.setMainHandItem(Item.of('minecraft:bone_meal', 1));

	// 4. 允许原版逻辑处理骨粉（需取消事件拦截）

	// 5. 在下一个tick恢复原物品
	event.server.scheduleInTicks(1, callback => {
		let currentItem = player.getMainHandItem();

		// 仅当玩家仍持有骨粉时恢复（避免中途切换物品）
		{
			originalStack.count = originalCount; // 保持原数量
			player.setMainHandItem(originalStack);
		}
	});

});