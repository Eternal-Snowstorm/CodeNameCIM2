ServerEvents.recipes((event) => {
    let { createaddition, thermal, immersiveengineering } = event.getRecipes()

    global.metalGroup.forEach((metal) => {
        const INGOT = `#forge:ingots/${metal}`
        const WIRE = `#forge:wires/${metal}`
        const PLATE = `#forge:plates/${metal}`

        if (IngrUtils.isNotNull(WIRE)) {
            createaddition.rolling(`2x ${WIRE}`, [
                PLATE
            ])

            thermal.press(`2x ${WIRE}`, [
                INGOT,
                "cmi:wire_mold"
            ])

            immersiveengineering.metal_press(`2x ${WIRE}`)
                .input(INGOT)
                .mold("cmi:wire_mold")
        } else {
            console.warn(`No wire found for ${metal}!`)
        }

        event.remove([
            {
                type: "createaddition:rolling",
                output: WIRE
            }, {
                type: "immersiveengineering:metal_press",
                output: WIRE
            }, {
                type: "thermal:press",
                output: WIRE
            }
        ])
    })
})