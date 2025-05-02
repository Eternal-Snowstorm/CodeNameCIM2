//这个脚本提供了三种宝石的自动化配方
ServerEvents.recipes(event => {
    let { create,thermal } = event.recipes
    create.compacting(['ue_addons:blockstone_source_alpha', 'ue_addons:blockstone_source_beta', 'ue_addons:blockstone_source_gamma'], 'minecraft:blackstone').superheated()
    create.mixing(['ue_addons:enchanted_mechanism','ue_addons:amethested_ruby'],['ue_addons:blockstone_source_alpha','ue_addons:enchanted_mechanism']).superheated()
    const Inc = 'ue_addons:crystal_ruby'
    create.sequenced_assembly(
        'thermal:ruby',
        Inc,
        [
            create.pressing(Inc, Inc),
            create.deploying(Inc, [Inc, 'minecraft:redstone']),
    ])
    .transitionalItem(Inc)
    .loops(1);
    create.deploying('ue_addons:source_sapphire', ['ue_addons:blockstone_source_beta', 'ue_addons:cobalt_mechanism']).keepHeldItem()
    create.mixing(Fluid.of('ue_addons:molten_source_sapphire', 1000), 'ue_addons:source_sapphire')
    thermal.chiller('thermal:sapphire', Fluid.of('ue_addons:molten_source_sapphire', 1000))
    event.custom({
        "type": "createaddition:charging",
        "input": {
          "item": "ue_addons:blockstone_source_gamma",
          "count": 1
        },
        "result": {
          "item": "ue_addons:bombed_source_emeraid",
          "count": 1
        },
        "energy": 4000,
        "maxChargeRate": 200
    });
    thermal.crucible(Fluid.of('ue_addons:eletriced_source_emeraid', 1000), 'ue_addons:bombed_source_emeraid')
    thermal.crystallizer('minecraft:emerald', ['minecraft:glass', Fluid.of('ue_addons:eletriced_source_emeraid', 1000)])
})