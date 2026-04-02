StartupEvents.registry("item", (event) => {
    /**
     * 
     * @param {String} name 注册ID
     * @returns 
     */
    function addMechanismAugment(name) {
        let registerID = `${CmiCore.MODID}:${name}_mechanism_augment`
        let builder = event.create(registerID)

        builder.texture(`${CmiCore.MODID}:item/mechanism/augment/${name}`)
        builder.tag(`${CmiCore.MODID}:mechanism_augment`)

        return builder
    }

    addMechanismAugment("light_engineering")
    addMechanismAugment("heavy_engineering")

    addMechanismAugment("smart")

    addMechanismAugment("thermal")
    addMechanismAugment("reinforced")
})