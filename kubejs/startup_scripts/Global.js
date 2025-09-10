// priority: 1000

let $TinkerTags$Items =
	Java.loadClass("slimeknights.tconstruct.common.TinkerTags$Items")

// 全局注册物品命名空间
global.namespace = "cmi"
// Modpack版本
global.modPackVersion = "§0CMI Beta-2.2.1-hotfix"
// 桶容量
global.BUCKET_CAPACITY = 1000
// 扳手Tag
global.WRENCH_PICKUP = "create:wrench_pickup"
// 设定全局开发人员名单
global.debugUserName = [
	"Qi_Month",
	"Vechni_Metel",
	"UnknownEntity_UE",
	"117458866249",
	"Ye_Anqing",
	"KEYboardManDesu",
	"oooooooo_zane"
]
// 挖掘等级
global.MiningLevel = {
	"wooden": "minecraft:needs_wooden_tool",
	"stone": "minecraft:needs_stone_tool",
	"iron": "minecraft:needs_iron_tool",
	"gold": "forge:needs_gold_tool",
	"diamond": "minecraft:needs_diamond_tool",
	"nether": "forge:needs_netherite_tool"
}
// 挖掘工具类型
global.ToolType = {
	"sword": "forge:mineable/sword",
	"pickaxe": "minecraft:mineable/pickaxe",
	"axe": "minecraft:mineable/axe",
	"shovel": "minecraft:mineable/shovel",
	"hoe": "minecraft:mineable/hoe"
}
global.HeatLevel = {
	"heated": "heated",
	"super": "superheated",
	"grilled": "grilled"
}
// 所有染料颜色
global.dyeColorGroup = [
	"black",
	"blue",
	"brown",
	"cyan",
	"gray",
	"green",
	"light_blue",
	"light_gray",
	"lime",
	"magenta",
	"orange",
	"pink",
	"purple",
	"red",
	"white",
	"yellow"
]
// 所有构件
global.mechanismGroup = [
	"nature",
	"wooden",
	"stone",
	"iron",
	"copper",
	"andesite",
	"photosensitive",
	"gold",
	"cobalt",
	"nether",
	"thermal",
	"feinforced",
	"resonant",
	"railway",
	"ender",
	"light_engineering",
	"heavy_engineering",
	"enchanted",
	"smart",
	"computing",
	"tier_1_aviation",
	"tier_2_aviation",
	"tier_3_aviation",
	"tier_4_aviation",
	"basic_mekanism",
	"advanced_mekanism",
	"elite_mekanism",
	"ultimate_mekanism",
	"structure",
	"nuclear",
	"antimatter",
	"coil",
	"sculk",
	"colorful",
	"creative",
	"pigiron",
	"potion",
	"bronze"
]
// 所有金属(用于兼容性配方)
global.metalGroup = [
	"andesite_alloy",
	"aluminum",
	"brass",
	"bronze",
	"cobalt",
	"constantan",
	"copper",
	"cast_iron",
	"electrum",
	"gold",
	"invar",
	"iron",
	"siltsteel",
	"lead",
	"lumium",
	"netherite",
	"nickel",
	"osmium",
	"signalum",
	"silver",
	"steel",
	"tin",
	"zinc",
	"rose_gold",
	"hepatizon",
	"manyullyn",
	"amethyst_bronze",
	"vanadium",
	"chromium",
	"enderium",
	"platinum",
	"uranium",
	"desh",
	"ostrum",
	"calorite",
	"prismalium",
	"melodium",
	"stellarium",
	"soul_infused",
	"shellite",
	"twinite",
	"dragonsteel",
	"abyssal",
	"stainless_steel",
	"slimesteel",
	"pig_iron",
	"cinderslime",
	"queens_slime",
	"industrial_iron",
	"refined_obsidian",
	"refined_glowstone",
	"magnesium",
	"sodium",
	"potassium",
	"calcium",
	"tungsten"
]
// 熔点对象
global.meltingPoints = {
	/**
	 * null代表该金属现实不存在, 所需熔点是随便写的一个数值
	 * 
	 * 熔炉1000
	 * 高炉, 热力电炉1500
	 * 车窑, 电弧炉2000
	 * Mek熔炉全部可熔炼
	 */
	"andesite_alloy": 760, // null
	"aluminum": 660,
	"brass": 930,
	"bronze": 820,
	"cobalt": 1495,
	"constantan": 1200,
	"copper": 1085,
	"cast_iron": 1200,
	"electrum": 1060,
	"gold": 1064,
	"invar": 1425,
	"iron": 1535,
	"siltsteel": 1386, // null
	"lead": 327,
	"lumium": 993, // null
	"netherite": 2042, // null
	"nickel": 1455,
	"osmium": 3033,
	"signalum": 1231, // null
	"silver": 962,
	"steel": 1370,
	"tin": 232,
	"zinc": 419,
	"rose_gold": 960,
	"hepatizon": 990, // null
	"manyullyn": 1617, // null
	"amethyst_bronze": 1043, // null
	"tungsten": 3410,
	"vanadium": 1910,
	"chromium": 1907,
	"enderium": 1501, // null
	"platinum": 1768,
	"uranium": 1132,
	"desh": 3094, // null
	"ostrum": 3687, // null
	"calorite": 4003, // null
	"prismalium": 1741, // null
	"melodium": 1755, // null
	"stellarium": 1873, // null
	"soul_infused": 1901, // null
	"shellite": 1562, // null
	"twinite": 1671, // null
	"dragonsteel": 2115, // null
	"abyssal": 1953, // null
	"stainless_steel": 1510,
	"slimesteel": 1098, // null
	"pig_iron": 1145,
	"cinderslime": 1288, // null
	"queens_slime": 1193, // null
	"industrial_iron": 1507, // null
	"refined_obsidian": 1413, // null
	"refined_glowstone": 943, // null
	"magnesium": 650,
	"sodium": 98,
	"potassium": 64,
	"calcium": 842
}
// 命名空间
global.materialNamespace = {
	/*
	 * v代表该材料是由TIC本体添加的
	 * t代表该材料是由热力工匠添加的
	 * c代表该材料是由制作组自定义的
	 * n代表无此材料
	 */
	"andesite_alloy": "c",
	"aluminum": "v",
	"brass": "c",
	"bronze": "v",
	"cobalt": "v",
	"constantan": "v",
	"copper": "v",
	"cast_iron": "c",
	"electrum": "v",
	"gold": "v",
	"invar": "n",
	"iron": "v",
	"siltsteel": "n",
	"lead": "v",
	"lumium": "t",
	"netherite": "v",
	"nickel": "n",
	"osmium": "v",
	"signalum": "t",
	"silver": "v",
	"steel": "v",
	"tin": "n",
	"zinc": "v",
	"rose_gold": "v",
	"hepatizon": "v",
	"manyullyn": "v",
	"amethyst_bronze": "v",
	"vanadium": "n",
	"chromium": "n",
	"enderium": "t",
	"platinum": "n",
	"uranium": "v",
	"desh": "c",
	"ostrum": "c",
	"calorite": "c",
	"prismalium": "t",
	"melodium": "t",
	"stellarium": "t",
	"soul_infused": "t",
	"shellite": "t",
	"twinite": "t",
	"dragonsteel": "t",
	"abyssal": "t",
	"stainless_steel": "c",
	"slimesteel": "v",
	"pig_iron": "v",
	"cinderslime": "v",
	"queens_slime": "v",
	"industrial_iron": "c",
	"refined_obsidian": "v",
	"refined_glowstone": "t",
	"magnesium": "c",
	"sodium": "c",
	"potassium": "c",
	"calcium": "c",
	"tungsten": "c"
}
// 熔点数组
global.meltingLevels = {
	1000: [
		"lead",
		"tin",
		"zinc",
		"sodium",
		"potassium",
		"calcium",
		"aluminum",
		"magnesium",
		"brass",
		"bronze",
		"silver",
		"rose_gold",
		"lumium",
		"hepatizon",
		"electrum",
		"gold",
		"copper",
	],
	1500: [
		"uranium",
		"pig_iron",
		"refined_obsidian",
		"siltsteel",
		"constantan",
		"andesite_alloy",
		"cast_iron",
		"queens_slime",
		"signalum",
		"invar",
		"nickel",
		"cobalt",
		"industrial_iron",
		"shellite",
		"enderium",
		"steel",
		"slimesteel",
		"cinderslime",
		"stainless_steel",
		"iron"
	],
	2000: [
		"manyullyn",
		"twinite",
		"prismalium",
		"melodium",
		"platinum",
		"stellarium",
		"vanadium",
		"chromium",
		"soul_infused",
		"abyssal",
		"amethyst_bronze"
	],
	"above": [
		"osmium",
		"desh",
		"tungsten",
		"ostrum",
		"calorite",
		"netherite",
		"dragonsteel"
	]
}
// 燃料列表
global.fuelList = [
	"minecraft:lava",
	"ad_astra:cryo_fuel",
	"cmi:delta_unstable_solution",
	"ad_astra:fuel",
	"thermal:crude_oil",
	"createdieselgenerators:crude_oil",
	"ad_astra:oil",
	"thermal:refined_fuel",
	"cmi:turbid_waste_liquid",
	"tconstruct:blazing_blood",
	"immersiveengineering:ethanol",
	"immersiveengineering:plantoil",
	"createdieselgenerators:ethanol",
	"createdieselgenerators:plant_oil",
	"createdieselgenerators:biodiesel",
	"createdieselgenerators:diesel",
	"createdieselgenerators:gasoline"
]

