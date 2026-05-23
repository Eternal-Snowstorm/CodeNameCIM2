ItemEvents.modification((event) => {
	let month = LocalDateTime.now().getMonthValue()
	let day = LocalDateTime.now().getDayOfMonth()

	/**
	 *
	 * @param {Internal.Item} item 修改的物品
	 * @param {Number} time 修改的时间(单位: 1个物品[即200tick])
	 * @returns 
	 */
	function modifyItemBurnTime(item, time) {
		return event.modify(item, (modify) => {
			const BURN_TIME = 200
			modify.setBurnTime(BURN_TIME * time)
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

	// 奶酪统一处理
	event.modify("ad_astra:cheese_block", (modify) => {
		modify.setFoodProperties((builder) => {
			builder.hunger(4)
				.saturation(1)
		})
	})

	event.modify("tconstruct:cheese_ingot", (modify) => {
		modify.setFoodProperties((builder) => {
			builder.hunger(4)
				.saturation(1)
		})
	})

	event.modify("tconstruct:cheese_block", (modify) => {
		modify.setFoodProperties((builder) => {
			builder.hunger(4)
				.saturation(1)
		})
	})

	// 烈焰蛋糕
	event.modify("create:blaze_cake", (modify) => {
		modify.setFoodProperties((builder) => {
			builder.hunger(10)
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
		modify.setFoodProperties((builder) => {
			builder.hunger(2)
				.saturation(2)
				.alwaysEdible()
				.fastToEat()
		})
	})

	if (FestivalUtils.isAprilFoolsDay()) {
		event.modify("mekanism:alloy_infused", (modify) => {
			modify.setNameKey("item.cmi.sweet_berry_hard_candy")
			modify.setFoodProperties((builder) => {
				builder.hunger(2)
					.saturation(0.25)
					.alwaysEdible()
					.fastToEat()
			})
		})

		event.modify("mekanism:alloy_reinforced", (modify) => {
			modify.setNameKey("item.cmi.mint_hard_candy")
			modify.setFoodProperties((builder) => {
				builder.hunger(2)
					.saturation(0.25)
					.alwaysEdible()
					.fastToEat()
			})
		})

		event.modify("mekanism:alloy_atomic", (modify) => {
			modify.setNameKey("item.cmi.grape_hard_candy")
			modify.setFoodProperties((builder) => {
				builder.hunger(2)
					.saturation(0.25)
					.alwaysEdible()
					.fastToEat()
			})
		})

		event.modify("cmi:enriched_alloy", (modify) => {
			modify.setNameKey("item.cmi.apple_hard_candy")
			modify.setFoodProperties((builder) => {
				builder.hunger(2)
					.saturation(0.25)
					.alwaysEdible()
					.fastToEat()
			})
		})
	}
})