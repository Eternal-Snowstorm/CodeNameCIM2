StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("ue_addons:creative_mechanism")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))
})

StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})