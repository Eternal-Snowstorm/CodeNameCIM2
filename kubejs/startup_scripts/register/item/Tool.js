let $KnifeItem =
	Java.loadClass("vectorwing.farmersdelight.common.item.KnifeItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")

StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:geological_hammer`)
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

	event.create(`${global.namespace}:wooden_faucet`)
		.texture(`${global.namespace}:item/tool/wooden_faucet`)
		.maxDamage(128)
		.unstackable()
		.tag("forge:tools")
})