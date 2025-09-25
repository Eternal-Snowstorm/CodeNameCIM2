ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const MECH = "cmi:enchanted_mechanism"
	//打印机
	kubejs.shaped("create_enchantment_industry:printer", [
		" C ",
		"BAB",
		" D "
	], {
		A: MECH,
		B: "minecraft:dried_kelp",
		C: "create:copper_casing",
		D: "minecraft:iron_block"
	}).id("create_enchantment_industry:crafting/printer")

	//附魔台
	kubejs.shaped("minecraft:enchanting_table", [
		" D ",
		"CBC",
		"BAB"
	], {
		A: MECH,
		B: "minecraft:obsidian",
		C: "minecraft:diamond",
		D: "minecraft:book"
	}).id("minecraft:enchanting_table")
})