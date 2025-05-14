Ponder.registry((event) => {

	// 简单的合成自动化
	event.create([
		"ae2:pattern_provider",
		"ae2:crafting_unit"
	]).scene("ae2:simple_crafting_automation", "Simple Crafting Automation", "ue_addons:ae2/simple_crafting_automation", (scene) => {
		scene.showBasePlate()
		scene.idle(20)

		// 这是一个合成存储器
		scene.world.showSection([1, 1, 2], Direction.DOWN)
		scene.idle(20)
		scene.text(40, "This is a Crafting Storage", [1.5, 1.5, 2.5])
		scene.idle(60)

		// 而这是一个样板供应器
		scene.world.showSection([2, 1, 2], Direction.DOWN)
		scene.idle(20)
		scene.text(40, "While this is a Pattern Provider", [2.5, 1.5, 2.5])
		scene.idle(60)
		scene.addKeyframe()

		// 将它们接入一个ME网络，并提供一个分子装配室
		scene.text(40, "Connect them into a ME network with a Molecular Assembler", [2, 1.5, 2.5])
		scene.world.showSection([3, 1, 2, 4, 1, 2], Direction.DOWN)
		scene.world.showSection([2, 1, 1], Direction.DOWN)
		scene.idle(60)

		// 这就是一个最简单的合成自动化网络
		scene.text(60, "And this is a most simple Crafting Automation Network", [3, 1.5, 2.5])
		scene.idle(80)
		scene.addKeyframe()

		// 使用样板编码终端编写合成配方样板，例如两个安山合金制作八个传动杆
		scene.text(60, "Create a Pattern with a Pattern Encoding Terminal, for example, 2 Andesite Alloy => 8 Shaft", [3.5, 2.5, 2.5])
		scene.world.showSection([3, 2, 2], Direction.DOWN)
		scene.idle(20)
		scene.showControls(20, [3.5, 3, 2.5], "down")
			.withItem("ae2:blank_pattern")
		scene.idle(60)

		// 然后放入样板供应器
		scene.text(60, "And plug it into the Pattern Provider", [2.5, 1.5, 2.5])
		scene.showControls(40, [2.5, 2, 2.5], "down")
			.withItem(Item.of("ae2:crafting_pattern", '{in:[{},{Count:1b,id:"create:andesite_alloy"},{},{},{Count:1b,id:"create:andesite_alloy"},{},{},{},{}],out:{Count:8b,id:"create:shaft"},recipe:"create:crafting/kinetics/shaft",substitute:0b,substituteFluids:1b}'))
		scene.idle(80)

		// 终端里就会显示支持传动杆的合成，需要时从中下单即可
		scene.text(60, "And the terminal will show support of Shaft crafting, order them whenever they are needed", [3.5, 2.5, 2.5])
		scene.idle(80)
	})

	// 合成处理器的结构
	event.create([
		"ae2:pattern_provider",
		"ae2:crafting_unit"
	]).scene("ae2:crafting_cpu_structure", "Structure of Crafting CPU", "ue_addons:ae2/crafting_cpu", (scene) => {
		scene.showBasePlate()
		scene.idle(20)

		// 就像刚才展示的那样，ME网络需要有合成处理器才能将配方自动化
		scene.text(60, "As just presented, Me networks need a Crafting CPU to automize recipes")
		scene.idle(80)

		// 构成合成CPU的方块总共有8种，分为4类
		scene.text(40, "Crafting CPU consists of 8 types of blocks divided into 4 groups")
		let firstLayerSection = scene.world.showIndependentSection([1, 1, 2, 7, 1, 2], Direction.DOWN)
		let craftingUnitSection = scene.world.showIndependentSection([1, 2, 2], Direction.DOWN)
		scene.idle(60)
		scene.addKeyframe()

		// 合成单元是合成处理器的基础材料，同时用于填充多余的处理器空间
		scene.text(60, "Crafting Unit is the basic material of Crafting CPUs, while they're also user to fill extra space of CPUs", [1.5, 2.5, 2.5])
		scene.overlay.showOutline("input", {}, [1, 2, 2], 60)
		scene.idle(80)
		scene.addKeyframe()

		// 5种合成存储器为合成处理器提供计算能力与存储合成中间产物
		scene.text(60, "5 types of Crafting Storage provides computing ability and stores incomplete results", [5.5, 1.5, 2.5])
		scene.overlay.showOutline("output", {}, [3, 1, 2, 7, 1, 2], 60)
		scene.idle(80)
		scene.addKeyframe()

		// 但是只有合成存储器的合成处理器是一个单线程核心
		scene.text(60, "But Crafting CPUs with only Crafting Storage is a single-thread core", [5.5, 1.5, 2.5])
		scene.idle(80)

		// 而每一个并行处理单元就会为合成处理器多提供一个线程
		scene.text(60, "While every Crafting Accelerator provides one more thread to the CPU", [2.5, 1.5, 2.5])
		scene.overlay.showOutline("fast", {}, [2, 1, 2], 60)
		scene.idle(80)
		scene.addKeyframe()

		// 合成监控器上面有一个显示屏，会实时显示合成处理器正在处理的合成配方
		scene.text(60, "Crafting Monitor has a screen on it, showing what recipe the CPU is processing", [1.5, 1.5, 2.5])
		scene.overlay.showOutline("slow", {}, [1, 1, 2], 60)
		scene.idle(80)
		scene.addKeyframe()

		// 这些方块需要摆放成一个矩形结构才能组装起来运行
		scene.text(60, "These blocks must be placed as a rectangle to form and work", [4.5, 2, 1.5])
		scene.world.setBlocks([7, 2, 2], "ae2:crafting_unit")
		let secondLayerSection = scene.world.showIndependentSection([2, 2, 2, 7, 2, 2], Direction.DOWN)
		scene.idle(20)

		scene.world.hideIndependentSectionImmediately(firstLayerSection)
		scene.world.hideIndependentSectionImmediately(craftingUnitSection)
		scene.world.hideIndependentSectionImmediately(secondLayerSection)
		let fullCpuSection = scene.world.showIndependentSectionImmediately([1, 1, 4, 7, 2, 4])
		scene.world.moveSection(fullCpuSection, [0, 0, -2], 0)
		scene.idle(60)

		// 一个合成处理器多方快结构每次只能处理一个来自终端的合成请求
		scene.text(60, "One Crafting CPU can only process one crafting request from terminal")
		scene.idle(40)
		scene.world.hideIndependentSection(fullCpuSection, Direction.UP)
		scene.idle(20)
		scene.addKeyframe()

		// 对于需要频繁进行多个合成请求的玩家建议修建小型处理器组
		scene.text(80, "It's best to build multiple small CPUs for those who will make frequent simple crafting requests")
		let smallCpuSection = scene.world.showIndependentSection([1, 3, 6, 7, 4, 8], Direction.DOWN)
		scene.world.moveSection(smallCpuSection, [0, -2, 0], 0)
		scene.idle(60)
		scene.world.hideIndependentSection(smallCpuSection, Direction.UP)
		scene.idle(40)

		// 若玩家希望可以以单个请求执行一个极为复杂的配方，单个大型合成处理器则是一个更好的选择
		scene.text(80, "While for those who want to enjoy automating an entire complex recipe, a large CPU is better choice")
		let largeCpuSection = scene.world.showIndependentSection([3, 6, 3, 4, 8, 7], Direction.DOWN)
		scene.world.moveSection(largeCpuSection, [0, -5, 0], 0)
		scene.idle(60)
		scene.world.hideIndependentSection(largeCpuSection, Direction.UP)
		scene.idle(40)
	})

	// 示例：使用子网络自动化熔炉配方
	event.create([
		"ae2:pattern_provider",
		"ae2:crafting_unit"
	]).scene("ae2:furnace_automation", "Automating Furnace with SubNet", "ue_addons:ae2/furnace_automation", (scene) => {
		scene.showBasePlate()
		scene.idle(20)

		// 样板供应器中的处理配方样板只关注输出与返回的物品

		// 因此处理配方的自由度非常大，可以囊括整合包中所有的配方

		// 熔炉对于这种自动化就是一个绝佳的范例

		// 它对于输入面与输出面有着较高的要求

		// 熔炉只能从顶部输入材料

		// 只能从侧面输入燃料

		// 只能从底部取走产物

		// 因此对于熔炉的自动化就需要将样板供应器的统一输出转为对两个面的分别输出

		// 这时候AE子网络就会非常有用

		// 样板供应器使用扳手设置为仅向上输出

		// 然后将子网的ME接口正对供应器的输出端

		// 使用石英线缆即可从主网获取能量

		// 使用存储总线即可将输入子网的物品立即输出到熔炉中

		// 侧面的存储总线设置仅燃料可通过

		// 顶部的存储总线则加入反相卡设置仅燃料不可通过

		// 最后使用漏斗将产物取回到样板供应器

	})
})