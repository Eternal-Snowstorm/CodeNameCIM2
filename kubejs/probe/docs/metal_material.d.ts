// 全局命名空间定义
declare const global: {
	namespace: string;
	toolType: Record<string, Tag>;
	miningLevel: Record<string, Tag>;
}

// 基础类型定义
type Color = number;
type ResourceLocation = string;
type Tag = string;
type ItemStack = any;
type Fluid = string;
type FluidTag = string;
type SoundType = string;

// 材料类型定义
type MaterialType = "ingot" | "plate" | "nugget" | "dust" | "rod" | "gear" | "block" | "molten";
// 挖掘等级列表
type MiningLevel = "wood" | "stone" | "iron" | "diamond" | "netherite";

// 材料对象接口
interface Material {
	name: string;
	color: Color;
	level: MiningLevel;
	types: MaterialType[];

	ingot(): this;
	plate(): this;
	nugget(): this;
	dust(): this;
	rod(): this;
	gear(): this;
	block(): this;
	molten(): this;
}

// 文件操作接口
interface JsonIO {
	write(filePath: string, data: object): void;
}

declare const JsonIO: JsonIO

// 材料管理函数
type RegisterMetalMaterial = (name: string, color: Color, level: MiningLevel) => Material;