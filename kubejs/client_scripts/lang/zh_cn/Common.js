ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addGasLang(key, value) {
		event.add(`gas.${global.namespace}.${key}`, value)
	}
	/**
	 * 
	 * @param {String} key 
	 * @param {String} title 
	 * @param {String} author 
	 */
	function addPaintingLang(key, title, author) {
		event.add(`painting.${global.namespace}.${key}.title`, title)
		event.add(`painting.${global.namespace}.${key}.author`, author)
	}
	/**
	 * 
	 * @param {String} key 
	 * @param {String} title 
	 * @param {String} desc 
	 */
	function addAdvancementLang(key, title, desc) {
		event.add(`advancements.${global.namespace}.${key}`, title)
		event.add(`advancements.${global.namespace}.${key}.desc`, desc)
	}
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 * @param {string} author
	 */
	function addMusicDiscLang(key, value, author) {
		event.add(`item.${global.namespace}.${key}`, "音乐唱片")
		event.add(`item.${global.namespace}.${key}.desc`, `${value} - ${author}`)
	}
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addPlanetLang(key, value) {
		event.add(`planet.${global.namespace}.${key}`, `${value}`)
		event.add(`planet.${global.namespace}_orbit.${key}`, `${value}轨道`)
	}
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addStructureLang(key, value) {
		event.add(`structure.${global.namespace}.${key}`, value)
	}

	addGasLang("sulfide_gas_mixture", "硫化物混合气")
	addGasLang("nitroglycerine", "硝化甘油")
	addGasLang("xenon", "氙气")
	addGasLang("radon", "氡气")
	addGasLang("refined_nuke_waste", "精炼核废料")
	addGasLang("mercury", "汞")
	addGasLang("geyser_jet", "间歇泉喷射气")

	addPlanetLang("dionysus", "迪奥尼索斯")
	addPlanetLang("hephaestus", "赫菲斯托斯")

	addAdvancementLang("start", "欢迎来到机械动力: 构件与革新", "感谢您的游玩!")
	addAdvancementLang("meet", "轨道共鸣", "两颗游离的恒星在一次无意的轨道扰动中彼此靠近\n无人知晓它们为何产生引力, 只知从那一刻起, 星系的背景噪声变得温柔\n(隐藏挑战!)")
	addAdvancementLang("north_star", "迷航", "轨迹从此断裂, 却像在等待另一侧的回声")
	addAdvancementLang("south_cross", "星港", "即便断裂, 它依旧把角度留给那道未曾抵达的回声")

	addPaintingLang("bug_is_right", "有Bug是对的", "古镇天")
	addPaintingLang("it_must_be_optifine", "一定是OptiFine干的", "XeKr")
	addPaintingLang("random_mechanism_old", "随机构件(旧版)", "随机构件")
	addPaintingLang("random_mechanism", "随机构件", "随机构件")
	addPaintingLang("qi_month", "榛名柒月", "榛名柒月")
	addPaintingLang("sacabamBaspis", "萨卡班甲鱼", "⑨Dropper_QWQ⑨")

	addStructureLang("ore_node.coal_node", "煤炭矿物节点")
	addStructureLang("ore_node.copper_node", "铜矿物节点")
	addStructureLang("ore_node.gold_node", "金矿物节点")
	addStructureLang("ore_node.iron_node", "铁矿物节点")
	addStructureLang("ore_node.oil_shale_node", "油页岩矿物节点")
	addStructureLang("ore_node.platinum_node", "铂矿物节点")
	addStructureLang("ore_node.tin_node", "锡矿物节点")
	addStructureLang("ore_node.zinc_node", "锌矿物节点")

	addMusicDiscLang("mechanism", "Mechanism", "DontkillBelalus")

	function addSolutionLang(key, value, tooltip) {
		event.add(`item.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_solution_bucket`, `${value}溶液桶`)
		event.add(`tooltip.${global.namespace}.${key}`, tooltip)
		event.add(`tooltip.${global.namespace}.${key}_solution_bucket`, tooltip)
		event.add(`block.${global.namespace}.${key}_solution`, `${value}溶液`)
		event.add(`fluid.${global.namespace}.${key}_solution`, `${value}溶液`)
	}

	function addHeatedLang(key, value) {
		event.add(`create.recipe.heat_requirement.${key}`, value)
	}

	// function addMBDMachineLang(key, value) {
	// 	event.add(`block.mBd2.${key}`, value)
	// }
	// function addMBDMachineRecipeLang(key, value) {
	// 	event.add(`mBd2.${key}`, value)
	// }
	// addItemLang("general_processor", "通用处理器")
	// addItemLang("printed_general_processor", "通用电路板")

	// addSolutionLang("feso4", "硫酸亚铁", "FeSO₄")
	// addSolutionLang("fecl2", "氯化亚铁", "FeCl₂")
	// addSolutionLang("cuso4", "硫酸铜", "CuSO₄")
	// addSolutionLang("cucl2", "氯化铜", "CuCl₂")
	// addSolutionLang("al2so43", "硫酸铝", "Al₂(SO₄)₃")
	// addSolutionLang("alcl3", "氯化铝", "AlCl₃")
	// addSolutionLang("pbcl2", "氯化铅", "PbCl₂")
	// addSolutionLang("pbso4", "硫酸铅", "PbSO₄")
	// addSolutionLang("sncl2", "氯化亚锡", "SnCl₂")
	// addSolutionLang("snso4", "硫酸亚锡", "SnSO₄")
	// addSolutionLang("zncl2", "氯化锌", "ZnCl₂")
	// addSolutionLang("znso4", "硫酸锌", "ZnSO₄")
	// addSolutionLang("aucl3", "氯化金", "AuCl₃")
	// addSolutionLang("au2so43", "硫酸金", "Au₂(SO₄)₃")
	// addSolutionLang("agcl", "氯化银", "AgCl")
	// addSolutionLang("ag2so4", "硫酸银", "Ag₂SO₄")
	// addSolutionLang("crcl3", "氯化铬", "CrCl₃")
	// addSolutionLang("cr2so43", "硫酸铬", "Cr₂(SO₄)₃")
	// addSolutionLang("vocl2", "二氯氧钒", "VOCl₂")
	// addSolutionLang("voso4", "硫酸氧钒", "VOSO₄")
	// addSolutionLang("uo2cl2", "氯化铀酰", "UO₂Cl₂")
	// addSolutionLang("uo2so4", "硫酸铀酰", "UO₂SO₄")
	// addSolutionLang("nicl2", "氯化镍", "NiCl₂")
	// addSolutionLang("niso4", "硫酸镍", "NiSO₄")
	// addSolutionLang("cocl2", "氯化钴", "CoCl₂")
	// addSolutionLang("coso4", "硫酸钴", "CoSO₄")
	// addSolutionLang("oscl3", "氯化锇", "OsCl₃")
	// addSolutionLang("os2so43", "硫酸锇", "Os₂(SO₄)₃")
	// addSolutionLang("ptcl4", "氯化铂", "PtCl₄")
	// addSolutionLang("ptso42", "硫酸铂", "Pt(SO₄)₂")
	// addSolutionLang("mgcl2", "氯化镁", "MgCl₂")
	// addSolutionLang("mgso4", "硫酸镁", "MgSO₄")
	// addSolutionLang("kcl", "氯化钾", "KCl")
	// addSolutionLang("k2so4", "硫酸钾", "K₂SO₄")
	// addSolutionLang("cacl2", "氯化钙", "CaCl₂")
	// addSolutionLang("caso4", "硫酸钙", "CaSO₄")
	// addSolutionLang("nacl", "氯化钠", "NaCl")
	// addSolutionLang("na2so4", "硫酸钠", "Na₂SO₄")

	// addMBDMachineLang("proxy_part_block", "多方块机器部件方块")
	// addMBDMachineLang("accelerator_energy_input", "大型构件催生器能量输入口")
	// addMBDMachineLang("accelerator_item_input", "大型构件催生器物品输入口")
	// addMBDMachineLang("accelerator_item_output", "大型构件催生器物品输出口")
	// addMBDMachineLang("accelerator", "大型构件催生器控制器")
	// addMBDMachineRecipeLang("accelerator", "大型构件催生器")

})