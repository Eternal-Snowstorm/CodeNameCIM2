Ponder.registry((event) => {
	let havePonderSceneBlock = event.create([
		"thermal:machine_furnace",
		"thermal:machine_sawmill",
		"thermal:machine_pulverizer",
		"thermal:machine_smelter",
		"thermal:machine_insolator",
		"thermal:machine_centrifuge",
		"thermal:machine_press",
		"thermal:machine_crucible",
		"thermal:machine_chiller",
		"thermal:machine_refinery",
		"thermal:machine_pyrolyzer",
		"thermal:machine_bottler",
		"thermal:machine_brewer",
		"thermal:machine_crystallizer",
		"thermal:machine_crafter",
		"thermal_extra:advanced_refinery",
		"thermal_extra:nitratic_igniter",
		"thermal_extra:fluid_mixer",
		"thermal_extra:component_assembly",
		"thermal_extra:endothermic_dehydrator"
	])
	havePonderSceneBlock.scene("ue_addons:thermal_gui", "Machine UI", "ue_addons:thermal/thermal_gui", (scene) => {
		scene.showBasePlate()
		scene.idle(20)
		scene.scaleSceneView(0.6)

		scene.world.setBlocks([7, 1, 7], "thermal:machine_furnace")
		scene.world.showSection([7, 1, 7], Direction.DOWN)
		// 这是一个普通的热力机器
		scene.text(40, "This is an ordinary thermal machine", [7.5, 1.5, 7])

		scene.idle(50)
		scene.addKeyframe()
		// 当我们右键它, 会弹出一个界面
		scene.text(30, "When we R-Click it, an interface ui up", [7.5, 1.5, 7])
		scene.rotateCameraY(0)
		scene.idle(50)
		scene.showControls(30, [7, 1, 7], "left")
			.rightClick()

		scene.world.setBlocks([13, 1, 13, 7, 4, 13], "ue_addons:ponder_thermal_gui")
		scene.world.showSection([13, 1, 13, 7, 4, 13], Direction.DOWN)
		scene.world.setBlocks([12, 1, 13], "ue_addons:ponder_thermal_slot_energy")
		scene.world.setBlocks([10, 2, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([8, 2, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([10, 1, 13], "ue_addons:ponder_thermal_fire")

		scene.world.setBlocks([12, 2, 13], "ue_addons:ponder_thermal_energy")
		scene.world.setBlocks([12, 3, 13], "ue_addons:ponder_thermal_energy")

		scene.world.setBlocks([9, 2, 13], "ue_addons:ponder_thermal_arrow")

		scene.world.setBlocks([6, 4, 13], "ue_addons:ponder_thermal_gui_green_icon")
		scene.world.setBlocks([6, 3, 13], "ue_addons:ponder_thermal_gui_red_icon")
		scene.world.setBlocks([6, 2, 13], "ue_addons:ponder_thermal_gui_blue_icon")
		scene.world.showSection([6, 1, 13, 6, 4, 13], Direction.EAST)

		scene.world.setBlocks([14, 4, 13], "ue_addons:ponder_thermal_gui_gray_icon")
		scene.world.setBlocks([14, 3, 13], "ue_addons:ponder_thermal_gui_lightblue_icon")
		scene.world.showSection([14, 1, 13, 13, 4, 13], Direction.WEST)


		scene.addKeyframe()

		scene.idle(40)
		scene.overlay.showOutline("red", {}, [12, 2, 13, 12, 3, 13], 30)
		// 此处为能量槽, 用于储存红石通量RF(电能)
		scene.text(30, "Here is an energy tank for storing redstone flux RF (electrical energy)", [12, 2.5, 13])
		scene.idle(40)
		scene.overlay.showOutline("red", {}, [12, 1, 13], 30)
		// 在此处放入电池也可以供电
		scene.text(30, "Put the battery in here can also supply power", [12, 1, 13])
		scene.idle(40)
		scene.overlay.showOutline("black", {}, [14, 4, 13], 30)
		// 在此处查看机器简介
		scene.text(30, "View machine introduction here", [14, 4, 13])
		scene.idle(40)
		scene.overlay.showOutline("blue", {}, [14, 3, 13], 30)
		// 在此处查看机器功率
		scene.text(30, "View machine power here", [14, 3, 13])
		scene.idle(40)
		scene.overlay.showOutline("green", {}, [6, 4, 13], 30)
		// 在此处安装升级
		scene.text(30, "Install upgrade here", [6, 4, 13])
		scene.addKeyframe()

		scene.idle(40)
		scene.overlay.showOutline("blue", {}, [10, 2, 13], 30)
		// 在此处放入物品
		scene.text(30, "Put items here", [10, 2, 13])
		scene.idle(40)
		scene.world.setBlocks([10, 2, 13], "ue_addons:ponder_thermal_sand")
		scene.world.setBlocks([10, 1, 13], "ue_addons:ponder_thermal_fire_active")
		scene.idle(40)

		scene.overlay.showOutline("white", {}, [9, 2, 13], 30)
		// 当进度条完成时, 输入的物品将被消耗, 然后输出
		scene.text(30, "When the progress bar is completed, the input items will be consumed and then output", [9, 2, 13])
		scene.idle(40)
		scene.world.setBlocks([9, 2, 13], "ue_addons:ponder_thermal_arrow_active")

		scene.idle(40)
		scene.overlay.showOutline("blue", {}, [8, 2, 13], 30)
		scene.world.setBlocks([8, 2, 13], "ue_addons:ponder_thermal_glass")
		scene.world.setBlocks([10, 2, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([10, 1, 13], "ue_addons:ponder_thermal_fire")
		scene.world.setBlocks([12, 3, 13], "ue_addons:ponder_thermal_energy_empty")
		scene.world.setBlocks([9, 2, 13], "ue_addons:ponder_thermal_arrow")
		scene.addKeyframe()


		scene.idle(40)
		scene.overlay.showOutline("green", {}, [9, 2, 13], 40)
		// 点击此处可以查看所有配方
		scene.text(40, "Click here to view all recipes", [9, 2, 13])
		scene.idle(50)
	})

	havePonderSceneBlock.scene("ue_addons:thermal_gui2", "Machine Automation", "ue_addons:thermal/thermal_gui2", (scene) => {
		scene.showBasePlate()
		scene.idle(20)
		scene.scaleSceneView(0.5)

		scene.world.setBlocks([7, 1, 7], "thermal:machine_furnace")
		scene.world.showSection([7, 1, 7], Direction.DOWN)
		// 这是一个只含物品槽的热力机器
		scene.text(40, "This is a thermal machine with a trough of items only.", [7.5, 1.5, 7])

		scene.idle(40)
		scene.world.setBlocks([13, 4, 13, 7, 7, 13], "ue_addons:ponder_thermal_gui")
		scene.world.showSection([13, 4, 13, 7, 7, 13], Direction.DOWN)
		scene.world.setBlocks([12, 4, 13], "ue_addons:ponder_thermal_slot_energy")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([10, 4, 13], "ue_addons:ponder_thermal_fire")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot")

		scene.world.setBlocks([12, 5, 13], "ue_addons:ponder_thermal_energy_empty")
		scene.world.setBlocks([12, 6, 13], "ue_addons:ponder_thermal_energy_empty")

		scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow")

		scene.world.setBlocks([6, 7, 13], "ue_addons:ponder_thermal_gui_green_icon")
		scene.world.setBlocks([6, 6, 13], "ue_addons:ponder_thermal_gui_red_icon")
		scene.world.setBlocks([6, 5, 13], "ue_addons:ponder_thermal_gui_blue_icon")
		scene.world.showSection([6, 4, 13, 6, 7, 13], Direction.EAST)

		scene.world.setBlocks([14, 7, 13], "ue_addons:ponder_thermal_gui_gray_icon")
		scene.world.setBlocks([14, 6, 13], "ue_addons:ponder_thermal_gui_lightblue_icon")
		scene.world.showSection([14, 1, 13, 13, 4, 13], Direction.WEST)
		scene.addKeyframe()
		scene.idle(40)

		scene.overlay.showOutline("blue", {}, [6, 5, 13], 30)
		// 点击此处打开配置页面
		scene.text(30, "Click here to open the configuration page", [6, 5, 13])
		scene.showControls(30, [6, 5, 13], "right")
			.leftClick()
		scene.addKeyframe()
		scene.idle(40)
		scene.world.hideSection([6, 5, 13], Direction.WEST)
		scene.idle(20)
		scene.world.setBlocks([6, 5, 13, 1, 2, 13], "ue_addons:ponder_thermal_gui_blue")
		scene.world.showSection([6, 5, 13, 1, 2, 13], Direction.UP)
		scene.world.setBlocks([6, 5, 13], "ue_addons:ponder_thermal_gui_blue_icon")
		scene.world.setBlocks([6, 4, 13], "ue_addons:ponder_thermal_input")
		scene.world.setBlocks([6, 3, 13], "ue_addons:ponder_thermal_output")
		scene.world.setBlocks([3, 4, 13], "ue_addons:ponder_thermal_machine_top")
		scene.world.setBlocks([3, 2, 13], "ue_addons:ponder_thermal_machine_bottom")
		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side")
		scene.world.setBlocks([2, 3, 13], "ue_addons:ponder_thermal_machine_side")
		scene.world.setBlocks([2, 2, 13], "ue_addons:ponder_thermal_machine_side")
		scene.world.setBlocks([3, 3, 13], "ue_addons:ponder_thermal_machine_front")

		scene.addKeyframe()

		scene.idle(50)
		// 可从任意面为机器供能
		scene.text(40, "Power the machine from any side")
		scene.world.showSection([8, 1, 7], Direction.UP)
		scene.world.showSection([8, 2, 7], Direction.UP)
		scene.world.showSection([7, 2, 7], Direction.UP)
		scene.world.showSection([6, 2, 7], Direction.UP)
		scene.world.showSection([6, 1, 7], Direction.UP)
		scene.idle(40)
		scene.world.setBlocks([12, 5, 13], "ue_addons:ponder_thermal_energy")
		scene.idle(20)
		scene.world.setBlocks([12, 6, 13], "ue_addons:ponder_thermal_energy")
		scene.idle(20)
		scene.world.hideSection([8, 1, 7], Direction.UP)
		scene.world.hideSection([8, 2, 7], Direction.UP)
		scene.world.hideSection([7, 2, 7], Direction.UP)
		scene.world.hideSection([6, 2, 7], Direction.UP)
		scene.world.hideSection([6, 1, 7], Direction.UP)
		scene.idle(40)
		scene.addKeyframe()

		scene.overlay.showOutline("blue", {}, [6, 4, 13, 6, 3, 13], 40)
		// 在此处开启自动输入输出
		scene.text(40, "Turn on automatic input and output here.", [6, 3.5, 13])
		scene.idle(40)
		scene.world.setBlocks([6, 4, 13], "ue_addons:ponder_thermal_input_on")
		scene.world.setBlocks([6, 3, 13], "ue_addons:ponder_thermal_output_on")


		scene.idle(40)
		// 并设置每个面的输入输出
		scene.text(40, "and set the input and output of each face")
		scene.idle(50)

		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_blue")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
		// 通常情况下, 蓝色代表输入
		scene.text(40, "Normally, blue represents input", [4, 3, 13])
		scene.idle(50)

		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_orange")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
		// 橙色则代表输出
		scene.text(40, "Orange represents output", [4, 3, 13])
		scene.idle(50)

		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_mix")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
		// 混合代表既可以输入又可以输出
		scene.text(40, "The hybrid represents both input and output", [4, 3, 13])
		scene.idle(50)

		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_disabled")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot")
		// 黑色代表禁用
		scene.text(40, "Black represents disabled", [4, 3, 13])
		scene.idle(50)

		// 值得一提的是, 这一设定在绝大部分模组中都适用
		scene.text(60, "It is worth mentioning that this setting is applicable in most Mods")

		scene.idle(70)
		scene.addKeyframe()
		scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_blue")
		scene.world.setBlocks([2, 3, 13], "ue_addons:ponder_thermal_machine_side_orange")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
		scene.world.setBlocks([8, 1, 7], "minecraft:chest")
		scene.world.setBlocks([6, 1, 7], "create:depot")
		scene.world.showSection([8, 1, 7], Direction.DOWN)
		scene.world.showSection([6, 1, 7], Direction.DOWN)

		scene.idle(40)
		// 在箱子中放入物品
		scene.text(40, "Put items in the chest", [8, 1, 7])
		scene.idle(60)

		// 机器会自动抽取物品
		scene.text(40, "The machine will automatically extract items", [10, 5, 13])
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_sand")
		scene.world.setBlocks([10, 4, 13], "ue_addons:ponder_thermal_fire_active")

		scene.idle(40)
		scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow_active")
		scene.idle(40)
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_glass")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
		scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow")
		scene.world.setBlocks([12, 6, 13], "ue_addons:ponder_thermal_energy_empty")
		scene.idle(40)

		// 完成后会自动输出
		scene.text(40, "Automatically output after completion", [8, 5, 13])
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
		scene.world.setBlocks([10, 4, 13], "ue_addons:ponder_thermal_fire")
		scene.world.createItemOnBeltLike([6, 1, 7], Direction.EAST, "minecraft:glass")
		scene.idle(70)

		scene.addKeyframe()
		// 流体同理
		scene.text(40, "Fluid is the same")
		scene.world.setBlocks([8, 1, 7], "create:fluid_tank")
		scene.world.setBlocks([6, 1, 7], "create:fluid_tank")
		scene.world.setBlocks([10, 4, 13], "ue_addons:ponder_thermal_gui")
		scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_lava")
		scene.world.setBlocks([10, 6, 13], "ue_addons:ponder_thermal_fluid")
		scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_water")
		scene.world.setBlocks([8, 6, 13], "ue_addons:ponder_thermal_fluid")

		scene.addKeyframe()
		scene.idle(50)

		// 按Shift点击正面可以重置设置
		scene.text(40, "Press Shift to click on the front to reset the settings")
		scene.idle(50)

		// 热力机器的正面不可以进行交互
		scene.text(40, "The front face of the thermal machine cannot interact")
		scene.idle(50)

		// 使用红图复制配置, 为你的机械大展宏图
		scene.text(40, "Use the redprint to copy the configuration to expand the grand plan for your machinery.")
		scene.idle(50)
	})
})