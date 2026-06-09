ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 冰
	kubejs.shapeless("minecraft:ice", [
		"4x ad_astra:ice_shard"
	])

	// 浮冰
	kubejs.shapeless("minecraft:packed_ice", [
		"4x minecraft:ice"
	])

	// 蓝冰
	kubejs.shapeless("minecraft:blue_ice", [
		"4x minecraft:packed_ice"
	])

	// 草绳
	kubejs.shapeless("cmi:grass_string", [
		"3x cmi:grass_fiber"
	])

	// 泥炭
	kubejs.shapeless("4x cmi:peat", [
		"cmi:peat_block"
	])

	// 暗影钢
	kubejs.shapeless("create:shadow_steel", [
		"create:chromatic_compound",
		"#forge:dusts/void"
	])

	kubejs.shapeless("9x cmi:entro_crystal", [
		"cmi:entro_block"
	])

	// 合成蓝图
	kubejs.shapeless("create:crafting_blueprint", [
		"#forge:nuggets/iron",
		"tconstruct:pattern",
		"minecraft:paper",
		"minecraft:paper"
	]).id("create:crafting/appliances/crafting_blueprint")

	// 蓝图
	kubejs.shapeless("create:empty_schematic", [
		"#forge:nuggets/iron",
		"minecraft:paper"
	]).id("create:crafting/schematics/empty_schematic")
})