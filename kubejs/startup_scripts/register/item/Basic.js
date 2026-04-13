StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addItem(name, type) {
		if (type === undefined) {
			return event.create(`${CmiCore.MODID}:${name}`)
		}
		return event.create(`${CmiCore.MODID}:${name}`, type)
	}
	/**
	 * @param {string} name 注册ID
	 * @param {string} type 注册类型
	 * @returns 
	 */
	function addMaterial(name, type) {
		if (type === undefined) {
			return event.create(`${CmiCore.MODID}:${name}`)
				.texture(`${CmiCore.MODID}:item/material/${name}`)
		}
		return event.create(`${CmiCore.MODID}:${name}`, type)
			.texture(`${CmiCore.MODID}:item/material/${name}`)
	}

	// 黏血球
	addItem("blood_slime_ball")
		.texture(`${CmiCore.MODID}:item/material/blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

	// 淤泥提取物
	addItem("sludge_extract")
		.texture(`${CmiCore.MODID}:item/material/sludge_extract`)

	// 甘蔗纤维
	addItem("sugarcane_fiber")
		.texture(`${CmiCore.MODID}:item/material/sugarcane_fiber`)

	// 泥炭
	addItem("peat")
		.texture(`${CmiCore.MODID}:item/material/peat`)
		.burnTime(800)

	// 木屑加工系列
	addItem("wood_chip_briquette")
		.texture(`${CmiCore.MODID}:item/material/wood_chip/stage_1`)
		.burnTime(200 * 20)

	addItem("compressed_wood_chip_briquette")
		.texture(`${CmiCore.MODID}:item/material/wood_chip/stage_2`)
		.burnTime(200 * 70)

	addItem("densely_packed_wood_chip_briquette")
		.texture(`${CmiCore.MODID}:item/material/wood_chip/stage_3`)
		.burnTime(200 * 120)

	addItem("creosote_wood_chip_briquette")
		.texture(`${CmiCore.MODID}:item/material/wood_chip/done`)
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
					let key = `message.${CmiCore.MODID}.food.creosote_wood_chip_briquette`

					if (event.hand !== InteractionHand.MAIN_HAND && !level.isClientSide()) {
						player.displayClientMessage(Component.translatable(key).blue(), true)
					}
				})
		})
		.tag("create:blaze_burner_fuel/special")

	// 电动机转子
	addItem("motor_rotor")
		.texture(`${CmiCore.MODID}:item/material/motor_rotor`)

	// 热力单元
	addItem("thermal_unit")
		.texture(`${CmiCore.MODID}:item/material/unit/thermal`)

	// 烈焰燃烧单元
	addItem("blaze_unit")
		.texture(`${CmiCore.MODID}:item/material/unit/blaze`)

	// 大地碎裂单元
	addItem("basalz_unit")
		.texture(`${CmiCore.MODID}:item/material/unit/basalz`)

	// 狂风催化单元
	addItem("blitz_unit")
		.texture(`${CmiCore.MODID}:item/material/unit/blitz`)

	// 暴雪冷凝单元
	addItem("blizz_unit")
		.texture(`${CmiCore.MODID}:item/material/unit/blizz`)

	// 硅混合物
	addItem("silicon_mixure")
		.texture(`${CmiCore.MODID}:item/material/silicon_mixure`)

	// 硅橡胶
	addItem("silicon_rubber")
		.texture(`${CmiCore.MODID}:item/material/silicon_rubber`)

	// 小块焦炭
	addItem("small_coal_coke")
		.burnTime(400)
		.texture(`${CmiCore.MODID}:item/material/small_coal_coke`)

	// 升级模板
	addItem("drawer_upgrade_template")
		.texture(`${CmiCore.MODID}:item/material/drawer_upgrade_template`)

	// 橡胶树皮
	addItem("rubber_tree_bark")
		.texture(`${CmiCore.MODID}:item/material/rubber_tree_bark`)

	// 草纤维
	addItem("grass_fiber")
		.texture(`${CmiCore.MODID}:item/material/grass_fiber`)

	// 草绳
	addItem("grass_string")
		.texture(`${CmiCore.MODID}:item/material/grass_string`)
		.tag("forge:string")

	// 溴化阻燃剂
	addItem("brominated_flame_retardants")
		.texture(`${CmiCore.MODID}:item/material/brominated_flame_retardants`)

	// 阻燃塑料
	addItem("flame_retardant_plastic")
		.texture(`${CmiCore.MODID}:item/material/flame_retardant_plastic`)

	// 冷却设备
	addItem("nuke_cooler")
		.texture(`${CmiCore.MODID}:item/material/nuke_cooler`)

	// 红石线
	addItem("redstone_wire")
		.texture(`${CmiCore.MODID}:item/material/redstone_wire`)
		.tag("forge:wires/redstone")
		.tag("forge:wires")

	// 羊皮纸
	addItem("parchment")
		.texture(`${CmiCore.MODID}:item/material/parchment/parchment`)
	addItem("torn_parchment_a")
		.texture(`${CmiCore.MODID}:item/material/parchment/torn_parchment_a`)
	addItem("torn_parchment_b")
		.texture(`${CmiCore.MODID}:item/material/parchment/torn_parchment_b`)

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