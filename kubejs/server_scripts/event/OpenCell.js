let cellMap = [
	{
		item: "cmi:tier_1_aviation_complete_cell",
		uiId: "cmi:cell_1",
		texture: "cmi:textures/gui/cell/tier_1.png"
	},
	{
		item: "cmi:tier_2_aviation_complete_cell",
		uiId: "cmi:cell_2",
		texture: "cmi:textures/gui/cell/tier_2.png"
	},
	{
		item: "cmi:tier_3_aviation_complete_cell",
		uiId: "cmi:cell_3",
		texture: "cmi:textures/gui/cell/tier_3.png"
	},
	{
		item: "cmi:tier_4_aviation_complete_cell",
		uiId: "cmi:cell_4",
		texture: "cmi:textures/gui/cell/tier_4.png"
	}
]

// 右键打开 UI
ItemEvents.rightClicked((event) => {
	let { item, player } = event

	let cell = cellMap.find((c) => {
		c.item === item
	})
	if (cell) {
		player.swing()
		ItemUIFactory.INSTANCE.openUI(player, event.hand, cell.uiId)
	}
})

// UI 工厂函数
function createCellUI(texturePath) {
	let group = new WidgetGroup()
	const UI_WIDTH = (416 / 2) + (416 / 8)
	const UI_HEIGHT = (512 / 2) + (512 / 8)
	let mainTexture = new ResourceTexture(texturePath, 0, 0, 1, 1)
	group.setSize(UI_WIDTH, UI_HEIGHT)
	group.setBackground(mainTexture)
	return group
}

// 注册 UI
cellMap.forEach((cell) => {
	LDLibUI.item(cell.uiId, (event) => {
		event.success(createCellUI(cell.texture))
	})
})