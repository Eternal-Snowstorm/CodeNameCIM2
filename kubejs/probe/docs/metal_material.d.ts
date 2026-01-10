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

// 工具类型
type ToolType = "pickaxe" | "axe" | "shovel" | "hoe" | "sword"
// 挖掘等级
type MiningLevel = "wooden" | "stone" | "iron" | "diamond" | "nether"
// 材料类型
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
	"dirty_slurry" |
	"slurry"

interface Material {
	name: string
	level: MiningLevel
	types: MaterialType[]

	color(
		color1: Internal.ItemTintFunction_
			| Internal.BlockTintFunction_
			| dev.latvian.mods.rhino.mod.util.color.Color_,
		color2: Internal.ItemTintFunction_
			| Internal.BlockTintFunction_
			| dev.latvian.mods.rhino.mod.util.color.Color_,
		color3: Internal.ItemTintFunction_
			| Internal.BlockTintFunction_
			| dev.latvian.mods.rhino.mod.util.color.Color_
	): this
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

declare class Material implements Material {
	constructor(name: string, level: MiningLevel)
}