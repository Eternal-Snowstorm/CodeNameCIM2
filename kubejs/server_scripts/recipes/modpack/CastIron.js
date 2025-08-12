ServerEvents.recipes((event) => {
	let { create, createaddition, immersiveengineering, thermal } = event.recipes

	createaddition.rolling("#forge:dusts/cast_iron", [
		"#forge:ingots/cast_iron"
	])
	createaddition.rolling("#forge:dusts/cast_iron", [
		"#forge:plates/cast_iron"
	])
	create.pressing("#forge:dusts/cast_iron", [
		"#forge:ingots/cast_iron"
	])
	thermal.press("#forge:dusts/cast_iron", [
		"#forge:ingots/cast_iron"
	])
	immersiveengineering.metal_press("#forge:dusts/cast_iron")
		.input("#forge:ingots/cast_iron")
		.mold("immersiveengineering:mold_plate")
	immersiveengineering.metal_press("#forge:dusts/cast_iron")
		.input("#forge:ingots/cast_iron")
		.mold("immersiveengineering:mold_rod")
})