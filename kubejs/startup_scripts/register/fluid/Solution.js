StartupEvents.registry("fluid", (event) => {
	function addSolution(name, color) {
		let registerSolution = event.create(`${global.namespace}:${name}_solution`)
			.flowingTexture(`${global.namespace}:fluid/solution/flow`)
			.stillTexture(`${global.namespace}:fluid/solution/still`)
			.thinTexture(color)
			.bucketColor(color)

		if (Platform.isClientEnvironment()) {
			let file = `kubejs/assets/${global.namespace}/models/item/${name}_solution_bucket.json`
			JsonIO.write(file, {
				parent: "forge:item/bucket_drip",
				loader: "forge:fluid_container",
				fluid: `${global.namespace}:${name}_solution`
			})
		}
		console.log(`${global.namespace}:${name}_solution注册成功`)
		return registerSolution
	}
addSolution("fecl2", 0x5BBD7F)
	.tag("forge:solutions/iron/chloride")
addSolution("feso4", 0x6EB49C)
	.tag("forge:solutions/iron/sulfate")

addSolution("cucl2", 0x00A889)
	.tag("forge:solutions/copper/chloride")
addSolution("cuso4", 0x3D67CA)
	.tag("forge:solutions/copper/sulfate")

addSolution("zncl2", 0xC8C8C8)
	.tag("forge:solutions/zinc/chloride")
addSolution("znso4", 0xE7E2E2)
	.tag("forge:solutions/zinc/sulfate")

addSolution("alcl3", 0xD2CE2F)
	.tag("forge:solutions/aluminum/chloride")
addSolution("al2so43", 0xAAAAAA)
	.tag("forge:solutions/aluminum/sulfate")

addSolution("aucl3", 0xFFC800)
	.tag("forge:solutions/gold/chloride")
addSolution("au2so43", 0x979B9E)
	.tag("forge:solutions/gold/sulfate")

addSolution("agcl", 0x838383)
	.tag("forge:solutions/silver/chloride")
addSolution("ag2so4", 0xC2F2F2)
	.tag("forge:solutions/silver/sulfate")

addSolution("pbcl2", 0xADEDF)
	.tag("forge:solutions/lead/chloride")
addSolution("pbso4", 0xDADEDF)
	.tag("forge:solutions/lead/sulfate")

addSolution("crcl3", 0x9300FF)
	.tag("forge:solutions/chromium/chloride")
addSolution("cr2so43", 0x00D468)
	.tag("forge:solutions/chromium/sulfate")

addSolution("sncl2", 0xFFFBBF)
	.tag("forge:solutions/tin/chloride")
addSolution("snso4", 0xEDE9AD)
	.tag("forge:solutions/tin/sulfate")

addSolution("vocl2", 0xE2EAB0)
	.tag("forge:solutions/vanadium/chloride")
addSolution("voso4", 0x007FFF)
	.tag("forge:solutions/vanadium/sulfate")

addSolution("uo2cl2", 0xDAFF00)
	.tag("forge:solutions/uranium/chloride")
addSolution("uo2so4", 0xDAFF00)
	.tag("forge:solutions/uranium/sulfate")

addSolution("nicl2", 0x59FFD7)
	.tag("forge:solutions/nickel/chlorite")
addSolution("niso4", 0x59FFD7)
	.tag("forge:solutions/nickel/sulfate")

addSolution("cocl2", 0xFFFFFF)
	.tag("forge:solutions/cobalt/chlorite")
addSolution("coso4", 0xFFFFFF)
	.tag("forge:solutions/cobalt/sulfate")

addSolution("oscl3", 0xFF74F3)
	.tag("forge:solutions/osmium/chloride")
addSolution("os2so43", 0x001AE3)
	.tag("forge:solutions/osmium/sulfate")

addSolution("ptcl4", 0xa81c07)
	.tag("forge:solutions/platinum/chloride")
addSolution("ptso42", 0xFFFFD0)
	.tag("forge:solutions/platinum/sulfate")

addSolution("mgcl2", 0xC8C8C8)
	.tag("forge:solutions/magnesium/chloride")
addSolution("mgso4", 0xE0E0E0)
	.tag("forge:solutions/magnesium/sulfate")

addSolution("na2so4", 0xD7DDDD)
	.tag("forge:solutions/sodium/chloride")
addSolution("nacl", 0xDADEDF)
	.tag("forge:solutions/sodium/sulfate")

addSolution("caso4", 0xE0DDC3)
	.tag("forge:solutions/calcium/chloride")
addSolution("cacl2", 0xE0DDC3)
	.tag("forge:solutions/calcium/sulfate")

addSolution("k2so4", 0xB8BDBD)
	.tag("forge:solutions/potassium/chloride")
addSolution("kcl", 0xB8BDBD)
	.tag("forge:solutions/potassium/sulfate")
})