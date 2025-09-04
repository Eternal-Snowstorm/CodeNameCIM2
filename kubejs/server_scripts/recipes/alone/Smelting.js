ServerEvents.recipes((event) => {
    let { minecraft, immersiveengineering, thermal } = event.recipes
    let furnaceMetals = ["tin", "lead", "zinc", "aluminum", "silver", "gold", "copper"]
    let blastFurnaceMetals = ["uranium", "nickel", "cobalt", "iron", "platinum", "desh"]
    let arcFurnaceMetals = ["chromium", "vanadium", "ostrum", "calorite"]

    event.remove({
        output: "#forge:ingots",
        type: "minecraft:smelting"
    })
    event.remove({
        output: "#forge:ingots",
        type: "minecraft:blasting",
    })
    event.remove({
        output: "#forge:ingots",
        type: "thermal:furnace",
    })
    event.remove({
        output: "#forge:ingots",
        type: "immersiveengineering:arc_furnace"
    })
    event.remove({
        output: "#forge:nuggets/iron",
        type: "minecraft:smelting"
    })
    event.remove({
        output: "#forge:nuggets/steel",
        type: "minecraft:smelting"
    })
    event.remove({
        output: "#forge:nuggets/osmium",
        type: "minecraft:smelting"
    })

    furnaceMetals.forEach((metal) => {
        let ingotId = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

        minecraft.blasting(
            ingotId[0],
            `#forge:raw_materials/${metal}`,
            10,
            0
        )
        minecraft.blasting(
            ingotId[0],
            `#forge:dusts/${metal}`,
            10,
            0
        )
        minecraft.blasting(
            ingotId[0],
            `#create:crushed_raw_materials/${metal}`,
            10,
            0
        )
        minecraft.smelting(
            ingotId[0],
            `#forge:raw_materials/${metal}`,
            10,
            0
        )
        minecraft.smelting(
            ingotId[0],
            `#forge:dusts/${metal}`,
            10,
            0
        )
        minecraft.smelting(
            ingotId[0],
            `#create:crushed_raw_materials/${metal}`,
            10,
            0
        )
    })

})