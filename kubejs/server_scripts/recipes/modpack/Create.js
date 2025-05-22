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
	]).energy(4000).maxChargeRate(1000)

	// 末地石粉块
	create.compacting("cmi:compression_end_stone_dust_block", [
		"32x #forge:dusts/end_stone"
	]).heated()
})