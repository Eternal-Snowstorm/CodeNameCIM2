let $KnifeItem =
	Java.loadClass("vectorwing.farmersdelight.common.item.KnifeItem")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")

StartupEvents.registry("item", (event) => {
	// 超级刀
	event.createCustom(`${CmiCore.MODID}:super_knife`, () => {
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
		}, $Tiers.NETHERITE, 0.5, -2.0, new Item$Properties().rarity("epic"))
	}).tag("forge:tools/knives").tag("forge:tools")

	// 木质小刀
	event.createCustom(`${CmiCore.MODID}:wooden_knife`, () => {
		return new $KnifeItem($Tiers.WOOD, 0.5, -2.0, new Item$Properties())
	}).tag("forge:tools/knives").tag("forge:tools")

	// 燧石锤
	event.create(`${CmiCore.MODID}:flint_hammer`, "createdieselgenerators:hammer")
		.tier(`${CmiCore.MODID}:flint`)
		.texture(`${CmiCore.MODID}:item/tool/flint_hammer`)
		.tag("forge:tools")
		.tag("forge:hammers")

	// 钻石锤
	event.create(`${CmiCore.MODID}:diamond_hammer`, "createdieselgenerators:hammer")
		.tier($Tiers.DIAMOND)
		.texture(`${CmiCore.MODID}:item/tool/diamond_hammer`)
		.tag("forge:tools")
		.tag("forge:hammers")
})