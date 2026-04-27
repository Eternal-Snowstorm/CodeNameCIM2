ServerEvents.highPriorityData((event) => {

    let lavaLakeConfig = {
        "type": "minecraft:lake",
        "config": {
            "barrier": {
                "type": "minecraft:simple_state_provider",
                "state": {
                    "Name": "ad_astra:conglomerate"
                }
            },
            "fluid": {
                "type": "minecraft:simple_state_provider",
                "state": {
                    "Name": "minecraft:lava"
                }
            }
        }
    }

    let lavaLakePlace = {
        "feature": "cmi:martian_lava_lake",
        "placement": [
            {
                "type": "minecraft:count",
                "count": {
                    "type": "minecraft:uniform",
                    "value": {
                        "max_inclusive": 5,
                        "min_inclusive": 1
                    }
                }
            },
            {
                "type": "minecraft:rarity_filter",
                "chance": 7
            },
            {
                "type": "minecraft:in_square"
            },
            {
                "type": "minecraft:height_range",
                "height": {
                    "type": "minecraft:uniform",
                    "max_inclusive": {
                        "absolute": 256
                    },
                    "min_inclusive": {
                        "above_bottom": 20
                    }
                }
            },
            {
                "type": "minecraft:environment_scan",
                "direction_of_search": "down",
                "max_steps": 32,
                "target_condition": {
                    "type": "minecraft:all_of",
                    "predicates": [
                        {
                            "type": "minecraft:not",
                            "predicate": {
                                "type": "minecraft:matching_blocks",
                                "blocks": [
                                    "minecraft:air",
                                    "minecraft:cave_air",
                                    "minecraft:void_air"
                                ]
                            }
                        },
                        {
                            "type": "minecraft:inside_world_bounds",
                            "offset": [
                                0,
                                -3,
                                0
                            ]
                        }
                    ]
                }
            },
            {
                "type": "minecraft:surface_relative_threshold_filter",
                "heightmap": "OCEAN_FLOOR_WG",
                "max_inclusive": -5
            },
            {
                "type": "minecraft:biome"
            }
        ]
    }

    let LavaLakeBiome = {
        type: "forge:add_features",
        biomes: "ad_astra:martian_wastelands",
        features: `${Cmi.MODID}:martian_lava_lake`,
        step: "underground_ores"
    }


    event.addJson(`cmi:worldgen/configured_feature/martian_lava_lake`, lavaLakeConfig)
    event.addJson(`cmi:worldgen/placed_feature/martian_lava_lake`, lavaLakePlace)
    event.addJson(`cmi:forge/biome_modifier/martian_lava_lake`, LavaLakeBiome)

})