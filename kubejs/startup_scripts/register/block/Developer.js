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
		return event.create(`${global.namespace}:${name}`, "cardinal")
			.soundType(SoundType.WOOL)
			.hardness(0)
			.resistance(1)
			.waterlogged()
			.notSolid()
			.defaultCutout()
			.notSolid()
			.noCollision()
			.translationKey(Component.translatable(`${global.namespace}:${name}`))
			.tag(`${global.namespace}:dev_doll`)
			.modelJson = developerDollmodel(name, type)
	}

	// Developer

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

	// music

	// DontKillBelalus
	addDeveloperDoll("dont_kill_belalus", "wide")

	// Other

	// Aleegos
	addDeveloperDoll("aleegos", "slim")

	// shi_xiao_bai_na
	addDeveloperDoll("shi_xiao_bai_na", "slim")

	// hanhan
	addDeveloperDoll("hanhan_ovo", "wide")

	// dkrkoo_weihe
	addDeveloperDoll("dkrkoo_weihe", "slim")

})