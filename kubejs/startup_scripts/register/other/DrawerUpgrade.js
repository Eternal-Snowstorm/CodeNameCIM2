let $StorageUpgradeItem =
	Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem")
let $StorageUpgradeItem$StorageTier =
	Java.loadClass("com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier")
let $Style =
	Java.loadClass("net.minecraft.network.chat.Style")
let $BasicItem$Key =
	Java.loadClass("com.hrznstudio.titanium.item.BasicItem$Key")

StartupEvents.registry("item", (event) => {
	/**
	 * 添加新的功能性存储的抽屉容量升级
	 * 
	 * @param {String} name 名称
	 * @param {Number} multiplier 倍率
	 */
	function addDrawerUpgrade(name, multiplier) {
		const ITEM_MULTIPLIER = multiplier
		const FLUID_MULTIPLIER = ITEM_MULTIPLIER * 0.5
		const CONTROLLER_MULTIPLIER = FLUID_MULTIPLIER * 0.5

		const REGISTER_ID = Cmi.loadResource(`${name}_upgrade`)

		let drawerUpgradeBuilder =
			event.createCustom(REGISTER_ID, () => {
				return new JavaAdapter($StorageUpgradeItem, {
					/**
					 * 重写getStorageMultiplier()方法设置升级的倍率
					 * @returns
					 */
					getStorageMultiplier() {
						return multiplier
					},
					/**
					 * 这里重写的是Item.getName()方法混淆后的名称m_7626_
					 * @method
					 * @param {Internal.ItemStack_} stack 
					 * @returns 
					 */
					m_7626_(stack) {
						return Component.translatable(`item.${Cmi.MODID}.${name}_upgrade`)
					},
					/**
					 * 
					 * @param {Internal.BasicItem$Key_} key 
					 * @param {Internal.ItemStack_} stack 
					 * @param {Internal.List_<Component_>} tooltip 
					 * @param {Boolean} advanced 
					 */
					addTooltipDetails(key, stack, tooltip, advanced) {
						let itemTranslateKey =
							Component.translatable(
								"storage_tweaks.tooltip.storageupgrade.desc.item.additive",
								ITEM_MULTIPLIER
							).gray()
						let fluidTranslateKey =
							Component.translatable(
								"storage_tweaks.tooltip.storageupgrade.desc.fluid.additive",
								FLUID_MULTIPLIER
							).gray()
						let ctrlTranslateKey =
							Component.translatable(
								"storage_tweaks.tooltip.storageupgrade.desc.range.additive",
								CONTROLLER_MULTIPLIER
							).gray()

						tooltip.add(itemTranslateKey)
						tooltip.add(fluidTranslateKey)
						tooltip.add(ctrlTranslateKey)
					}
				}, $StorageUpgradeItem$StorageTier.DIAMOND)
			})

		drawerUpgradeBuilder.tag("functionalstorage:upgrades")

		if (Platform.isClientEnvironment()) {
			JsonIO.write(`kubejs/assets/${Cmi.MODID}/models/item/${name}_upgrade.json`, {
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": `${Cmi.MODID}:item/upgrade/${name}`
				}
			})
		}

		return drawerUpgradeBuilder
	}

	addDrawerUpgrade("test", 2)
})