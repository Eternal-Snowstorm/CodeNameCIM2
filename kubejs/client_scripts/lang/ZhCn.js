ClientEvents.lang("zh_cn", (event) => {
	addCastItemLanguaue("mechanism", "构件")

	addMechanismPartLanguaue("basic", "基础")
	addMechanismPartLanguaue("mechanical", "机械")
	addMechanismPartLanguaue("flux", "通量")
	addMechanismPartLanguaue("magical", "魔力")
	addMechanismPartLanguaue("quantum", "量子")
	addMechanismPartLanguaue("engineering", "工程")
	addMechanismPartLanguaue("mekanism", "通用")
	addMechanismPartLanguaue("final", "终章")

	addFluidLanguaue("molten_andesite_alloy", "熔融安山合金")

	addBlockLanguaue("the_accelerator_of_mechanism_power", "构件之力催生器")
	addBlockLanguaue("quartz_ore", "石英矿石")
	addBlockLanguaue("deepslate_quartz_ore", "深层石英矿石")

	addAloneLanguaue(`itemGroup.${global.namespace}.all`, "机械动力: 无限构件")
	addAloneLanguaue(`promp.${global.namespace}.ender_mechanism.location_stored`, "当前坐标已存入末影构件")
	addAloneLanguaue(`desc.${global.namespace}.acceleratable`, "§b按住Shift查看构件之力催生器用途")
	addAloneLanguaue(`desc.${global.namespace}.stone_mechanism`, "§c手持右键圆石可将其转换为石头")
	addAloneLanguaue(`desc.${global.namespace}.copper_mechanism`, "§6手持右键可以投掷出水瓶")
	addAloneLanguaue(`desc.${global.namespace}.ender_mechanism`, "§d手持右键随机传送，手持潜行右键记录当前坐标")
	addAloneLanguaue(`desc.${global.namespace}.enchanted_mechanism`, "§9手持右键方块可生成经验")
	addAloneLanguaue(`desc.${global.namespace}.nature_mechanism`, "§a手持右键方块可以替代骨粉的功能")

	addAloneLanguaue(`desc.${global.namespace}.accelerate.stone`, "§e转化石头\n10%安山岩\n10%闪长岩\n10%花岗岩\n10%石灰岩\n10%焦黑石头\n§2转化深板岩\n10%焦黑石头\n10%凝灰岩\n10%熔渣\n10%滴水石块\n10%平滑玄武岩")
	addAloneLanguaue(`desc.${global.namespace}.accelerate.andesite`, "§e转化石头\n20%安山岩\n5%铁矿石\n5%石头\n§2转化深板岩\n15%安山岩\n10%深层铁矿石\n10%深板岩")
	addAloneLanguaue(`desc.${global.namespace}.accelerate.copper`, "§e转化石头\n20%铜矿石\n5%金矿石\n5%粘土块\n§2转化深板岩\n15%深层铜矿石\n10%深层金矿石\n10%粘土块")
	addAloneLanguaue(`desc.${global.namespace}.accelerate.iron`, "§e转化石头\n20%铁矿石\n5%红石矿石\n5%镍矿石\n§2转化深板岩\n15%深层铁矿石\n10%深层红石矿\n10%深层镍矿石")
	addAloneLanguaue(`desc.${global.namespace}.accelerate.gold`, "§e转化石头\n20%金矿石\n5%朱砂矿石\n5%石英矿石\n§2转化深板岩\n15%深层金矿石\n10%深层朱砂矿\n10%深层石英矿")
	addAloneLanguaue(`desc.${global.namespace}.accelerate.ender`, "§5将玩家传送到构件所记录的坐标")

	addAloneLanguaue("wood_type.createdieselgenerators.chip_wood", "木屑")

	addAloneLanguaue(`message.${global.namespace}.debug.getHardness`, "这个方块的硬度是: %s")
	addAloneLanguaue(`text.${global.namespace}.dev`, "§0开发中画面, 实际内容请以正式版为准")
	addAloneLanguaue(`text.${global.namespace}.player`, "§0测试中版本, 不代表最终品质")

	addCommonTooltipLanguage("ue_addons:pigiron_mechanism", "可无限次食用")

	addHeatedLanguaue("grilled", "炙烤")

	let materialGroup = [
		["nature", "自然"],
		["wooden", "木质"],
		["stone", "石质"],
		["iron", "铁质"],
		["copper", "铜质"],
		["andesite", "安山"],
		["photosensitive", "感光"],
		["gold", "金质"],
		["thermal", "热力"],
		["feinforced", "强化"],
		["resonant", "谐振"],
		["railway", "铁路"],
		["ender", "末影"],
		["light_engineering", "轻型工程"],
		["heavy_engineering", "重型工程"],
		["enchanted", "附魔"],
		["smart", "智能"],
		["basic_mekanism", "基础通用"],
		["advanced_mekanism", "高级通用"],
		["elite_mekanism", "精英通用"],
		["ultimate_mekanism", "终极通用"],
		["structure", "结构"],
		["nuclear", "核"],
		["antimatter", "反物质"],
		["coil", "线圈"],
		["sculk", "幽匿"],
		["colorful", "多彩"],
		["pigiron", "生铁"],
		["creative", "创造"]
	]
	materialGroup.forEach(([material, name]) => {
		addMachanismLanguaue(material, name)
	})

	function addItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}`, value)
	}

	function addCastItemLanguaue(key, value) {
		event.add(`item.${global.namespace}.${key}_cast`, `${value}铸模`)
		event.add(`item.${global.namespace}.${key}_sand_cast`, `${value}沙子铸模`)
		event.add(`item.${global.namespace}.${key}_red_sand_cast`, `${value}红沙铸模`)
	}

	function addMachanismLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism`, `${value}构件`)
		event.add(`item.${global.namespace}.incomplete_${material}_mechanism`, `${value}构件(半成品)`)
	}

	function addMechanismPartLanguaue(material, value) {
		event.add(`item.${global.namespace}.${material}_mechanism_part`, `${value}构件零件`)
	}

	function addBlockLanguaue(key, value) {
		event.add(`block.${global.namespace}.${key}`, value)
	}

	function addFluidLanguaue(key, value) {
		event.add(`fluid.${global.namespace}.${key}`, value)
		event.add(`block.${global.namespace}.${key}`, value)
		event.add(`item.${global.namespace}.${key}_bucket`, `${value}桶`)
	}

	function addCommonTooltipLanguage(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

	function addJEIInfoLanguage(key, value) {
		event.add(`jei.info.${key}`.replace(":", "."), `§b${value}`)
	}

	function addHeatedLanguaue(key, value) {
		event.add(`create.recipe.heat_requirement.${key}`, value)
	}

	function addAloneLanguaue(key, value) {
		event.add(key, value)
	}
})