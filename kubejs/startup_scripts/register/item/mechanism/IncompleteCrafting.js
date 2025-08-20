StartupEvents.registry("item", (event) => {
    event.create(`${global.namespace}:crafting_incomplete_iron_mechanism`)
		.texture(`${global.namespace}:item/mechanism/crafting_incomplete/iron`)
    event.create(`${global.namespace}:crafting_incomplete_copper_mechanism`)
		.texture(`${global.namespace}:item/mechanism/crafting_incomplete/copper`)
})