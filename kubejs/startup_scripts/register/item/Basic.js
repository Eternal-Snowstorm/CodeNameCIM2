StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addItem(name, type) {
		if (type === undefined) {
			return event.create(`${Cmi.MODID}:${name}`)
		}
		return event.create(`${Cmi.MODID}:${name}`, type)
	}
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addMaterial(name, type) {
		if (type === undefined) {
			return event.create(`${Cmi.MODID}:${name}`)
				.texture(Cmi.loadResource(`item/material/${name}`))
		}
		return event.create(`${Cmi.MODID}:${name}`, type)
			.texture(Cmi.loadResource(`item/material/${name}`))
	}

	// 黏血球
	addItem("blood_slime_ball")
		.texture(Cmi.loadResource("item/material/blood_slime_ball"))
		.tag("forge:slimeballs")
		.tag("forge:slimeball/blood")

	// 淤泥提取物
	addItem("sludge_extract")
		.texture(Cmi.loadResource("item/material/sludge_extract"))

	// 甘蔗纤维
	addItem("sugarcane_fiber")
		.texture(Cmi.loadResource("item/material/sugarcane_fiber"))

	// 泥炭
	addItem("peat")
		.texture(Cmi.loadResource("item/material/peat"))
		.burnTime(800)

	// 木屑加工系列
	addItem("wood_chip_briquette")
		.texture(Cmi.loadResource("item/material/wood_chip/stage_1"))
		.burnTime(200 * 20)

	addItem("compressed_wood_chip_briquette")
		.texture(Cmi.loadResource("item/material/wood_chip/stage_2"))
		.burnTime(200 * 20 * 4)

	addItem("densely_packed_wood_chip_briquette")
		.texture(Cmi.loadResource("item/material/wood_chip/stage_3"))
		.burnTime(200 * (20 * 4) * 4)

	addItem("creosote_wood_chip_briquette")
		.texture(Cmi.loadResource("item/material/wood_chip/done"))
		.burnTime(200 * ((20 * 4) * 4) * 4)
		.food((builder) => {
			builder.hunger(20)
				.saturation(1)
				.effect("immersiveengineering:flammable", 20 * 60, 5, 1)
				.effect("minecraft:blindness", 20 * 60, 5, 1)
				.effect("minecraft:nausea", 20 * 60, 5, 1)
				.effect("minecraft:instant_damage", 1, 1, 1)
				.eaten((event) => {
					let { player, level, hand } = event
					let key = `message.${Cmi.MODID}.food.creosote_wood_chip_briquette`

					if (hand !== InteractionHand.MAIN_HAND && !level.isClientSide()) {
						player.displayClientMessage(Component.translatable(key).blue(), true)
					}
				})
		})
		.tag("create:blaze_burner_fuel/special")

	// 图标
	addItem("cmi_icon")
		.texture(Cmi.loadResource("item/packicon"))

	// 热力单元
	addItem("thermal_unit")
		.texture(Cmi.loadResource("item/material/unit/thermal"))

	// 烈焰燃烧单元
	addItem("blaze_unit")
		.texture(Cmi.loadResource("item/material/unit/blaze"))

	// 大地碎裂单元
	addItem("basalz_unit")
		.texture(Cmi.loadResource("item/material/unit/basalz"))

	// 狂风催化单元
	addItem("blitz_unit")
		.texture(Cmi.loadResource("item/material/unit/blitz"))

	// 暴雪冷凝单元
	addItem("blizz_unit")
		.texture(Cmi.loadResource("item/material/unit/blizz"))

	// 小块焦炭
	addItem("small_coal_coke")
		.burnTime(200 * 2)
		.texture(Cmi.loadResource("item/material/small_coal_coke"))

	// 电离中和红石
	addMaterial("electrolized_redstone")

	// 高岭土
	addMaterial("kaolinite_ball")

	// 电动机转子
	addMaterial("motor_rotor")

	// 共振管
	addMaterial("resonant_tube")

	// 硅混合物
	addMaterial("silicon_mixure")

	// 硅橡胶
	addMaterial("silicon_rubber")

	// 升级模板
	addMaterial("drawer_upgrade_template")

	// 橡胶树皮
	addMaterial("rubber_tree_bark")

	// 草纤维
	addMaterial("grass_fiber")

	// 矿物碎块
	addMaterial("vanadium_ore_chunk")
		.tag("forge:raw_nuggets")
		.tag("forge:raw_nuggets/vanadium")

	addMaterial("platinum_ore_chunk")
		.tag("forge:raw_nuggets")
		.tag("forge:raw_nuggets/platinum")

	// 草绳
	addMaterial("grass_string")
		.tag("forge:string")

	// 溴化阻燃剂
	addMaterial("brominated_flame_retardants")

	// 阻燃塑料
	addMaterial("flame_retardant_plastic")

	// 冷却设备
	addMaterial("nuke_cooler")

	// 冲压头
	addMaterial("hammer_head")

	// 红石线
	addMaterial("redstone_wire")
		.tag("forge:wires/redstone")
		.tag("forge:wires")

	// 铁氧体磁芯	
	addMaterial("ferrit_core")

	// 黑曜石元件
	addMaterial("obsidian_cell")

	// ME整合组件
	addMaterial("combined_component_4k")

	addMaterial("combined_component_16k")

	addMaterial("combined_component_64k")

	addMaterial("combined_component_256k")

	addMaterial("combined_spatial_component_16")

	addMaterial("combined_spatial_component_128")

	// 赤泥
	addMaterial("red_mud")

	// 氧化铝
	addMaterial("aluminum_oxide")

	// 幽匿碎块
	addMaterial("sculk_chunk")

	// 失活幽匿
	addMaterial("dead_sculk")

	// 活化幽匿
	addMaterial("active_sculk")

	// 幽匿骨粉
	addMaterial("sculk_bonemeal")

	// 幽匿之骨
	addMaterial("sculk_bone")

	// 幽匿电路板
	addMaterial("sculk_circuit")

	// C8_幽灵猫
	// 半熔融锇
	addMaterial("pure_semi_molten_osmium")

	// 富集锇结晶
	addMaterial("enriched_osmium_crystal")

	// 锇晶圆
	addMaterial("osmium_wafer")

	// 铬钒混合物
	addMaterial("chromium_vanadium_mixture")

	// 铬钒催化剂
	addMaterial("chromium_vanadium_catalyst")

	// 碳纳米管
	addMaterial("carbon_nanotube")

	// 钛合金网
	addMaterial("titanium_alloy_mesh")

	// 强化碳纳米管
	addMaterial("reinforced_carbon_nanotube")

	// 强化碳纳米管II型
	addMaterial("reinforced_carbon_nanotube_2")

	// 活化石磨锭
	addMaterial("activated_graphite_ingot")

	// 活化石磨碎块
	addMaterial("activated_graphite_chunk")

	// 复合钨钢板
	addMaterial("composite_tungsten_steel_plate")

	// 强化复合板
	addMaterial("reinforced_composite_plate")

	// 未成形的碳纳米管
	addMaterial("incomplete_carbon_nanotube")

	// 纯净蓝宝石化合物
	addMaterial("pure_sapphire_compound")

	// 粗钛粉
	addMaterial("raw_titanium_dust")

	// 粗钛混合物
	addMaterial("raw_titanium_mixture")

	// 钛晶体
	addMaterial("titanium_crystal")

	// 强化碳纳米管III型
	addMaterial("reinforced_carbon_nanotube_3")

	// 强化复合齿轮
	addMaterial("reinforced_composite_gear")

	// 钛合金线圈
	addMaterial("titanium_alloy_coil")

	// C8_RC
	// 月岩粉
	addMaterial("moon_dust")

	// 热解月岩残渣
	addMaterial("pyrolyzed_moon_rock_residue")

	// 晶源结晶
	addMaterial("moon_crystal_source")

	// 焙烧结晶
	addMaterial("roasted_moon_crystal_source")

	// 富集晶簇
	addMaterial("enriched_crystal_cluster")

	// 纯化硅晶
	addMaterial("purified_silicon_crystal")

	// 单晶硅
	addMaterial("single_crystal_silicon")

	// 硅晶圆
	addMaterial("silicon_crystal_wafer")

	// 高级电子元件
	addMaterial("advanced_electronic_components")

	// 粗结晶氦
	addMaterial("raw_helium_crystal")

	// 富集结晶氦
	addMaterial("enriched_helium_crystal")

	// 单层石墨烯
	addMaterial("single_layer_graphene")

	// 石墨烯板
	addMaterial("graphene_plate")

	// 纳米复合板
	addMaterial("nano_composite_plate")

	// 含氟废渣
	addMaterial("fluoride_containing_waste")

	// 精炼核废料
	addMaterial("refined_nuke_waste")

	// 精炼辐射岩
	addMaterial("refined_radiation_rock")

	// 酸洗辐射岩
	addMaterial("acid_washed_radiation_rock")

	// 致密氧化物薄膜
	addMaterial("dense_oxide_film")

	// 强化纳米复合板
	addMaterial("reinforced_nano_composite_plate")

	// 含硫混合物
	addMaterial("sulfur_containing_mixture")

	// 火星岩
	addMaterial("mars_dust")

	// 热解火星岩
	addMaterial("pyrolyzed_mars_rock_residue")

	// 粗锗
	addMaterial("raw_gemanium")

	// 精锗
	addMaterial("refined_gemanium")

	// 高纯锗粉
	addMaterial("pure_gemanium_dust")

	// 焙烧锗晶
	addMaterial("roasted_gemanium_crystal")

	// 掺杂锗晶
	addMaterial("doped_gemanium_crystal")

	// 碳化还原锗铁混合物
	addMaterial("carbide_reduced_germanium_iron_mixture")

	// 碳强化陶瓷胚体
	addMaterial("carbon_reinforced_ceramic_body")

	// 还原性陶瓷胚体
	addMaterial("restorative_ceramic_body")

	// 富集陶瓷胚体
	addMaterial("enriched_ceramic_body")

	// 高温光导陶瓷
	addMaterial("high_temperature_optical_ceramic")

	// 强化结构陶瓷
	addMaterial("reinforced_structure_ceramic")

	// 方铅岩粉
	addMaterial("galena_dust")

	// 磁性源质
	addMaterial("magnetic_source")

	// 含铁矿渣
	addMaterial("iron_containing_slag")

	// 青磁性源质
	addMaterial("azure_magnetic_source")

	// 赤磁性源质
	addMaterial("scarlet_magnetic_source")

	// 磁性混合物
	addMaterial("magnetic_mixure")

	// 偏青钕混合物
	addMaterial("rich_azure_magnetic_mixure")

	// 偏赤钕混合物
	addMaterial("rich_scarlet_magnetic_mixure")

	// 青钕磁性陶瓷
	addMaterial("azure_magnetic_ceramic")

	// 赤钕磁性陶瓷
	addMaterial("scarlet_magnetic_ceramic")

	// 磁性陶瓷
	addMaterial("magnetic_ceramic")

	// 压电陶瓷
	addMaterial("piezoelectric_ceramic")

	// Delta added
	// 赤钕粉
	addMaterial("scarlet_magnetic_dust")

	// 青钕粉
	addMaterial("azure_magnetic_dust")

	// 富集辐射岩
	addMaterial("enriched_radiation_rock")

	// 晶矿粉
	addMaterial("moon_crystal_dust")

	// 晶板
	addMaterial("crystal_plate")

	// 石英砂
	addMaterial("quartz_sand")

	// 富集锗铁混合物
	addMaterial("enriched_germanium_iron_mixture")

	// 还原性含铁矿渣
	addMaterial("reduced_iron_containing_slag")

	// 强还原性含铁矿渣
	addMaterial("strong_reduced_iron_containing_slag")

	// 去铁矿渣
	addMaterial("reduced_iron_slag")

	// 铅矿渣
	addMaterial("lead_slag")

	// 镀层方铅陶瓷
	addMaterial("plating_galena_ceramic")

	// 方铅晶圆
	addMaterial("galena_wafer")

	// 方铅釉料
	addMaterial("galena_enamel")

	// 方铅石英
	addMaterial("galena_quartz")

	// 去铁方铅石英
	addMaterial("reduced_iron_galena_quartz")

	// 富集方铅石英
	addMaterial("enriched_galena_quartz")

	// 复合陶瓷基板
	addMaterial("composite_ceramic_substrates")

	// 磁触点
	addMaterial("magnetic_contact")

	// 精英电子元件
	addMaterial("elite_electronic_components")

	// 恩特罗系列
	addItem("entro_crystal")
		.texture("expatternprovider:item/entro_crystal")
		.tag("forge:gems/entro")
		.tag("forge:gems")

	addItem("concurrent_processor")
		.texture("expatternprovider:item/concurrent_processor")

	addItem("printed_concurrent_processor")
		.texture("expatternprovider:item/concurrent_processor_print")

	addItem("concurrent_processor_press")
		.texture("expatternprovider:item/concurrent_processor_press")

	// 羊皮纸
	addItem("parchment")
		.texture(Cmi.loadResource("item/material/parchment/parchment"))
	addItem("torn_parchment_a")
		.texture(Cmi.loadResource("item/material/parchment/torn_parchment_a"))
	addItem("torn_parchment_b")
		.texture(Cmi.loadResource("item/material/parchment/torn_parchment_b"))

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
})