let solutionFluids = []

function addSolution(name, color) {
	solutionFluids.push({
		name: name,
		color: color
	})
}

StartupEvents.registry("fluid", (event) => {
	solutionFluids.forEach((entry) => {
		let { name, color } = entry
		let id = `${global.namespace}:${name}_solution`

		let solutionFluidRegister =
			event.create(id)
				.flowingTexture(`${global.namespace}:fluid/solution/flow`)
				.stillTexture(`${global.namespace}:fluid/solution/still`)
				.thinTexture(color)
				.bucketColor(color)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_solution_bucket.json`
		JsonIO.write(file, {
			parent: "forge:item/bucket_drip",
			loader: "forge:fluid_container",
			fluid: id
		})

		console.log(`${id} 注册成功`)
	})
})

let customCreativeTab = `${global.namespace}:salts_and_solutions`
StartupEvents.modifyCreativeTab(customCreativeTab, (event) => {
	solutionFluids.forEach((entry) => {
		let { name } = entry
		event.add(`${global.namespace}:${name}_solution_bucket`)
	})
})

let kjsCreativeTab = "kubejs:tab"
StartupEvents.modifyCreativeTab(kjsCreativeTab, (event) => {
	solutionFluids.forEach((entry) => {
		let { name } = entry
		event.remove(`${global.namespace}:${name}_solution_bucket`)
	})
})

addSolution("fecl2", 0x5BBD7F)
addSolution("feso4", 0x6EB49C)

addSolution("cucl2", 0x00A889)
addSolution("cuso4", 0x3D67CA)

addSolution("zncl2", 0xC8C8C8)
addSolution("znso4", 0xE7E2E2)

addSolution("alcl3", 0xD2CE2F)
addSolution("al2so43", 0xAAAAAA)

addSolution("aucl3", 0xFFC800)
addSolution("au2so43", 0x979B9E)

addSolution("agcl", 0x838383)
addSolution("ag2so4", 0xC2F2F2)

addSolution("pbcl2", 0xADEDF)
addSolution("pbso4", 0xDADEDF)

addSolution("crcl3", 0x9300FF)
addSolution("cr2so43", 0x00D468)

addSolution("sncl2", 0xFFFBBF)
addSolution("snso4", 0xEDE9AD)

addSolution("vocl2", 0xE2EAB0)
addSolution("voso4", 0x007FFF)

addSolution("uo2cl2", 0xDAFF00)
addSolution("uo2so4", 0xDAFF00)

addSolution("nicl2", 0x59FFD7)
addSolution("niso4", 0x59FFD7)

addSolution("cocl2", 0xFFFFFF)
addSolution("coso4", 0xFFFFFF)

addSolution("oscl3", 0xFF74F3)
addSolution("os2so43", 0x001AE3)

addSolution("ptcl4", 0xa81c07)
addSolution("ptso42", 0xFFFFD0)

addSolution("na2so4", 0xD7DDDD)
addSolution("nacl", 0xDADEDF)

addSolution("caso4", 0xE0DDC3)
addSolution("cacl2", 0xE0DDC3)

addSolution("k2so4", 0xB8BDBD)
addSolution("kcl", 0xB8BDBD)