// 燃料温度
global.fuelTemperatures = {
	"minecraft:lava": 1346,
	"ad_astra:cryo_fuel": 4225,
	"cmi:delta_unstable_solution": 1206,
	"ad_astra:fuel": 1417,
	"thermal:crude_oil": 1220,
	"createdieselgenerators:crude_oil": 1220,
	"ad_astra:oil": 1220,
	"thermal:refined_fuel": 2041,
	"cmi:turbid_waste_liquid": 1189,
	"tconstruct:blazing_blood": 2638,
	"immersiveengineering:ethanol": 1132,
	"createdieselgenerators:ethanol": 1132,
	"createdieselgenerators:plant_oil": 1027,
	"immersiveengineering:plantoil": 1027,
	"createdieselgenerators:biodiesel": 1636,
	"createdieselgenerators:diesel": 2113,
	"createdieselgenerators:gasoline": 2043
}

// 匠魂物品标签
global.TinkerItemTags = {
	STAFFS: $TinkerTags$Items.STAFFS.location().toString(),
	RED_SAND_CASTS: $TinkerTags$Items.RED_SAND_CASTS.location().toString(),
	BOOK_ARMOR: $TinkerTags$Items.BOOK_ARMOR.location().toString(),
	PATTERNS: $TinkerTags$Items.PATTERNS.location().toString(),
	LOOT_CAPABLE_TOOL: $TinkerTags$Items.LOOT_CAPABLE_TOOL.location().toString(),
	GOLDEN_ARMOR: $TinkerTags$Items.GOLDEN_ARMOR.location().toString(),
	NUGGETS_NETHERITE: $TinkerTags$Items.NUGGETS_NETHERITE.location().toString(),
	FOUNDRY_DEBUG: $TinkerTags$Items.FOUNDRY_DEBUG.location().toString(),
	BLACKSTONE: $TinkerTags$Items.BLACKSTONE.location().toString(),
	STONESHIELDS: $TinkerTags$Items.STONESHIELDS.location().toString(),
	MULTIPART_TOOL: $TinkerTags$Items.MULTIPART_TOOL.location().toString(),
	RAW_BLOCK_COBALT: $TinkerTags$Items.RAW_BLOCK_COBALT.location().toString(),
	GENERAL_STRUCTURE_DEBUG: $TinkerTags$Items.GENERAL_STRUCTURE_DEBUG.location().toString(),
	RANGED: $TinkerTags$Items.RANGED.location().toString(),
	BARTERED_PARTS: $TinkerTags$Items.BARTERED_PARTS.location().toString(),
	HARVEST_PRIMARY: $TinkerTags$Items.HARVEST_PRIMARY.location().toString(),
	ORES_COBALT: $TinkerTags$Items.ORES_COBALT.location().toString(),
	AUTOSMELT_BLACKLIST: $TinkerTags$Items.AUTOSMELT_BLACKLIST.location().toString(),
	UNSALVAGABLE: $TinkerTags$Items.UNSALVAGABLE.location().toString(),
	TABLES: $TinkerTags$Items.TABLES.location().toString(),
	SEARED_BLOCKS: $TinkerTags$Items.SEARED_BLOCKS.location().toString(),
	CONGEALED_SLIME: $TinkerTags$Items.CONGEALED_SLIME.location().toString(),
	SMELTERY: $TinkerTags$Items.SMELTERY.location().toString(),
	GLASS_PANES_SILICA: $TinkerTags$Items.GLASS_PANES_SILICA.location().toString(),
	NUGGETS_NETHERITE_SCRAP: $TinkerTags$Items.NUGGETS_NETHERITE_SCRAP.location().toString(),
	INTERACTABLE_ARMOR: $TinkerTags$Items.INTERACTABLE_ARMOR.location().toString(),
	SLIMY_LOGS: $TinkerTags$Items.SLIMY_LOGS.location().toString(),
	SHIELDS: $TinkerTags$Items.SHIELDS.location().toString(),
	DEEPSLATE: $TinkerTags$Items.DEEPSLATE.location().toString(),
	SEARED_BRICKS: $TinkerTags$Items.SEARED_BRICKS.location().toString(),
	INTERACTABLE_DUAL: $TinkerTags$Items.INTERACTABLE_DUAL.location().toString(),
	BLANK_SINGLE_USE_CASTS: $TinkerTags$Items.BLANK_SINGLE_USE_CASTS.location().toString(),
	SLIMY_PLANKS: $TinkerTags$Items.SLIMY_PLANKS.location().toString(),
	ANVIL_METAL: $TinkerTags$Items.ANVIL_METAL.location().toString(),
	COPPER_PLATFORMS: $TinkerTags$Items.COPPER_PLATFORMS.location().toString(),
	SPECIAL_TOOLS: $TinkerTags$Items.SPECIAL_TOOLS.location().toString(),
	INTERACTABLE_CHARGE: $TinkerTags$Items.INTERACTABLE_CHARGE.location().toString(),
	FOUNDRY: $TinkerTags$Items.FOUNDRY.location().toString(),
	DEFAULT_PATTERNS: $TinkerTags$Items.DEFAULT_PATTERNS.location().toString(),
	MELEE_PRIMARY: $TinkerTags$Items.MELEE_PRIMARY.location().toString(),
	SMELTERY_DEBUG: $TinkerTags$Items.SMELTERY_DEBUG.location().toString(),
	TRIM: $TinkerTags$Items.TRIM.location().toString(),
	BOOTS: $TinkerTags$Items.BOOTS.location().toString(),
	SCYTHES: $TinkerTags$Items.SCYTHES.location().toString(),
	UNARMED: $TinkerTags$Items.UNARMED.location().toString(),
	STONE_HARVEST: $TinkerTags$Items.STONE_HARVEST.location().toString(),
	ANCIENT_TOOLS: $TinkerTags$Items.ANCIENT_TOOLS.location().toString(),
	DYEABLE: $TinkerTags$Items.DYEABLE.location().toString(),
	SLIMY_SAPLINGS: $TinkerTags$Items.SLIMY_SAPLINGS.location().toString(),
	HELMETS: $TinkerTags$Items.HELMETS.location().toString(),
	BONUS_SLOTS: $TinkerTags$Items.BONUS_SLOTS.location().toString(),
	EMBELLISHMENT_WOOD: $TinkerTags$Items.EMBELLISHMENT_WOOD.location().toString(),
	GUIDEBOOKS: $TinkerTags$Items.GUIDEBOOKS.location().toString(),
	PARRY: $TinkerTags$Items.PARRY.location().toString(),
	PROXY_TANK_BLACKLIST: $TinkerTags$Items.PROXY_TANK_BLACKLIST.location().toString(),
	MIGHTY_ARMOR: $TinkerTags$Items.MIGHTY_ARMOR.location().toString(),
	URANIUM_INGOTS: $TinkerTags$Items.URANIUM_INGOTS.location().toString(),
	STONE: $TinkerTags$Items.STONE.location().toString(),
	WORKSTATION_ROCK: $TinkerTags$Items.WORKSTATION_ROCK.location().toString(),
	ENDERBARK_ROOTS: $TinkerTags$Items.ENDERBARK_ROOTS.location().toString(),
	SLIMY_VINES: $TinkerTags$Items.SLIMY_VINES.location().toString(),
	CHEST_PARTS: $TinkerTags$Items.CHEST_PARTS.location().toString(),
	INTERACTABLE_RIGHT: $TinkerTags$Items.INTERACTABLE_RIGHT.location().toString(),
	DIORITE: $TinkerTags$Items.DIORITE.location().toString(),
	NON_SINGULAR_ORE_RATES: $TinkerTags$Items.NON_SINGULAR_ORE_RATES.location().toString(),
	TABLE_EMPTY_CASTS: $TinkerTags$Items.TABLE_EMPTY_CASTS.location().toString(),
	EMBELLISHMENT_SLIME: $TinkerTags$Items.EMBELLISHMENT_SLIME.location().toString(),
	SLIME_BLOCK: $TinkerTags$Items.SLIME_BLOCK.location().toString(),
	INGOTS_NETHERITE_SCRAP: $TinkerTags$Items.INGOTS_NETHERITE_SCRAP.location().toString(),
	TRADER_TOOLS: $TinkerTags$Items.TRADER_TOOLS.location().toString(),
	CROSSBOWS: $TinkerTags$Items.CROSSBOWS.location().toString(),
	SEEDS: $TinkerTags$Items.SEEDS.location().toString(),
	WITHER_BONES: $TinkerTags$Items.WITHER_BONES.location().toString(),
	DURABILITY: $TinkerTags$Items.DURABILITY.location().toString(),
	BOOKS: $TinkerTags$Items.BOOKS.location().toString(),
	BASALT: $TinkerTags$Items.BASALT.location().toString(),
	INTERACTABLE_LEFT: $TinkerTags$Items.INTERACTABLE_LEFT.location().toString(),
	FANTASTIC_ARMOR: $TinkerTags$Items.FANTASTIC_ARMOR.location().toString(),
	VARIANT_LOGS: $TinkerTags$Items.VARIANT_LOGS.location().toString(),
	GRANITE: $TinkerTags$Items.GRANITE.location().toString(),
	TINKERS_GUIDES: $TinkerTags$Items.TINKERS_GUIDES.location().toString(),
	VARIANT_PLANKS: $TinkerTags$Items.VARIANT_PLANKS.location().toString(),
	BASIN_EMPTY_CASTS: $TinkerTags$Items.BASIN_EMPTY_CASTS.location().toString(),
	SEARED_TANKS: $TinkerTags$Items.SEARED_TANKS.location().toString(),
	GADGETRY_ARMOR: $TinkerTags$Items.GADGETRY_ARMOR.location().toString(),
	FOUNDRY_BRICKS: $TinkerTags$Items.FOUNDRY_BRICKS.location().toString(),
	INTERACTABLE: $TinkerTags$Items.INTERACTABLE.location().toString(),
	SMALL_TOOLS: $TinkerTags$Items.SMALL_TOOLS.location().toString(),
	CHRYSOPHILITE_ORES: $TinkerTags$Items.CHRYSOPHILITE_ORES.location().toString(),
	WORKBENCHES: $TinkerTags$Items.WORKBENCHES.location().toString(),
	BOWS: $TinkerTags$Items.BOWS.location().toString(),
	CASTS: $TinkerTags$Items.CASTS.location().toString(),
	SAND_CASTS: $TinkerTags$Items.SAND_CASTS.location().toString(),
	SLIMY_LEAVES: $TinkerTags$Items.SLIMY_LEAVES.location().toString(),
	GOLD_CASTS: $TinkerTags$Items.GOLD_CASTS.location().toString(),
	LEGGINGS: $TinkerTags$Items.LEGGINGS.location().toString(),
	CHESTPLATES: $TinkerTags$Items.CHESTPLATES.location().toString(),
	TANKS: $TinkerTags$Items.TANKS.location().toString(),
	SCORCHED_TANKS: $TinkerTags$Items.SCORCHED_TANKS.location().toString(),
	MODIFIABLE: $TinkerTags$Items.MODIFIABLE.location().toString(),
	WORN_ARMOR: $TinkerTags$Items.WORN_ARMOR.location().toString(),
	ANDESITE: $TinkerTags$Items.ANDESITE.location().toString(),
	TOOL_INVENTORY_BLACKLIST: $TinkerTags$Items.TOOL_INVENTORY_BLACKLIST.location().toString(),
	HELD: $TinkerTags$Items.HELD.location().toString(),
	MELEE: $TinkerTags$Items.MELEE.location().toString(),
	FIREBALLS: $TinkerTags$Items.FIREBALLS.location().toString(),
	NUGGETS_COPPER: $TinkerTags$Items.NUGGETS_COPPER.location().toString(),
	SPLASH_BOTTLE: $TinkerTags$Items.SPLASH_BOTTLE.location().toString(),
	LONGBOWS: $TinkerTags$Items.LONGBOWS.location().toString(),
	TOOL_PARTS: $TinkerTags$Items.TOOL_PARTS.location().toString(),
	AOE: $TinkerTags$Items.AOE.location().toString(),
	LINGERING_BOTTLE: $TinkerTags$Items.LINGERING_BOTTLE.location().toString(),
	BASIC_ARMOR: $TinkerTags$Items.BASIC_ARMOR.location().toString(),
	MULTI_USE_CASTS: $TinkerTags$Items.MULTI_USE_CASTS.location().toString(),
	DUCT_CONTAINERS: $TinkerTags$Items.DUCT_CONTAINERS.location().toString(),
	SLIMY_SEEDS: $TinkerTags$Items.SLIMY_SEEDS.location().toString(),
	PLANKLIKE: $TinkerTags$Items.PLANKLIKE.location().toString(),
	HARVEST: $TinkerTags$Items.HARVEST.location().toString(),
	SCORCHED_BLOCKS: $TinkerTags$Items.SCORCHED_BLOCKS.location().toString(),
	SINGLE_USE_CASTS: $TinkerTags$Items.SINGLE_USE_CASTS.location().toString(),
	SINGLEPART_TOOL: $TinkerTags$Items.SINGLEPART_TOOL.location().toString(),
	MELEE_WEAPON: $TinkerTags$Items.MELEE_WEAPON.location().toString(),
	SMELTERY_BRICKS: $TinkerTags$Items.SMELTERY_BRICKS.location().toString(),
	REUSABLE_PATTERNS: $TinkerTags$Items.REUSABLE_PATTERNS.location().toString(),
	RAW_COBALT: $TinkerTags$Items.RAW_COBALT.location().toString(),
	SWORD: $TinkerTags$Items.SWORD.location().toString(),
	ARMOR: $TinkerTags$Items.ARMOR.location().toString(),
	BROAD_TOOLS: $TinkerTags$Items.BROAD_TOOLS.location().toString(),
	PUNY_ARMOR: $TinkerTags$Items.PUNY_ARMOR.location().toString(),
	HELD_ARMOR: $TinkerTags$Items.HELD_ARMOR.location().toString(),
}