StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:single_crystal_silicon`)
		.texture(`${global.namespace}:item/material/single_crystal_silicon`)
	event.create(`${global.namespace}:computer_component`)

	event.create(`${global.namespace}:blockstone_source_alpha`)
		.texture(`${global.namespace}:item/material/blockstone_source_alpha`)
	event.create(`${global.namespace}:blockstone_source_beta`)
		.texture(`${global.namespace}:item/material/blockstone_source_beta`)
	event.create(`${global.namespace}:blockstone_source_gamma`)
		.texture(`${global.namespace}:item/material/blockstone_source_gamma`)

	event.create(`${global.namespace}:crystal_ruby`)
		.texture(`${global.namespace}:item/material/crystal_ruby`)
	event.create(`${global.namespace}:source_sapphire`)
		.texture(`${global.namespace}:item/material/source_sapphire`)
	event.create(`${global.namespace}:bombed_source_emeraid`)
		.texture(`${global.namespace}:item/material/bombed_source_emeraid`)

	// 黏血球
	event.create(`${global.namespace}:blood_slime_ball`)
		.texture(`${global.namespace}:item/material/blood_slime_ball`)
		.tag("forge:slimeball")
		.tag("forge:slimeball/blood")

	// 致密坚固板
	event.create(`${global.namespace}:dense_sturdy_sheet`)
		.texture(`${global.namespace}:item/material/dense_sturdy_sheet`)
		.tag("forge:plates")
		.tag("forge:plates/dense_obsidian")

	// 等离子锭
	event.create(`${global.namespace}:plasma_ingot`)
		.texture(`${global.namespace}:item/material/ingot/plasma_ingot`)
		.rarity("epic")
		.tag("forge:ingots")
		.tag("forge:ingots/plasma")

	// 充能紫水晶
	event.create(`${global.namespace}:charged_amethyst`)
		.texture(`${global.namespace}:item/material/charged_amethyst`)
		.rarity("epic")
		.tag("forge:gems")
		.tag("forge:gems/charged_amethyst")

	// 淤泥提取物
	event.create(`${global.namespace}:sludge_extract`)
		.texture(`${global.namespace}:item/material/sludge_extract`)

	// 泥炭
	event.create(`${global.namespace}:peat`)
		.texture(`${global.namespace}:item/material/peat`)
		.burnTime(800)

	// 初始套件
	event.create(`${global.namespace}:initial_item_kit`)
		.glow(true)

	// 石板
	event.create(`${global.namespace}:stone_plate`)
		.texture(`${global.namespace}:item/material/stone_plate`)
		.tag("forge:plates")
		.tag("forge:plates/stone")

	// 铂系列
	event.create(`${global.namespace}:raw_platinum_particles`)
		.texture(`${global.namespace}:item/material/platinum/raw_particles`)

	event.create(`${global.namespace}:platinum_crystal_nucleus`)
		.texture(`${global.namespace}:item/material/platinum/crystal_nucleus`)

	event.create(`${global.namespace}:platinum_shard`)
		.texture(`${global.namespace}:item/material/platinum/shard`)

	// 木屑加工系列
	event.create(`${global.namespace}:wood_chip_briquette`)
		.texture(`${global.namespace}:item/material/wood_chip/stage_1`)
		.burnTime(800)

	event.create(`${global.namespace}:compressed_wood_chip_briquette`)
		.texture(`${global.namespace}:item/material/wood_chip/stage_2`)
		.burnTime(3600)

	event.create(`${global.namespace}:densely_packed_wood_chip_briquette`)
		.texture(`${global.namespace}:item/material/wood_chip/stage_3`)
		.burnTime(9200)

	event.create(`${global.namespace}:creosote_wood_chip_briquette`)
		.texture(`${global.namespace}:item/material/wood_chip/done`)
		.burnTime(16000)

	// 安山岩
	event.create(`${global.namespace}:andesite_dust`)
		.texture(`${global.namespace}:item/material/andesite/dust`)
		.tag("forge:dusts")
		.tag(`forge:dusts/andesite`)

	event.create(`${global.namespace}:andesite_aggregate`)
		.texture(`${global.namespace}:item/material/andesite/aggregate`)
		.tag("forge:bricks")

	//硅处理
	event.create(`${global.namespace}:small_coal_coke`)
		.burnTime(400)
		.texture(`${global.namespace}:item/material/small_coal_coke`)

	event.create(`${global.namespace}:silicon_mixure`)
		.texture(`${global.namespace}:item/material/silicon/silicon_mixure`)

	// 橡胶板
	event.create(`${global.namespace}:rubber_plate`)
		.tag("forge:plates")
		.tag("forge:plates/rubber")

	// 生石灰
	event.create(`${global.namespace}:lime`)
		.texture(`${global.namespace}:item/material/lime`)

	// mek-ae2 cpu
	// 灌注
	event.create(`${global.namespace}:infusion_treated_processor`)
		.texture(`${global.namespace}:item/material/infusion_treated_processor`)

	// 富集
	event.create(`${global.namespace}:enrichment_treated_processor`)
		.texture(`${global.namespace}:item/material/enrichment_treated_processor`)

	// 粉碎
	event.create(`${global.namespace}:ground_treated_processor`)
		.texture(`${global.namespace}:item/material/ground_treated_processor`)

	// 通用
	event.create(`${global.namespace}:mekanism_processor`)
		.texture(`${global.namespace}:item/material/mekanism_processor`)

	// 计算机组件半成品
	event.create(`${global.namespace}:incomplete_computer_component`)
		.texture(`${global.namespace}:item/material/incomplete_computer_component`)
})