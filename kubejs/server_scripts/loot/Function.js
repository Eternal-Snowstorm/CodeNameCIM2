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
			.when((container) => {
				container.randomChance(chance)
			})
	}
}