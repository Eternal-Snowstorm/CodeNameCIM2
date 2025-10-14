WorldgenEvents.remove((event) => {
	let removeId = [
		"deepdrilling:asurine_node",
		"deepdrilling:copper_node",
		"deepdrilling:crimsite_node",
		"deepdrilling:gold_node",
		"deepdrilling:iron_node",
		"deepdrilling:ochrum_node",
		"deepdrilling:veridium_node",
		"deepdrilling:zinc_node"
	]
	event.removeFeatureById("underground_decoration", removeId)
})