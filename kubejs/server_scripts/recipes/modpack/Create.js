ServerEvents.recipes((event) => {
	let { create, createaddition, vintageimprovements } = event.recipes

	// 致密坚固板
	create.compacting("ue_addons:dense_sturdy_sheet", [
		"4x #forge:plates/obsidian"
	]).heated()

	vintageimprovements.hammering("ue_addons:dense_sturdy_sheet", [
		"#forge:plates/obsidian"
	]).hammerBlows(4)

	// 晶射红宝石
	vintageimprovements.laser_cutting("ue_addons:crystal_ruby", [
		"ue_addons:blockstone_source_alpha"
	]).energy(10000)

	// 充能紫水晶
	createaddition.charging("ue_addons:charged_amethyst", [
		"#forge:gems/amethyst"
	]).energy(20000).maxChargeRate(5000)
})