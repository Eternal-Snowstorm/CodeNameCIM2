ServerEvents.recipes((event) => {
    let { create, vintageimprovements } = event.recipes
    create.sequenced_assembly("ue_addons:empty_exe","ue_addons:unknown_ingot",[
        create.pressing("ue_addons:unknown_ingot","ue_addons:unknown_ingot"), 
        create.cutting("ue_addons:unknown_ingot","ue_addons:unknown_ingot"),
        vintageimprovements.laser_cutting("ue_addons:unknown_ingot","ue_addons:unknown_ingot")
        .maxChargeRate(100).energyCost(100)
    ]).transitionalItem("ue_addons:unknown_ingot").loops(1)
    global.mechanismList.forEach((material) => {
        create.sequenced_assembly(`ue_addons:${material}_force_exe`,"ue_addons:empty_exe",[
            create.deploying(`ue_addons:empty_exe`,[
                    "ue_addons:empty_exe",
                    `ue_addons:${material}_mechanism`
                ]
            )
        ]).transitionalItem("ue_addons:empty_exe").loops(1024)
    })
})