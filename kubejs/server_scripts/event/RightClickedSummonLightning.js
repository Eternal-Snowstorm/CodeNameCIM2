BlockEvents.rightClicked((event) => {
	let { block, player } = event
	let { x, y, z } = block

	const ACCELERATOR = "cmi:the_accelerator_of_mechanism_power"
	const MECH = "cmi:coil_mechanism"

	if (player.mainHandItem === MECH && block.id === ACCELERATOR) {
		let command = `execute as ${player.username} at ${player.username} positioned as ${player.username} run summon minecraft:lightning_bolt ${x} ${y} ${z}`
		player.runCommandSilent(command)
	}
})