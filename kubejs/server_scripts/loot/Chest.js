LootJS.modifiers((event) => {
	event.addLootTypeModifier(LootType.CHEST)
		// 替换Iron
		.replaceLoot("minecraft:iron_ingot", "minecraft:raw_iron")

		// 石板
		.removeLoot("alexscaves:cave_tablet")
		.addAlternativesLoot(
			setChanceLoot("minecraft:raw_gold", 0.15),
			setChanceLoot("minecraft:gold_ingot", 0.3),
			setChanceLoot("minecraft:diamond", 0.05)
		)

	/**
	 * 需要彻底删除的战利品(无替换)
	 */
	let removeLootFromChest = [

	]
	removeLootFromChest.forEach((item) => {
		return event.addLootTypeModifier(LootType.CHEST)
			.removeLoot(item)
	})
})