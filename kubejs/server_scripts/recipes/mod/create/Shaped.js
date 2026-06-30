ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 铜线圈
	kubejs.shaped("moreburners:copper_coil", [
		"ABA",
		"ABA",
		"ABA"
	], {
		A: "#forge:wires/copper",
		B: "#forge:rods/copper"
	}).id("moreburners:copper_coil")

	// 电阻线圈
	kubejs.shaped("moreburners:nickel_coil", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:plates/nickel",
		B: "moreburners:copper_coil"
	}).id("moreburners:resistance_coil")

	// 红石发信器
	kubejs.shaped("4x create:transmitter", [
		" M ",
		"RRR",
		"WWW"
	], {
		M: Mechanism.REDSTONE.COM,
		R: "#forge:rods/copper",
		W: "#forge:wires/copper"
	}).id('create:crafting/materials/transmitter')

	// 冲压头
	kubejs.shaped("cmi:hammer_head", [
		"PPP",
		"III",
		"PPP"
	], {
		P: [
			"#forge:plates/iron",
			"#forge:plates/andesite_alloy"
		],
		I: [
			"#forge:ingots/iron",
			"#forge:ingots/andesite_alloy"
		]
	})

	// 吸管
	kubejs.shaped("3x createaddition:straw", [
		"A A",
		"B B",
		"A A"
	], {
		A: [
			"#forge:ingots/copper",
			"#forge:plates/copper",
			"#forge:rods/copper",

			"#forge:ingots/tin",
			"#forge:plates/tin",
			"#forge:rods/tin",

			"#forge:ingots/bronze",
			"#forge:plates/bronze",
			"#forge:rods/bronze",

			"#forge:ingots/iron",
			"#forge:plates/iron",
			"#forge:rods/iron",

			"#forge:ingots/brass",
			"#forge:plates/brass",
			"#forge:rods/brass"
		],
		B: [
			"minecraft:dried_kelp",
			"minecraft:sugar_cane",
			"minecraft:bamboo",
			"#forge:bones"
		]
	})

	kubejs.shaped("3x createaddition:straw", [
		"ABA",
		"   ",
		"ABA"
	], {
		A: [
			"#forge:ingots/copper",
			"#forge:plates/copper",
			"#forge:rods/copper",

			"#forge:ingots/tin",
			"#forge:plates/tin",
			"#forge:rods/tin",

			"#forge:ingots/bronze",
			"#forge:plates/bronze",
			"#forge:rods/bronze",

			"#forge:ingots/iron",
			"#forge:plates/iron",
			"#forge:rods/iron",

			"#forge:ingots/brass",
			"#forge:plates/brass",
			"#forge:rods/brass"
		],
		B: [
			"minecraft:dried_kelp",
			"minecraft:sugar_cane",
			"minecraft:bamboo",
			"#forge:bones"
		]
	})
})