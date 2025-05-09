Ponder.tags((event) => {
	function addPonderTag(tag, icon, name) {
		let index = `${name} Ponder Index`

		event.createTag(`${global.namespace}:${tag}`, icon, name, index)
	}

	addPonderTag("tconstruct", "tconstruct:smeltery_controller", "TConstruct")
	addPonderTag("ponder", "ue_addons:creative_mechanism", "Modpack")
	addPonderTag("other", "supplementaries:faucet", "Other")
	addPonderTag("ae2", "ae2:controller", "Applied Energistics 2")
})