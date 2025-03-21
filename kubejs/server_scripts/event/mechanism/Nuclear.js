const NUCLEAR_MECHANISM_ID = 'ue_addons:nuclear_mechanism'

ItemEvents.rightClicked(NUCLEAR_MECHANISM_ID, e => {
    if(e.level.isClientSide()) return;
    e.player.mergeNbt({ForgeCaps:{'mekanism:radiation':{radiation:0}}})
    e.player.swing()
})