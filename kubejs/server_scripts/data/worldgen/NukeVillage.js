ServerEvents.highPriorityData((event) => {

    // 缓存
    let temp = []
    let weight

    // 路
    for (let i = 1; i <= 13; i++) {
        if (i == 8 || i == 11 || i == 12 || i == 13) {
            weight = 2
        } else {
            weight = 4
        }
        temp.push({
            "weight": weight,
            "element": {
                "location": `cmi:nuke_village/way/way_${i}`,
                "processors": "minecraft:empty",
                "projection": "rigid",
                "element_type": "minecraft:single_pool_element"
            }
        })
    }

    event.addJson(`${global.namespace}:worldgen/template_pool/nuke_village/way_pool`, {
        "name": "cmi:nuke_village/way_pool",
        "fallback": "minecraft:empty",
        "elements": temp
    })

    // 功能区
    temp = []

    for (let i = 1; i <= 16; i++) {
        temp.push({
            "weight": 1,
            "element": {
                "location": `cmi:nuke_village/function/function_${i}`,
                "processors": "minecraft:empty",
                "projection": "rigid",
                "element_type": "minecraft:single_pool_element"
            }
        })
    }

    event.addJson(`${global.namespace}:worldgen/template_pool/nuke_village/function_pool`, {
        "name": "cmi:nuke_village/function_pool",
        "fallback": "minecraft:empty",
        "elements": temp
    })

    // 功能物
    temp = []

    for (let i = 1; i <= 13; i++) {
        temp.push({
            "weight": 1,
            "element": {
                "location": `cmi:nuke_village/things/things_${i}`,
                "processors": "minecraft:empty",
                "projection": "rigid",
                "element_type": "minecraft:single_pool_element"
            }
        })
    }

    event.addJson(`${global.namespace}:worldgen/template_pool/nuke_village/things_pool`, {
        "name": "cmi:nuke_village/things_pool",
        "fallback": "minecraft:empty",
        "elements": temp
    })

    // 结构生成
    event.addJson(`${global.namespace}:worldgen/structure/nuke_village`, {
        "type": "minecraft:jigsaw",
        "biomes": "alexscaves:toxic_caves",
        "max_distance_from_center": 116,
        "project_start_to_heightmap": "WORLD_SURFACE_WG",
        "size": 7,
        "spawn_overrides": {},
        "start_height": {
            "absolute": 1
        },
        "start_pool": "cmi:nuke_village/way_pool",
        "step": "surface_structures",
        "terrain_adaptation": "beard_thin",
        "use_expansion_hack": false
    })
    event.addJson(`${global.namespace}:worldgen/structure_set/nuke_village`, {
        "placement": {
            "type": "minecraft:random_spread",
            "salt": 1174,
            "separation": 8,
            "spacing": 34
        },
        "structures": [
            {
                "structure": "cmi:nuke_village",
                "weight": 1
            }
        ]
    })

})