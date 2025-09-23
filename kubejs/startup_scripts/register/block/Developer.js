StartupEvents.registry("block", (event) => {
	function addDeveloperDoll(name) {
		let registerDeveloperDoll =
			event.create(`${global.namespace}:${name}`, "cardinal")
				.soundType(SoundType.WOOL)
				.hardness(0)
				.resistance(1)
				.model(`${global.namespace}:block/dev/${name}`)
				.textureAll(`${global.namespace}:block/dev/${name}`)
				.notSolid()
				.defaultCutout()
				.notSolid()
				.noCollision()
				.tag(`${global.namespace}:dev_doll`)

		return registerDeveloperDoll
	}
	// Developer
	// UE
	addDeveloperDoll("unknown_entity_")
	// 柒月
	addDeveloperDoll("qi_month")
	// 中微子
	addDeveloperDoll("vechni_metel")
	// 1174
	addDeveloperDoll("117458866249")
	// FiberOptics
	addDeveloperDoll("fiber_optics")
	// Random Mechanism
	addDeveloperDoll("random_mechanism")
	// MF
	addDeveloperDoll("sakura_star_cn")
	// Dropper
	addDeveloperDoll("dropper_qwq")
	// 燕栖
	addDeveloperDoll("ye_anqing")

	// music
	// DontKillBelalus
	addDeveloperDoll("dont_kill_belalus")

	// Other
	// Aleegos
	addDeveloperDoll("aleegos")
	// shi_xiao_bai_na
	addDeveloperDoll("shi_xiao_bai_na")
	// hanhan
	addDeveloperDoll("hanhan_ovo")
})