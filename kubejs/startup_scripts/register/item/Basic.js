StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addItem(name, type) {
		if (type === undefined) {
			return event.create(`${global.namespace}:${name}`)
		}
		return event.create(`${global.namespace}:${name}`, type)
	}
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addMaterial(name, type) {
		if (type === undefined) {
			return event.create(`${global.namespace}:${name}`)
				.texture(`${global.namespace}:item/material/${name}`)
		}
		return event.create(`${global.namespace}:${name}`, type)
			.texture(`${global.namespace}:item/material/${name}`)
	}

	// 构件冲压头
	addItem("mechanism_curving_head")
		.tag("vintageimprovements:curving_heads")

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
		.texture(`${global.namespace}:item/material/material/plate/dense_obsidian`)
		.tag("forge:plates")
		.tag("forge:plates/dense_obsidian")

	// 石板
	addItem("stone_plate")
		.texture(`${global.namespace}:item/material/material/plate/stone`)
		.tag("forge:plates")
		.tag("forge:plates/stone")

	// 超载合金锭
	addItem("overcharged_alloy_ingot")
		.texture(`${global.namespace}:item/material/material/ingot/overcharged_alloy_ingot`)
		.rarity("epic")
		.tag("forge:ingots")
		.tag("forge:ingots/overcharged_alloy")

	// 精炼铁方坯
	addItem("refined_iron_bloom")
		.texture(`${global.namespace}:item/material/material/material/ingot/refined_iron_bloom`)

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

					if (event.hand !== InteractionHand.MAIN_HAND && !level.isClientSide()) {
						player.displayClientMessage(Component.translatable(key).blue(), true)
					}
				})
		})
		.tag("create:blaze_burner_fuel/special")

	// 安山混合物
	addItem("andesite_aggregate")
		.texture(`${global.namespace}:item/material/material/brick/aggregate`)
		.tag("forge:bricks")

	// 耐火砖柸
	addItem("refractory_brick_bloom")
		.texture(`${global.namespace}:item/material/material/brick/refractory_brick_bloom`)

	// 小块焦炭
	addItem("small_coal_coke")
		.burnTime(400)
		.texture(`${global.namespace}:item/material/small_coal_coke`)

	// 升级模板
	addItem("drawer_upgrade_template")
		.texture(`${global.namespace}:item/material/drawer_upgrade_template`)

	// 硅处理
	// 碳化硅
	addItem("silicon_carbide")
		.texture(`${global.namespace}:item/material/silicon/silicon_carbide`)
	// 碳化硅板
	addItem("silicon_carbide_plate")
		.texture(`${global.namespace}:item/material/silicon/silicon_carbide_plate`)
		.tag("forge:plates/silicon_carbide")
		.tag("forge:plates")
	// 线刻硅板
	addItem("inscribed_silicon")
		.texture(`${global.namespace}:item/material/silicon/inscribed_silicon`)
	// 单晶硅
	addItem("single_crystal_silicon")
		.texture(`${global.namespace}:item/material/silicon/single_crystal_silicon`)

	// 草纤维
	addItem("grass_fiber")
		.texture(`${global.namespace}:item/material/grass_fiber`)

	// 草绳
	addItem("grass_string")
		.texture(`${global.namespace}:item/material/grass_string`)
		.tag("forge:string")

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

	// 溴化阻燃剂
	addItem("brominated_flame_retardants")
		.texture(`${global.namespace}:item/material/brominated_flame_retardants`)

	// 阻燃塑料
	addItem("flame_retardant_plastic")
		.texture(`${global.namespace}:item/material/flame_retardant_plastic`)

	// 三硝基甲苯
	addItem("trinitrotoluene")
		.texture(`${global.namespace}:item/material/dynamite/trinitrotoluene`)

	// 硝化纤维
	addItem("nitrocellulose")
		.texture(`${global.namespace}:item/material/dynamite/nitrocellulose`)

	// 冷却设备
	addItem("nuke_cooler")
		.texture(`${global.namespace}:item/material/nuke_cooler`)

	// 精炼核废料
	addItem("refined_nuke_waste")
		.texture(`${global.namespace}:item/material/refined_nuke_waste`)

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

	// 红石线
	addItem("redstone_wire")
		.texture(`${global.namespace}:item/material/redstone_wire`)
		.tag("forge:wires/redstone")
		.tag("forge:wires")

	// 羊皮纸
	addItem("parchment")
		.texture(`${global.namespace}:item/material/parchment/parchment`)
	addItem("torn_parchment_a")
		.texture(`${global.namespace}:item/material/parchment/torn_parchment_a`)
	addItem("torn_parchment_b")
		.texture(`${global.namespace}:item/material/parchment/torn_parchment_b`)

	// 高纯石英
	addItem("purified_quartz")
		.texture(`${global.namespace}:item/material/purified_quartz_crystal`)
	addItem("purified_quartz_dust")
		.texture(`${global.namespace}:item/material/purified_quartz_dust`)

	// 二极管
	addItem("diode")
		.texture(`${global.namespace}:item/material/diode`)

	let SomeModelsJson = {
		cogwheel: function (material) {
			const PARENT = "cmi:item/cogwheels/cogwheel"
			const PARTICLE = `steampowered:block/cogwheel/${material}_cogwheel`
			const COGWHEEL = `steampowered:block/cogwheel/${material}_cogwheel`
			return {
				"parent": PARENT,
				"textures": {
					"particle": PARTICLE,
					"1_2": COGWHEEL
				}
			}
		},
		largeCogwheel: function (material) {
			const PARENT = "cmi:item/cogwheels/large_cogwheel"
			const PARTICLE = `steampowered:block/cogwheel/${material}_large_cogwheel`
			const LARGE_COGWHEEL = `steampowered:block/cogwheel/${material}_large_cogwheel`

			return {
				"parent": PARENT,
				"textures": {
					"4": LARGE_COGWHEEL,
					"particle": PARTICLE
				}
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
	cogwheelMaterials.forEach((metal) => {
		addItem(`incomplete_${metal}_cogwheel`)
			.modelJson(SomeModelsJson.cogwheel(metal))
			.tag("create:incomplete_cogwheels")

		addItem(`incomplete_${metal}_large_cogwheel`)
			.modelJson(SomeModelsJson.largeCogwheel(metal))
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

	// addItem("general_processor")
	// 	.texture(`${global.namespace}:item/material/general_processor`)

	// 通用电路板
	// addItem("printed_general_processor")
	// 	.texture(`${global.namespace}:item/material/printed_general_processor`)
})