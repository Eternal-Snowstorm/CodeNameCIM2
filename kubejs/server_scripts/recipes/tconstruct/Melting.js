ServerEvents.recipes((event) => {
    let { tconstruct } = event.recipes
    tconstruct.melting(
        Fluid.of("ue_addons:molten_andesite_alloy", 90),
        "create:andesite_alloy"
    ).time(20).temperature(800)
    tconstruct.melting(
        Fluid.of("ue_addons:molten_andesite_alloy", 810),
        "create:andesite_alloy_block"
    ).time(20).temperature(800)
})