StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:bucket`, "helmet")
		.tier(`${global.namespace}:iron`)
		.texture(`${global.namespace}:item/armor/bucket`)
})