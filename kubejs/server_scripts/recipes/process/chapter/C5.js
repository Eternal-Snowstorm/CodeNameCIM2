ServerEvents.recipes((event) => {
	let { create, thermal, thermal_extra } = event.recipes

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

	// 裂化汽油
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
		"energy": 120,
		"input0": Fluid.tag("tag", "forge:steam", 100).toJson(),
		"input1": Fluid.tag("tag", "forge:gasoline", 100).toJson(),
		"result": Fluid.of("cmi:cracked_gasoline", 200).toJson()
	})

	// 轻硅醚
	event.custom({
		"type": "immersiveengineering:mixer",
		"energy": 1600,
		"fluid": Fluid.tag("tag", "cmi:light_olefin", 50).toJson(),
		"inputs": [
			Ingredient.of("#forge:silicon").toJson()
		],
		"result": Fluid.of("cmi:light_silicone_ether", 200).toJson()
	})

	// 聚硅醚
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [],
		"input_fluids": [
			Fluid.tag("tag", "cmi:light_silicone_ether", 200).toJson()
		],
		"result_fluids": [
			Fluid.of("cmi:polysilicone_ether", 200).toJson()
		],
		"outputs": [],
		"time": 200
	})

	// 液态硅橡胶
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [],
		"input_fluids": [
			Fluid.tag("tag", "cmi:polysilicone_ether", 200).toJson(),
			Fluid.tag("tag", "cmi:vinegar_acid", 100).toJson()
		],
		"result_fluids": [
			Fluid.of("cmi:silicon_rubber", 400).toJson()
		],
		"outputs": [],
		"time": 200
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