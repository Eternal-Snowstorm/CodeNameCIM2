StartupEvents.registry("item", (event) => {
    /**
     * 
     * @param {String} name 注册ID
     * @returns 
     */
    function addMechanismAugment(name) {
        let registerID = `${global.namespace}:${name}_mechanism_augment`
        let builder = event.create(registerID)

        builder.texture(`${global.namespace}:item/mechanism/augment/${name}`)
        builder.tag(`${global.namespace}:mechanism_augment`)

        return builder
    }

    addMechanismAugment("light_engineering")
    addMechanismAugment("heavy_engineering")
    addMechanismAugment("coil")

    addMechanismAugment("smart")

    addMechanismAugment("thermal")
    addMechanismAugment("reinforced")
    addMechanismAugment("resonant")
})