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
		"#forge:stick",
		"#forge:rods/wooden"
	])

	//飞轮
	create.sequenced_assembly("create:flywheel", [
		"#create:shaft"
	], [
		create.deploying("thermal:bronze_plate", ["thermal:bronze_plate", "#forge:plates/bronze"]),
	]).transitionalItem("thermal:bronze_plate").loops(4)
})