let langMap = {}
const FILE_PATH = "config/openloader/resources/PackResource/assets/mm/lang/zh_cn.json"

addMMLanguage("large_steam_boiler", "大型蒸汽锅炉")
addMMLanguage("cracker", "裂解机")

function addMMLanguage(key, value) {
	langMap[`block.mm.${key}`] = value
	console.log("控制器语言生成完成")

	langMap[`block.mm.${key}_fluid_input`] = `${value}流体输入口`
	langMap[`block.mm.${key}_fluid_output`] = `${value}流体输出口`
	console.log("Fluid接口语言生成完成")

	langMap[`block.mm.${key}_energy_input`] = `${value}能量输入口`
	langMap[`block.mm.${key}_energy_output`] = `${value}能量输出口`
	console.log("Energy接口语言生成完成")

	langMap[`block.mm.${key}_item_input`] = `${value}物品输入口`
	langMap[`block.mm.${key}_item_output`] = `${value}物品输出口`
	console.log("Item接口语言生成完成")
}

JsonIO.write(FILE_PATH, langMap)