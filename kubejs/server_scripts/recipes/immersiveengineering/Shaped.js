ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

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
})