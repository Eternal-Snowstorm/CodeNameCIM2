ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.deploying("immersiveengineering:component_iron", [
		"#forge:rods/copper",
		"immersiveengineering:sheetmetal_iron"
	])
})