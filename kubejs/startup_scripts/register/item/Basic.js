StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {"basic" | "sword" | "pickaxe" | "axe" | "shovel" | "shears" | "hoe" | "helmet" | "chestplate" | "leggings" | "boots" | "music_disc" | "smithing_template" | "animatable" | "anim_helmet" | "anim_chestplate" | "anim_leggings" | "anim_boots" | "anim_axe" | "anim_hoe" | "anim_pickaxe" | "anim_sword" | "anim_shield" | "create:sequenced_assembly" | "create:sandpaper" | "vintageimprovements:spring"} type 注册类型
	 * @returns {Internal.BasicItemJS$Builder | Internal.SwordItemBuilder | Internal.PickaxeItemBuilder | Internal.AxeItemBuilder | Internal.ShovelItemBuilder | Internal.ShearsItemBuilder | Internal.HoeItemBuilder | Internal.ArmorItemBuilder$Helmet | Internal.ArmorItemBuilder$Chestplate | Internal.ArmorItemBuilder$Leggings | Internal.ArmorItemBuilder$Boots | Internal.RecordItemJS$Builder | Internal.SmithingTemplateItemBuilder | Internal.AnimatableItem$Builder | Internal.AnimatableArmorBuilder | Internal.AnimatableAxeItem$Builder | Internal.AnimatableHoeItem$Builder | Internal.AnimatablePickaxeItem$Builder | Internal.AnimatableSwordItem$Builder | Internal.AnimatableShieldItem$Builder | Internal.SequencedAssemblyItemBuilder | Internal.SandpaperItemBuilder | Internal.SpringItemBuilder}
	 */
	function addItem(name, type) {
		if (type === undefined) {
			return event.create(`${global.namespace}:${name}`)
		}
		return event.create(`${global.namespace}:${name}`, type)
	}

	addItem("single_crystal_silicon")
		.texture(`${global.namespace}:item/material/single_crystal_silicon`)
	addItem("general_processor")
		.texture(`${global.namespace}:item/material/general_processor`)

	// 黑石源质
	addItem("blackstone_source_alpha")
		.texture(`${global.namespace}:item/material/blackstone_source_alpha`)
	addItem("blackstone_source_beta")
		.texture(`${global.namespace}:item/material/blackstone_source_beta`)
	addItem("blackstone_source_gamma")
		.texture(`${global.namespace}:item/material/blackstone_source_gamma`)

	// 宝石原料
	addItem("crystal_ruby")
		.texture(`${global.namespace}:item/material/crystal_ruby`)
	addItem("source_sapphire")
		.texture(`${global.namespace}:item/material/source_sapphire`)
	addItem("bombed_source_emeraid")
		.texture(`${global.namespace}:item/material/bombed_source_emeraid`)

	// 黏血球
	addItem("blood_slime_ball")
		.texture(`${global.namespace}:item/material/blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

	// 致密坚固板
	addItem("dense_sturdy_sheet")
		.texture(`${global.namespace}:item/material/dense_sturdy_sheet`)
		.tag("forge:plates")
		.tag("forge:plates/dense_obsidian")

	// 等离子锭
	addItem("plasma_ingot")
		.texture(`${global.namespace}:item/material/ingot/plasma_ingot`)
		.rarity("epic")
		.tag("forge:ingots")
		.tag("forge:ingots/plasma")

	// 充能紫水晶
	addItem("charged_amethyst")
		.texture(`${global.namespace}:item/material/charged_amethyst`)
		.rarity("epic")
		.tag("forge:gems")
		.tag("forge:gems/charged_amethyst")

	// 淤泥提取物
	addItem("sludge_extract")
		.texture(`${global.namespace}:item/material/sludge_extract`)

	// 甘蔗纤维
	addItem("sugarcane_fiber")
		.texture(`${global.namespace}:item/material/sugarcane_fiber`)

	// 泥炭
	addItem("peat")
		.texture(`${global.namespace}:item/material/peat`)
		.burnTime(800)

	// 初始套件
	addItem("initial_item_kit")
		.glow(true)

	// 石板
	addItem("stone_plate")
		.texture(`${global.namespace}:item/material/stone_plate`)
		.tag("forge:plates")
		.tag("forge:plates/stone")

	// 木屑加工系列
	addItem("wood_chip_briquette")
		.texture(`${global.namespace}:item/material/wood_chip/stage_1`)
		.burnTime(200 * 20)

	addItem("compressed_wood_chip_briquette")
		.texture(`${global.namespace}:item/material/wood_chip/stage_2`)
		.burnTime(200 * 70)

	addItem("densely_packed_wood_chip_briquette")
		.texture(`${global.namespace}:item/material/wood_chip/stage_3`)
		.burnTime(200 * 120)

	addItem("creosote_wood_chip_briquette")
		.texture(`${global.namespace}:item/material/wood_chip/done`)
		.burnTime(200 * 180)
		.food((food) => {
			food.hunger(20)
				.saturation(1)
				.effect("immersiveengineering:flammable", 20 * 60, 5, 1)
				.effect("minecraft:blindness", 20 * 60, 5, 1)
				.effect("minecraft:nausea", 20 * 60, 5, 1)
				.effect("minecraft:instant_damage", 1, 1, 1)
				.eaten((event) => {
					let { player, level } = event
					let key = `message.${global.namespace}.food.creosote_wood_chip_briquette`

					if (event.hand !== "MAIN_HAND" && !level.isClientSide()) {
						player.displayClientMessage(Component.translatable(key).blue(), true)
					}
				})
		})
		.tag("create:blaze_burner_fuel/special")

	// 升级模板
	addItem("drawer_upgrade_template")
		.texture(`${global.namespace}:item/material/drawer_upgrade_template`)

	// 安山岩
	addItem("andesite_dust")
		.texture(`${global.namespace}:item/material/andesite/dust`)
		.tag("forge:dusts")
		.tag(`forge:dusts/andesite`)

	addItem("andesite_aggregate")
		.texture(`${global.namespace}:item/material/andesite/aggregate`)
		.tag("forge:bricks")

	// 硅处理
	addItem("small_coal_coke")
		.burnTime(400)
		.texture(`${global.namespace}:item/material/small_coal_coke`)

	addItem("silicon_mixure")
		.texture(`${global.namespace}:item/material/silicon/silicon_mixure`)

	// 橡胶板
	addItem("rubber_plate")
		.texture(`${global.namespace}:item/material/rubber/rubber_plate_0`)
		.tag("forge:plates")
		.tag("forge:plates/rubber")

	// 橡胶树皮
	addItem("rubber_tree_bark")
		.texture(`${global.namespace}:item/material/rubber/tree_bark`)

	// 生石灰
	addItem("lime")
		.texture(`${global.namespace}:item/material/lime`)

	// 草纤维
	addItem("grass_fiber")
		.texture(`${global.namespace}:item/material/grass_fiber`)

	// 草绳
	addItem("grass_string")
		.texture(`${global.namespace}:item/material/grass_string`)
		.tag("forge:string")

	// 通用电路板
	addItem("printed_general_processor")
		.texture(`${global.namespace}:item/material/printed_general_processor`)

	// 活泼元素
	addItem("reactive_element")
		.texture(`${global.namespace}:item/material/cc/1`)
	addItem("stable_element")
		.texture(`${global.namespace}:item/material/cc/2`)
	addItem("explosive_element")
		.texture(`${global.namespace}:item/material/cc/3`)

	addItem("reactive_element_basement")
		.texture(`${global.namespace}:item/material/cc/1_dust`)
	addItem("stable_element_basement")
		.texture(`${global.namespace}:item/material/cc/2_dust`)
	addItem("explosive_element_basement")
		.texture(`${global.namespace}:item/material/cc/3_dust`)

	// Mg(OH)2
	addItem("magnesium_hydroxide")
		.texture(`${global.namespace}:item/material/sea/mgoh2`)

	// Mg(OH)2
	addItem("brominated_flame_retardants")
		.texture(`${global.namespace}:item/material/brominated_flame_retardants`)

	// Mg(OH)2
	addItem("flame_retardant_plastic")
		.texture(`${global.namespace}:item/material/flame_retardant_plastic`)

	// 三硝基甲苯
	addItem("trinitrotoluene")
		.texture(`${global.namespace}:item/material/dynamite/trinitrotoluene`)

	// 硝化纤维
	addItem("nitrocellulose")
		.texture(`${global.namespace}:item/material/dynamite/nitrocellulose`)

	// 石灰粉
	addItem("lime_dust")
		.texture(`${global.namespace}:item/material/lime_dust`)
		.tag("forge:dusts/lime")
		.tag("forge:dusts")

	// 镀铬钢齿轮
	addItem("chromeplated_steel_gear")
		.texture(`${global.namespace}:item/material/color/gear`)
		.color(0, 0xE4DBDC)
		.tag("forge:gears/chromeplated_steel")
		.tag("forge:gears")

	// 火箭零件
	for (let i = 1; i <= 4; i++) {
		addItem(`tier_${i}_rocket_nose_cone`)
			.texture(`${global.namespace}:item/material/rocket_nose_cone/${i}`)
			.tag(`${global.namespace}:rocket_nose_cones/tier_${i}`)
			.tag(`${global.namespace}:rocket_nose_cones`)

		addItem(`tier_${i}_rocket_fin`)
			.texture(`${global.namespace}:item/material/rocket_fin/${i}`)
			.tag(`${global.namespace}:rocket_fins/tier_${i}`)
			.tag(`${global.namespace}:rocket_fins`)
	}

	// 觉得长的请使用VS Code自带的折叠功能
	let SomeModelsJson = {
		cogwheel: function (material) {
			return {
				"parent": "create:block/large_wheels",
				"texture_size": [32, 32],
				"textures": {
					"particle": `steampowered:block/cogwheel/${material}_cogwheel`,
					"1_2": `steampowered:block/cogwheel/${material}_cogwheel`
				},
				"elements": [
					{
						"name": "Gear",
						"from": [-1, 6.5, 6.5],
						"to": [17, 9.5, 9.5],
						"faces": {
							"north": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"east": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"south": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"west": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"up": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" },
							"down": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" }
						}
					},
					{
						"name": "Gear2",
						"from": [-1, 6.5, 6.5],
						"to": [17, 9.5, 9.5],
						"rotation": { "angle": 45, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"east": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"south": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"west": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"up": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" },
							"down": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" }
						}
					},
					{
						"name": "Gear3",
						"from": [-1, 6.5, 6.5],
						"to": [17, 9.5, 9.5],
						"rotation": { "angle": -45, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"east": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"south": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"west": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"up": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" },
							"down": { "uv": [7, 6, 16, 7.5], "texture": "#1_2" }
						}
					},
					{
						"name": "Gear4",
						"from": [6.5, 6.5, -1],
						"to": [9.5, 9.5, 17],
						"faces": {
							"north": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"east": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"south": { "uv": [5.5, 7.5, 7, 9], "texture": "#1_2" },
							"west": { "uv": [7, 7.5, 16, 9], "texture": "#1_2" },
							"up": { "uv": [7, 6, 16, 7.5], "rotation": 90, "texture": "#1_2" },
							"down": { "uv": [7, 6, 16, 7.5], "rotation": 90, "texture": "#1_2" }
						}
					},
					{
						"name": "GearCaseInner",
						"from": [2, 7, 2],
						"to": [14, 9, 14],
						"faces": {
							"north": { "uv": [0, 6, 6, 7], "texture": "#1_2" },
							"east": { "uv": [0, 6, 6, 7], "texture": "#1_2" },
							"south": { "uv": [0, 6, 6, 7], "texture": "#1_2" },
							"west": { "uv": [0, 6, 6, 7], "texture": "#1_2" },
							"up": { "uv": [4, 0, 10, 6], "texture": "#1_2" },
							"down": { "uv": [4, 0, 10, 6], "texture": "#1_2" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [4, 6, 4],
						"to": [12, 10, 12],
						"faces": {
							"north": { "uv": [0, 4, 4, 6], "texture": "#1_2" },
							"east": { "uv": [0, 4, 4, 6], "texture": "#1_2" },
							"south": { "uv": [0, 4, 4, 6], "texture": "#1_2" },
							"west": { "uv": [0, 4, 4, 6], "texture": "#1_2" },
							"up": { "uv": [0, 0, 4, 4], "texture": "#1_2" },
							"down": { "uv": [0, 0, 4, 4], "texture": "#1_2" }
						}
					}
				]
			}
		},
		largeCogwheel: function (material) {
			return {
				"parent": "create:block/large_wheels",
				"texture_size": [32, 32],
				"textures": {
					"4": `steampowered:block/cogwheel/${material}_large_cogwheel`,
					"particle": `steampowered:block/cogwheel/${material}_large_cogwheel`
				},
				"elements": [
					{
						"name": "GearCaseInnerRotated",
						"from": [-2, 6.9, -2],
						"to": [18, 8.9, 18],
						"rotation": { "angle": 45, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"east": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"south": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"west": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"up": { "uv": [0, 0, 10, 10], "texture": "#4" },
							"down": { "uv": [0, 0, 10, 10], "texture": "#4" }
						}
					},
					{
						"name": "Gear2",
						"from": [-7, 6.5, 6.5],
						"to": [23, 9.5, 9.5],
						"rotation": { "angle": 22.5, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"east": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"south": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"west": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "texture": "#4" }
						}
					},
					{
						"name": "Gear3",
						"from": [-7, 6.5, 6.5],
						"to": [23, 9.5, 9.5],
						"rotation": { "angle": -22.5, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"east": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"south": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"west": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "texture": "#4" }
						}
					},
					{
						"name": "Gear4",
						"from": [6.5, 6.5, -7],
						"to": [9.5, 9.5, 23],
						"rotation": { "angle": 22.5, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"east": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"south": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"west": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" }
						}
					},
					{
						"name": "GearCaseInner",
						"from": [-2, 7, -2],
						"to": [18, 9, 18],
						"faces": {
							"north": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"east": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"south": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"west": { "uv": [0, 10, 10, 11], "texture": "#4" },
							"up": { "uv": [0, 0, 10, 10], "texture": "#4" },
							"down": { "uv": [0, 0, 10, 10], "texture": "#4" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [1, 5.5, 1],
						"to": [15, 10.5, 15],
						"faces": {
							"north": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"east": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"south": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"west": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"up": { "uv": [1.5, 1.5, 8.5, 8.5], "texture": "#4" },
							"down": { "uv": [1.5, 1.5, 8.5, 8.5], "texture": "#4" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [-1, 5.5, 1],
						"to": [1, 10.5, 15],
						"faces": {
							"north": { "uv": [10, 0, 12.5, 1], "rotation": 90, "texture": "#4" },
							"east": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"south": { "uv": [10, 6, 12.5, 7], "rotation": 90, "texture": "#4" },
							"west": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"up": { "uv": [7, 15, 14, 16], "rotation": 90, "texture": "#4" },
							"down": { "uv": [7, 15, 14, 16], "rotation": 90, "texture": "#4" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [15, 5.5, 1],
						"to": [17, 10.5, 15],
						"faces": {
							"north": { "uv": [10, 6, 12.5, 7], "rotation": 90, "texture": "#4" },
							"east": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"south": { "uv": [10, 0, 12.5, 1], "rotation": 90, "texture": "#4" },
							"west": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"up": { "uv": [0, 15, 7, 16], "rotation": 270, "texture": "#4" },
							"down": { "uv": [0, 15, 7, 16], "rotation": 270, "texture": "#4" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [1, 5.5, -1],
						"to": [15, 10.5, 1],
						"faces": {
							"north": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"east": { "uv": [10, 0, 12.5, 1], "rotation": 90, "texture": "#4" },
							"south": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"west": { "uv": [10, 6, 12.5, 7], "rotation": 90, "texture": "#4" },
							"up": { "uv": [7, 14, 14, 15], "rotation": 180, "texture": "#4" },
							"down": { "uv": [0, 14, 7, 15], "texture": "#4" }
						}
					},
					{
						"name": "GearCaseOuter",
						"from": [1, 5.5, 15],
						"to": [15, 10.5, 17],
						"faces": {
							"north": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"east": { "uv": [10, 6, 12.5, 7], "rotation": 90, "texture": "#4" },
							"south": { "uv": [10, 0, 12.5, 7], "rotation": 90, "texture": "#4" },
							"west": { "uv": [10, 0, 12.5, 1], "rotation": 90, "texture": "#4" },
							"up": { "uv": [0, 14, 7, 15], "texture": "#4" },
							"down": { "uv": [7, 14, 14, 15], "rotation": 180, "texture": "#4" }
						}
					},
					{
						"name": "Gear",
						"from": [6.5, 6.5, -7],
						"to": [9.5, 9.5, 23],
						"rotation": { "angle": -22.5, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"east": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"south": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"west": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" }
						}
					},
					{
						"name": "Gear5",
						"from": [-7, 6.5, 6.5],
						"to": [23, 9.5, 9.5],
						"rotation": { "angle": 45, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"east": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"south": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"west": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "texture": "#4" }
						}
					},
					{
						"name": "Gear6",
						"from": [6.5, 6.5, -7],
						"to": [9.5, 9.5, 23],
						"rotation": { "angle": 45, "axis": "y", "origin": [8, 8, 8] },
						"faces": {
							"north": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"east": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"south": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"west": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" }
						}
					},
					{
						"name": "Gear7",
						"from": [-7, 6.5, 6.5],
						"to": [23, 9.5, 9.5],
						"faces": {
							"north": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"east": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"south": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"west": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "texture": "#4" }
						}
					},
					{
						"name": "Gear8",
						"from": [6.5, 6.5, -7],
						"to": [9.5, 9.5, 23],
						"faces": {
							"north": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"east": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"south": { "uv": [10, 9.5, 11.5, 11], "texture": "#4" },
							"west": { "uv": [0, 12.5, 15, 14], "texture": "#4" },
							"up": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" },
							"down": { "uv": [0, 11, 15, 12.5], "rotation": 90, "texture": "#4" }
						}
					}
				]
			}
		},
		casingFrame: function (material) {
			return {
				"parent": "cmi:item/casing_framework/main",
				"textures": {
					"side": `cmi:item/framework/${material}`
				}
			}
		}
	}

	addItem("incomplete_cogwheel")
		.modelJson({
			"parent": "create:block/cogwheel_shaftless"
		})
		.tag("create:incomplete_cogwheels")

	addItem("incomplete_large_cogwheel")
		.modelJson({
			"parent": "create:block/large_cogwheel_shaftless"
		})
		.tag("create:incomplete_large_cogwheels")

	let cogwheelMaterials = [
		"bronze",
		"cast_iron",
		"steel"
	]
	cogwheelMaterials.forEach((material) => {
		addItem(`incomplete_${material}_cogwheel`)
			.modelJson(SomeModelsJson.cogwheel(material))
			.tag("create:incomplete_cogwheels")

		addItem(`incomplete_${material}_large_cogwheel`)
			.modelJson(SomeModelsJson.largeCogwheel(material))
			.tag("create:incomplete_large_cogwheels")
	})

	let casingFrame = [
		"andesite",
		"brass",
		"copper"
	]
	casingFrame.forEach((frame) => {
		addItem(`${frame}_casing_framework`)
			.modelJson(SomeModelsJson.casingFrame(frame))
			.tag(`cmi:casing_framework`)
			.tag(`cmi:casing_framework/${frame}`)
	})
})