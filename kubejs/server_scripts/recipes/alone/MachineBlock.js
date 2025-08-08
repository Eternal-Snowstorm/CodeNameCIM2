ServerEvents.recipes(event => {
    let { minecraft } = event.recipes
    let machineBlockGroup = [
        "nature",
        "wooden",
        "stone",
        "iron",
        "copper",
        "andesite",
        "photosensitive",
        "gold",
        "cobalt",
        "nether",
        "thermal",
        "feinforced",
        "resonant",
        "railway",
        "ender",
        "light_engineering",
        "heavy_engineering",
        "enchanted",
        "smart",
        "computing",
        "tier_1_aviation",
        "tier_2_aviation",
        "tier_3_aviation",
        "tier_4_aviation",
        "basic_mekanism",
        "advanced_mekanism",
        "elite_mekanism",
        "ultimate_mekanism",
        "structure",
        "nuclear",
        "antimatter",
        "coil",
        "sculk",
        "colorful",
        "creative",
        "potion",
        "precision",
        "redstone",
        "bronze",
        "pigiron"
    ]
    machineBlockGroup.forEach((type) => {
        minecraft.stonecutting(`cmi:${type}_machine`, `cmi:${type}_mechanism`)
    })
})