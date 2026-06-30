StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {number} tier 等级
	 * @param {number} multipliers 倍率
	 * @returns
	 */
	function addUpgrade(name, tier, multipliers) {
		let model = {
			parent: "item/generated",
			textures: {
				layer0: `cmi:item/augment/${name}`,
				layer1: tier === 1
					? "thermal:item/augments/upgrade_augment_3_lights"
					: `cmi:item/augment/tier_${tier}/upgrade_augment_lights`,
				layer2: tier === 1
					? "thermal:item/augments/upgrade_augment_anim"
					: `cmi:item/augment/tier_${tier}/upgrade_augment_anim`
			}
		}

		return event.create(`${Cmi.MODID}:${name}_upgrade_augment`, "thermal:upgrade_augment")
			.setValue(multipliers)
			.modelJson(model)
	}

	addUpgrade("aluminum", 2, 7)
	addUpgrade("stainless_steel", 3, 8)
	addUpgrade("titanium_alloy", 3, 9)
	addUpgrade("tungsten_steel", 3, 10)
})