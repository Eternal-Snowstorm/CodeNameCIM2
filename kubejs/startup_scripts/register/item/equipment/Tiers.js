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
		event.add(`${CmiCore.MODID}:${name}`, tier)
	}
})

ItemEvents.toolTierRegistry((event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.MutableToolTier>} tier 
	 */
	function addToolTier(name, tier) {
		event.add(`${CmiCore.MODID}:${name}`, tier)
	}

	addToolTier("flint", (tier) => {
		tier.setUses(150)
		tier.setEnchantmentValue(5)
		tier.setRepairIngredient("minecraft:flint")
	})
})