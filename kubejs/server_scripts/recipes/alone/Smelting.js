ServerEvents.recipes((event) => {
    let { minecraft, mekanism } = event.recipes
    let types = ["forge:raw_materials", "forge:dusts", "create:crushed_raw_materials"]
    let furnaceMetals = global.meltingLevels[1000]
    let blastFurnaceMetals = global.meltingLevels[1500]
    let arcFurnaceMetals = global.meltingLevels[2000]
    let energizedSmelterMetals = global.meltingLevels["above"]

    types.forEach((type) => {
        furnaceMetals.forEach((metal) => {
            let ingotId = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

            if (IngredientUtils.isNotNull(`#${type}/${metal}`)) {
                minecraft.smelting(
                    ingotId[0],
                    `#${type}/${metal}`,
                    0
                )
                minecraft.blasting(
                    ingotId[0],
                    `#${type}/${metal}`,
                    0
                )
                event.custom({
                    "type": "immersiveindustry:car_kiln",
                    "input": {
                        "tag": `${type}/${metal}`
                    },
                    "results": [{
                        "item": ingotId[0]
                    }],
                    "time": 200,
                    "tickEnergy": 32
                })
            }
        })
        blastFurnaceMetals.forEach((metal) => {
            let ingotId = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

            if (IngredientUtils.isNotNull(`#${type}/${metal}`)) {
                minecraft.blasting(
                    ingotId[0],
                    `#${type}/${metal}`,
                    0
                )
                event.custom({
                    "type": "immersiveindustry:car_kiln",
                    "input": {
                        "tag": `${type}/${metal}`
                    },
                    "results": [{
                        "item": ingotId[0]
                    }],
                    "time": 200,
                    "tickEnergy": 32
                })
            }
        })
        arcFurnaceMetals.forEach((metal) => {
            let ingotId = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

            if (IngredientUtils.isNotNull(`#${type}/${metal}`)) {
                event.custom({
                    "type": "immersiveindustry:car_kiln",
                    "input": {
                        "tag": `${type}/${metal}`
                    },
                    "results": [{
                        "item": ingotId[0]
                    }],
                    "time": 200,
                    "tickEnergy": 32
                })
                mekanism.smelting(
                    ingotId[0],
                    `#${type}/${metal}`
                )
            }
        })
        energizedSmelterMetals.forEach((metal) => {
            let ingotId = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

            if (IngredientUtils.isNotNull(`#${type}/${metal}`)) {
                mekanism.smelting(
                    ingotId[0],
                    `#${type}/${metal}`
                )
            }
        })
    })
})