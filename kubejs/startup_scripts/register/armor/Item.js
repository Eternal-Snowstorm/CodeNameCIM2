StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:bucket`, "helmet")
		.texture(`${global.namespace}:item/armor/bucket`)
		.tier(`${global.namespace}:iron`)
})