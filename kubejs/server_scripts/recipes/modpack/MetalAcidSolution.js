ServerEvents.recipes((event) => {
    let { create } = event.recipes
    global.metalGroup.forEach((metal) => {

        if (IngredientUtils.isNotNull(`#forge:chem_salts/${metal}`)) {
            let solutionS = IngredientUtils.getFirstFluidId(`forge:solutions/${metal}/sulfate`)
            let solutionCl = IngredientUtils.getFirstFluidId(`forge:solutions/${metal}/chloride`)

            create.mixing(Fluid.of(solutionS, 250), [
                `#forge:dusts/${metal}`,
                Fluid.of("mekanism:sulfuric_acid", 250)
            ])

            create.mixing(Fluid.of(solutionCl, 250), [
                `#forge:dusts/${metal}`,
                Fluid.of("cmi:hydrochloric_acid", 250)
            ])

            console.log(`Solution recipes for ${metal} has created`)
        }
    })
})