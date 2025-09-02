StartupEvents.registry("item", (event) => {
	function addSaltItem(name, name2, tag) {
		let register1 = event.create(`${global.namespace}:${name}`)
			.texture(`${global.namespace}:item/material/salt/${name}`)
			.tag(`forge:chem_salts/${tag}/chloride`)
			.tag(`forge:chem_salts/${tag}`)
			.tag("forge:chem_salts")

		let register2 = event.create(`${global.namespace}:${name2}`)
			.texture(`${global.namespace}:item/material/salt/${name2}`)
			.tag(`forge:chem_salts/${tag}/sulfate`)
			.tag(`forge:chem_salts/${tag}`)
			.tag("forge:chem_salts")

		return {
			item1: register1,
			item2: register2
		}
	}

	addSaltItem("fecl2", "feso4", "iron")
	addSaltItem("cucl2", "cuso4", "copper")
	addSaltItem("zncl2", "znso4", "zinc")
	addSaltItem("alcl3", "al2so43", "aluminum")
	addSaltItem("pbcl2", "pbso4", "lead")
	addSaltItem("crcl3", "cr2so43", "chromium")
	addSaltItem("sncl2", "snso4", "tin")
	addSaltItem("vocl2", "voso4", "vanadium")
	addSaltItem("uo2cl2", "uo2so4", "uranium")
	addSaltItem("nicl2", "niso4", "nickel")
	addSaltItem("cocl2", "coso4", "cobalt")
	addSaltItem("oscl3", "os2so43", "osmium")
	addSaltItem("mgcl2", "mgso4", "magnesium")
	addSaltItem("nacl", "na2so4", "sodium")
	addSaltItem("cacl2", "caso4", "calcium")
	addSaltItem("kcl", "k2so4", "potassium")
})