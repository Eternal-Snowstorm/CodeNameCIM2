ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 青铜燃烧室
	kubejs.shaped("steampowered:bronze_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/bronze",
			"#forge:ingots/bronze"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "tconstruct:seared_bricks"
	})

	// 铸铁锅炉
	kubejs.shaped("steampowered:cast_iron_boiler", [
		"AAA",
		"ABA",
		"ABA"
	], {
		A: [
			"#forge:plates/cast_iron",
			"#forge:ingots/cast_iron"
		],
		B: "create:fluid_pipe"
	})

	// 铸铁燃烧室
	kubejs.shaped("steampowered:cast_iron_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/cast_iron",
			"#forge:ingots/cast_iron"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "tconstruct:scorched_bricks"
	})

	// 钢燃烧室
	kubejs.shaped("steampowered:steel_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/steel",
			"#forge:ingots/steel"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "immersiveengineering:blastbrick"
	})
})