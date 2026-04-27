ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addBlockLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addOreNodeLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}_deposit_block`, `${value}矿藏`)
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMachineLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)
		event.add(`machine.${Cmi.MODID}.${key}`, value)
	}

	addBlockLang("rocket_pattern", "火箭模版")
	addBlockLang("tier_1_rocket_frame", "一阶火箭框架")
	addBlockLang("tier_2_rocket_frame", "二阶火箭框架")
	addBlockLang("tier_3_rocket_frame", "三阶火箭框架")
	addBlockLang("tier_4_rocket_frame", "四阶火箭框架")
	addBlockLang("accelerator", "构件之力催生器")
	addBlockLang("osmium_tile", "锇砖瓦")
	addBlockLang("compression_end_stone_dust_block", "压缩末地石粉块")
	addBlockLang("crucible_base", "底座")
	addBlockLang("crucible_tuyere", "风口")
	addBlockLang("bronze_casing", "青铜机壳")
	addBlockLang("pressure_resistance_casing", "耐压外壳")
	addBlockLang("smart_casing", "智能机壳")
	addBlockLang("computing_casing", "计算机壳")
	addBlockLang("industrial_frame", "工程块框架")
	addBlockLang("peat_block", "泥炭块")
	addBlockLang("oil_shale", "油页岩")
	addBlockLang("combustion_medium_block", "燃烧介质块")
	addBlockLang("radsand", "辐射沙")

	addBlockLang("brass_stairs", "黄铜台阶")
	addBlockLang("eden_crystal", "伊甸水晶")

	addBlockLang("impact_pile", "冲击桩")
	addBlockLang("void_spring", "虚空涌泉")

	addBlockLang("broken_andesite_drill_head", "损坏的安山岩制钻头")
	addBlockLang("broken_copper_drill_head", "损坏的铜制钻头")
	addBlockLang("broken_brass_drill_head", "损坏的黄铜制钻头")

	addBlockLang("cracked_concrete", "碎裂的混凝土")
	addBlockLang("bar_acid", "酸洗钢筋")
	addBlockLang("bar_concrete", "带混凝土的结构钢筋")
	addBlockLang("bar_normal", "结构钢筋")
	addBlockLang("bar_rust", "锈蚀钢筋")
	addBlockLang("bar_rust_concrete", "带混凝土的锈蚀钢筋")
	addBlockLang("radar", "雷达")
	addBlockLang("broken_radar", "损坏的雷达")
	addBlockLang("white_reinforced_concrete", "白色钢筋混凝土")
	addBlockLang("white_reinforced_concrete_stairs", "白色钢筋混凝土楼梯")
	addBlockLang("white_reinforced_concrete_slab", "白色钢筋混凝土台阶")
	addBlockLang("white_reinforced_concrete_wall", "白色钢筋混凝土墙")
	addBlockLang("gray_reinforced_concrete", "灰色钢筋混凝土")
	addBlockLang("gray_reinforced_concrete_stairs", "灰色钢筋混凝土楼梯")
	addBlockLang("gray_reinforced_concrete_slab", "灰色钢筋混凝土台阶")
	addBlockLang("gray_reinforced_concrete_wall", "灰色钢筋混凝土墙")
	addBlockLang("power_supply", "电源")
	addBlockLang("transformer", "变压器")
	addBlockLang("tracking_array", "追踪阵列")
	addBlockLang("modem", "调制解调器")
	addBlockLang("broken_power_supply", "损坏的电源")
	addBlockLang("broken_transformer", "损坏的变压器")
	addBlockLang("broken_tracking_array", "损坏的追踪阵列")
	addBlockLang(`broken_modem`, "损坏的调制解调器")
	addBlockLang("piggy_bank", "破旧的存钱罐")

	addOreNodeLang("vanadium", "钒矿")
	addOreNodeLang("platinum", "铂矿")
	addOreNodeLang("cheese", "奶酪")
	addOreNodeLang("coal", "煤炭")
	addOreNodeLang("oil_shale", "油页岩")

	addMachineLang("flash_disk_writer", "闪存盘写入器")
	addMachineLang("chemical_gas_extractor", "化学气体抽取器")
	addMachineLang("steam_boiler", "青铜蒸汽锅炉")
	addMachineLang("radar_terminal", "雷达终端")

	// 制作组fumo
	addBlockLang("re_construction", "Re_Construction")
	addBlockLang("dkrkoo_weihe", "dkrkoo为何")
	addBlockLang("dropper_qwq", "⑨Dropper_QWQ⑨")
	addBlockLang("117458866249", "117458866249")
	addBlockLang("random_mechanism", "随机构件")
	addBlockLang("eternalsnowstorm", "逐日炎雪_中微子")
	addBlockLang("qi_month", "柒月")
	addBlockLang("dont_kill_belalus", "DontkillBelalus")
	addBlockLang("fiber_optics", "FiberOptics")
	addBlockLang("ye_anqing", "燕栖")
	addBlockLang("sakura_star_cn", "MF.")
	addBlockLang("qicaijie", "亓才孑")
	addBlockLang("flash_yi", "闪电羿")
	addBlockLang("keyxeldesu", "一只键盘虾")
	addBlockLang("sergei", "谢尔盖")
	addBlockLang("lirx_ovo", "栗子")
	addBlockLang("ein_nameuwu", "幽灵猫")
})