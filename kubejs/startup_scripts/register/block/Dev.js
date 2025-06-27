StartupEvents.registry("block", (event) => {

//UE

event.create(`${global.namespace}:unknown_entity_block`)
		.soundType(SoundType.METAL)
		.hardness(0)
		.resistance(1)
		.requiresTool(true)
        .model(`${global.namespace}:block/skinmodel`)
        .textureAll(`${global.namespace}:block/dev/unknown_entity_`)
	})