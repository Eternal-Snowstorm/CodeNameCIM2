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

	// 黏血球
	addItem("blood_slime_ball")
		.texture(`${global.namespace}:item/material/blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

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

	// 电动机转子
	addItem("motor_rotor")
		.texture(`${global.namespace}:item/material/motor_rotor`)

	// 热力单元
	addItem("thermal_unit")
		.texture(`${global.namespace}:item/material/unit/thermal`)

	// 烈焰燃烧单元
	addItem("blaze_unit")
		.texture(`${global.namespace}:item/material/unit/blaze`)

	// 大地碎裂单元
	addItem("basalz_unit")
		.texture(`${global.namespace}:item/material/unit/basalz`)

	// 狂风催化单元
	addItem("blitz_unit")
		.texture(`${global.namespace}:item/material/unit/blitz`)

	// 暴雪冷凝单元
	addItem("blizz_unit")
		.texture(`${global.namespace}:item/material/unit/blizz`)

	// 硅混合物
	addItem("silicon_mixure")
		.texture(`${global.namespace}:item/material/silicon_mixure`)

	// 硅橡胶
	addItem("silicon_rubber")
		.texture(`${global.namespace}:item/material/silicon_rubber`)

	// 小块焦炭
	addItem("small_coal_coke")
		.burnTime(400)
		.texture(`${global.namespace}:item/material/small_coal_coke`)

	// 升级模板
	addItem("drawer_upgrade_template")
		.texture(`${global.namespace}:item/material/drawer_upgrade_template`)

	// 橡胶树皮
	addItem("rubber_tree_bark")
		.texture(`${global.namespace}:item/material/rubber_tree_bark`)

	// 草纤维
	addItem("grass_fiber")
		.texture(`${global.namespace}:item/material/grass_fiber`)

	// 草绳
	addItem("grass_string")
		.texture(`${global.namespace}:item/material/grass_string`)
		.tag("forge:string")

	// 溴化阻燃剂
	addItem("brominated_flame_retardants")
		.texture(`${global.namespace}:item/material/brominated_flame_retardants`)

	// 阻燃塑料
	addItem("flame_retardant_plastic")
		.texture(`${global.namespace}:item/material/flame_retardant_plastic`)

	// 冷却设备
	addItem("nuke_cooler")
		.texture(`${global.namespace}:item/material/nuke_cooler`)

	// 简易电池
	addItem("simple_battery")
		.maxStackSize(1)
		.texture("createaddition:item/capacitor")
		.attachCapability(CapabilityBuilder.ENERGY.customItemStack()
			.canExtract(() => true)
			.canReceive(() => true)
			.getEnergyStored((stack) => {
				return stack.nbt?.energy || 0
			})
			.getMaxEnergyStored((stack) => {
				return 150000
			})
			.extractEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let extracted = Math.min(stored, amount)

				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored - extracted
				}
				return extracted
			})
			.receiveEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let max = 150000
				let received = Math.min(max - stored, amount)

				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored + received
				}
				return received
			})
		)

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

	// // 活泼元素
	// addItem("reactive_element")
	// 	.texture(`${global.namespace}:item/material/cc/1`)
	// addItem("stable_element")
	// 	.texture(`${global.namespace}:item/material/cc/2`)
	// addItem("explosive_element")
	// 	.texture(`${global.namespace}:item/material/cc/3`)

	// addItem("reactive_element_basement")
	// 	.texture(`${global.namespace}:item/material/cc/1_dust`)
	// addItem("stable_element_basement")
	// 	.texture(`${global.namespace}:item/material/cc/2_dust`)
	// addItem("explosive_element_basement")
	// 	.texture(`${global.namespace}:item/material/cc/3_dust`)

	// // 精炼核废料
	// addItem("refined_nuke_waste")
	// 	.texture(`${global.namespace}:item/material/refined_nuke_waste`)

	// // Mg(OH)2
	// addItem("magnesium_hydroxide")
	// 	.texture(`${global.namespace}:item/material/sea/mgoh2`)

})