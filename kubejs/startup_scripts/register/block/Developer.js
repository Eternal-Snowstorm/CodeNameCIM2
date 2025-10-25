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

		let blockBuilder = event.create(`${global.namespace}:${name}`, "cardinal")

		blockBuilder.soundType(SoundType.WOOL)
		blockBuilder.hardness(0)
		blockBuilder.resistance(1)

		blockBuilder.waterlogged()
		blockBuilder.notSolid()
		blockBuilder.defaultCutout()
		blockBuilder.notSolid()
		blockBuilder.noCollision()

		blockBuilder.tag(`${global.namespace}:dev_doll`)
		blockBuilder.modelJson = developerDollmodel(name, type)
		blockBuilder.displayName(Component.translatable(`${global.namespace}:${name}`))

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

})