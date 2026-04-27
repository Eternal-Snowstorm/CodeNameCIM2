ItemEvents.armorTierRegistry((event) => {
	addArmorTier("iron", (tier) => {
		tier.setDurabilityMultiplier(9999)
		tier.setSlotProtections([99, 99, 99, 99])
		tier.setRepairIngredient("#forge:ingots/iron")
		tier.setEquipSound("minecraft:item.armor.equip_iron")
	})

	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.MutableArmorTier>} tier 
	 */
	function addArmorTier(name, tier) {
		event.add(`${Cmi.MODID}:${name}`, tier)
	}
})

ItemEvents.toolTierRegistry((event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.MutableToolTier>} tier 
	 */
	function addToolTier(name, tier) {
		event.add(`${Cmi.MODID}:${name}`, tier)
	}

	addToolTier("flint", (tier) => {
		tier.setUses(72)
		tier.setEnchantmentValue(5)
		tier.setRepairIngredient("minecraft:flint")
	})
})