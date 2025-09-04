StartupEvents.registry("fluid", (event) => {
	function addSolutionFluid(name1, name2, tag, color1, color2) {
		let fluid1 = event.create(`${global.namespace}:${name1}_solution`)
			.flowingTexture(`${global.namespace}:fluid/solution/flow`)
			.stillTexture(`${global.namespace}:fluid/solution/still`)
			.thinTexture(color1)
			.bucketColor(color1)
			.displayName(Component.translatable(`${global.namespace}:${name1}_solution`))
			.tag(`forge:solutions/${tag}/chloride`)
			.tag(`forge:solutions/${tag}`)

		let fluid2 = event.create(`${global.namespace}:${name2}_solution`)
			.flowingTexture(`${global.namespace}:fluid/solution/flow`)
			.stillTexture(`${global.namespace}:fluid/solution/still`)
			.thinTexture(color2)
			.bucketColor(color2)
			.displayName(Component.translatable(`${global.namespace}:${name2}_solution`))
			.tag(`forge:solutions/${tag}/sulfate`)
			.tag(`forge:solutions/${tag}`)

		FluidBucketItemModel.generate(`${name1}_solution`)
		FluidBucketItemModel.generate(`${name2}_solution`)

		console.log(`${global.namespace}:${name1}_solution 和 ${global.namespace}:${name2}_solution 注册成功`)
		return {
			register1: fluid1,
			register2: fluid2
		}
	}

	addSolutionFluid("fecl2", "feso4", "iron", 0x5BBD7F, 0x6EB49C)
	addSolutionFluid("cucl2", "cuso4", "copper", 0x00A889, 0x3D67CA)
	addSolutionFluid("zncl2", "znso4", "zinc", 0xC8C8C8, 0xE7E2E2)
	addSolutionFluid("alcl3", "al2so43", "aluminum", 0xD2CE2F, 0xAAAAAA)
	addSolutionFluid("pbcl2", "pbso4", "lead", 0xADEDF, 0xDADEDF)
	addSolutionFluid("crcl3", "cr2so43", "chromium", 0x9300FF, 0x00D468)
	addSolutionFluid("sncl2", "snso4", "tin", 0xFFFBBF, 0xEDE9AD)
	addSolutionFluid("vocl2", "voso4", "vanadium", 0xE2EAB0, 0x007FFF)
	addSolutionFluid("uo2cl2", "uo2so4", "uranium", 0xDAFF00, 0xDAFF00)
	addSolutionFluid("nicl2", "niso4", "nickel", 0x59FFD7, 0x59FFD7)
	addSolutionFluid("cocl2", "coso4", "cobalt", 0xFFFFFF, 0xFFFFFF)
	addSolutionFluid("oscl3", "os2so43", "osmium", 0xFF74F3, 0x001AE3)
	addSolutionFluid("mgcl2", "mgso4", "magnesium", 0xC8C8C8, 0xE0E0E0)
	addSolutionFluid("nacl", "na2so4", "sodium", 0xDADEDF, 0xD7DDDD)
	addSolutionFluid("cacl2", "caso4", "calcium", 0xE0DDC3, 0xE0DDC3)
	addSolutionFluid("kcl", "k2so4", "potassium", 0xB8BDBD, 0xB8BDBD)
})