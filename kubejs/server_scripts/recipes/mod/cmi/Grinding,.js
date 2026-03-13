ServerEvents.recipes((event) => {
    let { cmi } = event.getRecipes()

    // 充能紫水晶
    cmi.grinding([
        "minecraft:amethyst_shard",
        "minecraft:redstone",
        Item.of("minecraft:redstone").withChance(0.5)
    ], "cmi:charged_amethyst")

    // 玫瑰石英
    cmi.grinding("create:polished_rose_quartz", [
        "create:rose_quartz"
    ])
})