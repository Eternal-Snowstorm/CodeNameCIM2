ServerEvents.tags("fluid", (event) => {
	// 可用作火箭燃料
	event.get("ad_astra:fuel")
		.add("minecraft:lava")
})