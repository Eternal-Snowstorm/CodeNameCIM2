ItemEvents.armorTierRegistry((event) => {
	event.add(`${global.namespace}:iron`, (tier) => {
		tier.durabilityMultiplier = 999
		tier.slotProtections = [1, 1, 1, 1]
		tier.repairIngredient = "#forge:ingots/iron"
		tier.equipSound = "minecraft:item.armor.equip_iron"
	})
})