ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes
	const INCOMPLETE_AVIATION_CELL = Item.of("cmi:incomplete_aviation_cell")

	// 空白硬盘
	create.sequenced_assembly("cmi:empty_cell", [
		"#forge:plates/aluminum"
	], [
		create.deploying("#forge:plates/aluminum", [
			"#forge:plates/aluminum",
			"cmi:coil_mechanism"
		]),
		create.deploying("#forge:plates/aluminum", [
			"#forge:plates/aluminum",
			"#forge:gears/manyullyn"
		]),
		vintageimprovements.laser_cutting("#forge:plates/aluminum", [
			"#forge:plates/aluminum"
		]).energy(4000).maxChargeRate(4000),
		vintageimprovements.curving("#forge:plates/aluminum", [
			"#forge:plates/aluminum"
		]).itemAsHead("vintageimprovements:w_shaped_curving_head")
	]).loops(1).transitionalItem(INCOMPLETE_AVIATION_CELL)
})