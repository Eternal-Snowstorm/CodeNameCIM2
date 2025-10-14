ServerEvents.highPriorityData((event) => {
    function deleteGen(namespace, path) {
        let blank = {
            type: "minecraft:jigsaw",
            biomes: [],
            size: 1,
            start_pool: `cmi:blank`,
            step: "surface_structures",
            start_height: {
                absolute: 0
            },
            spawn_overrides: {},
            max_distance_from_center: 64,
            project_start_to_heightmap: "WORLD_SURFACE_WG",
            terrain_adaptation: "none",
            use_expansion_hack: false
        }
        event.addJson(`${namespace}:worldgen/structure/${path}`, blank)
        return this
    }

    deleteGen("ad_astra", "oil_well")
    deleteGen("deepdrilling", "copper_node")
    deleteGen("deepdrilling", "gold_node")
    deleteGen("deepdrilling", "iron_node")
    deleteGen("deepdrilling", "zinc_node")
    deleteGen("deepdrilling", "asurine_node")
    deleteGen("deepdrilling", "crimsite_node")
    deleteGen("deepdrilling", "ochrum_node")
    deleteGen("deepdrilling", "veridium_node")
})