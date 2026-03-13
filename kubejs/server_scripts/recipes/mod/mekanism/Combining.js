ServerEvents.recipes((event) => {
    let { mekanism } = event.getRecipes()

    mekanism.combining("advanced_ae:quantum_alloy",
        "cmi:superconducting_mercury_ingot",
        "ae2:singularity"
    ).id("advanced_ae:quantum_alloy")
})