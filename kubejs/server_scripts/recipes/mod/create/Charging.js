ServerEvents.recipes((event) => {
    let { createaddition } = event.recipes

    // 充能紫水晶
    createaddition.charging("cmi:charged_amethyst", [
        "#forge:gems/amethyst"
    ]).energy(400)

})