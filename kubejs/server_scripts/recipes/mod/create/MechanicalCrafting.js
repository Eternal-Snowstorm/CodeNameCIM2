ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	// 粉碎轮
	create.mechanical_crafting("4x create:crushing_wheel", [
		" AAA ",
		"AABAA",
		"ABCBA",
		"AABAA",
		" AAA "
	], {
		A: "create:andesite_alloy",
		B: "thermal:iron_gear",
		C: "cmi:andesite_mechanism"
	}).id("create:mechanical_crafting/crushing_wheel")

	// 交流发电机
	create.mechanical_crafting("createaddition:alternator", [
		" ABA ",
		"ACDCA",
		" AEA "
	], {
		A: "#forge:plates/industrial_iron",
		B: "create:shaft",
		C: "cmi:simple_battery",
		D: "cmi:coil_mechanism",
		E: "#forge:plates/electrum"
	}).id("createaddition:mechanical_crafting/alternator")

	// 电动马达
	create.mechanical_crafting("createaddition:electric_motor", [
		" ABA ",
		"ACDCA",
		" AEA "
	], {
		A: "#forge:plates/brass",
		B: "create:shaft",
		C: "cmi:simple_battery",
		D: "cmi:coil_mechanism",
		E: "#forge:plates/electrum"
	}).id("createaddition:mechanical_crafting/electric_motor")

	// 多方块搭建器
	create.mechanical_crafting("mbtool:mbtool", [
		" ABA ",
		"CDEFA",
		"   GH",
		"    H"
	], {
		A: "#forge:plates/brass",
		B: "create:electron_tube",
		C: "#forge:gems/charged_amethyst",
		D: "#forge:tools/wrench",
		E: "create:empty_schematic",
		F: "#create:mechanisms/precision",
		G: "immersiveengineering:gunpart_hammer",
		H: "createdieselgenerators:kelp_handle",
	}).id("mbtool:mbtool")

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

	// 隔热背罐
	event.custom({
		"type": "create_jetpack:copy_nbt_mechanical_crafting",
		"pattern": [
			"PDMDP",
			"PFBFP",
			" SPS "
		],
		"key": {
			"P": Ingredient.of("#forge:plates/steel").toJson(),
			"D": Ingredient.of("#forge:plates/dense_obsidian").toJson(),
			"M": Mechanism.NETHER.COM.toJson(),
			"F": Ingredient.of("#forge:fabric_hemp").toJson(),
			"B": Item.of("create:copper_backtank").toJson(),
			"S": Ingredient.of("#forge:plates/obsidian").toJson()
		},
		"result": Item.of("create:netherite_backtank").toJson()
	}).id("create:crafting/appliances/netherite_backtank")

	// 喷气背包
	event.custom({
		"type": "create_jetpack:copy_nbt_mechanical_crafting",
		"pattern": [
			" PSP ",
			"PMBMP",
			"PFGFP",
			" C C "
		],
		"key": {
			"P": Ingredient.of("#forge:plates/brass").toJson(),
			"S": Item.of("create:shaft").toJson(),
			"M": Mechanism.PRECISION.COM.toJson(),
			"B": Item.of("create:copper_backtank").toJson(),
			"F": Item.of("create:propeller").toJson(),
			"G": Item.of("immersiveengineering:glider").toJson(),
			"C": Item.of("create:chute").toJson()
		},
		"result": Item.of("create_jetpack:jetpack").toJson()
	}).id("create_jetpack:jetpack")

	// 隔热喷气背包
	event.custom({
		"type": "create_jetpack:copy_nbt_mechanical_crafting",
		"pattern": [
			" PSP ",
			"PMBMP",
			"PFGFP",
			" C C "
		],
		"key": {
			"P": Ingredient.of("#forge:plates/brass").toJson(),
			"S": Item.of("create:shaft").toJson(),
			"M": Mechanism.PRECISION.COM.toJson(),
			"B": Item.of("create:netherite_backtank").toJson(),
			"F": Item.of("create:propeller").toJson(),
			"G": Item.of("immersiveengineering:glider").toJson(),
			"C": Item.of("create:chute").toJson()
		},
		"result": Item.of("create_jetpack:netherite_jetpack").toJson()
	}).id("create_jetpack:netherite_jetpack")

	event.custom({
		"type": "create_jetpack:copy_nbt_mechanical_crafting",
		"pattern": [
			"PDMDP",
			"PFBFP",
			" SPS "
		],
		"key": {
			"P": Ingredient.of("#forge:plates/steel").toJson(),
			"D": Ingredient.of("#forge:plates/dense_obsidian").toJson(),
			"M": Mechanism.NETHER.COM.toJson(),
			"F": Ingredient.of("#forge:fabric_hemp").toJson(),
			"B": Item.of("create_jetpack:jetpack").toJson(),
			"S": Ingredient.of("#forge:plates/obsidian").toJson()
		},
		"result": Item.of("create_jetpack:netherite_jetpack").toJson()
	}).id("create_jetpack:netherite_jetpack_upgrade")
})