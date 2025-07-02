StartupEvents.registry("block", (event) => {
	//UE
	event.create(`${global.namespace}:unknown_entity_`, "cardinal")
		.soundType(SoundType.METAL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
		.model(`${global.namespace}:block/skinmodel`)
		.textureAll(`${global.namespace}:block/dev/unknown_entity_`)
		.notSolid()
})