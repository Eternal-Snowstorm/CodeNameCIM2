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
            scene.showStructure(0)
            scene.idle(20)
            scene.scaleSceneView(0.5)
            scene.world.showSection([14, 1, 6, 0, 7, 6], Direction.UP)
            scene.world.showSection([14, 1, 10, 0, 7, 10], Direction.UP)
            scene.idle(20)
            scene.overlay.showOutline("blue", {}, [12, 4, 10, 4, 2, 10], 60)
            scene.text(40, "这是一个配置好的用于熔炉将生鸡肉制作熟鸡肉的样板")
            scene.addKeyframe()

            scene.idle(50)
            scene.overlay.showOutline("blue", {}, [11, 2, 6], 40)
            scene.text(40, "这是一个熔炉", [11, 2.5, 6])
            scene.idle(50)
            scene.text(40, "熔炉工作需要燃料", [11, 2.5, 6])
            scene.idle(50)
            scene.text(40, "且有着相对严格的输入输出分配", [11, 2.5, 6])
            scene.idle(50)
            scene.text(60, "即只能侧面输入燃料，顶部输入物品，底部输出物品", [11, 2.5, 6])
            scene.idle(70)
            scene.addKeyframe()

            scene.text(60, "我们可以将其拆解成两部分：", [11, 2.5, 6])
            scene.idle(70)

            scene.text(60, "提供原料和提供燃料", [11, 2.5, 6])
            scene.idle(70)

            scene.overlay.showOutline("output", {}, [11, 4, 6], 40)
            scene.text(60, "由样板供应器来提供原料（生鸡肉）", [11, 4, 6])
            scene.idle(70)
            scene.overlay.showOutline("input", {}, [10, 3, 6], 40)
            scene.text(60, "由ME接口来提供燃料（煤炭）", [10, 3, 6])
            scene.idle(70)
            scene.addKeyframe()

            scene.text(30, "打开ME接口", [10, 3, 6])
            scene.idle(40)

            scene.world.showSection([14, 1, 7, 0, 7, 7], Direction.UP)
            scene.idle(40)
            scene.overlay.showOutline("blue", {}, [9, 4, 7, 2, 5, 7], 40)
            scene.text(40, "正常的ME接口有2排9列物品栏", [2, 5, 7])
            scene.idle(50)
            scene.text(50, "但是“俺寻思”里面并不能放不下这么多，此处省略（）", [2, 5, 7])
            scene.idle(60)

            scene.addKeyframe()
            scene.world.setBlocks([9, 5, 7], "cmi:coal")
            scene.text(50, "在此处标记 1 个煤炭", [9, 5.5, 7])
            scene.idle(60)

            scene.text(60, "ME接口会自动从网络抽取物品，使其与设定的数量保持一致", [10, 3, 6])
            scene.idle(70)
            scene.text(50, "假如此时网络共有 8 组（64x8=512）个煤炭")
            scene.idle(60)

            scene.text(40, "ME接口将抽取 1 个煤炭", [10, 3, 6])
            scene.world.setBlocks([9, 4, 7], "cmi:coal")

            scene.idle(50)
            scene.text(60, "随后，漏斗会将煤炭抽取走，ME接口内煤炭耗尽", [10, 3, 6])
            scene.world.setBlocks([9, 4, 7], "cmi:slot1")
            scene.idle(70)
            scene.text(40, "ME接口将重新抽取 1 个煤炭", [10, 3, 6])
            scene.world.setBlocks([9, 4, 7], "cmi:coal")
            scene.idle(50)

            scene.text(60, "如此循环往复，直到熔炉、漏斗、ME接口中都被填满，ME接口将停止抽取新的物品", [10, 3, 6])
            scene.idle(70)

            scene.text(80, "最后，网络中剩余512-5x64-1x64-1=127个煤炭（填充熔炉一组，填充漏斗5组，填充ME接口1个）")
            scene.idle(90)

            scene.addKeyframe()

            scene.text(40, "此时，在终端中合成一个熟鸡肉")
            scene.idle(50)

            scene.text(60, "样板供应器向网络请求了一个生鸡肉", [11, 4.5, 6])
            scene.idle(70)

            scene.text(60, "生鸡肉通过漏斗来到熔炉", [11, 3.5, 6])
            scene.idle(70)

            scene.text(60, "熔炉开始工作并消耗 1 个煤炭", [11, 2.5, 6])
            scene.idle(70)
            scene.world.setBlocks([11, 2, 6], "minecraft:magma_block")
            scene.text(40, "没错我是燃烧的熔炉（", [11, 2.5, 6])
            scene.idle(40)

            scene.world.setBlocks([9, 4, 7], "cmi:slot1")
            scene.text(60, "煤炭被消耗，ME接口重新请求 1 个煤炭", [10, 3, 6])
            scene.idle(70)
            scene.world.setBlocks([9, 4, 7], "cmi:coal")
            scene.idle(20)
            scene.text(60, "此时网络剩余127-1=126个煤炭")
            scene.idle(70)

            scene.addKeyframe()
            scene.text(60, "当合成完成后", [11, 2.5, 6])
            scene.world.setBlocks([11, 2, 6], "minecraft:furnace")
            scene.idle(70)
            scene.text(60, "熟鸡肉通过漏斗回到下面的ME接口，回到网络，结束合成", [11, 1.5, 6])
            scene.idle(100)
            scene.addKeyframe()
            scene.text(100, "这种把“消耗品”与“原料”分开的思路仍可在其他地方使用，比如...")
            scene.idle(110)


            scene.world.setBlocks([14, 1, 2], "create:depot")
            scene.world.setBlocks([14, 3, 2], "create:spout")

            scene.world.setBlocks([12, 1, 2], "create:blaze_burner")

            scene.world.setBlocks([10, 1, 2], "mekanism:metallurgic_infuser")

            scene.world.setBlocks([8, 1, 2], "mekanism:purification_chamber")
            scene.world.setBlocks([7, 1, 2], "mekanism:chemical_injection_chamber")
            scene.world.setBlocks([6, 1, 2], "mekanism:pressurized_reaction_chamber")

            scene.world.setBlocks([4, 1, 2], "cmi:crucible_tuyere")
            scene.world.setBlocks([3, 1, 2], "cmi:crucible_tuyere")
            scene.world.setBlocks([2, 1, 2], "cmi:crucible_tuyere")


            scene.world.showSection([14, 1, 2, 14, 3, 2], Direction.DOWN)
            scene.text(40, "注液器（熔岩蛋糕自动化）",[14, 2.5, 2])
            scene.idle(50)
            
            scene.world.showSection([12, 1, 2], Direction.DOWN)
            scene.text(40, "烈焰人燃烧室（自动加热但是超级费燃料！）",[12, 1.5, 2])
            scene.idle(50)
            
            scene.world.showSection([10, 1, 2], Direction.DOWN)
            scene.text(40, "冶金灌注机（自动填充灌注类型）",[10, 1.5, 2])
            scene.idle(50)
            
            scene.world.showSection([8, 1, 2, 6, 1, 2], Direction.DOWN)
            scene.text(40, "化学机器（自动填充气体或液体）",[7, 1.5, 2])
            scene.idle(50)
            
            scene.world.showSection([4, 1, 2, 2, 1, 2], Direction.DOWN)
            scene.text(40, "等等...",[3, 1.5, 2])
            scene.idle(50)

            
            scene.text(40, "祝你自动化愉快！")
        })
})



