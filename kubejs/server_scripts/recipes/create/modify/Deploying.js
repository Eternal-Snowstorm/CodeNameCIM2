ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.deploying("immersiveengineering:component_iron", [
		"immersiveengineering:sheetmetal_iron",
		"#forge:rods/copper"
	])

	create.deploying("immersiveengineering:component_steel", [
		"immersiveengineering:sheetmetal_steel",
		"#forge:rods/copper"
	])

	create.deploying("minecraft:redstone_torch", [
		"#forge:rods/wooden",
		"#forge:dusts/redstone"
	])

	//飞轮
	create.sequenced_assembly("create:flywheel", [
		"#create:shaft"
	], [
		create.deploying("thermal:bronze_plate", ["thermal:bronze_plate", "#forge:plates/bronze"]),
	]).transitionalItem("thermal:bronze_plate").loops(4)

	// 扫描组件
	create.deploying("scannable:range_module", [
		"scannable:blank_module",
		"vintageimprovements:redstone_module"
	]).id("scannable:range_module")

	create.deploying("scannable:entity_module", [
		"scannable:blank_module",
		"cmi:photosensitive_mechanism"
	]).id("scannable:entity_module")

	create.deploying("scannable:friendly_entity_module", [
		"scannable:blank_module",
		"cmi:pigiron_mechanism"
	]).id("scannable:friendly_entity_module")

	create.deploying("scannable:hostile_entity_module", [
		"scannable:blank_module",
		"cmi:nether_mechanism"
	]).id("scannable:hostile_entity_module")

	create.deploying("scannable:block_module", [
		"scannable:blank_module",
		"cmi:stone_mechanism"
	]).id("scannable:block_module")

	create.deploying("scannable:common_ores_module", [
		"scannable:blank_module",
		"cmi:iron_mechanism"
	]).id("scannable:common_ores_module")

	create.deploying("scannable:rare_ores_module", [
		"scannable:blank_module",
		"cmi:gold_mechanism"
	]).id("scannable:rare_ores_module")

	create.deploying("scannable:fluid_module", [
		"scannable:blank_module",
		"cmi:copper_mechanism"
	]).id("scannable:fluid_module")

	create.deploying("scannable:chest_module", [
		"scannable:blank_module",
		"cmi:wooden_mechanism"
	]).id("scannable:chest_module")
})