ServerEvents.recipes((event) => {
	let { create, tconstruct } = event.recipes

	let solutionRecipes = [
		"fecl2",
		"feso4",
		"cucl2",
		"cuso4",
		"zncl2",
		"znso4",
		"alcl3",
		"al2so43",
		"aucl3",
		"au2so43",
		"agcl",
		"ag2so4",
		"pbcl2",
		"pbso4",
		"crcl3",
		"cr2so43",
		"sncl2",
		"snso4",
		"vocl2",
		"voso4",
		"uo2cl2",
		"uo2so4",
		"nicl2",
		"niso4",
		"cocl2",
		"coso4",
		"oscl3",
		"os2so43",
		"ptcl4",
		"ptso42",
		"na2so4",
		"nacl",
		"caso4",
		"cacl2",
		"k2so4",
		"kcl"
	]
	solutionRecipes.forEach((name) => {
		create.mixing(Fluid.of(`cmi:${name}_solution`, 500), [
			`${global.namespace}:${name}`,
			Fluid.of("minecraft:water", 500)
		])

		tconstruct.casting_table(`${global.namespace}:${name}`)
			.fluid(Fluid.of(`cmi:${name}_solution`, 500))
			.cooling_time(20)
	})
})