ItemEvents.armorTierRegistry((event) => {
	addArmorTier("iron", (tier) => {
		tier.durabilityMultiplier = 9999
		tier.slotProtections = [99, 99, 99, 99]
		tier.repairIngredient = "#forge:ingots/iron"
		tier.equipSound = "minecraft:item.armor.equip_iron"
	})

	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.MutableArmorTier>} tier 
	 */
	function addArmorTier(name, tier) {
		event.add(`${global.namespace}:${name}`, tier)
	}
})

ItemEvents.toolTierRegistry((event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.MutableToolTier>} tier 
	 */
	function addToolTier(name, tier) {
		event.add(`${global.namespace}:${name}`, tier)
	}
})