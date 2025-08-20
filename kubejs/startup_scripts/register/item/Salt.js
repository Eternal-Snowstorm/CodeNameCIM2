StartupEvents.registry("item", (event) => {
	function addSaltItem(name, name2, tag) {
		let register1 =
			event.create(`${global.namespace}:${name}`)
				.texture(`${global.namespace}:item/material/salt/${name}`)
				.tag(`forge:chem_salts/${tag}`)
				.tag("forge:chem_salts")
		let register2 =
			event.create(`${global.namespace}:${name2}`)
				.texture(`${global.namespace}:item/material/salt/${name2}`)
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
	addSaltItem("alcl3", "al2so43", "aluminium")
	addSaltItem("aucl3", "au2so43", "gold")
	addSaltItem("agcl", "ag2so4", "silver")
	addSaltItem("pbcl2", "pbso4", "lead")
	addSaltItem("crcl3", "cr2so43", "chorme")
	addSaltItem("sncl2", "snso4", "tin")
	addSaltItem("vocl2", "voso4", "vanadium")
	addSaltItem("uo2cl2", "uo2so4", "uranium")
	addSaltItem("nicl2", "niso4", "nickel")
	addSaltItem("cocl2", "coso4", "cobalt")
	addSaltItem("oscl3", "os2so43", "osmium")
	addSaltItem("ptcl4", "ptso42", "platinum")
	addSaltItem("na2so4", "nacl", "sodium")
	addSaltItem("caso4", "cacl2", "calcium")
	addSaltItem("k2so4", "kcl", "potassium")
})