StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${global.namespace}:${name}`)
	}
	// mek未完成电路板
	addItem("incomplete_advanced_control_circuit")
		.texture(`${global.namespace}:item/material/advanced_control_circuit`)

	addItem("incomplete_elite_control_circuit")
		.texture(`${global.namespace}:item/material/elite_control_circuit`)

	addItem("incomplete_ultimate_control_circuit")
		.texture(`${global.namespace}:item/material/ultimate_control_circuit`)
})