let pickaxe = global.toolType["pickaxe"]
StartupEvents.registry("block", (event)=>{
    function addAloneRawMaterialBlock(name, level) {
        event.create(`${global.namespace}:raw_${name}_block`)
            .textureAll(`${global.namespace}:block/material/raw/raw_${name}_block`)
            .tagBlock(pickaxe)
            .tagBlock(global.miningLevel[level])
            .tag("forge:storage_blocks")
            .tag(`forge:storage_blocks/raw_${name}`)
    }

    addAloneRawMaterialBlock("vanadium", "iron")
    addAloneRawMaterialBlock("platinum", "iron")
    addAloneRawMaterialBlock("chromium", "iron")
})