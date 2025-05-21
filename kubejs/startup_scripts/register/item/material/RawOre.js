StartupEvents.registry("item", (event)=>{
    function addAloneRawMaterial(name) {
        event.create(`${global.namespace}:raw_${name}`)
            .texture(`${global.namespace}:item/material/raw/raw_${name}`)
            .tag("forge:raw_materials")
            .tag(`forge:raw_materials/${name}`)
    }

    addAloneRawMaterial("vanadium")
    addAloneRawMaterial("platinum")
    addAloneRawMaterial("chromium")
})