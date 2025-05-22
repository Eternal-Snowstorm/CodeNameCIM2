ItemEvents.modification((event) => {
	// 设定多彩构件无法被合成配方消耗
	event.modify("cmi:colorful_mechanism", (modify) => {
		modify.craftingRemainder = "cmi:colorful_mechanism"
	})
})