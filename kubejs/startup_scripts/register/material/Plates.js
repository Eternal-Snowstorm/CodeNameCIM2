StartupEvents.registry("item", (event) => {
    function addColorPlateItem(name, color) {
        let builder = event.create(`${global.namespace}:${name}_plate`)

        builder.texture(`${global.namespace}:item/material/color/plate/plate`)
        builder.color(0, color)
        builder.tag("forge:plates")
        builder.tag(`forge:plates/${name}`)

        return builder
    }

    function addAlonePlateItem(name) {
        let builder = event.create(`${global.namespace}:${name}_plate`)

        builder.texture(`${global.namespace}:item/material/material/plate/${name}`)
        builder.tag("forge:plates")
        builder.tag(`forge:plates/${name}`)

        return builder
    }

    addAlonePlateItem("dense_obsidian")
    addAlonePlateItem("stone")
})