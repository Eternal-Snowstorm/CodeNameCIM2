//enchanted
BlockEvents.rightClicked(event => {
	if (event.getItem().is('ue_addons:enchanted_mechanism')) {
		let spawnx = event.getLevel().createEntity('minecraft:experience_orb')
		spawnx.setNbt({ Value: 5 })
		spawnx.pos = event.block.pos
		spawnx.spawn()
	}
})