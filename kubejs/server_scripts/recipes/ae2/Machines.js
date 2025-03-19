ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    kubejs.shaped(
        "ae2:controller",[
            "SCS",
            "CMC",
            "SCS"
        ],{
            S:"ae2:smooth_sky_stone_block",
            C:"ae2:fluix_crystal",
            M:"ue_addons:smart_mechanism"
    }).id("ae2:network/blocks/controller")
    kubejs.shaped(
        "ae2:inscriber",[
            "IPI",
            "C M",
            "IPI"
        ],{
            I:"#forge:ingots/iron",
            P:"create:mechanical_press",
            C:"ae2:fluix_crystal",
            M:"create:precision_mechanism"
    }).id("ae2:network/blocks/inscribers")
})