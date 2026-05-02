ServerEvents.recipes((event) => {
	let { tconstruct } = event.getRecipes()

	let castingMechanismMaterials = [
		["tconstruct:molten_iron", "cmi:iron_mechanism_basement", 1535],
		["tconstruct:molten_copper", "cmi:copper_mechanism_basement", 1085],
		["cmi:molten_andesite_alloy", "cmi:andesite_mechanism_basement", 760]
	]
	castingMechanismMaterials.forEach(([input, output, temp]) => {
		tconstruct.casting_table(output, Fluid.of(input, 90))
			.cast("#tconstruct:casts/multi_use/mechanism")
			.cooling_time(50)

		tconstruct.casting_table(output, Fluid.of(input, 90))
			.cast("#tconstruct:casts/single_use/mechanism")
			.cooling_time(50)
			.cast_consumed(true)

		tconstruct.melting(Fluid.of(input, 90))
			.ingredient(output)
			.temperature(temp)
			.time(100)
	})

	// 丝绢
	tconstruct.casting_table("tconstruct:silky_cloth")
		.fluid(Fluid.of("tconstruct:molten_rose_gold", 90))
		.cast("farmersdelight:canvas")
		.cooling_time(20 * 2)
		.cast_consumed(true)
		.id("tconstruct:tools/modifiers/silky_cloth")

	// 冰!
	tconstruct.casting_basin("minecraft:ice")
		.fluid(Fluid.of("minecraft:water", 1000))
		.cast("#forge:ice")
		.cooling_time(20)
		.cast_consumed(false)

	// 金构件铸模
	tconstruct.casting_table("cmi:mechanism_cast")
		.fluid(Fluid.of("tconstruct:molten_gold", 90))
		.cast("#create:mechanisms")
		.cooling_time(57)
		.cast_consumed(true)

	// 青铜构件铸模
	tconstruct.casting_table("cmi:bronze_mechanism_cast")
		.fluid(Fluid.of("tconstruct:molten_bronze", 360))
		.cast("#create:mechanisms")
		.cooling_time(57)
		.cast_consumed(true)

	// 沙子构件铸模
	tconstruct.molding_table("cmi:mechanism_sand_cast")
		.pattern("#create:mechanisms")
		.material("#tconstruct:casts/sand")

	// 红沙构件铸模
	tconstruct.molding_table("cmi:mechanism_red_sand_cast")
		.pattern("#create:mechanisms")
		.material("#tconstruct:casts/red_sand")

	// 安山合金
	tconstruct.casting_table("create:andesite_alloy")
		.fluid(Fluid.tag("tag", "cmi:andesite_alloy_material", 10))
		.cast("#forge:dusts/andesite")
		.cooling_time(20)
		.cast_consumed(true)

	// 青铜粒铸模
	tconstruct.casting_table("cmi:bronze_nugget_cast")
		.fluid(Fluid.of("tconstruct:molten_bronze", 360))
		.cast("#forge:nuggets")
		.cooling_time(57)
		.cast_consumed(true)

	// 熔铸炉控制器
	tconstruct.casting_basin("tconstruct:foundry_controller")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 1000))
		.cast("tconstruct:scorched_alloyer")
		.cast_consumed(true)
		.cooling_time(220)
		.id("tconstruct:smeltery/casting/scorched/foundry_controller")

	// 机动栏杆系列
	tconstruct.casting_table("createdeco:andesite_bars")
		.fluid(Fluid.of("cmi:molten_andesite_alloy", 30))
		.cooling_time(35)

	// 石板
	tconstruct.casting_table("cmi:stone_plate")
		.cast("#tconstruct:casts/multi_use/plate")
		.fluid(Fluid.of("minecraft:lava", 100))
		.cooling_time(20 * 2)

	// 沥青
	tconstruct.casting_table("thermal:bitumen")
		.fluid(Fluid.of("cmi:bitumen", 200))
		.cooling_time(20)

	tconstruct.casting_basin("thermal:bitumen_block")
		.fluid(Fluid.of("cmi:bitumen", 1800))
		.cooling_time(180)

	// 黏血球
	tconstruct.casting_table("cmi:blood_slime_ball")
		.fluid(Fluid.of("cmi:blood", 250))
		.cooling_time(20)

	// 红石线
	tconstruct.casting_table("cmi:redstone_wire")
		.cast("#forge:wires/lead")
		.fluid(Fluid.of("thermal:redstone", 50))
		.cooling_time(20 * 3)
		.cast_consumed(true)

	tconstruct.casting_table("cmi:redstone_wire")
		.cast("#tconstruct:casts/multi_use/wire")
		.fluid(Fluid.of("immersiveengineering:redstone_acid", 50))
		.cooling_time(20 * 3)

	tconstruct.casting_table("cmi:redstone_wire")
		.cast("#tconstruct:casts/single_use/wire")
		.fluid(Fluid.of("immersiveengineering:redstone_acid", 50))
		.cooling_time(20 * 3)
		.cast_consumed(true)

	// 红石板
	tconstruct.casting_table("cmi:redstone_plate")
		.cast("#forge:plates/lead")
		.fluid(Fluid.of("thermal:redstone", 100))
		.cooling_time(20 * 8)
		.cast_consumed(true)

	tconstruct.casting_table("cmi:redstone_plate")
		.cast("#tconstruct:casts/multi_use/plate")
		.fluid(Fluid.of("immersiveengineering:redstone_acid", 100))
		.cooling_time(20 * 8)

	tconstruct.casting_table("cmi:redstone_plate")
		.cast("#tconstruct:casts/single_use/plate")
		.fluid(Fluid.of("immersiveengineering:redstone_acid", 100))
		.cooling_time(20 * 8)
		.cast_consumed(true)

	let barTypes = [
		"brass",
		"copper",
		"industrial_iron",
		"zinc"
	]
	barTypes.forEach((type) => {
		tconstruct.casting_table(`createdeco:${type}_bars`)
			.fluid(Fluid.of(Ingredient.getFirstFluidId(`tconstruct:molten_${type}`), 30))
			.cooling_time(35)
	})

	// 石板
	tconstruct.casting_table("cmi:stone_plate")
		.cast("#tconstruct:casts/single_use/plate")
		.fluid(Fluid.of("minecraft:lava", 100))
		.cooling_time(20 * 2)
		.cast_consumed(true)

	// 列车时刻表
	tconstruct.casting_table("create:schedule")
		.fluid(Fluid.of("tconstruct:molten_gold", 45))
		.cast("#forge:plates/obsidian")
		.cooling_time(20)
		.cast_consumed(true)
		.id("create:crafting/kinetics/schedule")
})