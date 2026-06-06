ServerEvents.recipes((event) => {
	let { kubejs, minecraft, create } = event.getRecipes()

    //包层线缆
    kubejs.shaped("8x ae2:fluix_covered_cable", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "ae2:fluix_glass_cable",
        B: "thermal:cured_rubber"
    }).id("ae2:network/cables/covered_fluix")

    // 无限水元件
	create.sequenced_assembly(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), [
		'ae2:fluid_cell_housing'
	], [
		create.filling('ae2:fluid_cell_housing', [
			'ae2:fluid_cell_housing',
			Fluid.of("minecraft:water", 1000)
		]),
		create.deploying('ae2:fluid_cell_housing', [
			'ae2:fluid_cell_housing',
			'ae2:cell_component_16k'
		]),
        create.filling('ae2:fluid_cell_housing', [
			'ae2:fluid_cell_housing',
			Fluid.of("minecraft:water", 1000)
		]),
	])
		.transitionalItem('ae2:fluid_cell_housing')
		.loops(1)
        .id('expatternprovider:water_cell')

    // 无限圆石元件
	create.sequenced_assembly(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'), [
		'ae2:item_cell_housing'
	], [
		create.filling('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			Fluid.of("minecraft:water", 1000)
		]),
		create.deploying('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			'ae2:cell_component_16k'
		]),
        create.filling('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			Fluid.of("minecraft:lava", 1000)
		]),
	])
		.transitionalItem('ae2:item_cell_housing')
		.loops(1)
        .id('expatternprovider:cobblestone_cell')

    // 黑曜石元件
	create.sequenced_assembly('cmi:obsidian_cell', [
		'ae2:item_cell_housing'
	], [
		create.filling('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			Fluid.of("minecraft:lava", 1000)
		]),
		create.deploying('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			'ae2:cell_component_16k'
		]),
        create.filling('ae2:item_cell_housing', [
			'ae2:item_cell_housing',
			Fluid.of("minecraft:water", 1000)
		]),
	])
		.transitionalItem('ae2:item_cell_housing')
		.loops(1)
        .id('cmi:obsidian_cell')
})






ItemEvents.rightClicked((event) => {
	let { player, item } = event
	const CELL = Item.of("cmi:obsidian_cell")

	let itemList = [
		"ae2:item_cell_housing",
        "minecraft:obsidian",
        "ae2:cell_component_16k"
	]
	if (player.mainHandItem === CELL && player.offHandItem !== CELL) {
		let key = `message.${global.namespace}.initial_item_kit`

		itemList.forEach((items) => {
			player.give(Item.of(items))
		})
		item.shrink(1)
	}
})