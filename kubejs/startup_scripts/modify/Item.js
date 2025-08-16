ItemEvents.modification((event) => {
	const BURN_TIME = 200
	// 设定多彩构件无法被合成配方消耗
	event.modify("cmi:colorful_mechanism", (modify) => {
		modify.craftingRemainder = "cmi:colorful_mechanism"
	})

	// 煤粉燃烧时间
	event.modify("mekanism:dust_coal", (modify) => {
		modify.burnTime = BURN_TIME * 12
	})

	// 木屑块燃烧时间
	event.modify("createdieselgenerators:wood_chip", (modify) => {
		modify.burnTime = BURN_TIME
	})

	// 钻石燃烧时间
	event.modify("minecraft:diamond", (modify) => {
		modify.burnTime = BURN_TIME * 128
	})

	// 泥炭块
	event.modify("cmi:peat_block", (modify) => {
		modify.burnTime = BURN_TIME * 16
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
})