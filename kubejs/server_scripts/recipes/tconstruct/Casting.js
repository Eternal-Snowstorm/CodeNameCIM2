ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	let castingMechanismMaterials = [
		["tconstruct:molten_iron", "cmi:iron_mechanism_basement", 1535],
		//["tconstruct:molten_gold", "cmi:incomplete_gold_mechanism"],
		["tconstruct:molten_copper", "cmi:copper_mechanism_basement", 1085],
		//["cmi:molten_andesite_alloy", "cmi:incomplete_andesite_mechanism"]
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
		.fluid(Fluid.of("tconstruct:molten_iron", 10))
		.cast("#forge:dusts/andesite")
		.cooling_time(20)
		.cast_consumed(true)

	// 安山合金
	tconstruct.casting_table("create:andesite_alloy")
		.fluid(Fluid.of("tconstruct:molten_zinc", 10))
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

	let barTypes = [
		"brass",
		"copper",
		"industrial_iron",
		"zinc"
	]

	barTypes.forEach((type) => {
		tconstruct.casting_table(`createdeco:${type}_bars`)
			.fluid(Fluid.of(IngrUtils.getFirstFluidId(`tconstruct:molten_${type}`), 30))
			.cooling_time(35)
	})
})
