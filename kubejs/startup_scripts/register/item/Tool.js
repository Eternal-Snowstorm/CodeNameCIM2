let $KnifeItem =
	Java.loadClass("vectorwing.farmersdelight.common.item.KnifeItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")

let $CraftingMenu =
	Java.loadClass("net.minecraft.world.inventory.CraftingMenu")
let $SimpleMenuProvider =
	Java.loadClass("net.minecraft.world.SimpleMenuProvider")
let $ContainerLevelAccess =
	Java.loadClass("net.minecraft.world.inventory.ContainerLevelAccess")
let $InteractionResult =
	Java.loadClass("net.minecraft.world.InteractionResult")

StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${global.namespace}:${name}`)
	}
	addItem("geological_hammer")
		.rarity("epic")
		.maxStackSize(1)
		.tag("forge:tools")
		.tag("forge:tools/wrench")
		.tag("mekanism:configurators")
		.tag("forge:wrenches")

	event.createCustom(`${global.namespace}:super_knife`, () => {
		return new JavaAdapter($KnifeItem, {
			hurtEnemy(stack, target, attacker) {
				return false
			},
			mineBlock(stack, level, state, pos, miner) {
				return false
			},
			getDamage(stack) {
				return 0
			},
			isDamageable() {
				return true
			}
		}, $Tiers.NETHERITE, 0.5, -2.0, new $Item$Properties().rarity("epic"))
	}).tag("forge:tools/knives")

	addItem("wooden_faucet")
		.texture(`${global.namespace}:item/tool/wooden_faucet`)
		.maxDamage(128)
		.unstackable()
		.tag("forge:tools")

	addItem("handheld_crafting_table")
		.texture(`${global.namespace}:item/tool/handheld_crafting_table`)
		.use((level, player, hand) => {
			if (!level.isClientSide()) {
				// 存放一个临时的坐标
				let pos = new BlockPos(0, 255, 0)
				let create = $ContainerLevelAccess.create(level, pos)
				// 打开工作台GUI
				player.openMenu(new $SimpleMenuProvider(
					(syncId, inventory, player) =>
						new $CraftingMenu(syncId, inventory, create),
					// 修改名字
					Component.translate(`gui.${global.namespace}.handheld_crafting_table`)
				))
			}
			return true
		})
})