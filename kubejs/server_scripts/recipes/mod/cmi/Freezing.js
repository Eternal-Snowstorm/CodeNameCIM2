ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	// 巧克力
	cmi.freezing("ratatouille:chocolate_mold_solid", [
		"ratatouille:chocolate_mold_filled"
	])

	// 浮冰
	cmi.freezing("minecraft:packed_ice", [
		"minecraft:ice"
	])

	// 蓝冰
	cmi.freezing("minecraft:blue_ice", [
		"minecraft:packed_ice"
	])
})