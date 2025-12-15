ItemEvents.armorTierRegistry((event) => {
	event.add(`${global.namespace}:iron`, (tier) => {
		tier.setDurabilityMultiplier(9999)
		tier.setSlotProtections([99, 99, 99, 99])
		tier.setToughness(1)
		tier.setRepairIngredient("#forge:ingots/iron")
		tier.setEquipSound("minecraft:item.armor.equip_iron")
	})
})