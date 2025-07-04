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

		event.createCustom(`${global.namespace}:${name}_upgrade`, () => {
			return new JavaAdapter($StorageUpgradeItem, {
				// 重写getStorageMultiplier()方法设置升级的倍率
				getStorageMultiplier() {
					return multiplier
				},
				// 这里重写的是Item.getName()方法混淆后的名称m_7626_
				m_7626_(stack) {
					if (Client.level) {
						let _ = Component.translate(`item.${global.namespace}.${name}_upgrade`)
						_.setStyle($Style.EMPTY.applyTo(_.getStyle()))

						return _
					} else {
						return Component.empty()
					}
				},
				addTooltipDetails(key, stack, tooltip, advanced) {
					let itemTranslateKey = `tooltip.${global.namespace}.storage_upgrade.itemMultiplier`
					let fluidTranslateKey = `tooltip.${global.namespace}.storage_upgrade.fluidMultiplier`
					let controllerTranslateKey = `tooltip.${global.namespace}.storage_upgrade.controllerMultiplier`

					tooltip.add(Component.translate(itemTranslateKey, itemMultiplier).gray())
					tooltip.add(Component.translate(fluidTranslateKey, fluidMultiplier).gray())
					tooltip.add(Component.translate(controllerTranslateKey, controllerMultiplier).gray())
				}
			}, $StorageUpgradeItem$StorageTier.DIAMOND)
		}).tag("functionalstorage:upgrades")

		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/${name}_upgrade.json`, {
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/upgrade/${name}`
			}
		})
	}
})