ItemEvents.rightClicked((event) => {
	let { item, player } = event

	item.getEnchantmentLevel()

	if (item === "cmi:tier_1_aviation_complete_cell") {
		player.swing()
		ItemUIFactory.INSTANCE.openUI(player, event.hand, "cmi:cell_1")
	}
})

let CellUI = {
	cell_1: function () {
		let group = new WidgetGroup()

		const UI_WIDTH = (416 / 2) + (416 / 8)
		const UI_HEIGHT = (512 / 2) + (512 / 8)

		let mainTexturePath = "cmi:textures/gui/cell/tier_1.png"
		let mainTexture = new ResourceTexture(
			mainTexturePath,
			0,
			0,
			1,
			1
		)

		group.setSize(UI_WIDTH, UI_HEIGHT)
		group.setBackground(mainTexture)

		return group
	}
}

LDLibUI.item("cmi:cell_1", (event) => {
	event.success(CellUI.cell_1())
})