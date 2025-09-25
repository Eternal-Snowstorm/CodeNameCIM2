let $StorageUpgradeItem =
	Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem")
let $StorageUpgradeItem$StorageTier =
	Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier")
let $Style =
	Java.loadClass("net.minecraft.network.chat.Style")

StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 名称
	 * @param {number} multiplier 倍率
	 */
	function addDrawerUpgrade(name, multiplier) {
		const ITEM_MULTIPLIER = multiplier
		const FLUID_MULTIPLIER = ITEM_MULTIPLIER * 0.5
		const CONTROLLER_MULTIPLIER = FLUID_MULTIPLIER * 0.5

		let id = `${global.namespace}:${name}_upgrade`

		let registerDrawerUpgrade =
			event.createCustom(id, () => {
				return new JavaAdapter($StorageUpgradeItem, {
					// 重写getStorageMultiplier()方法设置升级的倍率
					getStorageMultiplier() {
						return multiplier
					},
					// 这里重写的是Item.getName()方法混淆后的名称m_7626_
					m_7626_(stack) {
						if (Client.level) {
							let modifyItemName =
								Component.translatable(`item.${global.namespace}.${name}_upgrade`)
									.setStyle($Style.EMPTY.applyTo(modifyItemName.getStyle()))

							return modifyItemName
						} else {
							return Component.empty()
						}
					},
					addTooltipDetails(key, stack, tooltip, advanced) {
						let itemTranslateKey =
							Component.translatable(
								`tooltip.${global.namespace}.storage_upgrade.itemMultiplier`,
								ITEM_MULTIPLIER
							).gray()
						let fluidTranslateKey =
							Component.translatable(
								`tooltip.${global.namespace}.storage_upgrade.fluidMultiplier`,
								FLUID_MULTIPLIER
							).gray()
						let ctrlTranslateKey =
							Component.translatable(
								`tooltip.${global.namespace}.storage_upgrade.controllerMultiplier`,
								CONTROLLER_MULTIPLIER
							).gray()

						tooltip.add(itemTranslateKey)
						tooltip.add(fluidTranslateKey)
						tooltip.add(ctrlTranslateKey)
					}
				}, $StorageUpgradeItem$StorageTier.DIAMOND)
			}).tag("functionalstorage:upgrades")

		if (Platform.isClientEnvironment()) {
			JsonIO.write(`kubejs/assets/${global.namespace}/models/item/${name}_upgrade.json`, {
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": `${global.namespace}:item/upgrade/${name}`
				}
			})
		}

		return registerDrawerUpgrade
	}
})