StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addAloneGemItem(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/material/material/gem/${name}`)
		builder.tag("forge:gems")
		builder.tag(`forge:gems/${name}`)

		let a = TagsBuidlder.block("a")

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addNonGemItem(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/material/material/gem/${name}`)

		return builder
	}

	addAloneGemItem("charged_amethyst")
	addAloneGemItem("single_crystal_silicon")

	addNonGemItem("alpha_blackstone_source")
	addNonGemItem("beta_blackstone_source")
	addNonGemItem("gamma_blackstone_source")
	addNonGemItem("delta_blackstone_source")
	addNonGemItem("source_ruby")
	addNonGemItem("source_sapphire")
	addNonGemItem("source_emeraid")
})