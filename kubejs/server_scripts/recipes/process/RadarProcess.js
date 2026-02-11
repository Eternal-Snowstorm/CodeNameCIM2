ServerEvents.recipes((event) => {
    let { create, vintageimprovements } = event.recipes
    const INCOMPLETE_AVIATION_CELL = Item.of("cmi:incomplete_aviation_cell")

    // 空白硬盘
    create.sequenced_assembly("cmi:empty_cell", [
        "#forge:plates/aluminum"
    ], [
        create.deploying(INCOMPLETE_AVIATION_CELL, [
            INCOMPLETE_AVIATION_CELL,
            "cmi:coil_mechanism"
        ]),
        create.deploying(INCOMPLETE_AVIATION_CELL, [
            INCOMPLETE_AVIATION_CELL,
            "#forge:gears/manyullyn"
        ]),
        vintageimprovements.laser_cutting(INCOMPLETE_AVIATION_CELL, [
            INCOMPLETE_AVIATION_CELL
        ]).energy(4000).maxChargeRate(4000),
        vintageimprovements.curving(INCOMPLETE_AVIATION_CELL, [
            INCOMPLETE_AVIATION_CELL
        ]).itemAsHead("vintageimprovements:w_shaped_curving_head")
    ]).loops(1).transitionalItem(INCOMPLETE_AVIATION_CELL)
})