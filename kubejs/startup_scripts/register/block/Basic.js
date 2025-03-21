StartupEvents.registry("block", (event) => {
	event.create(`${global.namespace}:the_accelerator_of_mechanism_power`)
		.soundType(SoundType.METAL)

	let registerQio = [
		"one",
		"two",
		"three",
		"four",
		"empty"
	]
	registerQio.forEach((name) => {
		event.create(`${global.namespace}:qio_${name}`)
			.soundType(SoundType.METAL)
			.model(`${global.namespace}:block/qio/${name}`)
			.tagBlock(global.miningLevel["stone"])
			.tagBlock(global.toolType["pickaxe"])
			.requiresTool(true)
	})
})