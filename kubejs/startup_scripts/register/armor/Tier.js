ItemEvents.armorTierRegistry((event) => {
	event.add(`${global.namespace}:iron`, (tier) => {
		tier.durabilityMultiplier = 9999
		tier.slotProtections = [99, 99, 99, 99]
		tier.repairIngredient = "#forge:ingots/iron"
		tier.equipSound = "minecraft:item.armor.equip_iron"
	})
})