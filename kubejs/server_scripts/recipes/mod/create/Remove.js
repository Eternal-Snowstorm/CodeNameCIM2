ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"create:compacting/ice",
		"create:item_application/andesite_casing_from_wood",
		"create:item_application/copper_casing_from_wood",
		"create:item_application/brass_casing_from_wood",
		"createdieselgenerators:crafting/chip_wood_beam",
		"create:mixing/lava_from_cobble",
		"createaddition:compat/tconstruct/blaze_blood",
		"create:milling/compat/ae2/sky_stone_block",
		"create:crushing/netherrack",
		"create:crushing/obsidian",
		"createdieselgenerators:crafting/large_diesel_engine",
		"createdieselgenerators:crafting/diesel_engine",
		"createdieselgenerators:crafting/huge_diesel_engine",
		"create:crafting/kinetics/flywheel",
		"createaddition:crafting/capacitor_2",
		"create:crafting/palettes/scorchia",
		"createaddition:compacting/seed_oil",
		"create:crafting/materials/andesite_alloy",
		"createaddition:mixing/bioethanol",
		"create:milling/andesite",
		"create:industrial_iron_block_from_ingots_iron_stonecutting",
		"create:industrial_iron_block_from_iron_ingots_stonecutting",
		"create:crushing/tuff",
		"create:crushing/tuff_recycling",
		"create:milling/coal",
		"create:copper_bars_from_ingots_copper_stonecutting",
		"create:andesite_bars_from_andesite_alloy_stonecutting",
		"create:brass_bars_from_ingots_brass_stonecutting",
		"create:crafting/kinetics/fluid_pipe_vertical",
		"createdieselgenerators:distillation/crude_oil",
		"createdieselgenerators:basin_fermenting/fermentable",
		"createdieselgenerators:basin_fermenting/fermented_spider_eye",
		"create:milling/beetroot",

	]

	global.dyeColorGroup.forEach((color) => {
		removeRecipeIds.push(`createdeco:${color}_shipping_container`)
	})

	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})
})