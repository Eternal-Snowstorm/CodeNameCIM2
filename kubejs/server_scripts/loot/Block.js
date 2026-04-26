LootJS.modifiers((event) => {
	event.addBlockLootModifier("#cmi:grass_fiber")
		.matchMainHand("#forge:tools/knives")
		.addAlternativesLoot(LootUtils.setChanceLoot("cmi:grass_fiber", 0.5))
})