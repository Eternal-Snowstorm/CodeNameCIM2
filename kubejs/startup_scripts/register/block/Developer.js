StartupEvents.registry("block", (event) => {
	function addDeveloperDoll(name) {
		let registerDeveloperDoll =
			event.create(`${global.namespace}:${name}`, "cardinal")
				.soundType(SoundType.WOOL)
				.hardness(0)
				.resistance(1)
				.requiresTool(true)
				.model(`${global.namespace}:block/dev/${name}`)
				.textureAll(`${global.namespace}:block/dev/${name}`)
				.notSolid()
				.defaultCutout()
				.notSolid()
				.noCollision()
				.tag(`${global.namespace}:dev_doll`)

		return registerDeveloperDoll
	}
	// UE
	addDeveloperDoll("unknown_entity_")
	// 柒月
	addDeveloperDoll("qi_month")
	// 中微子
	addDeveloperDoll("vechni_metel")
	// 1174
	addDeveloperDoll("117458866249")
	// Aleegos
	addDeveloperDoll("aleegos")
	// FiberOptics
	addDeveloperDoll("fiber_optics")
	// Random Mechanism
	addDeveloperDoll("random_mechanism")
})