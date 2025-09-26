StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	addItem("single_crystal_silicon")
		.texture(`${global.namespace}:item/material/single_crystal_silicon`)
	addItem("computer_component")
		.texture(`${global.namespace}:item/material/computer_component`)
	addItem("blockstone_source_alpha")
		.texture(`${global.namespace}:item/material/blockstone_source_alpha`)
	addItem("blockstone_source_beta")
		.texture(`${global.namespace}:item/material/blockstone_source_beta`)

	addItem("blockstone_source_gamma")
		.texture(`${global.namespace}:item/material/blockstone_source_gamma`)

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

	// mek-ae2 cpu
	// 灌注
	addItem("infusion_treated_processor")
		.texture(`${global.namespace}:item/material/infusion_treated_processor`)

	// 富集
	addItem("enrichment_treated_processor")
		.texture(`${global.namespace}:item/material/enrichment_treated_processor`)

	// 粉碎
	addItem("ground_treated_processor")
		.texture(`${global.namespace}:item/material/ground_treated_processor`)

	// 通用
	addItem("mekanism_processor")
		.texture(`${global.namespace}:item/material/mekanism_processor`)

	// 计算机组件半成品
	addItem("incomplete_computer_component")
		.texture(`${global.namespace}:item/material/incomplete_computer_component`)

	// 活泼元素
	addItem("reactive_element")
		.texture(`${global.namespace}:item/material/cc/1`)

	// 稳定元素
	addItem("stable_element")
		.texture(`${global.namespace}:item/material/cc/2`)

	// 爆鸣元素
	addItem("explosive_element")
		.texture(`${global.namespace}:item/material/cc/3`)

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
})