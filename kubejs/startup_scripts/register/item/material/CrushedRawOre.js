StartupEvents.registry("item", (event) =>{
    function addAloneCrushedRawMaterial(name) {
        event.create(`${global.namespace}:crushed_raw_${name}`)
            .texture(`${global.namespace}:item/material/crushed/${name}`)
            .tag("create:crushed_raw_materials")
            .tag(`create:crushed_raw_materials/${name}`)
    }

    addAloneCrushedRawMaterial("desh")
    addAloneCrushedRawMaterial("ostrum")
    addAloneCrushedRawMaterial("calorite")
    addAloneCrushedRawMaterial("cobalt")
    addAloneCrushedRawMaterial("vanadium")
    addAloneCrushedRawMaterial("chromium")
    addAloneCrushedRawMaterial("platinum")
})