let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $KnifeItem =
	Java.loadClass("vectorwing.farmersdelight.common.item.KnifeItem")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")

StartupEvents.registry("item", (event) => {
	// 超级刀
	event.createCustom(`${global.namespace}:super_knife`, () => {
		return new JavaAdapter($KnifeItem, {
			/**
			 * 
			 * @param {Internal.ItemStack_} stack 
			 * @param {Internal.LivingEntity_} target 
			 * @param {Internal.LivingEntity_} attacker 
			 * @returns 
			 */
			hurtEnemy(stack, target, attacker) {
				return false
			},
			/**
			 * 
			 * @param {Internal.ItemStack_} stack 
			 * @param {Internal.Level_} level 
			 * @param {Internal.BlockState_} state 
			 * @param {BlockPos_} pos 
			 * @param {Internal.LivingEntity_} miner 
			 * @returns 
			 */
			mineBlock(stack, level, state, pos, miner) {
				return false
			},
			/**
			 * 
			 * @param {Internal.ItemStack_} stack 
			 * @returns 
			 */
			getDamage(stack) {
				return 0
			},
			/**
			 * 
			 * @returns 
			 */
			isDamageable() {
				return true
			}
		}, $Tiers.NETHERITE, 0.5, -2.0, new $Item$Properties().rarity("epic"))
	}).tag("forge:tools/knives").tag("forge:tools")

	// 木质小刀
	event.createCustom(`${global.namespace}:wooden_knife`, () => {
		return new $KnifeItem($Tiers.WOOD, 0.5, -2.0, new $Item$Properties())
	}).tag("forge:tools/knives").tag("forge:tools")

	// 地质锤
	event.create(`${global.namespace}:geological_hammer`)
		.rarity("epic")
		.maxStackSize(1)
		.tag("forge:tools")
		.tag("forge:tools/wrench")
		.tag("mekanism:configurators")
		.tag("forge:wrenches")

	// 木质龙头
	event.create(`${global.namespace}:wooden_faucet`)
		.texture(`${global.namespace}:item/tool/wooden_faucet`)
		.maxDamage(75)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 铸铁龙头
	event.create(`${global.namespace}:cast_iron_faucet`)
		.texture(`${global.namespace}:item/tool/cast_iron_faucet`)
		.maxDamage(1024)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 钢龙头
	event.create(`${global.namespace}:steel_faucet`)
		.texture(`${global.namespace}:item/tool/steel_faucet`)
		.maxDamage(4096)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 等离子龙头
	event.create(`${global.namespace}:overcharged_alloy_faucet`)
		.texture(`${global.namespace}:item/tool/overcharged_alloy_faucet`)
		.maxDamage(114514)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 燧石锤
	event.create(`${global.namespace}:flint_hammer`, "pickaxe")
		.tier(`${global.namespace}:flint`)
		.texture(`${global.namespace}:item/tool/flint_hammer`)
		.tag("forge:tools")
		.tag("forge:hammers")

	// 铁锤
	event.create(`${global.namespace}:iron_hammer`, "pickaxe")
		.tier($Tiers.IRON)
		.texture(`${global.namespace}:item/tool/iron_hammer`)
		.tag("forge:tools")
		.tag("forge:hammers")

	// 钻石锤
	event.create(`${global.namespace}:diamond_hammer`, "pickaxe")
		.tier($Tiers.DIAMOND)
		.texture(`${global.namespace}:item/tool/diamond_hammer`)
		.tag("forge:tools")
		.tag("forge:hammers")
})