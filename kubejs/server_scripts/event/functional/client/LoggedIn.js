PlayerEvents.loggedIn((event) => {
	let { player } = event

	let tranKey = `message.${Cmi.MODID}.welcome`
	player.tell(Component.translatable(tranKey, player.username))
})