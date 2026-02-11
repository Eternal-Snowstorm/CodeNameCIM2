StartupEvents.registry("item", (event) => {
    function addMold(name) {
        let builder = event.create(`${global.namespace}:${name}_mold`)

        builder.tag("vintageimprovements:curving_heads")
        builder.texture(`${global.namespace}:item/material/mold/${name}`)

        return builder
    }

    addMold("plate")
    addMold("rod")
    addMold("gear")
    addMold("mechanism")
})