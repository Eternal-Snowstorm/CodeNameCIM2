ServerEvents.recipes((event) => {
	let { create, createaddition, vintageimprovements } = event.recipes

	let Inc = {

	}

	// 致密坚固板
	create.compacting("cmi:dense_sturdy_sheet", [
		"4x #forge:plates/obsidian"
	]).heated()

	vintageimprovements.hammering("cmi:dense_sturdy_sheet", [
		"#forge:plates/obsidian"
	]).hammerBlows(4)

	// 晶射红宝石
	vintageimprovements.laser_cutting("cmi:crystal_ruby", [
		"cmi:blackstone_source_alpha"
	]).energy(100).maxChargeRate(10)

	// 充能紫水晶
	createaddition.charging("cmi:charged_amethyst", [
		"#forge:gems/amethyst"
	]).energy(100).maxChargeRate(400)

	// 末地石粉块
	create.compacting("cmi:compression_end_stone_dust_block", [
		"32x #forge:dusts/end_stone"
	]).heated()


	// 真空管
	vintageimprovements.vacuumizing("immersiveengineering:electron_tube", [
		"#forge:plates/nickel",
		"create:electron_tube",
		"minecraft:glass_bottle"
	]).heatRequirement(global.HeatLevel["grilled"])


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

	create.compacting("cmi:densely_packed_wood_chip_briquette", [
		"4x cmi:compressed_wood_chip_briquette"
	])

	create.compacting("cmi:creosote_wood_chip_briquette", [
		"cmi:densely_packed_wood_chip_briquette",
		Fluid.of("immersiveengineering:creosote", 1000)
	])

	// 魔力部件
	create.filling("4x cmi:magical_mechanism_part", [
		Fluid.of("create_enchantment_industry:hyper_experience", 10),
		"cmi:basic_mechanism_part"
	])

	create.haunting("cmi:magical_mechanism_part", [
		"cmi:basic_mechanism_part"
	])

	// ???
	createaddition.charging("cmi:overcharged_alloy_ingot", [
		"create:chromatic_compound"
	]).energy(1000).id("cmi:createaddition/charging/overcharged_alloy_ingot")
})