ServerEvents.recipes((event) => {
	let removedRecipeIds = [
		"immersiveengineering:metalpress/bullet_casing",
		"immersiveengineering:crafting/empty_casing",
		"immersiveengineering:bottling/empty_shell",
		"immersiveengineering:crafting/empty_shell",
		"immersiveengineering:metalpress/melon",
		"farmersdelight:integration/immersiveengineering/metalpress/pumpkin",
		"farmersdelight:integration/immersiveengineering/cloche/rice",
		"immersiveengineering:blueprint/mold_packing_4",
		"immersiveengineering:blueprint/mold_packing_9",
		"immersiveengineering:blueprint/mold_unpacking",
		"immersiveengineering:blueprint/mold_bullet_casing",
		"immersiveengineering:blueprint/mold_wire",
		"immersiveengineering:blueprint/mold_rod",
		"immersiveengineering:blueprint/mold_gear",
		"immersiveengineering:blueprint/mold_plate",
		"immersiveengineering:crafting/cokebrick",
		"immersiveengineering:crafting/redstone_acid",
		"immersiveindustry:chemical"
	]
	removedRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})
})