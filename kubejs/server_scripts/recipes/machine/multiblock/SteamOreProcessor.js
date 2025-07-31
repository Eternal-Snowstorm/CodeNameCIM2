MMEvents.createProcesses((event) => {
	// 蒸汽输入量(1000)
	const STEAM_AMOUNT = global.BUCKET_CAPACITY

	// 核心处理函数
	function addSteamOreProcessingRecipe(ore, nugget) {
		event.create(`cmi:steam_ore_processor/${ore}`)
			.structureId("cmi:steam_ore_processor_structure")
			.ticks(400)
			.input(addFluidInput("cmi:steam", STEAM_AMOUNT))
			.input(addItemInput(`forge:raw_materials/${ore}`, 1))
			.output(addItemOutput(`#forge:nuggets/${nugget}`, 27))
			.output(addBonusOutput(`#forge:nuggets/${nugget}`, 10, 0.25))
			.output(addFluidOutput("minecraft:water", 100))
			.output(addFluidOutput("mekanism:sulfur_dioxide", 200))
	}

	// 流体输入
	function addFluidInput(fluid, amount) {
		return {
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: fluid,
				amount: amount
			}
		}
	}

	// 物品输入
	function addItemInput(tag, count) {
		return {
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: tag,
				count: count
			}
		}
	}

	// 物品输出
	function addItemOutput(item, count) {
		return {
			type: "mm:output/simple",
			ingredient: {
				type: "mm:item",
				item: item,
				count: count
			}
		}
	}

	// 副产物
	function addBonusOutput(item, count, chance) {
		return {
			type: "mm:output/simple",
			chance: chance,
			ingredient: {
				type: "mm:item",
				item: item,
				count: count
			}
		}
	}

	// 流体输出
	function addFluidOutput(fluid, amount) {
		return {
			type: "mm:output/simple",
			ingredient: {
				type: "mm:fluid",
				fluid: fluid,
				amount: amount
			}
		}
	}

	// 列表
	let oreProcesses = [
		{ ore: "pyrite", nugget: "iron" },
		{ ore: "galena", nugget: "lead" },
		{ ore: "sphalerite", nugget: "zinc" },
		{ ore: "lateritic_nickel", nugget: "nickel" },
		{ ore: "veridium", nugget: "copper" },
		{ ore: "stannine", nugget: "tin" },
		{ ore: "variscite", nugget: "aluminum" },
		{ ore: "argentite", nugget: "silver" },
		{ ore: "osmiridium", nugget: "osmium" },
		{ ore: "uraninite", nugget: "uranium" },
	]
	oreProcesses.forEach((process) => {
		addSteamOreProcessingRecipe(process.ore, process.nugget)
	})
})