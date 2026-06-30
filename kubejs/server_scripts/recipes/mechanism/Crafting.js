ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 存储
	kubejs.shapeless(Mechanism.WOODEN.COM, [
		"#minecraft:planks",
		"#forge:rods/wooden",
		"#cmi:tree_barks",
		"#forge:stripped_logs",
		Mechanism.PART.BASIC,
		"#forge:tools/wrench"
	]).keepIngredient("#forge:tools/wrench")

	// 热能
	kubejs.shapeless(Mechanism.STONE.COM, [
		"#forge:plates/stone",
		"#forge:clay",
		"#forge:stone",
		"tconstruct:seared_brick",
		Mechanism.PART.BASIC,
		"#forge:tools/axes",
		"#forge:tools/wrench"
	])
		.damageIngredient("#forge:tools/axes")
		.keepIngredient("#forge:tools/wrench")

	// 红石
	kubejs.shapeless(Mechanism.REDSTONE.COM, [
		"#forge:plates/lead",
		"#forge:dusts/redstone",
		"#forge:dusts/redstone",
		"minecraft:repeater",
		Mechanism.PART.BASIC,
		"#forge:tools/axes",
		"#forge:tools/wrench"
	])
		.damageIngredient("#forge:tools/axes")
		.keepIngredient("#forge:tools/wrench")

	// 自然
	kubejs.shapeless(Mechanism.NATURE.COM, [
		"minecraft:grass_block",
		"#minecraft:flowers",
		"minecraft:water_bucket",
		"#forge:seeds",
		Mechanism.PART.MAGIC,
		"#forge:tools/axes",
		"#forge:tools/wrench"
	])
		.replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
		.damageIngredient("#forge:tools/axes")
		.keepIngredient("#forge:tools/wrench")

	// 流体
	kubejs.shapeless(Mechanism.COPPER.COM, [
		"cmi:copper_mechanism_basement",
		"create:fluid_pipe",
		"thermal:cured_rubber",
		["#forge:glass/prism", "#forge:glass"],
		"minecraft:water_bucket",
		Mechanism.PART.MECHA,
		"#forge:tools/wrench"
	])
		.replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
		.keepIngredient("#forge:tools/wrench")

	// 动能
	kubejs.shapeless(Mechanism.ANDESITE.COM, [
		"cmi:andesite_mechanism_basement",
		"#create:cogwheel",
		"#create:cogwheel",
		"#create:large_cogwheel",
		Mechanism.PART.MECHA,
		"#forge:tools/axes",
		"#forge:tools/wrench"
	])
		.damageIngredient("#forge:tools/axes")
		.keepIngredient("#forge:tools/wrench")

	// 磁力
	kubejs.shapeless(Mechanism.IRON.COM, [
		"cmi:iron_mechanism_basement",
		"#forge:nuggets/iron",
		"#vintageimprovements:springs/iron",
		"#forge:wires/iron",
		Mechanism.PART.BASIC,
		"#forge:tools/axes",
		"#forge:tools/wrench"
	])
		.damageIngredient("#forge:tools/axes")
		.keepIngredient("#forge:tools/wrench")
})