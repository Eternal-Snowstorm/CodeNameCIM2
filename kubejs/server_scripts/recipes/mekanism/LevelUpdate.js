//通用构件
ServerEvents.recipes(event => {
    let { create } = event.recipes

    //举例，name就是"mekanism:basic_smelting_factory"中的"smelting_factory"（工厂级起步）
    //而lowestid填最低级的机器id（如"mekanism:energized_smelter"，/kjs hand之后直接原封不动扔里面就行）
    //空示例 addMekUpdate(, )

    function addMekUpdate(name, lowestid) {
        create.item_application(`mekanism:basic_${name}`, [lowestid, "cmi:basic_mekanism_mechanism"])
        create.item_application(`mekanism:advanced_${name}`, [`mekanism:basic_${name}`, "cmi:advanced_mekanism_mechanism"])
        create.item_application(`mekanism:elite_${name}`, [`mekanism:advanced_${name}`, "cmi:elite_mekanism_mechanism"])
        create.item_application(`mekanism:ultimate_${name}`, [`mekanism:elite_${name}`, "cmi:ultimate_mekanism_mechanism"])

        //为开发方便，remove配方只好放这里面，真心对不起=(

        event.remove({ output: `mekanism:basic_${name}` })
        event.remove({ output: `mekanism:advanced_${name}` })
        event.remove({ output: `mekanism:elite_${name}` })
        event.remove({ output: `mekanism:ultimate_${name}` })
    }

    addMekUpdate("smelting_factory", "mekanism:energized_smelter")
    addMekUpdate("enriching_factory", "mekanism:enrichment_chamber")
    addMekUpdate("crushing_factory", "mekanism:crusher")
    addMekUpdate("compressing_factory", "mekanism:osmium_compressor")
    addMekUpdate("combining_factory", "mekanism:combiner")
    addMekUpdate("purifying_factory", "mekanism:purification_chamber")
    addMekUpdate("injecting_factory", "mekanism:chemical_injection_chamber")
    addMekUpdate("infusing_factory", "mekanism:metallurgic_infuser")
    addMekUpdate("sawing_factory", "mekanism:precision_sawmill")
    addMekUpdate("energy_cube", "immersiveengineering:capacitor_mv")
    addMekUpdate("fluid_tank", "create:fluid_tank")
    addMekUpdate("chemical_tank", "cmi:osmium_tile")
})