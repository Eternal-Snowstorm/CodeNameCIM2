ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes
	let unbreakable = "{Unbreakable:1b}"

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
		create.deploying("#forge:storage_blocks/copper", [
			"#forge:storage_blocks/copper",
			"#forge:plates/copper"
		]),
		create.cutting("#forge:storage_blocks/copper", [
			"#forge:storage_blocks/copper"
		]),
		create.pressing("#forge:storage_blocks/copper", [
			"#forge:storage_blocks/copper"
		])
	]).loops(3).transitionalItem("deepdrilling:incomplete_copper_drill_head")
		.id("deepdrilling:sequenced_assembly/copper_drill_head")

	vintageimprovements.turning(Item.of("deepdrilling:copper_drill_head", unbreakable), [
		"cmi:broken_copper_drill_head"
	])

	// 黄铜钻头
	create.sequenced_assembly(Item.of("deepdrilling:brass_drill_head", unbreakable), [
		"#forge:storage_blocks/brass"
	], [
		create.deploying("#forge:storage_blocks/brass", [
			"#forge:storage_blocks/brass",
			"#forge:plates/brass"
		]),
		create.cutting("#forge:storage_blocks/brass", [
			"#forge:storage_blocks/brass"
		]),
		create.deploying("#forge:storage_blocks/obsidian", [
			"#forge:storage_blocks/brass",
			"#forge:plates/obsidian"
		]),
		create.cutting("#forge:storage_blocks/brass", [
			"#forge:storage_blocks/brass"
		]),
		create.pressing("#forge:storage_blocks/brass", [
			"#forge:storage_blocks/brass"
		])
	]).loops(5).transitionalItem("deepdrilling:incomplete_brass_drill_head")
		.id("deepdrilling:sequenced_assembly/brass_drill_head")

	vintageimprovements.turning(Item.of("deepdrilling:brass_drill_head", unbreakable), [
		"cmi:broken_brass_drill_head"
	])
})