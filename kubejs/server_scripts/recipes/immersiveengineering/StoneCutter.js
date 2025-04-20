ServerEvents.recipes((event) => {
	let { minecraft } = event.recipes

	let treatedWoodHorizontal = [
		"immersiveengineering:treated_scaffold",
		"immersiveengineering:treated_wood_vertical",
		"immersiveengineering:treated_wood_packaged",
		"immersiveengineering:stairs_treated_wood_vertical",
		"immersiveengineering:stairs_treated_wood_horizontal",
		"immersiveengineering:stairs_treated_wood_packaged",
		"2x immersiveengineering:slab_treated_wood_horizontal",
		"2x immersiveengineering:slab_treated_wood_packaged",
		"2x immersiveengineering:slab_treated_wood_vertical",
		"6x immersiveengineering:treated_fence"
	]
	treatedWoodHorizontal.forEach((wood) => {
		minecraft.stonecutting(wood, "#forge:treated_wood")
	})
})