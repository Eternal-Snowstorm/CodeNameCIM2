ServerEvents.recipes((event) => {
	let { create, createaddition, vintageimprovements } = event.recipes

	// 致密坚固板
	create.compacting("cmi:dense_sturdy_sheet", [
		"4x #forge:plates/obsidian"
	]).heated()

	vintageimprovements.hammering("cmi:dense_sturdy_sheet", [
		"#forge:plates/obsidian"
	]).hammerBlows(4)

	// 晶射红宝石
	vintageimprovements.laser_cutting("cmi:crystal_ruby", [
		"cmi:blockstone_source_alpha"
	]).energy(10000)

	// 充能紫水晶
	createaddition.charging("cmi:charged_amethyst", [
		"#forge:gems/amethyst"
	]).energy(400).maxChargeRate(400)

	// 末地石粉块
	create.compacting("cmi:compression_end_stone_dust_block", [
		"32x #forge:dusts/end_stone"
	]).heated()

	// 铸铁锭
	vintageimprovements.pressurizing([
		"cmi:cast_iron_ingot",
		"thermal:slag"
	], [
		"4x #create:crushed_raw_materials/iron",
		"#forge:coal_coke",
		"create:limestone"
	]).processingTime(200).superheated()

	vintageimprovements.pressurizing([
		"cmi:cast_iron_ingot",
		"thermal:slag"
	], [
		"4x #create:crushed_raw_materials/iron",
		"#forge:coal_coke",
		"minecraft:calcite"
	]).processingTime(200).superheated()

	// 钢锭
	create.sequenced_assembly("tconstruct:steel_ingot", [
		"#forge:plates/cast_iron"
	], [
		create.pressing("immersiveengineering:dust_iron", ["immersiveengineering:dust_iron"])
	]).transitionalItem("immersiveengineering:dust_iron").loops(10)

	// 木棍
	create.cutting([
		Item.of("minecraft:stick", 4).withChance(1),
		Item.of("minecraft:stick", 2).withChance(0.25)
	], "#minecraft:planks")
})