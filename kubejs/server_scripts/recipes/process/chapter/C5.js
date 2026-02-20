ServerEvents.recipes((event) => {
	let { create, thermal, thermal_extra, vintageimprovements } = event.recipes

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