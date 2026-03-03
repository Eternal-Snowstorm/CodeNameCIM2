ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    // 纯净石英
    thermal.crystallizer("cmi:pure_quartz_prism", [
        "#forge:dusts/pure_quartz",
        Fluid.of("cmi:crystal_catalyt", 200)
    ]).energy(4000)

})
