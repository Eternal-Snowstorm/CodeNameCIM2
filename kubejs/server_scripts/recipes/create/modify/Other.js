ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

	// 空烈焰人燃烧室
	kubejs.shaped("create:empty_blaze_burner", [
		"ABA",
		"A A",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "cmi:iron_mechanism",
		C: "#forge:netherrack"
	}).id("create:crafting/kinetics/empty_blaze_burner")

	// 烈焰人燃烧室
	kubejs.shaped("create:blaze_burner", [
		"ABA",
		"ADA",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "cmi:iron_mechanism",
		C: "#forge:netherrack",
		D: "tconstruct:blaze_head"
	}).id("create:crafting/kinetics/blaze_burner")

	// 烈焰蛋糕
	create.filling("create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("minecraft:lava", 500)
	]).id("create:filling/blaze_cake")

	create.filling("2x create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("tconstruct:blazing_blood", 500)
	])

	// 烈焰蛋糕胚
	create.compacting("create:blaze_cake_base", [
		Fluid.of("minecraft:milk", 250),
		"create:cinder_flour",
		"minecraft:sugar"
	]).id("create:compacting/blaze_cake")

	// 激光发射器
	create.mechanical_crafting("vintageimprovements:laser_item", [
		" A ",
		"BCB",
		"BDB",
		" E "
	], {
		A: "#forge:dusts/redstone",
		B: "#forge:plates/copper",
		C: "create:electron_tube",
		D: "createaddition:capacitor",
		E: "#forge:gems/charged_amethyst"
	}).id("vintageimprovements:mechanical_crafting/laser")
})