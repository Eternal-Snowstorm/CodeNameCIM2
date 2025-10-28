ServerEvents.recipes((event) => {
    let { create } = event.recipes
    global.metalGroup.forEach((metal) => {

        if (IngredUtils.isNotNull(`#forge:chem_salts/${metal}`)) {
            let solutionS = IngredUtils.getFirstFluidId(`forge:solutions/${metal}/sulfate`)
            let solutionCl = IngredUtils.getFirstFluidId(`forge:solutions/${metal}/chloride`)

            create.mixing(Fluid.of(solutionS, 250), [
                `#forge:dusts/${metal}`,
                Fluid.of("mekanism:sulfuric_acid", 250)
            ])

            create.mixing(Fluid.of(solutionCl, 250), [
                `#forge:dusts/${metal}`,
                Fluid.of("cmi:hydrochloric_acid", 250)
            ])

            if (IngredUtils.isNotNull(`#create:crushed_raw_materials/${metal}`)) {

                create.mixing(Fluid.of(solutionS, 250), [
                    `#create:crushed_raw_materials/${metal}`,
                    Fluid.of("mekanism:sulfuric_acid", 250)
                ])

                create.mixing(Fluid.of(solutionCl, 250), [
                    `#create:crushed_raw_materials/${metal}`,
                    Fluid.of("cmi:hydrochloric_acid", 250)
                ])

            }

            console.log(`Solution recipes for ${metal} has created`)
        }
    })
})