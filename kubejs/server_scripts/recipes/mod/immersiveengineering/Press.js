ServerEvents.recipes((event) => {
    let { immersiveengineering } = event.getRecipes()

    immersiveengineering.metal_press("2x immersiveengineering:empty_casing")
        .input("#forge:ingots/brass")
        .mold("cmi:bullet_mold")

    immersiveengineering.metal_press("cmi:wooden_gear")
        .input("4x #minecraft:planks")
        .mold("cmi:gear_mold")
})
