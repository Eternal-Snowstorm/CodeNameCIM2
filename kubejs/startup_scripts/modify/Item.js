ItemEvents.modification((event) => {
	function modifyItemBurnTime(item, time) {
		return event.modify(item, (modify) => {
			const BURN_TIME = 200
			modify.burnTime = BURN_TIME * time
		})
	}

	// 煤粉燃烧时间
	modifyItemBurnTime("mekanism:dust_coal", 12)

	// 木屑块燃烧时间
	modifyItemBurnTime("createdieselgenerators:wood_chip", 4)

	// 钻石燃烧时间
	modifyItemBurnTime("minecraft:diamond", 128)

	// 泥炭块
	modifyItemBurnTime("cmi:peat_block", 16)

	// 削弱木炭
	modifyItemBurnTime("minecraft:charcoal", 4)
	modifyItemBurnTime("mekanism:dust_charcoal", 4 * 1.5)
	modifyItemBurnTime("mekanism:block_charcoal", 4 * 9)
	modifyItemBurnTime("thermal:charcoal_block", 4 * 9)

	// 设定多彩构件无法被合成配方消耗
	event.modify("cmi:colorful_mechanism", (modify) => {
		modify.craftingRemainder = "cmi:colorful_mechanism"
	})

	// 调整工程师锤耐久
	event.modify("immersiveengineering:hammer", (modify) => {
		modify.maxDamage = 512
	})

	// 奶酪统一处理
	event.modify("ad_astra:cheese_block", (modify) => {
		modify.setFoodProperties((food) => {
			food.hunger(4)
				.saturation(1)
		})
	})

	event.modify("tconstruct:cheese_ingot", (modify) => {
		modify.setFoodProperties((food) => {
			food.hunger(4)
				.saturation(1)
		})
	})

	event.modify("tconstruct:cheese_block", (modify) => {
		modify.setFoodProperties((food) => {
			food.hunger(4)
				.saturation(1)
		})
	})

	// 烈焰蛋糕
	event.modify("create:blaze_cake", (modify) => {
		modify.setFoodProperties((food) => {
			food.hunger(10)
				.saturation(1.2)
				.eaten((event) => {
					let { player } = event
					let haveEffect = player.hasEffect("minecraft:fire_resistance")

					if (!haveEffect) {
						player.runCommandSilent(`damage ${player.name.toString()} 20 minecraft:lava`)
					}
				})
		})
	})

	// 甘蔗
	event.modify("minecraft:sugar_cane", (modify) => {
		modify.setFoodProperties((food) => {
			food.hunger(2)
				.saturation(2)
				.alwaysEdible()
				.fastToEat()
		})
	})
})