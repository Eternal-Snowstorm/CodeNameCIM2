// let $AdAstraEvents$EntityOxygenEvent =
// 	Java.loadClass("earth.terrarium.adastra.api.events.AdAstraEvents$EntityOxygenEvent")

// StartupEvents.init((event) => {
// 	$AdAstraEvents$EntityOxygenEvent.register((entity, hasOxygen) => {
// 		if (!(entity instanceof Player)) {
// 			return
// 		}

// 		/**
// 		 * @type {Player}
// 		 */
// 		let player = entity

// 		let armorItem = {
// 			head: player.getHeadArmorItem(),
// 			chest: player.getChestArmorItem(),
// 			legs: player.getLegsArmorItem(),
// 			feet: player.getFeetArmorItem()
// 		}

// 		let getMekasuitArmor =
// 			armorItem.head === "mekanism:mekasuit_helmet" &&
// 			armorItem.chest === "mekanism:mekasuit_bodyarmor" &&
// 			armorItem.legs === "mekanism:mekasuit_pants" &&
// 			armorItem.feet === "mekanism:mekasuit_boots"

// 		if (!hasOxygen) {
// 			return getMekasuitArmor
// 		}
// 		return true
// 	})
// })