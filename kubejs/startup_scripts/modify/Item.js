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
		modify.burnTime === 200
	})

	event.modify("", (modify) => {
		modify.addAttribute
	})
})