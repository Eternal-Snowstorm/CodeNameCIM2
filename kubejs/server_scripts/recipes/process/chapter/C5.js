ServerEvents.recipes((event) => {
	let { create, createdieselgenerators, thermal, thermal_extra, vintageimprovements, tconstruct } = event.recipes

	// 纯净石英
	thermal.crystallizer("cmi:pure_quartz_prism", [
		"#forge:dusts/pure_quartz",
		Fluid.of("cmi:crystal_catalyt", 200)
	]).energy(4000)

	// 二极管
	addComponRecipe("4x cmi:diode", [
		"#forge:wires/electrum",
		"#forge:plates/invar",
		"#forge:prisms/pure_quartz"
	])

	// 电子元件
	addComponRecipe("2x immersiveengineering:component_electronic", [
		"cmi:diode",
		"#forge:treated_wood_slab",
		"#forge:gems/quartz",
		"#forge:wires/electrum"
	]).id("immersiveengineering:blueprint/component_electronic")

	// 抽油机曲柄
	create.mechanical_crafting("2x createdieselgenerators:pumpjack_crank", [
		"ABA",
		" C ",
		"EDE",
		"FCF",
		"FFF"
	], {
		A: ["#forge:ingots/industrial_iron", "#forge:plates/industrial_iron"],
		B: "#forge:plates/invar",
		C: "#create:shaft",
		D: Mechanism.LIGHT.COM,
		E: "#forge:storage_blocks/industrial_iron",
		F: ["#forge:ingots/steel", "#forge:plates/steel"]
	}).id("createdieselgenerators:mechanical_crafting/pumpjack_crank")

	// 抽油机驴头
	create.mechanical_crafting("2x createdieselgenerators:pumpjack_head", [
		"A A",
		"BCB",
		"A A"
	], {
		A: ["#forge:ingots/steel", "#forge:plates/steel"],
		B: ["#forge:ingots/industrial_iron", "#forge:plates/industrial_iron"],
		C: "thermal:cured_rubber_block"
	}).id("createdieselgenerators:crafting/pumpjack_head")

	// 抽油机轴承
	create.mechanical_crafting("2x createdieselgenerators:pumpjack_bearing", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: ["#forge:ingots/industrial_iron", "#forge:plates/industrial_iron"],
		B: ["#forge:ingots/steel", "#forge:plates/steel"],
		C: Mechanism.LIGHT.COM,
		D: ["create:windmill_bearing", "create:mechanical_bearing", "create:clockwork_bearing"]
	}).id("createdieselgenerators:crafting/pumpjack_bearing")

	// 硅混合物
	create.mixing("cmi:silicon_mixure", [
		"#forge:dusts/coal_coke",
		"#forge:dusts/pure_quartz"
	]).superheated()

	// 硅
	create.mixing([
		"ae2:silicon",
		Item.of("ae2:silicon", 2).withChance(0.1),
		Item.of("create:scorchia").withChance(0.5)
	], [
		"cmi:silicon_mixure",
		Fluid.of("tconstruct:seared_stone", 250)
	]).superheated()

	create.mixing([
		"ae2:silicon",
		Item.of("ae2:silicon", 2).withChance(0.1),
		Item.of("create:scoria").withChance(0.5)
	], [
		"cmi:silicon_mixure",
		Fluid.of("tconstruct:scorched_stone", 250)
	]).superheated()

	// 硅板
	vintageimprovements.curving("ae2:printed_silicon", [
		"#forge:silicon"
	]).itemAsHead("cmi:plate_mold")

	// 沥青
	tconstruct.casting_table("thermal:bitumen")
		.fluid(Fluid.of("cmi:bitumen", 200))
		.cooling_time(20)
	tconstruct.casting_basin("thermal:bitumen_block")
		.fluid(Fluid.of("cmi:bitumen", 1800))
		.cooling_time(180)

	// 重油
	thermal.refinery([
		Fluid.of("createdieselgenerators:gasoline", 50),
		Fluid.of("thermal_extra:lubricant", 50)
	], [
		Fluid.of("thermal:heavy_oil", 100)
	]).id("thermal:machines/refinery/refinery_heavy_oil")

	thermal_extra.advanced_refinery([
		Fluid.of("createdieselgenerators:gasoline", 50),
		Fluid.of("thermal_extra:lubricant", 100)
	], [
		Fluid.of("thermal:heavy_oil", 100)
	]).id("thermal_extra:machine/advanced_refinery/heavy_oil")

	// 煤油
	thermal.refinery([
		Fluid.of("createdieselgenerators:gasoline", 50),
		Fluid.of("thermal_extra:naphtha", 50)
	], [
		Fluid.of("cmi:kerosene", 100)
	])

	thermal_extra.advanced_refinery([
		Fluid.of("createdieselgenerators:gasoline", 50),
		Fluid.of("thermal_extra:naphtha", 100)
	], [
		Fluid.of("cmi:kerosene", 100)
	])

	// 裂化汽油
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
		"energy": 120,
		"input0": {
			"amount": 100,
			"tag": "forge:steam"
		},
		"input1": {
			"amount": 100,
			"tag": "forge:gasoline"
		},
		"result": {
			"amount": 200,
			"fluid": "cmi:distilled_oil",
		}
	})

	// 石脑油 苯 轻烯烃
	createdieselgenerators.distillation([
		Fluid.of("thermal_extra:naphtha", 100),
		Fluid.of("cmi:benzene", 100),
		Fluid.of("cmi:light_olefin", 100),
	], [
		Fluid.of("cmi:distilled_oil", 500)
	]).heatRequirement(global.HeatLevel["heated"])

	// 苯 乙烯
	thermal.refinery([
		Fluid.of("cmi:benzene", 50),
		Fluid.of("mekanism:ethene", 50)
	], [
		Fluid.of("thermal_extra:naphtha", 100)
	]).id("thermal_extra:machine/refinery/naphtha")

	thermal_extra.advanced_refinery([
		Fluid.of("cmi:benzene", 50),
		Fluid.of("mekanism:ethene", 100)
	], [
		Fluid.of("thermal_extra:naphtha", 100)
	]).id("thermal_extra:machine/advanced_refinery/naphtha")

	// 苯酚
	createdieselgenerators.distillation([
		Fluid.of("cmi:phenol", 50),
		Fluid.of("cmi:light_olefin", 50)
	], [
		Fluid.of("immersiveengineering:creosote", 100)
	]).heatRequirement(global.HeatLevel["heated"])

	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/iron").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "cmi:benzene", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:ethene", 100).toJson(),
		"result": Fluid.of("cmi:phenol", 200).toJson()
	})

	// 酚醛树脂
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/copper").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "cmi:phenol", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:acetaldehyde", 100).toJson(),
		"result": Fluid.of("immersiveengineering:phenolic_resin", 200).toJson()
	})

	/**
	 * 
	 * @param {(Internal.OutputFluid_|OutputItem_)[]} output 
	 * @param {(Internal.InputFluid_|InputItem_)[]} inputs 
	 * @returns 
	 */
	function addComponRecipe(output, inputs) {
		return thermal_extra.component_assembly(output, inputs)
			.energy(4000)
	}
})