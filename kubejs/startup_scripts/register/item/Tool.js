let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")
let $KnifeItem =
	Java.loadClass("vectorwing.farmersdelight.common.item.KnifeItem")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")
StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	// 超级刀
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
	}).tag("forge:tools/knives").tag("forge:tools")

	// 木质小刀
	event.createCustom(`${global.namespace}:wooden_knife`, () => {
		return new $KnifeItem($Tiers.WOOD, 0.5, -2.0, new $Item$Properties())
	}).tag("forge:tools/knives").tag("forge:tools")

	// 地质锤
	addItem("geological_hammer")
		.rarity("epic")
		.maxStackSize(1)
		.tag("forge:tools")
		.tag("forge:tools/wrench")
		.tag("mekanism:configurators")
		.tag("forge:wrenches")

	// 简易电池
	addItem("simple_battery")
		.maxStackSize(1)
		.texture("createaddition:item/capacitor")
		.attachCapability(CapabilityBuilder.ENERGY.customItemStack()
			.canExtract(() => true)
			.canReceive(() => true)
			.getEnergyStored((stack) => {
				stack.nbt?.energy || 0
			})
			.getMaxEnergyStored(() => 10000)
			.extractEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let extracted = Math.min(stored, amount)
				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored - extracted
				}
				return extracted
			})
			.receiveEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let max = 10000
				let received = Math.min(max - stored, amount)
				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored + received
				}
				return received
			})
		)

	// 木质龙头
	addItem("wooden_faucet")
		.texture(`${global.namespace}:item/tool/wooden_faucet`)
		.maxDamage(75)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 铸铁龙头
	addItem("cast_iron_faucet")
		.texture(`${global.namespace}:item/tool/cast_iron_faucet`)
		.maxDamage(1024)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 钢龙头
	addItem("steel_faucet")
		.texture(`${global.namespace}:item/tool/steel_faucet`)
		.maxDamage(4096)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")

	// 等离子龙头
	addItem("overcharged_alloy_faucet")
		.texture(`${global.namespace}:item/tool/overcharged_alloy_faucet`)
		.maxDamage(114514)
		.unstackable()
		.tag("cmi:faucet")
		.tag("forge:tools")
})