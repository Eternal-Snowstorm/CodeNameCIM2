ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addGasLang(key, value) {
		event.add(`gas.${Cmi.MODID}.${key}`, value)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addInfuseTypeLang(key, value) {
		event.add(`infuse_type.${Cmi.MODID}.${key}`, value)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} title 
	 * @param {String} author 
	 */
	function addPaintingLang(key, title, author) {
		event.add(`painting.${Cmi.MODID}.${key}.title`, title)
		event.add(`painting.${Cmi.MODID}.${key}.author`, author)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} title 
	 * @param {String} desc 
	 */
	function addAdvancementLang(key, title, desc) {
		event.add(`advancements.${Cmi.MODID}.${key}`, title)
		event.add(`advancements.${Cmi.MODID}.${key}.desc`, desc)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 * @param {string} author
	 */
	function addMusicDiscLang(key, value, author) {
		event.add(`item.${Cmi.MODID}.${key}`, "音乐唱片")
		event.add(`item.${Cmi.MODID}.${key}.desc`, `${value} - ${author}`)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addPlanetLang(key, value) {
		event.add(`planet.${Cmi.MODID}.${key}`, `${value}`)
		event.add(`planet.${Cmi.MODID}_orbit.${key}`, `${value}轨道`)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addStructureLang(key, value) {
		event.add(`structure.${Cmi.MODID}.${key}`, value)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addDepositLang(key, value) {
		event.add(`cmi.structure.ore_node/${key}_node`, `${value}矿藏节点`)
	}

	addGasLang("sulfide_gas_mixture", "硫化物混合气")
	addGasLang("nitroglycerine", "硝化甘油")
	addGasLang("xenon", "氙气")
	addGasLang("radon", "氡气")
	addGasLang("refined_nuke_waste", "精炼核废料")
	addGasLang("mercury", "汞")
	addGasLang("geyser_jet", "间歇泉喷射气")
	addGasLang("radon_mixture", "氡混合气体")
	addGasLang("helium_3", "氦-3")
	addGasLang("co", "二氧化碳")
	addGasLang("ch4", "甲烷")
	addGasLang("silicon_gas_modulator", "硅基气相调节剂")

	addInfuseTypeLang("chaotic_void", "混沌虚空")
	addInfuseTypeLang("etrium", "埃忒恩")
	addInfuseTypeLang("helium", "氦")
	addInfuseTypeLang("dense_oxide", "致密氧化物")

	addPlanetLang("dionysus", "迪奥尼索斯")
	addPlanetLang("hephaestus", "赫菲斯托斯")

	addAdvancementLang("start", "欢迎来到机械动力: 构件与革新", "感谢您的游玩!")
	addAdvancementLang("meet", "轨道共鸣", "两颗游离的恒星在一次无意的轨道扰动中彼此靠近\n无人知晓它们为何产生引力, 只知从那一刻起, 星系的背景噪声变得温柔\n(隐藏挑战!)")
	addAdvancementLang("north_star", "迷航", "轨迹从此断裂, 却像在等待另一侧的回声")
	addAdvancementLang("south_cross", "星港", "即便断裂, 它依旧把角度留给那道未曾抵达的回声")
	addAdvancementLang("academic_fraud", "学术造假", "在未获得高炉的情况下获得铁锭\n§c逃的课迟早也得补回来")
	addAdvancementLang("fraud", "十分甚至是九分的不对劲", "我怎么被骗了")

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
	addStructureLang("ore_node.quartz_node", "石英矿物节点")
	addStructureLang("ore_node.cobalt_node", "钴矿物节点")
	addStructureLang("ore_node.vanadium_node", "钒矿物节点")

	addMusicDiscLang("mechanism", "Mechanism", "DontkillBelalus")

	addDepositLang("coal", "煤炭")
	addDepositLang("copper", "铜")
	addDepositLang("gold", "金")
	addDepositLang("iron", "铁")
	addDepositLang("lead", "铅")
	addDepositLang("nickel", "镍")
	addDepositLang("oil_shale", "油页岩")
	addDepositLang("redstone", "红石")
	addDepositLang("silver", "银")
	addDepositLang("tin", "锡")
	addDepositLang("zinc", "锌")
	addDepositLang("quartz", "石英")
	addDepositLang("cobalt", "钴")
	addDepositLang("vanadium", "钒")
})