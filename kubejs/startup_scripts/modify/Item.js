ItemEvents.modification((event) => {
	// 设定多彩构件无法被合成配方消耗
	event.modify("cmi:colorful_mechanism", (modify) => {
		modify.craftingRemainder = "cmi:colorful_mechanism"
	})

	// 煤粉燃烧时间
	event.modify("mekanism:dust_coal", (modify) => {
		modify.burnTime = 2400
	})

	// 木屑块燃烧时间
	event.modify("createdieselgenerators:wood_chip", (modify) => {
		modify.burnTime = 200
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
})