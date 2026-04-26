// priority: 15

let LootUtils = {
	/**
	 * 
	 * @param {Internal.ItemStack_} lootItem 
	 * @param {number} chance 
	 * @returns 
	 */
	setChanceLoot: function (lootItem, chance) {
		return LootEntry.of(lootItem)
			.when((loot) => {
				loot.randomChance(chance)
			})
	}
}