LootJS.modifiers((event) => {
	event.addBlockLootModifier("#cmi:grass_fiber")
		.matchMainHand("#forge:tools/knives")
		.addAlternativesLoot(LootUtils.setChanceLoot("cmi:grass_fiber", 0.5))

	event.addBlockLootModifier("ae2:mysterious_cube")
		.removeLoot(Ingredient.all)
		.addLoot(Item.of("ae2:sky_stone_chest")
			.setHoverName(Component.translatable("block.cmi.ae2.sky_stone_chest.mysterious_cube"))
			.withNBT({
				BlockEntityTag: {
					id: "ae2:sky_chest",
					inv: {
						item0: {
							id: "cmi:concurrent_processor_press",
							Count: 1
						},
						item1: {
							id: "ae2:calculation_processor_press",
							Count: 1
						},
						item2: {
							id: "ae2:engineering_processor_press",
							Count: 1
						},
						item3: {
							id: "ae2:logic_processor_press",
							Count: 1
						},
						item4: {
							id: "ae2:silicon_press",
							Count: 1
						},
						item5: {
							id: "ae2:name_press",
							Count: 1
						},
						item6: {
							id: "advanced_ae:quantum_processor_press",
							Count: 1
						}
					}
				}
			})
		)
})