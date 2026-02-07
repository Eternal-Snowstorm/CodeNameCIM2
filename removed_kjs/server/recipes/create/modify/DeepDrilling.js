ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes
	let unbreakable = "{Unbreakable:1b}"
	let Inc = {
		COPPER: "deepdrilling:incomplete_copper_drill_head",
		BRASS: "deepdrilling:incomplete_brass_drill_head"
	}

	// 安山钻头
	kubejs.shaped(Item.of("deepdrilling:andesite_drill_head", unbreakable), [
		" A ",
		"ABA",
		"CDC"
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "#forge:ingots/iron",
		C: "#forge:storage_blocks/industrial_iron",
		D: "#create:shaft"
	}).id("deepdrilling:andesite_drill_head")

	vintageimprovements.turning(Item.of("deepdrilling:andesite_drill_head", unbreakable), [
		"cmi:broken_andesite_drill_head"
	])

	// 铜制钻头
	create.sequenced_assembly(Item.of("deepdrilling:copper_drill_head", unbreakable), [
		"#forge:storage_blocks/copper"
	], [
		create.deploying(Inc.COPPER, [
			Inc.COPPER,
			"#forge:plates/copper"
		]),
		create.cutting(Inc.COPPER, [
			Inc.COPPER
		]),
		create.pressing(Inc.COPPER, [
			Inc.COPPER
		])
	]).loops(3).transitionalItem(Inc.COPPER)
		.id("deepdrilling:sequenced_assembly/copper_drill_head")

	vintageimprovements.turning(Item.of("deepdrilling:copper_drill_head", unbreakable), [
		"cmi:broken_copper_drill_head"
	])

	// 黄铜钻头
	create.sequenced_assembly(Item.of("deepdrilling:brass_drill_head", unbreakable), [
		"#forge:storage_blocks/brass"
	], [
		create.deploying(Inc.BRASS, [
			Inc.BRASS,
			"#forge:plates/brass"
		]),
		create.cutting(Inc.BRASS, [
			Inc.BRASS
		]),
		create.deploying(Inc.BRASS, [
			Inc.BRASS,
			"#forge:plates/obsidian"
		]),
		create.cutting(Inc.BRASS, [
			Inc.BRASS
		]),
		create.pressing(Inc.BRASS, [
			Inc.BRASS
		])
	]).loops(5).transitionalItem(Inc.BRASS)
		.id("deepdrilling:sequenced_assembly/brass_drill_head")

	vintageimprovements.turning(Item.of("deepdrilling:brass_drill_head", unbreakable), [
		"cmi:broken_brass_drill_head"
	])
})