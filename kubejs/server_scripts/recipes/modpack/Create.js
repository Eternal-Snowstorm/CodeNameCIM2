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
		"#cmi:steelmaking_raw_materials"
	]).processingTime(200).superheated()

	// 钢粉
	create.sequenced_assembly("immersiveengineering:dust_steel", [
		"#forge:dusts/cast_iron"
	], [
		create.pressing("cmi:cast_iron_dust", ["cmi:cast_iron_dust"])
	]).loops(10).transitionalItem("cmi:cast_iron_dust")

	// 木棍
	create.cutting([
		Item.of("minecraft:stick", 4).withChance(1),
		Item.of("minecraft:stick", 2).withChance(0.25)
	], "#minecraft:planks")

	// 木屑
	create.compacting("cmi:wood_chip_briquette", [
		"4x createdieselgenerators:wood_chip"
	])

	create.compacting("cmi:compressed_wood_chip_briquette", [
		"4x cmi:wood_chip_briquette"
	])

	create.compacting("cmi:compressed_wood_chip_briquette", [
		"4x cmi:wood_chip_briquette"
	])

	create.compacting("cmi:densely_packed_wood_chip_briquette", [
		"4x cmi:compressed_wood_chip_briquette"
	])

	create.compacting("cmi:creosote_wood_chip_briquette", [
		"cmi:densely_packed_wood_chip_briquette",
		{ fluidTag: "forge:creosote", amount: 1000 }
	])

	create.filling("4x cmi:magical_mechanism_part", [
		Fluid.of("create_enchantment_industry:hyper_experience", 10),
		"cmi:basic_mechanism_part"
	])

	create.haunting("cmi:magical_mechanism_part", [
		"cmi:basic_mechanism_part"
	])

	create.milling([
		"2x cmi:andesite_dust",
		Item.of("cmi:andesite_dust", 2).withChance(0.5)
	], "#create:stone_types/andesite")

	create.crushing("4x cmi:andesite_dust", [
		"#create:stone_types/andesite"
	])

	create.mixing("4x cmi:andesite_aggregate", [
		Fluid.of("minecraft:water", 250),
		"#forge:dusts/andesite",
		"#forge:clay"
	])
})