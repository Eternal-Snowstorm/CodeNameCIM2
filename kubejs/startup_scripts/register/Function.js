// priority: 100

let FluidBucketItemModel = {
	generate: function (name) {
		if (Platform.isClientEnvironment()) {
			let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
			// 初始化模型文件夹目录
			JSIO.delete(file)
			// 生成模型
			JsonIO.write(file, {
				"parent": "forge:item/bucket_drip",
				"loader": "forge:fluid_container",
				"fluid": `${global.namespace}:${name}`
			})
		}
	}
}

function attachItemHandlerCapability() {
	return CapabilityBuilder.ITEM.blockEntity()
		// 允许漏斗或管道提取物品
		.extractItem((entity, slot, amount, simulate) => {
			let { inventory } = entity

			return inventory.extractItem(slot, amount, simulate)
		})
		// 允许漏斗或管道插入物品
		.insertItem((entity, slot, stack, simulate) => {
			let { inventory } = entity

			return inventory.insertItem(slot, stack, simulate)
		})
		// 获取指定槽位的物品
		.getStackInSlot((entity, slot) => {
			return entity.inventory.getStackInSlot(slot)
		})
		// 槽位堆叠上限
		.getSlotLimit((entity, slot) => {
			return entity.inventory.getSlotLimit(slot)
		})
		// 槽位总数
		.getSlots((entity) => {
			return entity.inventory.slots
		})
		// 判断物品是否能放入槽位
		.isItemValid((entity, slot, stack) => {
			return entity.inventory.isItemValid(slot, stack)
		})
}