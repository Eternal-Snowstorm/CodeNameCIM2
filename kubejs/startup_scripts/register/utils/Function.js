// priority: 101

/**
 * 
 * @param {string} name 
 * @returns 
 */
function setFluidBucketModel(name) {
	return {
		"parent": "forge:item/bucket_drip",
		"loader": "forge:fluid_container",
		"fluid": `${CmiCore.MODID}:${name}`
	}
}

/**
 * 
 * @template T
 * @param {Internal.TagKey_<T>} tag 
 * @returns 
 */
function useJavaTag(tag) {
	return tag.location()
}

function attachItemHandlerCapability() {
	return CapabilityBuilder.ITEM.blockEntity()
		// 允许漏斗或管道提取物品
		.extractItem((entity, slot, amount, simulate) => {
			return entity.inventory.extractItem(slot, amount, simulate)
		})
		// 允许漏斗或管道插入物品
		.insertItem((entity, slot, stack, simulate) => {
			return entity.inventory.insertItem(slot, stack, simulate)
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