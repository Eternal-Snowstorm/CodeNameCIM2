ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements, createaddition, immersiveengineering, thermal} = event.recipes

    createaddition.rolling("#forge:dusts/cast_iron","#forge:ingots/cast_iron")
    createaddition.rolling("#forge:dusts/cast_iron","#forge:plates/cast_iron")
    create.pressing("#forge:dusts/cast_iron","#forge:ingots/cast_iron")
    immersiveengineering.metal_press("#forge:dusts/cast_iron","#forge:ingots/cast_iron","immersiveengineering:mold_plate")
    immersiveengineering.metal_press("#forge:dusts/cast_iron","#forge:ingots/cast_iron","immersiveengineering:mold_rod")
    thermal.press("#forge:dusts/cast_iron","#forge:ingots/cast_iron")
})