StartupEvents.registry("block", (event) => {
	let machineBlockRegister = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"computing",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"air_tight",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"potion",
		"precision",
		"redstone",
		"bronze",
		"pigiron"
	]
	machineBlockRegister.forEach((type) => {
		event.create(`${global.namespace}:${type}_machine`, "cardinal")
			.soundType(SoundType.METAL)
			.waterlogged()
			.model(`${global.namespace}:block/machine_block/${type}`)
			.tag("cmi:machine_block")
			.tag(`cmi:machine_block/${type}`)
			.tagBlock(global.ToolType["pickaxe"])
			.tagBlock(global.MiningLevel["wooden"])
			.tagBlock("create:wrench_pickup")
			.requiresTool(true)
			.notSolid()
			.defaultCutout()
			.blockEntity((entity) => {
				let mechanism = Ingredient.of(`#create:mechanisms/${type}`)

				entity.enableSync()
				entity.inventory(9, 3, mechanism)
				entity.rightClickOpensInventory()
				entity.attachCapability(CapabilityBuilder.ITEM.blockEntity()
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
				)
			})
	})
})