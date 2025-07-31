MMEvents.createProcesses((event) => {
	// 蒸汽输出量(1000)
	const STEAM_AMOUNT = global.BUCKET_CAPACITY

	// 核心处理函数
	function addSteamOreProcessingRecipe(ore, nugget) {
		event.create(`cmi:steam_ore_processor/${ore}`)
			.structureId("cmi:steam_ore_processor_structure")
			.ticks(400)
			.input(addFluidInput("cmi:steam", STEAM_AMOUNT))
			.input(addItemInput(`forge:raw_materials/${ore}`, 1))
			.output(addItemOutput(nugget, 27))
			.output(addBonusOutput(nugget, 10, 0.25))
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
	function addItemOutput(tag, count) {
		let firstItem = []
		Ingredient.of(tag)
			.getItemIds()
			.forEach((item) => {
				firstItem.push(item)
			})

		return {
			type: "mm:output/simple",
			ingredient: {
				type: "mm:item",
				item: firstItem[0],
				count: count
			}
		}
	}

	// 副产物
	function addBonusOutput(tag, count, chance) {
		let firstItem = []
		Ingredient.of(tag)
			.getItemIds()
			.forEach((item) => {
				firstItem.push(item)
			})

		return {
			type: "mm:output/simple",
			chance: chance,
			ingredient: {
				type: "mm:item",
				item: firstItem[0],
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
		{ ore: "pyrite", nugget: "minecraft:iron_nugget" },
		{ ore: "galena", nugget: "thermal:lead_nugget" },
		{ ore: "sphalerite", nugget: "create:zinc_nugget" },
		{ ore: "lateritic_nickel", nugget: "thermal:nickel_nugget" },
		{ ore: "veridium", nugget: "thermal:copper_nugget" },
		{ ore: "stannine", nugget: "thermal:tin_nugget" },
		{ ore: "variscite", nugget: "immersiveengineering:nugget_aluminum" },
		{ ore: "argentite", nugget: "thermal:silver_nugget" },
		{ ore: "osmiridium", nugget: "mekanism:nugget_osmium" },
		{ ore: "uraninite", nugget: "immersiveengineering:nugget_uranium" },
	]

	// 批量创建处理流程
	oreProcesses.forEach((process) => {
		addSteamOreProcessingRecipe(process.ore, process.nugget)
	})
})