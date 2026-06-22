let $AdAstraEvents$EntityOxygenEvent =
	Java.loadClass("earth.terrarium.adastra.api.events.AdAstraEvents$EntityOxygenEvent")

StartupEvents.init((event) => {
	$AdAstraEvents$EntityOxygenEvent.register((entity, hasOxygen) => {
		let armorItem = {
			head: entity.getHeadArmorItem(),
			chest: entity.getChestArmorItem(),
			legs: entity.getLegsArmorItem(),
			feet: entity.getFeetArmorItem()
		}

		let getMekasuitArmor = armorItem.head === "mekanism:mekasuit_helmet"
			&& armorItem.chest === "mekanism:mekasuit_bodyarmor"
			&& armorItem.legs === "mekanism:mekasuit_pants"
			&& armorItem.feet === "mekanism:mekasuit_boots"

		if (!hasOxygen) {
			return getMekasuitArmor
		}
		return true
	})
})