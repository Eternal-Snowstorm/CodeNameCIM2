Ponder.registry((event) => {
	event.create([
		"ae2:pattern_provider",
		"ae2:pattern_access_terminal",
		"ae2:pattern_encoding_terminal",
		"ae2:blank_pattern"
	]).scene("cmi:ae2_gui", "样板配置", "cmi:ae2/ae2_gui1", (scene) => {
		scene.showStructure(0)
		scene.idle(20)
		scene.scaleSceneView(0.5)
		scene.world.showSection([10, 2, 6, 5, 1, 6], Direction.UP)
		scene.idle(20)
		scene.world.setBlocks([4, 4, 10], "cmi:patten_slot", false)
		scene.world.setBlocks([10, 4, 8], "cmi:pickaxe", false)
		scene.world.setBlocks([10, 2, 8], "cmi:cooked", false)
		scene.addKeyframe()
		scene.overlay.showOutline("blue", {}, [8, 2, 6], 40)
		scene.text(40, "这是一个样板编码终端", [8, 2.5, 6])
		scene.idle(60)

		scene.text(40, "右键打开界面", [8, 2.5, 6])
		scene.idle(60)
		scene.world.showSection([14, 1, 10, 0, 7, 10], Direction.UP)
		scene.idle(60)

		scene.addKeyframe()

		scene.text(40, "在此处放入空白样板", [4, 4.5, 10])
		scene.overlay.showOutline("blue", {}, [4, 4, 10], 40)
		scene.world.setBlocks([4, 4, 10], "cmi:patten_blank")
		scene.idle(60)
		scene.addKeyframe()


		scene.text(40, "假如你要自动化合成钻石镐")
		scene.idle(60)

		scene.overlay.showOutline("blue", {}, [2, 4, 10], 40)
		scene.text(60, "选择此处“合成样板”", [2, 4.5, 10])
		scene.idle(80)

		scene.text(60, "摆出物品的合成", [6, 3.5, 10])
		scene.world.setBlocks([11, 4, 10], "cmi:diamond")
		scene.idle(5)
		scene.world.setBlocks([10, 4, 10], "cmi:diamond")
		scene.idle(5)
		scene.world.setBlocks([9, 4, 10], "cmi:diamond")
		scene.idle(5)
		scene.world.setBlocks([10, 3, 10], "cmi:stick")
		scene.idle(5)
		scene.world.setBlocks([10, 2, 10], "cmi:stick")
		scene.idle(10)
		scene.world.setBlocks([6, 3, 10], "cmi:pickaxe")
		scene.idle(40)

		scene.addKeyframe()

		scene.text(40, "点击编写", [4, 3.5, 10])
		scene.overlay.showOutline("blue", {}, [4, 3, 10], 40)
		scene.idle(30)
		scene.world.setBlocks([4, 4, 10], "cmi:patten_slot")
		scene.world.setBlocks([4, 2, 10], "cmi:pickaxe")

		scene.addKeyframe()
		scene.idle(30)
		scene.showControls(40, [4, 2, 10], "LEFT")
			.withItem("ae2:crafting_pattern")


		scene.idle(60)
		scene.text(60, "我们将其取走，放入紧贴“分子装配室”的“ME样板供应器”", [6, 1.5, 6])

		scene.world.setBlocks([4, 2, 10], "cmi:slot2")
		scene.idle(10)
		scene.overlay.showOutline("blue", {}, [6, 1, 6], 40)

		scene.world.setBlocks([12, 6, 10], "cmi:pickaxe")
		scene.idle(40)

		scene.overlay.showOutline("blue", {}, [12, 6, 10], 40)
		scene.text(40, "然后我们可以找到钻石镐的图标", [12, 6.5, 10])
		scene.idle(50)

		scene.text(100, "如果你的网络中没有钻石镐，则会在右下角显示“合成”，按“鼠标中键”或“鼠标左键”可以合成一些", [12, 6.5, 10])
		scene.idle(110)
		scene.text(100, "如果你的网络中已有钻石镐，则会在右下角显示数字，按“鼠标中键”可以再合成一些", [12, 6.5, 10])
		scene.idle(110)

		scene.addKeyframe()

		scene.world.showSection([6, 1, 5, 5, 1, 5], Direction.UP)
		scene.text(40, "若你的网络中有很多复杂的ME样板供应器")
		scene.idle(60)

		scene.overlay.showOutline("blue", {}, [9, 2, 6], 40)
		scene.world.showSection([14, 1, 8, 0, 7, 8], Direction.UP)
		scene.text(60, "你可以使用“ME样板管理终端”来管理网络中的所有样板", [9, 2.5, 6])
		scene.idle(60)




	})
	event.create(["ae2:pattern_provider",
		"ae2:pattern_access_terminal",
		"ae2:pattern_encoding_terminal",
		"ae2:blank_pattern"])
		.scene("cmi:ae2_gui2", "自动化配置案例——“燃料”类配方", "cmi:ae2/ae2_gui2", (scene) => {

		})
})