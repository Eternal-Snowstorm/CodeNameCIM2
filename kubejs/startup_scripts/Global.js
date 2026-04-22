// priority: 100

// 整合包状态
let modPackState = "Beta"

// 是否为热修复版本
let isHotfix = false

// Modpack数字版本号
let modpackNumberVersion = "2.5.0"

/* 
 * Modpack总版本
 * 根据是否为热修复版本, 生成不同的版本号并保存到global并被读取
 */
if (isHotfix) {
	global.modPackMainVersion = `§0CMI ${modPackState}-${modpackNumberVersion}-hf`
} else {
	global.modPackMainVersion = `§0CMI ${modPackState}-${modpackNumberVersion}`
}

// 输出查看
console.log(global.modPackMainVersion)

// 桶容量
global.BUCKET_CAPACITY = 1000
// 扳手Tag
global.WRENCH_PICKUP = "create:wrench_pickup"
/**
 * 设定全局开发人员名单
 * @type {string[]}
 */
global.debugUserName = [
	"Qi_Month",
	"EternalSnowstorm",
	"Re_Construction",
	"117458866249",
	"Ye_Anqing",
	"KEYboardManDesu",
	"oooooooo_zane",
	"Flash_Yi"
]
/**
 * 挖掘等级
 * 
 * @type {{ [key: any]: ResourceLocation_ }}
 */
global.MiningLevel = {
	wooden: "minecraft:needs_wooden_tool",
	stone: "minecraft:needs_stone_tool",
	iron: "minecraft:needs_iron_tool",
	gold: "forge:needs_gold_tool",
	diamond: "minecraft:needs_diamond_tool",
	nether: "forge:needs_netherite_tool"
}

/**
 * 挖掘工具类型
 * 
 * @type {{ [key: any]: ResourceLocation_ }}
 */
global.ToolType = {
	sword: "forge:mineable/sword",
	pickaxe: "minecraft:mineable/pickaxe",
	axe: "minecraft:mineable/axe",
	shovel: "minecraft:mineable/shovel",
	hoe: "minecraft:mineable/hoe"
}

/**
 * 所有染料颜色
 * 
 * @type {string[]}
 */
global.CmiGlobal.DYE_COLOR_GROUP = [
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
// /**
//  * 所有废弃流体
//  * 
//  * @type {string[]}
//  */
// global.wasteFluid = [
// 	"thermal_extra:gasoline"
// ]
/**
 * 所有构件
 * 
 * @type {string[]}
 */
global.mechanismGroup = [
	"wooden",
	"stone",
	"iron",
	"nature",
	"pig_iron",
	"potion",
	"colorful",
	"enchanted",
	"nether",
	"sculk",
	"ender",
	"copper",
	"andesite",
	"bronze",
	"railway",
	"light_engineering",
	"heavy_engineering",
	"coil",
	"smart",
	"cobalt",
	"photosensitive",
	"thermal",
	"reinforced",
	"gold",
	"basic_mekanism",
	"advanced_mekanism",
	"elite_mekanism",
	"ultimate_mekanism",
	"computing",
	"air_tight",
	"tier_1_aviation",
	"tier_2_aviation",
	"tier_3_aviation",
	"tier_4_aviation",
	"nuclear",
	"antimatter",
	"creative",
]
/**
 * 所有金属(用于兼容性配方)
 * @type {string[]}
 */
global.metalGroup = [
	"andesite_alloy",
	"tungsten_steel",
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
	"tungsten",
	"etrium",
	"scarlet_neodymium",
	"azure_neodymium",
	"shadow_steel",
	"refined_radiance",
	"quantum_alloy",
	"titanium"
]
/**
 * 各金属的熔点(单位C°)
 * 
 * null = 虚构金属, 熔点为随意设定值
 * 
 * 熔炉1000 
 * 高炉, 热力电炉1500
 * 车窑, 电弧炉2000
 * Mek熔炉全部可熔炼
 * 
 * @type {{ [key: string]: number }}
 */
global.meltingPoints = {
	"andesite_alloy": 760, // null
	"tungsten_steel": 2524,
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
	"calcium": 842,
	"etrium": 1486, //null
	"azure_neodymium": 1024, // null
	"scarlet_neodymium": 1024, // null
	"shadow_steel": 2106, // null
	"refined_radiance": 2106, // null
	"titanium": 1668,
}

/**
 * 命名空间
 * v代表该材料是由TIC本体添加的
 * t代表该材料是由热力工匠添加的
 * c代表该材料是由制作组自定义的
 * n代表无此材料
 * 
 * @type {{ [key:string]: string }}
 */
global.materialNamespace = {
	"andesite_alloy": "c",
	"tungsten_steel": "c",
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
	"tungsten": "v",
	"azure_neodymium": "c",
	"scarlet_neodymium": "c",
	"shadow_steel": "c",
	"refined_radiance": "c",
	"titanium": "c"
}
/**
 * 熔炉等级: 不同熔炼设备可处理的金属集合
 * key 可以是数值(表示温度上限)或 "above"(2000C°以上)
 * @type {{ [key: number]: string[] }}
 */
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
		"iron",
		"etrium",
		"azure_neodymium",
		"scarlet_neodymium",
	],
	2000: [
		"titanium",
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
		"amethyst_bronze",
		"tungsten_steel"
	],
	"above": [
		"osmium",
		"desh",
		"tungsten",
		"ostrum",
		"calorite",
		"netherite",
		"dragonsteel",
		"shadow_steel",
		"refined_radiance"
	]
}
/**
 * @type {string[]} 燃料列表
 */
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
	"immersiveengineering:creosote",
	"createdieselgenerators:ethanol",
	"createdieselgenerators:plant_oil",
	"createdieselgenerators:biodiesel",
	"createdieselgenerators:diesel",
	"createdieselgenerators:gasoline"
]

/**
 * 燃料温度
 * @type {{ [key: string]: number }}
 */
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
	"createdieselgenerators:gasoline": 2043,
	"immersiveengineering:creosote": 1300
}