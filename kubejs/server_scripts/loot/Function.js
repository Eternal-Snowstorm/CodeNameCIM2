// priority: 15

/**
 * 
 * @param {Internal.ItemStack_} lootItem 
 * @param {number} chance 
 * @returns 
 */
function setChanceLoot(lootItem, chance) {
	return LootEntry.of(lootItem)
		.when((loot) => {
			loot.randomChance(chance)
		})
}