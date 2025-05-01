Ponder.registry((event) => {
	event.create("#thermal:machines")
		.scene("ue_addons:thermal_gui", "热力系列 机器界面", "ue_addons:thermal/thermal_gui", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.5)

			scene.world.setBlocks([7, 1, 7], "thermal:machine_furnace")
			scene.world.showSection([7, 1, 7], Direction.DOWN)
			scene.text(40, "这是一个普通的热力机器", [7.5, 1.5, 7])

			scene.idle(50)
			scene.addKeyframe()
			scene.text(30, "当我们右键它，会弹出一个界面", [7.5, 1.5, 7])
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
			scene.text(30, "此处为能量槽，用于储存红石通量RF（电能）", [12, 2.5, 13])
			scene.idle(40)
			scene.overlay.showOutline("red", {}, [12, 1, 13], 30)
			scene.text(30, "在此处放入电池也可以供电", [12, 1, 13])
			scene.idle(40)
			scene.overlay.showOutline("black", {}, [14, 4, 13], 30)
			scene.text(30, "在此处查看机器简介", [14, 4, 13])
			scene.idle(40)
			scene.overlay.showOutline("blue", {}, [14, 3, 13], 30)
			scene.text(30, "在此处查看机器功率", [14, 3, 13])
			scene.idle(40)
			scene.overlay.showOutline("green", {}, [6, 4, 13], 30)
			scene.text(30, "在此处安装升级", [6, 4, 13])
			scene.addKeyframe()

			scene.idle(40)
			scene.overlay.showOutline("blue", {}, [10, 2, 13], 30)
			scene.text(30, "在此处放入物品", [10, 2, 13])
			scene.idle(40)
			scene.world.setBlocks([10, 2, 13], "ue_addons:ponder_thermal_sand")
			scene.world.setBlocks([10, 1, 13], "ue_addons:ponder_thermal_fire_active")
			scene.idle(40)

			scene.overlay.showOutline("white", {}, [9, 2, 13], 30)
			scene.text(30, "当进度条完成时，输入的物品将被消耗，然后输出", [9, 2, 13])
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
			scene.text(40, "点击此处可以查看配方", [9, 2, 13])
			scene.idle(50)
		})





		
	event.create("#thermal:machines")
		.scene("ue_addons:thermal_gui2", "热力系列 机器自动化", "ue_addons:thermal/thermal_gui2", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.5)

			scene.world.setBlocks([7, 1, 7], "thermal:machine_furnace")
			scene.world.showSection([7, 1, 7], Direction.DOWN)
			scene.text(40, "这是一个只含物品槽的热力机器", [7.5, 1.5, 7])

			scene.idle(40)
			scene.world.setBlocks([13, 4, 13, 7, 7, 13], "ue_addons:ponder_thermal_gui")
			scene.world.showSection([13, 4, 13, 7, 7, 13], Direction.DOWN)
			scene.world.setBlocks([12, 4, 13], "ue_addons:ponder_thermal_slot_energy")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot")

			scene.world.setBlocks([12, 5, 13], "ue_addons:ponder_thermal_energy_empty")
			scene.world.setBlocks([12, 6, 13], "ue_addons:ponder_thermal_energy_empty")

			scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow")

			scene.world.setBlocks([6, 7, 13], "ue_addons:ponder_thermal_gui_green_icon")
			scene.world.setBlocks([6, 6, 13], "ue_addons:ponder_thermal_gui_red_icon")
			scene.world.setBlocks([6, 5, 13], "ue_addons:ponder_thermal_gui_blue_icon")
			scene.world.showSection([6, 4, 13, 6, 7, 13], Direction.EAST)
			scene.addKeyframe()
			scene.idle(40)

			scene.overlay.showOutline("blue", {}, [6, 5, 13], 30)
			scene.text(30, "点击此处打开配置页面", [6, 5, 13])
			scene.showControls(30, [6, 5, 13], "right")
				.leftClick()
			scene.addKeyframe()
			scene.idle(40)
			scene.world.hideSection([6, 5, 13], Direction.WEST)
			scene.idle(20)
			scene.world.setBlocks([6, 5, 13, 1, 2, 13], "ue_addons:ponder_thermal_gui_blue")
			scene.world.showSection([6, 5, 13, 1, 2, 13], Direction.UP)
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
			scene.text(40, "可从任意面为机器供能")
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
			
			scene.overlay.showOutline("blue", {}, [6, 4, 13,6,3,13], 40)
			scene.text(40, "在此处开启自动输入输出", [6, 3.5, 13])
			scene.idle(40)
			scene.world.setBlocks([6, 4, 13], "ue_addons:ponder_thermal_input_on")
			scene.world.setBlocks([6, 3, 13], "ue_addons:ponder_thermal_output_on")

			
			scene.idle(40)
			scene.text(40, "并设置每个面的输入输出")
			scene.idle(50)

			scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_blue")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
			scene.text(40, "通常情况下，蓝色代表输入", [4, 3, 13])
			scene.idle(50)

			scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_orange")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
			scene.text(40, "橙色代表输出", [4, 3, 13])
			scene.idle(50)

			scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_mix")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
			scene.text(40, "混合代表既可以输入又可以输出", [4, 3, 13])
			scene.idle(50)

			scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_disabled")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot")
			scene.text(40, "黑色代表禁用", [4, 3, 13])
			scene.idle(50)

			scene.text(60, "值得一提的是，这一设定在绝大部分模组中都适用")

			scene.idle(70)
			scene.addKeyframe()
			scene.world.setBlocks([4, 3, 13], "ue_addons:ponder_thermal_machine_side_blue")
			scene.world.setBlocks([2, 3, 13], "ue_addons:ponder_thermal_machine_side_orange")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
			scene.world.setBlocks([8,1,7], "minecraft:chest")
			scene.world.setBlocks([6,1,7], "create:depot")
			scene.world.showSection([8, 1, 7], Direction.DOWN)
			scene.world.showSection([6, 1, 7], Direction.DOWN)

			scene.idle(40)
			scene.text(40, "在箱子中放入物品", [8,1,7])
			scene.idle(60)

			scene.text(40, "机器会自动抽取物品", [10,5,13])
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_sand")
			
			scene.idle(40)
			scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow_active")
			scene.idle(40)
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_glass")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_slot_blue")
			scene.world.setBlocks([9, 5, 13], "ue_addons:ponder_thermal_arrow")
			scene.world.setBlocks([12, 6, 13], "ue_addons:ponder_thermal_energy_empty")
			scene.idle(40)

			scene.text(40, "完成后会自动输出", [8,5,13])
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_slot_orange")
			scene.world.createItemOnBeltLike([6,1,7], Direction.EAST ,"minecraft:glass")
			scene.idle(70)

			scene.addKeyframe()
			scene.text(40, "流体同理")
			scene.world.setBlocks([8,1,7], "create:fluid_tank")
			scene.world.setBlocks([6,1,7], "create:fluid_tank")
			scene.world.setBlocks([10, 5, 13], "ue_addons:ponder_thermal_lava")
			scene.world.setBlocks([10, 6, 13], "ue_addons:ponder_thermal_fluid")
			scene.world.setBlocks([8, 5, 13], "ue_addons:ponder_thermal_water")
			scene.world.setBlocks([8, 6, 13], "ue_addons:ponder_thermal_fluid")

			scene.addKeyframe()
			scene.idle(50)

			scene.text(40, "按Shift点击正面可以重置设置")
			scene.idle(50)

			scene.text(40, "热力机器的正面不可以进行交互")
			scene.idle(50)

			scene.text(40, "使用红图复制配置，为你的机械大展宏图")
			scene.idle(50)




		})
})