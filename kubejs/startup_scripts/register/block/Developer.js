StartupEvents.registry("block", (event) => {

	function developerDollmodel(dollName, skinType) {

		const PARENT = `cmi:block/dev/${skinType}`
		const SKIN = `cmi:block/dev/${dollName}`

		return {
			parent: PARENT,
			textures: {
				"skin": SKIN
			}
		}
	}

	function addDeveloperDoll(name, type) {
		let builder =
			event.create(`${global.namespace}:${name}`, "cardinal")

		builder.soundType(SoundType.WOOL)
		builder.hardness(0)
		builder.resistance(1)
		builder.waterlogged()
		builder.notSolid()
		builder.defaultCutout()
		builder.notSolid()
		builder.noCollision()
		builder.translationKey(Component.translatable(`${global.namespace}:${name}`))
		builder.tag(`${global.namespace}:dev_doll`)
		builder.modelJson = developerDollmodel(name, type)

		return builder
	}

	// region Main Developer
	// UE
	addDeveloperDoll("unknown_entity_", "slim")

	// 柒月
	addDeveloperDoll("qi_month", "slim")

	// 中微子
	addDeveloperDoll("vechni_metel", "slim")

	// 1174
	addDeveloperDoll("117458866249", "wide")

	// FiberOptics
	addDeveloperDoll("fiber_optics", "slim")

	// Random Mechanism
	addDeveloperDoll("random_mechanism", "slim")

	// MF
	addDeveloperDoll("sakura_star_cn", "slim")

	// Dropper
	addDeveloperDoll("dropper_qwq", "wide")

	// 燕栖
	addDeveloperDoll("ye_anqing", "slim")

	// 亓才孑
	addDeveloperDoll("qicaijie", "slim")
	// endregion

	// music

	// DontKillBelalus
	addDeveloperDoll("dont_kill_belalus", "wide")

	// region Other
	// Aleegos
	addDeveloperDoll("aleegos", "slim")

	// shi_xiao_bai_na
	addDeveloperDoll("shi_xiao_bai_na", "slim")

	// hanhan
	addDeveloperDoll("hanhan_ovo", "wide")

	// dkrkoo_weihe
	addDeveloperDoll("dkrkoo_weihe", "slim")
	// endregion
})