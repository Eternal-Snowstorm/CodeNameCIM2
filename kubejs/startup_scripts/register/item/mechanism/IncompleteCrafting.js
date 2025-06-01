//构件底座
StartupEvents.registry("item", event => {
    event.create(`${global.namespace}:crafting_incomplete_iron_mechanism`, "basic")
		.texture(`${global.namespace}:item/mechanism/crafting_incomplete/iron`)
    event.create(`${global.namespace}:crafting_incomplete_copper_mechanism`, "basic")
		.texture(`${global.namespace}:item/mechanism/crafting_incomplete/copper`)
})