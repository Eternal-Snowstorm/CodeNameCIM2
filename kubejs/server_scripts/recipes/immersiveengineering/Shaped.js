ServerEvents.recipes((event) => {
	let { kubejs, create} = event.recipes

	// 工程师锤
	kubejs.shaped(Item.of("immersiveengineering:hammer", "{Damage:75}"), [
		" AB",
		" CA",
		"C  "
	], {
		A: "minecraft:flint",
		B: "#forge:string",
		C: "#forge:rods/wooden"
	})

	// 蓝图桌
	kubejs.shaped("engineered_schematics:schematic_table_block", [
		"AAA",
		"BCD"
	], {
		A: "#forge:treated_wood_slab",
		B: "#cmi:tables",
		C: "#forge:chests",
		D: "#forge:rods/cast_iron"
	}).id("engineered_schematics:crafting/schematic_table")

	// 炼油
	kubejs.shaped("createdieselgenerators:pumpjack_head",[
		"A A",
		"BCB",
		"A A"
	],{
		A:"#forge:plates/steel",
		B:"cmi:light_engineering_mechanism",
		C:"minecraft:dried_kelp"
	}).id("createdieselgenerators:crafting/pumpjack_head")

	kubejs.shaped("createdieselgenerators:pumpjack_bearing",[
		"A",
		"B",
		"C"
	],{
		A:"create:turntable",
		B:"#forge:storage_blocks/steel",
		C:"cmi:light_engineering_mechanism"
	}).id("createdieselgenerators:crafting/pumpjack_bearing")

	create.mechanical_crafting("createdieselgenerators:pumpjack_crank",[
		"A A",
		"B B",
		"AMA",
		"BCB",
		"AMA"
	],{
		A:"#forge:plates/steel",
		C:"#forge:storage_blocks/steel",
		M:"cmi:light_engineering_mechanism",
		B:"create:shaft"
	}).id("createdieselgenerators:mechanical_crafting/pumpjack_crank")
})