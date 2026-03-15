ServerEvents.recipes((event) => {
    let { createaddition } = event.getRecipes()

    // 充能紫水晶
    createaddition.charging("cmi:charged_amethyst", [
        "#forge:gems/amethyst"
    ]).energy(400)

    createaddition.charging("cmi:overcharged_alloy_ingot", [
        "create:chromatic_compound"
    ]).energy(5000)
})