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
		let itemMultiplier = multiplier
		let fluidMultiplier = itemMultiplier * 0.5
		let controllerMultiplier = fluidMultiplier * 0.5

		let registerDrawerUpgrade =
			event.createCustom(`${global.namespace}:${name}_upgrade`, () => {
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
						let itemTranslateKey = `tooltip.${global.namespace}.storage_upgrade.itemMultiplier`
						let fluidTranslateKey = `tooltip.${global.namespace}.storage_upgrade.fluidMultiplier`
						let ctrlTranslateKey = `tooltip.${global.namespace}.storage_upgrade.controllerMultiplier`

						tooltip.add(Component.translatable(itemTranslateKey, itemMultiplier).gray())
						tooltip.add(Component.translatable(fluidTranslateKey, fluidMultiplier).gray())
						tooltip.add(Component.translatable(ctrlTranslateKey, controllerMultiplier).gray())
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