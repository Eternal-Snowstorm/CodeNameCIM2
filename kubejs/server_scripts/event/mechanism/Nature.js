let $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")

BlockEvents.rightClicked((event) => {
    let { level, item, player, facing, block, hand } = event

    if (level.clientSide) {
        return
    }
    if (item === "ue_addons:nature_mechanism") {
        let blockHitResult = new $BlockHitResult(player.pos, facing, block.pos, false)
        let useOnContext = new $UseOnContext(level, player, hand, "minecraft:bone_meal", blockHitResult)
        Items.BONE_MEAL.useOn(useOnContext)
        player.swing()
    }
})