// 工具类型
type ToolType = "pickaxe" | "axe" | "shovel" | "hoe" | "sword"
// 挖掘等级列表
type MiningLevel = "wood" | "stone" | "iron" | "diamond" | "nether"
// 材料类型定义
type MaterialType =
	"ingot" |
	"plate" |
	"nugget" |
	"dust" |
	"rod" |
	"gear" |
	"block" |
	"molten" |
	"dirty" |
	"clump" |
	"shard" |
	"crystal" |
	"dirtySlurry" |
	"slurry";

// 材料对象接口
interface Material {
	name: string
	color: Color
	level: MiningLevel
	types: MaterialType[]

	ingot(): this
	plate(): this
	nugget(): this
	dust(): this
	rod(): this
	gear(): this
	block(): this
	molten(): this
	dirty(): this
	clump(): this
	shard(): this
	crystal(): this
	dirtySlurry(): this
	slurry(): this
}

// 矿石接口
interface OreBlock {
	name: string,
	color: Color,
	level: MiningLevel,
	hardness: number

	stone(): this
	deepslate(): this
	nether(): this
	end(): this
	moon(): this
	mars(): this
	venus(): this
	mercury(): this
	glacio(): this
}

// 材料管理函数
type RegisterMetalMaterial = (name: string, color: Color, level: MiningLevel) => Material
// 矿石函数
type OreBlockRegister = (name: string, level: MiningLevel, level: MiningLevel, hardness: number) => OreBlock