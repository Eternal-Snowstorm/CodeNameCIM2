let $AdAstraEvents$EntityOxygenEvent =
	Java.loadClass("earth.terrarium.adastra.api.events.AdAstraEvents$EntityOxygenEvent")
StartupEvents.init((event) => {
	$AdAstraEvents$EntityOxygenEvent.register((entity, hasOxygen) => {
		let getArmorItem = {
			head: entity.getHeadArmorItem(),
			chest: entity.getChestArmorItem(),
			legs: entity.getLegsArmorItem(),
			feet: entity.getFeetArmorItem()
		}

		let getMekasuitArmor =
			getArmorItem.head === "mekanism:mekasuit_helmet" &&
			getArmorItem.chest === "mekanism:mekasuit_bodyarmor" &&
			getArmorItem.legs === "mekanism:mekasuit_pants" &&
			getArmorItem.feet === "mekanism:mekasuit_boots"

		if (!hasOxygen) {
			return getMekasuitArmor
		}
		return true
	})
})