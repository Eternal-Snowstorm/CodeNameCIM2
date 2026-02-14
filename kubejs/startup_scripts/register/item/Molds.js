StartupEvents.registry("item", (event) => {
    function addMold(name) {
        let builder = event.create(`${global.namespace}:${name}_mold`)

        builder.texture(`${global.namespace}:item/material/mold/${name}`)
        builder.tag("vintageimprovements:curving_heads")
        builder.tag("cmi:molds")

        return builder
    }

    addMold("plate")
    addMold("gear")
    addMold("rod")
    addMold("wire")
    addMold("coin")
    addMold("bullet")
    addMold("mechanism")
    addMold("2x2_packing")
    addMold("3x3_packing")
    addMold("unpack")
})