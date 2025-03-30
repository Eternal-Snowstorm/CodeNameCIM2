let $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult")
let $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext")
let $AllItems = Java.loadClass("com.simibubi.create.AllItems")

BlockEvents.rightClicked((event) => {
    let { level, item, player, facing, block, hand } = event

    if (level.clientSide) {
        return
    }
    if (item === "ue_addons:wooden_mechanism") {
        let blockHitResult = new $BlockHitResult(player.pos, facing, block.pos, false)
        let useOnContext = new $UseOnContext(level, player, hand, "create:tree_fertilizer", blockHitResult)
        $AllItems.TREE_FERTILIZER.get().useOn(useOnContext)
        player.swing()
    }
})