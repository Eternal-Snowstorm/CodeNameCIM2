BlockEvents.rightClicked("cmi:qi_month", (event) => {
	/**
	 * 如果需要挥手动画记得加上一个挥手方法
	 * event.player.swing()
	 */
	BlockUIFactory.INSTANCE.openUI(event.player, event.block.pos, "cmi:qi_month")
})

/**
 * 
 * @param {Internal.Player} player 
 * @returns 
 */
function createUI(player) {
	let group = new WidgetGroup()

	group.setSize(100, 100)
	group.setBackground(ResourceBorderTexture.BORDERED_BACKGROUND)

	// 创建一个标签和按钮
	let label = new LabelWidget()

	label.setSelfPosition(20, 20)
	label.setText("Hello World!")

	let button = new ButtonWidget()

	button.setSelfPosition(20, 60)
	button.setSize(60, 20)

	// 准备按钮纹理
	let backgroundImage = ResourceBorderTexture.BUTTON_COMMON
	let hoverImage = backgroundImage.copy().setColor(ColorPattern.BLUE.color)
	// let textAbove = new TextTexture("Click Me!")
	let textAbove = new TextTexture(Component.translatable("aaa.aaa").getString())

	button.setButtonTexture(backgroundImage, textAbove)
	button.setClickedTexture(hoverImage, textAbove)

	// 妙妙小逻辑
	let counter = 0
	button.setOnPressCallback((click) => {
		counter++
		label.setText(`Clicked ${counter} times!`)
		player.tell(Component.translatable("aaa.bbb").getString())
	})

	group.addWidgets(label, button)
	return group
}

/**
 * extra: uiName
 */
LDLibUI.block("cmi:qi_month", (event) => {
	event.success(createUI(event.player))
})

ItemEvents.rightClicked((event) => {
	let { item, player } = event

	if (item === "create:empty_schematic") {
		player.swing()
		ItemUIFactory.INSTANCE.openUI(player, event.hand, "cmi:ore")
	}
})

function oreResourceUI() {
	let group = new WidgetGroup()
	const UI_WIDTH = 300
	const UI_HEIGHT = UI_WIDTH

	let mainTexturePath = "cmi:textures/images/ore_node_mining.png"
	let mainTexture = new ["ResourceTexture(java.lang.String)"](mainTexturePath)

	group.setSize(UI_WIDTH, UI_HEIGHT)
	group.setBackground(mainTexture)

	return group
}

LDLibUI.item("cmi:ore", (event) => {
	event.success(oreResourceUI())
})