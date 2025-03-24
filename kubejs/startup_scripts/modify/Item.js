ItemEvents.modification((event) => {
	// 设定多彩构件无法被合成配方消耗
	event.modify("ue_addons:colorful_mechanism", (modify) => {
		modify.craftingRemainder = "ue_addons:colorful_mechanism"
	})
})