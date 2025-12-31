ServerEvents.highPriorityData((event) => {
    /** 
     * 
     * @param {String} name 
     * @param {String} bio 
     * @returns
    */

    function createVentGenerate(name, salt, bio) {
        let structure = {
            type: "minecraft:jigsaw",
            biomes: bio,
            size: 1,
            start_pool: `${global.namespace}:geo_vent/${name}_geo_vent`,
            step: "underground_structures",
            start_height: {
                absolute: 0
            },
            spawn_overrides: {},
            max_distance_from_center: 64,
            project_start_to_heightmap: "WORLD_SURFACE_WG",
            terrain_adaptation: "bury",
            use_expansion_hack: false
        }

        let structureSet = {
            structures: [
                {
                    structure: `${global.namespace}:geo_vent/${name}_geo_vent`,
                    weight: 1
                }
            ],
            placement: {
                type: "minecraft:random_spread",
                salt: salt,
                spacing: 70,
                separation: 50
            }
        }

        let templatePool = {
            name: `${global.namespace}:${name}_geo_vent`,
            fallback: "minecraft:empty",
            elements: [
                {
                    weight: 1,
                    element: {
                        location: `${global.namespace}:geo_vent/${name}_geo_vent_0`,
                        element_type: "minecraft:single_pool_element",
                        processors: "minecraft:empty",
                        projection: "terrain_matching"
                    }
                }, {
                    weight: 1,
                    element: {
                        location: `${global.namespace}:geo_vent/${name}_geo_vent_1`,
                        element_type: "minecraft:single_pool_element",
                        processors: "minecraft:empty",
                        projection: "terrain_matching"
                    }
                }, {
                    weight: 1,
                    element: {
                        location: `${global.namespace}:geo_vent/${name}_geo_vent_2`,
                        element_type: "minecraft:single_pool_element",
                        processors: "minecraft:empty",
                        projection: "terrain_matching"
                    }
                }, {
                    weight: 1,
                    element: {
                        location: `${global.namespace}:geo_vent/${name}_geo_vent_3`,
                        element_type: "minecraft:single_pool_element",
                        processors: "minecraft:empty",
                        projection: "terrain_matching"
                    }
                }
            ]
        }

        event.addJson(`cmi:worldgen/structure/geo_vent/${name}_geo_vent`, structure)
        event.addJson(`cmi:worldgen/structure_set/geo_vent/${name}_geo_vent`, structureSet)
        event.addJson(`cmi:worldgen/template_pool/geo_vent/${name}_geo_vent`, templatePool)
    }

    createVentGenerate("mars", 1241241235, "ad_astra:martian_wastelands")
    createVentGenerate("mercury", 78579128571, "ad_astra:mercury_deltas")
})