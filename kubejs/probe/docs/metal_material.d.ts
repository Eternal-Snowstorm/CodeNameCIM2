// 矿石接口
interface OreBlock {
	name: string
	color: Color
	level: MiningLevel
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

// 颜色类型
type MaterialColor =
	| Internal.ItemTintFunction_
	| Internal.BlockTintFunction_
	| dev.latvian.mods.rhino.mod.util.color.Color_

// 工具类型
type ToolType = "pickaxe" | "axe" | "shovel" | "hoe" | "sword"

// 挖掘等级
type MiningLevel = "wooden" | "stone" | "iron" | "diamond" | "nether"

// 材料类型（对外仍然是这个）
type MaterialType =
	| "ingot"
	| "plate"
	| "nugget"
	| "dust"
	| "rod"
	| "gear"
	| "block"
	| "molten"
	| "dirty"
	| "clump"
	| "shard"
	| "crystal"
	| "dirty_slurry"
	| "slurry"

// =========================
// Material 接口
// =========================

interface Material {
	name: string
	level: MiningLevel

	/**
	 * 注意: 
	 * 运行时实际是: 
	 * { type: MaterialType, overlay?: boolean }[]
	 * 但这里对外仍然保持 MaterialType[]
	 */
	types: MaterialType[]

	color(color1: MaterialColor, color2: MaterialColor): this
	isMetal(): this

	/**
	 * 默认: overlay = true（三层）
	 * 传 false: 禁用覆盖层（两层）
	 */
	ingot(overlay?: boolean): this
	plate(overlay?: boolean): this
	nugget(overlay?: boolean): this
	dust(overlay?: boolean): this
	rod(overlay?: boolean): this
	gear(overlay?: boolean): this

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