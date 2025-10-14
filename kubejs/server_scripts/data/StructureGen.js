ServerEvents.highPriorityData((event) => {

    /**
     * 
     * @param {String} type 结构类型
     * @param {String} name 结构名称
     * @param {Number} salt 密码盐
     * @param {Number}  spacing 平均距离
     * @param {Number}  separation 最小距离
     * @returns 
     */

    function addStructureGen(type, name, salt, spacing, separation) {

        // 结构
        let structure = {
            type: "minecraft:jigsaw",
            biomes: [],
            size: 1,
            start_pool: `${global.namespace}:${type}/${name}`,
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

        // 结构集
        let structureSet = {
            structures: [
                {
                    structure: `${global.namespace}:${type}/${name}`,
                    weight: 1
                }
            ],
            placement: {
                type: "minecraft:random_spread",
                salt: salt,
                spacing: spacing,
                separation: separation
            }
        }

        // 结构池
        let templatePool = {
            name: `${global.namespace}:${name}`,
            fallback: "minecraft:empty",
            elements: [
                {
                    weight: 1,
                    element: {
                        location: `${global.namespace}:${type}/${name}`,
                        element_type: "minecraft:single_pool_element",
                        processors: "minecraft:empty",
                        projection: "rigid"
                    }
                }
            ]
        }

        // 生成数据包
        function build() {
            event.addJson(`cmi:worldgen/structure/${type}/${name}`, structure)
            event.addJson(`cmi:worldgen/structure_set/${type}/${name}`, structureSet)
            event.addJson(`cmi:worldgen/template_pool/${type}/${name}`, templatePool)
            return this
        }

        // 配置群系类型
        return {
            // 水生类生物群系
            water: function () {
                structure.biomes = [
                    "minecraft:ocean",
                    "minecraft:lukewarm_ocean",
                    "minecraft:warm_ocean",
                    "minecraft:cold_ocean",
                    "minecraft:frozen_ocean",
                    "minecraft:river",
                    "minecraft:frozen_river"
                ]
                build()
                return this
            },

            // 山地类生物群系
            mountain: function () {
                structure.biomes = [
                    "minecraft:jagged_peaks",
                    "minecraft:frozen_peaks",
                    "minecraft:stony_peaks",
                    "minecraft:meadow",
                    "minecraft:cherry_grove",
                    "minecraft:grove",
                    "minecraft:snowy_slopes",
                    "minecraft:windswept_hills",
                    "minecraft:windswept_gravelly_hills",
                    "minecraft:windswept_forest"
                ]
                build()
                return this
            },

            // 森林类生物群系
            forest: function () {
                structure.biomes = [
                    "minecraft:forest",
                    "minecraft:taiga",
                    "minecraft:snowy_taiga",
                    "minecraft:old_growth_pine_taiga",
                    "minecraft:old_growth_spruce_taiga",
                    "minecraft:flower_forest",
                    "minecraft:birch_forest",
                    "minecraft:old_growth_birch_forest",
                    "minecraft:dark_forest",
                    "minecraft:jungle",
                    "minecraft:sparse_jungle",
                    "minecraft:bamboo_jungle",
                    "minecraft:windswept_forest"

                ]
                build()
                return this
            },

            // 湿地类生物群系
            wetland: function () {
                structure.biomes = [
                    "minecraft:swamp",
                    "minecraft:mangrove_swamp",
                    "minecraft:beach",
                    "minecraft:snowy_beach",
                    "minecraft:stony_shore",
                    "minecraft:mushroom_fields"
                ]
                build()
                return this
            },

            // 平原类生物群系
            plain: function () {
                structure.biomes = [
                    "minecraft:plains",
                    "sunflower_plains",
                    "minecraft:snowy_plains",
                    "minecraft:ice_spikes"
                ]
                build()
                return this
            },

            // 干旱类生物群系
            dryland: function () {
                structure.biomes = [
                    "minecraft:savanna",
                    "minecraft:windswept_savanna",
                    "minecraft:desert",
                    "minecraft:badlands",
                    "minecraft:eroded_badlands",
                    "minecraft:wooded_badlands"
                ]
                build()
                return this
            },

            // 深层群系
            deep: function () {
                structure.biomes = [
                    "minecraft:deep_ocean",
                    "minecraft:deep_lukewarm_ocean",
                    "minecraft:deep_cold_ocean",
                    "minecraft:deep_frozen_ocean",
                    "minecraft:dripstone_caves",
                    "minecraft:lush_caves",
                    "minecraft:deep_dark",
                    "cmi:andesite_cave"
                ]
                build()
                return this
            },

            // 下界
            nether: function () {
                structure.biomes = [
                    "minecraft:nether_wastes",
                    "minecraft:soul_sand_valley",
                    "minecraft:crimson_forest",
                    "minecraft:warped_forest",
                    "minecraft:basalt_deltas"
                ]
                build()
                return this
            },

            // 末地
            end: function () {
                structure.biomes = [
                    "minecraft:small_end_islands",
                    "minecraft:end_midlands",
                    "minecraft:end_highlands"
                ]
                build()
                return this
            },

            // 月球
            moon: function () {
                structure.biomes = [
                    "ad_astra:lunar_wastelands"
                ]
                build()
                return this
            },

            // 核能星球
            dionysus: function () {
                structure.biomes = [
                    "alexscaves:toxic_caves"
                ]
                build()
                return this
            },

            // 火星
            mars: function () {
                structure.biomes = [
                    "ad_astra:martian_wastelands",
                    "ad_astra:martian_polar_caps",
                    "ad_astra:martian_canyon_creek"
                ]
                build()
                return this
            },

            // 电磁星球
            hephaestus: function () {
                structure.biomes = [
                    "alexscaves:magnetic_caves"
                ]
                build()
                return this
            },

            // 金星
            venus: function () {
                structure.biomes = [
                    "ad_astra:venus_wastelands"
                ]
                build()
                return this
            },

            // 水星
            mercury: function () {
                structure.biomes = [
                    "ad_astra:mercury_deltas"
                ]
                build()
                return this
            },

            // 霜原星
            glacio: function () {
                structure.biomes = [
                    "ad_astra:glacio_snowy_barrens",
                    "ad_astra:glacio_ice_peaks"
                ]
                build()
                return this
            }
        }
    }

    // 月球铂矿点
    addStructureGen("ore_node", "platinum_node", 376345692, 70, 50)
        .moon()

    // 月球起司矿点
    addStructureGen("ore_node", "cheese_node", 114514191, 70, 50)

    // 金矿点
    addStructureGen("ore_node", "gold_node", 763456928, 70, 50)
        .dryland()

    // 铁矿点
    addStructureGen("ore_node", "iron_node", 463456928, 70, 50)
        .forest()

    // 铜矿点
    addStructureGen("ore_node", "copper_node", 963456928, 70, 50)
        .plain()

    // 锌矿点
    addStructureGen("ore_node", "zinc_node", 187656928, 70, 50)
        .mountain()

    // 煤矿点
    addStructureGen("ore_node", "coal_node", 391035412, 70, 50)
        .plain()

    // 锡矿点
    addStructureGen("ore_node", "tin_node", 172345891, 70, 50)
        .wetland()

    // 油页岩矿点
    addStructureGen("ore_node", "oil_shale_node", 819248123, 70, 50)
        .dryland()
})
