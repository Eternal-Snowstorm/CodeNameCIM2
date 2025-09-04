ServerEvents.recipes((event) => {
    let { minecraft, immersiveengineering, thermal } = event.recipes
    let types = ["forge:raw_materials", "forge:dusts", "create:crushed_raw_materials"]
    let furnaceMetals = ["tin", "lead", "zinc", "aluminum", "silver", "gold", "copper"]
    let blastFurnaceMetals = ["uranium", "nickel", "cobalt", "iron", "platinum", "desh"]
    let arcFurnaceMetals = ["chromium", "vanadium", "ostrum", "calorite"]

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
            }
        })
    })
})