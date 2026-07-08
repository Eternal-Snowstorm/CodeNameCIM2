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