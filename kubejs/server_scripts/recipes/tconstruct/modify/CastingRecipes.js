ServerEvents.recipes((event) => {

    // 紫水晶块手搓紫水晶工具
    event.custom(
        {
            "type": "tconstruct:material",
            "ingredient": {
                "item": "minecraft:amethyst_block"
            },
            "leftover": {
                "count": 1,
                "item": "minecraft:amethyst_shard"
            },
            "material": "cmi:amethyst",
            "needed": 1,
            "value": 4
        }
    )

    // 紫水晶碎片手搓紫水晶工具
    event.custom(
        {
            "type": "tconstruct:material",
            "ingredient": {
                "item": "minecraft:amethyst_shard"
            },
            "material": "cmi:amethyst",
            "needed": 1,
            "value": 1
        }
    )

    // 安山合金块手搓安山工具
    event.custom(
        {
            "type": "tconstruct:material",
            "ingredient": {
                "tag": "forge:storage_blocks/andesite_alloy"
            },
            "leftover": {
                "count": 1,
                "item": "create:andesite_alloy"
            },
            "material": "cmi:andesite_alloy",
            "needed": 1,
            "value": 9
        }
    )

    // 安山合金锭手搓安山工具
    event.custom(
        {
            "type": "tconstruct:material",
            "ingredient": {
                "tag": "forge:ingots/andesite_alloy"
            },
            "material": "cmi:andesite_alloy",
            "needed": 1,
            "value": 1
        }
    )

    // 铸造紫水晶工具
    event.custom(
        {
            "type": "tconstruct:material_fluid",
            "fluid": {
                "amount": 90,
                "fluid": "tconstruct:molten_amethyst"
            },
            "temperature": 800,
            "output": "cmi:amethyst"
        }
    )

    // 铸造安山合金工具
    event.custom(
        {
            "type": "tconstruct:material_fluid",
            "fluid": {
                "amount": 90,
                "fluid": "cmi:molten_andesite_alloy"
            },
            "temperature": 800,
            "output": "cmi:andesite_alloy"
        }
    )

    // 铸造黄铜工具
    event.custom(
        {
            "type": "tconstruct:material_fluid",
            "fluid": {
                "amount": 90,
                "fluid": "tconstruct:molten_brass"
            },
            "temperature": 810,
            "output": "cmi:brass"
        }
    )

    // 铸造黄铜粒-金模具
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/multi_use/nugget"
            },
            "cooling_time": 20,
            "fluid": {
                "amount": 10,
                "fluid": "tconstruct:molten_brass"
            },
            "result": "create:brass_nugget"
        }
    )

    // 铸造黄铜粒-沙模具
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": "tconstruct:casts/single_use/nugget"
            },
            "cast_consumed": true,
            "cooling_time": 20,
            "fluid": {
                "amount": 10,
                "fluid": "tconstruct:molten_brass"
            },
            "result": "create:brass_nugget"
        }
    )
})