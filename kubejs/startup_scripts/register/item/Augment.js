StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {Number} tier 等级
	 * @param {Number} value 倍率
	 * @returns 
	 */
	function addUpgrade(name, tier, value) {
		let model = {
			parent: "item/generated",
			textures: {
				layer0: `cmi:item/augment/${name}`,
				layer1: "thermal:item/augments/upgrade_augment_3_lights",
				layer2: "thermal:item/augments/upgrade_augment_anim"
			}
		}
		if (tier == 2) {
			model.textures.layer1 = "cmi:item/augment/tier_2/upgrade_augment_lights"
			model.textures.layer2 = "cmi:item/augment/tier_2/upgrade_augment_anim"
		}
		if (tier == 3) {
			model.textures.layer1 = "cmi:item/augment/tier_3/upgrade_augment_lights"
			model.textures.layer2 = "cmi:item/augment/tier_3/upgrade_augment_anim"
		}
		return event.create(`${Cmi.MODID}:${name}_upgrade_augment`, "thermal:upgrade_augment")
			.modelJson(model)
			.setValue(value)
	}

	addUpgrade("aluminum", 2, 7)
	addUpgrade("stainless_steel", 3, 8)
	addUpgrade("titanium_alloy", 3, 9)
	addUpgrade("tungsten_steel", 3, 10)
})