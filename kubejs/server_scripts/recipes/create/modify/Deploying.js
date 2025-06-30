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
})