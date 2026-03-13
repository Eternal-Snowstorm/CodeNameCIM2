ServerEvents.recipes((event) => {
    let { immersiveengineering } = event.getRecipes()

    // 钢锭
    immersiveengineering.arc_furnace("#forge:ingots/steel")
        .input("#forge:ingots/iron")
        .energy(10240)
        .slag("#forge:slag")
        .time(20)

    // 钢块
    immersiveengineering.arc_furnace("#forge:storage_blocks/steel")
        .input("#forge:storage_blocks/iron")
        .energy(10240)
        .slag("#forge:slag")
        .time(100)

    // 生石灰
    immersiveengineering.blast_furnace("4x cmi:furnaced_lime")
        .input("create:limestone")
        .time(30)
})