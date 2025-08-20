StartupEvents.registry("item", (event) => {
	function addSaltItem(name) {
		let register1 = event.create(`${global.namespace}:${name}_chloride`)
			.texture(`${global.namespace}:item/material/salt/${name}/chloride`)
			.tag(`forge:chem_salts/${name}`)
			.tag("forge:chem_salts")

		let register2 = event.create(`${global.namespace}:${name}_sulfate`)
			.texture(`${global.namespace}:item/material/salt/${name}/sulfate`)
			.tag(`forge:chem_salts/${name}`)
			.tag("forge:chem_salts")

		return {
			item1: register1,
			item2: register2
		}
	}

	addSaltItem("iron")
	addSaltItem("copper")
	addSaltItem("zinc")
	addSaltItem("aluminum")
	addSaltItem("gold")
	addSaltItem("silver")
	addSaltItem("lead")
	addSaltItem("chromium")
	addSaltItem("tin")
	addSaltItem("vanadium")
	addSaltItem("uranium")
	addSaltItem("nickel")
	addSaltItem("cobalt")
	addSaltItem("osmium")
	addSaltItem("platinum")
	addSaltItem("sodium")
	addSaltItem("calcium")
	addSaltItem("potassium")
})