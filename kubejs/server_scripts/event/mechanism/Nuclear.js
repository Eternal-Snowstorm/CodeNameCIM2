ItemEvents.rightClicked("cmi:nuclear_mechanism", (event) => {
	// 只在服务端运行
	if (event.level.isClientSide()) {
		return
	}
	event.player.mergeNbt({ ForgeCaps: { "mekanism:radiation": { radiation: 0 } } })
	event.player.swing()
})