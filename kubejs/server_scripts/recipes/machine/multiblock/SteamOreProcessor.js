MMEvents.createProcesses((event) => {
	// 蒸汽输入量(1000)
	const STEAM_AMOUNT = global.BUCKET_CAPACITY * 2

	// 核心处理函数
	function addSteamOreProcessingRecipe(ore, dust) {
		event.create(`cmi:steam_ore_processor/${ore}`)
			.structureId("cmi:steam_ore_processor_structure")
			.ticks(400)
			.input(addFluidInput("mekanism:steam", STEAM_AMOUNT))
			.input(addItemInput(`forge:raw_materials/${ore}`, 1))
			.output(addItemOutput(dust, 3))
			.output(addBonusOutput(dust, 1, 0.25))
			.output(addFluidOutput("minecraft:water", 100))
			.output(addFluidOutput("mekanism:sulfur_dioxide", 200))

		event.create(`cmi:steam_ore_processor/${ore}_block`)
			.structureId("cmi:steam_ore_processor_structure")
			.ticks(400)
			.input(addFluidInput("mekanism:steam", STEAM_AMOUNT))
			.input(addItemInput(`forge:ores/${ore}`, 1))
			.output(addItemOutput(dust, 4))
			.output(addBonusOutput(dust, 2, 0.25))
			.output(addFluidOutput("minecraft:water", 200))
			.output(addFluidOutput("mekanism:sulfur_dioxide", 400))
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
		{ ore: "pyrite", dust: "thermal:iron_dust" },
		{ ore: "galena", dust: "thermal:lead_dust" },
		{ ore: "sphalerite", dust: "thermal_extra:zinc_dust" },
		{ ore: "lateritic_nickel", dust: "thermal:nickel_dust" },
		{ ore: "veridium", dust: "thermal:copper_dust" },
		{ ore: "stannine", dust: "thermal:tin_dust" },
		{ ore: "variscite", dust: "immersiveengineering:dust_aluminum" },
		{ ore: "argentite", dust: "thermal:silver_dust" },
		{ ore: "osmiridium", dust: "mekanism:dust_osmium" },
		{ ore: "uraninite", dust: "immersiveengineering:dust_uranium" },
	]
	oreProcesses.forEach((process) => {
		addSteamOreProcessingRecipe(process.ore, process.dust)
	})
})